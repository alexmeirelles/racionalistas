import { Header } from "@/components/Header"
import { createClient } from "@/lib/supabase/server"
import { moderatePost } from "@/app/actions/forum"
import { redirect } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
// moderatePost is a server action that reads postId and action from FormData

export const metadata: Metadata = {
  title: "Moderação — Admin Racionalistas",
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function excerpt(text: string, len = 300) {
  return text.length > len ? text.slice(0, len) + '...' : text
}

type PendingPost = {
  id: string
  title: string
  slug: string
  body_md: string
  created_at: string
  profiles: { username: string; display_name: string | null } | null
}

export default async function ModeracaoPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (!profile || !['admin', 'moderator'].includes(profile.role)) {
    redirect('/forum')
  }

  const { data: pending } = await supabase
    .from('posts')
    .select('id, title, slug, body_md, created_at, profiles!author_id(username, display_name)')
    .eq('status', 'pending')
    .order('created_at', { ascending: true })

  const { data: recent } = await supabase
    .from('posts')
    .select('id, title, slug, status, created_at, profiles!author_id(username, display_name)')
    .in('status', ['approved', 'rejected'])
    .order('created_at', { ascending: false })
    .limit(10)

  const typedPending = (pending ?? []) as unknown as PendingPost[]
  const typedRecent = (recent ?? []) as unknown as (PendingPost & { status: string })[]

  return (
    <>
      <Header />

      <section style={{ paddingTop: "140px", paddingBottom: "100px" }}>

        <div style={{ marginBottom: "48px" }}>
          <div className="section-tag">Admin</div>
          <h2 className="section-title" style={{ marginBottom: "8px" }}>Moderação</h2>
          <div style={{
            fontFamily: "var(--mono)",
            fontSize: "13px",
            color: "var(--gray-text)",
          }}>
            {typedPending.length} posts aguardando revisão
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "48px", alignItems: "start" }}>

          {/* Fila de pendentes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {typedPending.length === 0 ? (
              <div style={{
                background: "var(--gray)",
                padding: "48px",
                textAlign: "center",
                fontFamily: "var(--mono)",
                fontSize: "13px",
                color: "var(--gray-text)",
                border: "1px solid rgba(200,169,126,0.1)",
              }}>
                Fila vazia. Nenhum post aguardando revisão.
              </div>
            ) : (
              typedPending.map((post) => (
                <div key={post.id} style={{
                  background: "var(--gray)",
                  border: "1px solid rgba(200,169,126,0.1)",
                  padding: "32px",
                }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "16px",
                    gap: "16px",
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--serif)",
                        fontSize: "20px",
                        color: "var(--off-white)",
                        marginBottom: "8px",
                        fontWeight: 400,
                      }}>
                        {post.title}
                      </h3>
                      <div style={{
                        fontFamily: "var(--mono)",
                        fontSize: "12px",
                        color: "var(--gray-text)",
                        display: "flex",
                        gap: "12px",
                      }}>
                        <span style={{ color: "var(--amber)" }}>
                          {post.profiles?.display_name || post.profiles?.username}
                        </span>
                        <span>•</span>
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                    </div>

                    <span style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#FFD700",
                      border: "1px solid rgba(255,215,0,0.3)",
                      padding: "4px 10px",
                      whiteSpace: "nowrap",
                    }}>
                      Pendente
                    </span>
                  </div>

                  <div style={{
                    color: "var(--gray-text)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    fontFamily: "var(--mono)",
                    background: "var(--black)",
                    padding: "16px",
                    marginBottom: "24px",
                    borderLeft: "3px solid rgba(200,169,126,0.2)",
                    whiteSpace: "pre-wrap",
                  }}>
                    {excerpt(post.body_md)}
                  </div>

                  <div style={{ display: "flex", gap: "12px" }}>
                    <form action={moderatePost}>
                      <input type="hidden" name="postId" value={post.id} />
                      <input type="hidden" name="action" value="approve" />
                      <button type="submit" style={{
                        background: "rgba(50,200,100,0.15)",
                        border: "1px solid rgba(50,200,100,0.4)",
                        color: "#4ade80",
                        fontFamily: "var(--mono)",
                        fontSize: "12px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "12px 24px",
                        cursor: "pointer",
                      }}>
                        ✓ Aprovar
                      </button>
                    </form>

                    <form action={moderatePost}>
                      <input type="hidden" name="postId" value={post.id} />
                      <input type="hidden" name="action" value="reject" />
                      <button type="submit" style={{
                        background: "rgba(200,50,50,0.1)",
                        border: "1px solid rgba(200,50,50,0.3)",
                        color: "#ff6b6b",
                        fontFamily: "var(--mono)",
                        fontSize: "12px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "12px 24px",
                        cursor: "pointer",
                      }}>
                        ✗ Rejeitar
                      </button>
                    </form>

                    <Link href={`/forum/${post.slug}`} style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12px",
                      color: "var(--gray-text)",
                      textDecoration: "none",
                      padding: "12px 24px",
                      border: "1px solid rgba(200,169,126,0.1)",
                      display: "inline-flex",
                      alignItems: "center",
                    }}>
                      Ver preview →
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sidebar — ações recentes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--off-white)",
              borderBottom: "1px solid rgba(200,169,126,0.1)",
              paddingBottom: "16px",
            }}>
              Ações Recentes
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {typedRecent.map((post) => (
                <div key={post.id} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontSize: "13px",
                }}>
                  <div>
                    <div style={{ color: "var(--off-white)", fontFamily: "var(--serif)", marginBottom: "4px", lineHeight: 1.3 }}>
                      {post.title.slice(0, 50)}{post.title.length > 50 ? '...' : ''}
                    </div>
                    <div style={{ color: "var(--gray-text)", fontFamily: "var(--mono)", fontSize: "11px" }}>
                      {post.profiles?.username}
                    </div>
                  </div>
                  <span style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: post.status === 'approved' ? "#4ade80" : "#ff6b6b",
                    whiteSpace: "nowrap",
                  }}>
                    {post.status === 'approved' ? '✓ Aprovado' : '✗ Rejeitado'}
                  </span>
                </div>
              ))}

              {typedRecent.length === 0 && (
                <div style={{ color: "var(--gray-text)", fontFamily: "var(--mono)", fontSize: "12px" }}>
                  Sem histórico.
                </div>
              )}
            </div>

            <hr style={{ border: "none", height: "1px", background: "rgba(200,169,126,0.08)" }} />

            <Link href="/forum" style={{
              fontFamily: "var(--mono)",
              fontSize: "12px",
              color: "var(--gray-text)",
              textDecoration: "none",
            }}>
              ← Voltar ao Fórum
            </Link>
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
