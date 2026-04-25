import { Header } from "@/components/Header";
import Link from 'next/link';
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Fórum Racionalista — Diálogos para Escalar o Pensamento",
  description: "Fórum de discussão sobre modelos mentais, vieses cognitivos e estratégia para founders. Troca de teses, dissecação de frameworks e depuração de vieses na arquitetura de negócios.",
  alternates: { canonical: "https://www.racionalistas.com.br/forum" },
  openGraph: {
    title: "Fórum Racionalista — Diálogos para Escalar o Pensamento",
    description: "A praça pública dos construtores racionais.",
    url: "https://www.racionalistas.com.br/forum",
  },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function excerpt(text: string, len = 220) {
  const clean = text.replace(/#{1,6}\s/g, '').replace(/\*\*/g, '').replace(/\*/g, '')
  return clean.length > len ? clean.slice(0, len) + '...' : clean
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

type Comment = {
  id: string
  body_md: string
  created_at: string
  profiles: { username: string } | null
  posts: { title: string; slug: string } | null
}

type TopUser = {
  username: string
  display_name: string | null
  karma_score: number
}

export default async function ForumIndex({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>
}) {
  const supabase = await createClient()
  const params = await searchParams

  const { data: posts } = await supabase
    .from('posts')
    .select('id, title, slug, body_md, karma_score, comment_count, created_at, profiles!author_id(username, display_name)')
    .eq('status', 'approved')
    .eq('visibility', 'public')
    .order('karma_score', { ascending: false })
    .limit(20)

  const { data: recentComments } = await supabase
    .from('comments')
    .select('id, body_md, created_at, profiles!author_id(username), posts!post_id(title, slug)')
    .eq('status', 'visible')
    .order('created_at', { ascending: false })
    .limit(5)

  const { data: topUsers } = await supabase
    .from('profiles')
    .select('username, display_name, karma_score')
    .eq('is_bot', false)
    .order('karma_score', { ascending: false })
    .limit(5)

  const typedPosts = (posts ?? []) as unknown as Post[]
  const typedComments = (recentComments ?? []) as unknown as Comment[]
  const typedTopUsers = (topUsers ?? []) as TopUser[]

  return (
    <>
      <Header />

      <section style={{ paddingTop: "140px", paddingBottom: "100px" }}>

        <div style={{ marginBottom: "64px" }}>
          <div className="section-tag">O Fórum Racionalista</div>
          <h2 className="section-title" style={{ maxWidth: "800px", marginBottom: "24px" }}>
            Diálogos para Escalar o Pensamento
          </h2>
          <p className="section-text" style={{ maxWidth: "700px" }}>
            A praça pública dedicada a construtores lógicos. Um ambiente rigorosamente focado na troca de teses,
            dissecação de modelos mentais e depuração de vieses na arquitetura dos negócios.
          </p>
        </div>

        {params.submitted && (
          <div style={{
            background: "var(--gray)",
            border: "1px solid rgba(200,169,126,0.3)",
            padding: "16px 24px",
            marginBottom: "40px",
            fontFamily: "var(--mono)",
            fontSize: "13px",
            color: "var(--amber)",
            letterSpacing: "0.05em",
          }}>
            Post enviado para moderação. Será publicado em breve.
          </div>
        )}

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: "64px",
          alignItems: "start",
        }}>

          {/* Feed principal */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href="/forum/novo" style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: "var(--amber)",
                color: "#000",
                padding: "14px 28px",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.3s",
              }}>
                Escrever Ensaio →
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {typedPosts.length === 0 ? (
                <div style={{
                  textAlign: "center",
                  padding: "80px 0",
                  color: "var(--gray-text)",
                  fontFamily: "var(--mono)",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                }}>
                  Nenhum post publicado ainda.<br />
                  <Link href="/forum/novo" style={{ color: "var(--amber)", textDecoration: "none", marginTop: "16px", display: "inline-block" }}>
                    Seja o primeiro →
                  </Link>
                </div>
              ) : (
                typedPosts.map((post) => (
                  <Link key={post.id} href={`/forum/${post.slug}`} style={{ textDecoration: "none" }}>
                    <div className="model-card" style={{
                      display: "flex",
                      gap: "24px",
                      padding: "32px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}>
                      {/* Coluna karma */}
                      <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        minWidth: "40px",
                      }}>
                        <span style={{ color: "var(--gray-text)", fontSize: "14px" }}>▲</span>
                        <span style={{
                          color: "var(--amber)",
                          fontFamily: "var(--mono)",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}>
                          {post.karma_score}
                        </span>
                      </div>

                      {/* Conteúdo */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
                        <h3 style={{
                          margin: 0,
                          fontSize: "20px",
                          fontFamily: "var(--serif)",
                          color: "var(--off-white)",
                          lineHeight: 1.4,
                        }}>
                          {post.title}
                        </h3>

                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          fontSize: "12px",
                          fontFamily: "var(--mono)",
                          color: "var(--gray-text)",
                        }}>
                          <span style={{ color: "var(--off-white)" }}>
                            {post.profiles?.display_name || post.profiles?.username || 'Anônimo'}
                          </span>
                          <span>•</span>
                          <span>{formatDate(post.created_at)}</span>
                        </div>

                        <p style={{ margin: 0, color: "var(--gray-text)", fontSize: "15px", lineHeight: 1.6 }}>
                          {excerpt(post.body_md)}
                        </p>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px" }}>
                          <span style={{
                            fontSize: "12px",
                            fontFamily: "var(--mono)",
                            color: "var(--gray-text)",
                            letterSpacing: "0.08em",
                          }}>
                            {post.comment_count} COMENTÁRIOS →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>

          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

            {/* CTA escrever */}
            <div style={{
              background: "var(--gray)",
              padding: "32px",
              border: "1px solid rgba(200,169,126,0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: "20px", color: "var(--off-white)" }}>
                Tem uma tese sólida?
              </div>
              <div style={{ fontSize: "14px", color: "var(--gray-text)", lineHeight: 1.6 }}>
                Argumentos que passam pela curadoria ganham alcance na linha de frente do ecossistema Oktal.
              </div>
              <Link href="/forum/novo" style={{
                background: "var(--off-white)",
                color: "#000",
                fontFamily: "var(--mono)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "14px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "12px",
                textDecoration: "none",
                textAlign: "center",
                display: "block",
              }}>
                Escrever Novo Ensaio
              </Link>
            </div>

            {/* Comentários recentes */}
            {typedComments.length > 0 && (
              <div>
                <div style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  color: "var(--off-white)",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(200,169,126,0.1)",
                  paddingBottom: "16px",
                  marginBottom: "24px",
                }}>
                  Comentários Recentes
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {typedComments.map((c) => (
                    <div key={c.id} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ fontSize: "12px", fontFamily: "var(--mono)", color: "var(--amber)" }}>
                        {c.profiles?.username}
                        <span style={{ color: "var(--gray-text)" }}> em</span>
                      </div>
                      <div style={{
                        fontSize: "13px",
                        color: "var(--off-white)",
                        fontFamily: "var(--serif)",
                        fontStyle: "italic",
                        lineHeight: 1.5,
                      }}>
                        &ldquo;{excerpt(c.body_md, 100)}&rdquo;
                      </div>
                      {c.posts && (
                        <Link href={`/forum/${c.posts.slug}`} style={{
                          fontSize: "11px",
                          color: "var(--gray-text)",
                          fontFamily: "var(--mono)",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textDecoration: "none",
                          display: "block",
                        }}>
                          ↳ {c.posts.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Leaderboard */}
            {typedTopUsers.length > 0 && (
              <div>
                <div style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  color: "var(--off-white)",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(200,169,126,0.1)",
                  paddingBottom: "16px",
                  marginBottom: "24px",
                }}>
                  Mural de Honra
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {typedTopUsers.map((u, i) => (
                    <div key={u.username} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      color: "var(--gray-text)",
                    }}>
                      <span>{i + 1}. {u.display_name || u.username}</span>
                      <span style={{ color: "var(--amber)", fontFamily: "var(--mono)" }}>
                        {u.karma_score} ▲
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <div className="divider" style={{ width: "100%" }}><hr /></div>
      <footer>
        <div className="footer-copy">© 2026 Racionalistas. Todos os direitos reservados.</div>
        <div className="footer-tagline">Pensamento claro é infraestrutura.</div>
      </footer>
    </>
  )
}
