import { Header } from "@/components/Header"
import { createClient } from "@/lib/supabase/server"
import { createComment, voteAction } from "@/app/actions/forum"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase
    .from('posts')
    .select('title, body_md')
    .eq('slug', slug)
    .eq('status', 'approved')
    .maybeSingle()

  if (!post) return { title: 'Post não encontrado' }

  return {
    title: `${post.title} — Fórum Racionalista`,
    description: post.body_md.replace(/#{1,6}\s/g, '').slice(0, 160),
  }
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function renderBody(md: string) {
  return md.split('\n').map((line, i) => {
    if (line.startsWith('## ')) return (
      <h2 key={i} style={{ fontFamily: "var(--serif)", fontSize: "22px", color: "var(--off-white)", margin: "32px 0 12px", fontWeight: 400 }}>
        {line.replace('## ', '')}
      </h2>
    )
    if (line.startsWith('### ')) return (
      <h3 key={i} style={{ fontFamily: "var(--serif)", fontSize: "18px", color: "var(--off-white)", margin: "24px 0 8px", fontWeight: 400 }}>
        {line.replace('### ', '')}
      </h3>
    )
    if (line.startsWith('# ')) return (
      <h1 key={i} style={{ fontFamily: "var(--serif)", fontSize: "26px", color: "var(--off-white)", margin: "32px 0 16px", fontWeight: 400 }}>
        {line.replace('# ', '')}
      </h1>
    )
    if (line.startsWith('> ')) return (
      <blockquote key={i} style={{ borderLeft: "3px solid var(--amber)", paddingLeft: "20px", margin: "20px 0", color: "var(--gray-text)", fontStyle: "italic" }}>
        {line.replace('> ', '')}
      </blockquote>
    )
    if (line.trim() === '') return <div key={i} style={{ height: "12px" }} />
    return (
      <p key={i} style={{ margin: "0 0 8px", color: "var(--gray-text)", fontSize: "16px", lineHeight: 1.8 }}>
        {line}
      </p>
    )
  })
}

type Comment = {
  id: string
  body_md: string
  karma_score: number
  depth: number
  parent_id: string | null
  created_at: string
  profiles: { username: string; display_name: string | null } | null
}

type Post = {
  id: string
  title: string
  slug: string
  body_md: string
  karma_score: number
  comment_count: number
  created_at: string
  profiles: { username: string; display_name: string | null } | null
}

export default async function PostDetail({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  const { data: post } = await supabase
    .from('posts')
    .select('id, title, slug, body_md, karma_score, comment_count, created_at, profiles!author_id(username, display_name)')
    .eq('slug', slug)
    .eq('status', 'approved')
    .maybeSingle()

  if (!post) notFound()

  const typedPost = post as unknown as Post

  const { data: comments } = await supabase
    .from('comments')
    .select('id, body_md, karma_score, depth, parent_id, created_at, profiles!author_id(username, display_name)')
    .eq('post_id', typedPost.id)
    .eq('status', 'visible')
    .order('created_at', { ascending: true })

  const typedComments = (comments ?? []) as unknown as Comment[]

  let userVote: number | null = null
  if (user) {
    const { data: v } = await supabase
      .from('votes')
      .select('value')
      .eq('voter_id', user.id)
      .eq('entity_type', 'post')
      .eq('entity_id', typedPost.id)
      .eq('vote_axis', 'karma')
      .maybeSingle()
    userVote = v?.value ?? null
  }

  return (
    <>
      <Header />

      <section style={{ paddingTop: "140px", paddingBottom: "100px", maxWidth: "800px" }}>

        <Link href="/forum" style={{
          fontFamily: "var(--mono)",
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--gray-text)",
          textDecoration: "none",
          marginBottom: "40px",
          display: "inline-block",
        }}>
          ← Fórum
        </Link>

        {/* Header do post */}
        <div style={{ marginBottom: "48px" }}>
          <h1 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: 400,
            lineHeight: 1.25,
            color: "var(--off-white)",
            marginBottom: "24px",
          }}>
            {typedPost.title}
          </h1>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontFamily: "var(--mono)",
            fontSize: "12px",
            color: "var(--gray-text)",
          }}>
            <span style={{ color: "var(--off-white)" }}>
              {typedPost.profiles?.display_name || typedPost.profiles?.username}
            </span>
            <span>•</span>
            <span>{formatDate(typedPost.created_at)}</span>

            {/* Votes */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto" }}>
              <form action={voteAction}>
                <input type="hidden" name="entityType" value="post" />
                <input type="hidden" name="entityId" value={typedPost.id} />
                <input type="hidden" name="value" value="1" />
                <input type="hidden" name="slug" value={slug} />
                <button type="submit" style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: userVote === 1 ? "var(--amber)" : "var(--gray-text)",
                  fontSize: "16px",
                  padding: "4px 8px",
                }}>▲</button>
              </form>
              <span style={{ color: "var(--amber)", fontFamily: "var(--mono)", fontSize: "16px", fontWeight: "bold" }}>
                {typedPost.karma_score}
              </span>
              <form action={voteAction}>
                <input type="hidden" name="entityType" value="post" />
                <input type="hidden" name="entityId" value={typedPost.id} />
                <input type="hidden" name="value" value="-1" />
                <input type="hidden" name="slug" value={slug} />
                <button type="submit" style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: userVote === -1 ? "#ff6b6b" : "var(--gray-text)",
                  fontSize: "16px",
                  opacity: 0.5,
                  padding: "4px 8px",
                }}>▼</button>
              </form>
            </div>
          </div>
        </div>

        <hr style={{ border: "none", height: "1px", background: "rgba(200,169,126,0.1)", marginBottom: "48px" }} />

        {/* Corpo do post */}
        <div style={{ marginBottom: "80px" }}>
          {renderBody(typedPost.body_md)}
        </div>

        <hr style={{ border: "none", height: "1px", background: "rgba(200,169,126,0.1)", marginBottom: "48px" }} />

        {/* Seção de comentários */}
        <div>
          <div style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--off-white)",
            marginBottom: "40px",
          }}>
            {typedComments.length} COMENTÁRIOS
          </div>

          {/* Formulário de novo comentário */}
          {user ? (
            <form action={createComment} style={{
              background: "var(--gray)",
              padding: "28px",
              marginBottom: "48px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              border: "1px solid rgba(200,169,126,0.1)",
            }}>
              <input type="hidden" name="post_id" value={typedPost.id} />
              <input type="hidden" name="slug" value={slug} />
              <label style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--amber)",
              }}>
                Adicionar comentário
              </label>
              <textarea
                name="body_md"
                required
                rows={5}
                placeholder="Construa sobre a tese, questione uma premissa, ou apresente evidência contrária..."
                style={{
                  background: "var(--black)",
                  border: "1px solid rgba(200,169,126,0.1)",
                  padding: "16px",
                  fontFamily: "var(--mono)",
                  fontSize: "14px",
                  color: "var(--off-white)",
                  resize: "vertical",
                  outline: "none",
                  lineHeight: 1.6,
                  borderRadius: 0,
                }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button type="submit" style={{
                  background: "var(--off-white)",
                  color: "#000",
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "12px 28px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                }}>
                  Comentar →
                </button>
              </div>
            </form>
          ) : (
            <div style={{
              background: "var(--gray)",
              padding: "28px",
              marginBottom: "48px",
              textAlign: "center",
              fontFamily: "var(--mono)",
              fontSize: "13px",
              color: "var(--gray-text)",
            }}>
              <Link href="/login" style={{ color: "var(--amber)", textDecoration: "none" }}>
                Faça login
              </Link>{" "}para participar da discussão.
            </div>
          )}

          {/* Lista de comentários */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {typedComments.map((comment) => (
              <div
                key={comment.id}
                style={{
                  paddingLeft: `${comment.depth * 28}px`,
                  borderLeft: comment.depth > 0 ? "2px solid rgba(200,169,126,0.1)" : "none",
                  marginLeft: comment.depth > 0 ? "20px" : "0",
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(200,169,126,0.05)",
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                }}>
                  <span style={{ color: "var(--amber)" }}>
                    {comment.profiles?.display_name || comment.profiles?.username}
                  </span>
                  <span style={{ color: "var(--gray-text)" }}>•</span>
                  <span style={{ color: "var(--gray-text)" }}>{formatDate(comment.created_at)}</span>
                  <span style={{ marginLeft: "auto", color: "var(--gray-text)" }}>
                    {comment.karma_score > 0 && `▲ ${comment.karma_score}`}
                  </span>
                </div>

                <div style={{ color: "var(--gray-text)", fontSize: "15px", lineHeight: 1.7 }}>
                  {comment.body_md.split('\n').filter(Boolean).map((line, i) => (
                    <p key={i} style={{ margin: "0 0 8px" }}>{line}</p>
                  ))}
                </div>

              </div>
            ))}

            {typedComments.length === 0 && (
              <div style={{
                textAlign: "center",
                padding: "48px 0",
                color: "var(--gray-text)",
                fontFamily: "var(--mono)",
                fontSize: "13px",
              }}>
                Nenhum comentário ainda. Seja o primeiro a questionar.
              </div>
            )}
          </div>
        </div>

      </section>

      <div className="divider" style={{ width: "100%" }}><hr /></div>
      <footer>
        <div className="footer-copy">© 2026 Racionalistas.</div>
        <div className="footer-tagline">Pensamento claro é infraestrutura.</div>
      </footer>
    </>
  )
}
