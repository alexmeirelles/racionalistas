import { createClient } from '@supabase/supabase-js'
import { BOT_PERSONAS } from '@/lib/forum/personas'
import { NextResponse } from 'next/server'

// Vercel Cron: verificar header de autenticação
function isAuthorized(req: Request): boolean {
  const auth = req.headers.get('authorization')
  return auth === `Bearer ${process.env.CRON_SECRET}`
}

async function callClaude(systemPrompt: string, userMessage: string): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return null

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }],
      }),
    })

    if (!res.ok) return null

    const data = await res.json()
    const raw = data.content?.[0]?.text ?? ''

    // Extrair JSON da resposta
    const match = raw.match(/\{[\s\S]*\}/)
    if (!match) return null

    const parsed = JSON.parse(match[0])
    return parsed.content_markdown ?? null
  } catch {
    return null
  }
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )

  // Buscar posts aprovados sem comentário bot nas últimas 6h
  const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()

  const { data: posts } = await supabase
    .from('posts')
    .select('id, title, body_md, slug')
    .eq('status', 'approved')
    .eq('visibility', 'public')
    .order('created_at', { ascending: false })
    .limit(10)

  if (!posts || posts.length === 0) {
    return NextResponse.json({ message: 'Nenhum post disponível.', processed: 0 })
  }

  // Para cada post, verificar se bot já comentou nas últimas 6h
  const eligiblePosts: typeof posts = []
  for (const post of posts) {
    const { data: recentBotRuns } = await supabase
      .from('bot_runs')
      .select('id')
      .eq('post_id', post.id)
      .gt('created_at', sixHoursAgo)
      .limit(1)

    if (!recentBotRuns || recentBotRuns.length === 0) {
      eligiblePosts.push(post)
    }
    if (eligiblePosts.length >= 3) break
  }

  if (eligiblePosts.length === 0) {
    return NextResponse.json({ message: 'Todos os posts recentes já receberam comentários.', processed: 0 })
  }

  // Buscar perfis dos bots
  const botUsernames = BOT_PERSONAS.map(p => p.username)
  const { data: botProfiles } = await supabase
    .from('profiles')
    .select('id, username')
    .in('username', botUsernames)
    .eq('is_bot', true)

  if (!botProfiles || botProfiles.length === 0) {
    return NextResponse.json({ message: 'Nenhum bot configurado no banco.', processed: 0 })
  }

  let processed = 0

  for (const post of eligiblePosts) {
    // Escolher bot aleatório que ainda não comentou neste post
    const { data: existingBotComments } = await supabase
      .from('comments')
      .select('author_id')
      .eq('post_id', post.id)

    const usedBotIds = new Set((existingBotComments ?? []).map((c: { author_id: string }) => c.author_id))
    const availableBots = botProfiles.filter(b => !usedBotIds.has(b.id))

    if (availableBots.length === 0) continue

    const botProfile = availableBots[Math.floor(Math.random() * availableBots.length)]
    const persona = BOT_PERSONAS.find(p => p.username === botProfile.username)
    if (!persona) continue

    const userMsg = `Post: "${post.title}"\n\n${post.body_md.slice(0, 600)}\n\nComente em português como sua persona.`

    const runId = crypto.randomUUID()

    // Registrar bot_run como pending
    await supabase.from('bot_runs').insert({
      id: runId,
      bot_profile_id: botProfile.id,
      post_id: post.id,
      trigger: 'cron',
      status: 'pending',
      request_payload: { post_id: post.id, persona: persona.username },
    })

    const content = await callClaude(persona.systemPrompt, userMsg)

    if (!content) {
      await supabase.from('bot_runs').update({ status: 'failed' }).eq('id', runId)
      continue
    }

    // Inserir comentário
    const { data: comment, error: commentError } = await supabase
      .from('comments')
      .insert({
        post_id: post.id,
        author_id: botProfile.id,
        body_md: content,
        depth: 0,
        status: 'visible',
      })
      .select('id')
      .single()

    if (commentError) {
      await supabase.from('bot_runs').update({ status: 'failed' }).eq('id', runId)
      continue
    }

    await supabase.from('bot_runs').update({
      status: 'completed',
      comment_id: comment.id,
      response_raw: { content },
    }).eq('id', runId)

    processed++
  }

  return NextResponse.json({ message: 'Cron executado.', processed })
}
