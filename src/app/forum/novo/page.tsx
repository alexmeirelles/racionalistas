'use client'

import { Header } from "@/components/Header"
import { createPost } from "@/app/actions/forum"
import { useRef, useState } from "react"
import Link from "next/link"

export default function NovoPost() {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setError(null)
    const formData = new FormData(e.currentTarget)
    const result = await createPost(formData)
    if (result?.error) {
      setError(result.error)
      setPending(false)
    }
  }

  return (
    <>
      <Header />

      <section style={{ paddingTop: "140px", paddingBottom: "100px" }}>

        <div style={{ marginBottom: "48px" }}>
          <Link href="/forum" style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--gray-text)",
            textDecoration: "none",
            marginBottom: "24px",
            display: "inline-block",
          }}>
            ← Voltar ao Fórum
          </Link>
          <div className="section-tag">Novo Ensaio</div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Escreva com rigor
          </h2>
          <p style={{ fontSize: "15px", color: "var(--gray-text)", maxWidth: "560px", lineHeight: 1.7 }}>
            Posts passam por moderação antes de serem publicados. Argumentos superficiais ou sem substância serão rejeitados.
            Aqui, argumentos ruins não sobrevivem à noite.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "32px" }}>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--amber)",
            }}>
              Título
            </label>
            <input
              name="title"
              required
              maxLength={200}
              placeholder="Uma afirmação precisa, não uma pergunta vaga"
              style={{
                background: "var(--gray)",
                border: "1px solid rgba(200,169,126,0.15)",
                borderRadius: 0,
                padding: "18px 20px",
                fontFamily: "var(--serif)",
                fontSize: "20px",
                color: "var(--off-white)",
                outline: "none",
                width: "100%",
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(200,169,126,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(200,169,126,0.15)'}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--amber)",
            }}>
              Conteúdo
            </label>
            <div style={{ fontSize: "12px", color: "var(--gray-text)", fontFamily: "var(--mono)", marginBottom: "4px" }}>
              Markdown suportado. Mínimo recomendado: 300 palavras.
            </div>
            <textarea
              name="body_md"
              required
              rows={20}
              placeholder={`## A tese central\n\nDescreva seu argumento principal com precisão...\n\n## As premissas\n\nO que precisa ser verdade para sua tese estar correta?\n\n## As evidências\n\nCite dados, estudos, casos reais — não apelos à autoridade.`}
              style={{
                background: "var(--gray)",
                border: "1px solid rgba(200,169,126,0.15)",
                borderRadius: 0,
                padding: "20px",
                fontFamily: "var(--mono)",
                fontSize: "14px",
                color: "var(--off-white)",
                outline: "none",
                width: "100%",
                resize: "vertical",
                lineHeight: 1.7,
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(200,169,126,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(200,169,126,0.15)'}
            />
          </div>

          {error && (
            <div style={{
              background: "rgba(200,50,50,0.1)",
              border: "1px solid rgba(200,50,50,0.3)",
              padding: "14px 18px",
              fontFamily: "var(--mono)",
              fontSize: "13px",
              color: "#ff6b6b",
            }}>
              {error}
            </div>
          )}

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <button
              type="submit"
              disabled={pending}
              style={{
                background: pending ? "var(--gray-mid)" : "var(--amber)",
                color: "#000",
                fontFamily: "var(--mono)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "18px 40px",
                border: "none",
                cursor: pending ? "not-allowed" : "pointer",
                fontWeight: 700,
                transition: "all 0.3s",
              }}
            >
              {pending ? "Enviando..." : "Submeter para Moderação"}
            </button>

            <Link href="/forum" style={{
              fontFamily: "var(--mono)",
              fontSize: "12px",
              color: "var(--gray-text)",
              textDecoration: "none",
            }}>
              Cancelar
            </Link>
          </div>

          <div style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            color: "var(--gray-text)",
            lineHeight: 1.6,
            borderTop: "1px solid rgba(200,169,126,0.1)",
            paddingTop: "24px",
          }}>
            Posts são revisados pela equipe de moderação antes da publicação.
            Argumentos precisos, com premissas explícitas e evidências concretas têm prioridade.
          </div>

        </form>
      </section>

      <div className="divider" style={{ width: "100%" }}><hr /></div>
      <footer>
        <div className="footer-copy">© 2026 Racionalistas.</div>
        <div className="footer-tagline">Pensamento claro é infraestrutura.</div>
      </footer>
    </>
  )
}
