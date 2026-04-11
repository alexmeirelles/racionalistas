import { wikiContent } from '@/lib/wiki-content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import iconPic from "../../icon.png";
import { Header } from "../../../components/Header";

export default async function WikiArticle({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const model = wikiContent.find(m => m.slug === resolvedParams.slug);

  if (!model) {
    notFound();
  }

  return (
    <>
      <Header />

      <section style={{ paddingTop: "140px", maxWidth: "900px", margin: "0 auto" }}>
        
        {/* CABEÇALHO DO ARTIGO */}
        <div style={{ marginBottom: "64px" }}>
          <Link href="/wiki" style={{ 
            fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.15em", 
            textTransform: "uppercase", color: "var(--gray-text)", textDecoration: "none",
            marginBottom: "24px", display: "inline-block" 
          }}>
            ← Voltar para o Catálogo
          </Link>
          
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <span style={{ color: model.color, fontSize: "2rem" }}>{model.icon}</span>
            <div className="section-tag" style={{ margin: 0, color: model.color }}>{model.thinker}</div>
          </div>
          
          <h1 className="section-title" style={{ maxWidth: "100%", marginBottom: "24px" }}>
            {model.name}
          </h1>
          
        </div>

        {/* CORPO DO TEXTO */}
        <div style={{ 
          fontSize: "18px", color: "var(--gray-text)", lineHeight: 1.8, 
          fontFamily: "var(--serif)", paddingBottom: "48px" 
        }}>
          <p style={{ color: "var(--off-white)", fontSize: "22px", marginBottom: "48px" }}>
            {model.definition}
          </p>

          {model.detailedContent && model.detailedContent.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: "28px", textAlign: "justify" }}>
              {paragraph}
            </p>
          ))}

          <h2 style={{ fontFamily: "var(--serif)", fontSize: "28px", color: "var(--off-white)", marginBottom: "24px", paddingTop: "32px", borderTop: "1px solid var(--amber-dim)" }}>
            A Dinâmica do Problema
          </h2>
          <p style={{ marginBottom: "32px" }}>
            A forma mais eficiente de instanciar o <strong style={{ color: "var(--off-white)", fontWeight: "normal" }}>{model.name}</strong> 
            no dia a dia é submeter a sua decisão à pressão de contradição dessa linha de raciocínio. 
            Em momentos de incerteza em arquitetura de negócio ou código, provoque sua hipótese utilizando o gatilho oficial:
          </p>

          <div style={{ background: "var(--gray)", padding: "48px", textAlign: "center", margin: "48px 0" }}>
            <div style={{ 
              fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.15em", 
              textTransform: "uppercase", color: model.color, marginBottom: "24px" 
            }}>
              Pergunta-Gatilho Operacional
            </div>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", color: "var(--off-white)", margin: 0, fontStyle: "italic", lineHeight: 1.4 }}>
              "{model.triggerQuestion}"
            </p>
          </div>

          <h2 style={{ fontFamily: "var(--serif)", fontSize: "28px", color: "var(--off-white)", marginBottom: "24px", paddingTop: "32px", borderTop: "1px solid var(--amber-dim)" }}>
            Caso de Estudo Comprovado
          </h2>
          <div style={{ paddingLeft: "32px", borderLeft: "1px solid var(--gray-mid)" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--gray-text)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
              Arquivo // Acesso Histórico
            </div>
            <p style={{ margin: 0 }}>
              {model.example}
            </p>
          </div>

        </div>
      </section>

      <div className="divider"><hr /></div>

      <footer>
        <div className="footer-copy">© 2026 Racionalistas. Todos os direitos reservados.</div>
        <div className="footer-tagline">Pensamento claro é infraestrutura.</div>
      </footer>
    </>
  );
}

export async function generateStaticParams() {
  return wikiContent.map((item) => ({
    slug: item.slug,
  }));
}
