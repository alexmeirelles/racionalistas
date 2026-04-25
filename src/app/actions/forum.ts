'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}

export async function createPost(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const title = (formData.get('title') as string)?.trim()
  const body_md = (formData.get('body_md') as string)?.trim()

  if (!title || !body_md) return { error: 'Título e conteúdo são obrigatórios.' }

  const baseSlug = slugify(title)
  const slug = `${baseSlug}-${Date.now().toString(36)}`

  const { error } = await supabase.from('posts').insert({
    author_id: user.id,
    title,
    slug,
    body_md,
    status: 'pending',
    visibility: 'public',
    section: 'personal',
  })

  if (error) return { error: error.message }

  revalidatePath('/forum')
  redirect('/forum?submitted=1')
}

export async function createComment(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const post_id = formData.get('post_id') as string
  const parent_id = (formData.get('parent_id') as string) || null
  const body_md = (formData.get('body_md') as string)?.trim()
  const slug = formData.get('slug') as string
  const depth = parent_id ? 1 : 0

  if (!body_md) return

  await supabase.from('comments').insert({
    post_id,
    parent_id,
    depth,
    author_id: user.id,
    body_md,
    status: 'visible',
  })

  revalidatePath(`/forum/${slug}`)
}

export async function voteAction(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return

  const entityType = formData.get('entityType') as 'post' | 'comment'
  const entityId = formData.get('entityId') as string
  const value = parseInt(formData.get('value') as string) as 1 | -1
  const slug = formData.get('slug') as string | null

  const { data: existing } = await supabase
    .from('votes')
    .select('id, value')
    .eq('voter_id', user.id)
    .eq('entity_type', entityType)
    .eq('entity_id', entityId)
    .eq('vote_axis', 'karma')
    .maybeSingle()

  if (existing) {
    if (existing.value === value) {
      await supabase.from('votes').delete().eq('id', existing.id)
    } else {
      await supabase.from('votes').update({ value }).eq('id', existing.id)
    }
  } else {
    await supabase.from('votes').insert({
      voter_id: user.id,
      entity_type: entityType,
      entity_id: entityId,
      vote_axis: 'karma',
      value,
    })
  }

  if (slug) revalidatePath(`/forum/${slug}`)
  revalidatePath('/forum')
}

export async function moderatePost(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const postId = formData.get('postId') as string
  const action = formData.get('action') as 'approve' | 'reject'
  const reason = (formData.get('reason') as string) || null

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (!profile || !['admin', 'moderator'].includes(profile.role)) return

  await supabase.from('posts').update({
    status: action === 'approve' ? 'approved' : 'rejected',
    approved_by: user.id,
    approved_at: action === 'approve' ? new Date().toISOString() : null,
  }).eq('id', postId)

  await supabase.from('moderation_actions').insert({
    moderator_id: user.id,
    target_type: 'post',
    target_id: postId,
    action,
    reason,
  })

  revalidatePath('/admin/moderacao')
  revalidatePath('/forum')
}
