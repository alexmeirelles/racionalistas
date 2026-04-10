import { wikiContent } from '@/lib/wiki-content';
import Link from 'next/link';
import Image from "next/image";
import iconPic from "../icon.png";

export default function WikiIndex() {
  const sortedContent = [...wikiContent].sort((a,b) => a.name.localeCompare(b.name));

  return (
    <>
      <nav>
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image src={iconPic} alt="Racionalistas" width={24} height={24} style={{ filter: "brightness(0) invert(1)" }} />
          <span>Racionalistas<span>.</span></span>
        </div>
        <div className="nav-links">
          <Link href="/#manifesto" className="nav-link">Manifesto</Link>
          <Link href="/wiki" className="nav-link">Wiki</Link>
          <Link href="/forum" className="nav-link">Fórum</Link>
          <Link href="/#oktal" className="nav-link">Oktal</Link>
          <Link href="/#assinar" className="nav-cta">Assinar grátis</Link>
        </div>
      </nav>

      <section style={{ paddingTop: "140px" }}>
        <div className="section-tag">A Enciclopédia Racionalista</div>
        <h2 className="section-title" style={{ maxWidth: "800px" }}>O portal de infraestrutura cognitiva.</h2>
        <p className="section-text" style={{ maxWidth: "700px" }}>
          A maioria das pessoas decide no piloto automático. A intuição é útil em padrões repetitivos, mas falha em ambientes caóticos. A proposta deste diretório é mapear, arquivar e exemplificar os Modelos Mentais mais robustos documentados pela humanidade.
        </p>

        <div className="models-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", marginTop: "48px" }}>
          {sortedContent.map((model) => (
            <Link href={`/wiki/${model.slug}`} key={model.id} style={{ textDecoration: 'none' }}>
              <div className="model-card" style={{ textAlign: "left", display: "flex", flexDirection: "column", height: "100%", padding: "32px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div className="model-name" style={{ margin: 0, fontSize: "20px" }}>{model.name}</div>
                  <div style={{ color: model.color, fontSize: "1.2rem", opacity: 0.8 }}>{model.icon}</div>
                </div>
                <div className="model-thinker" style={{ marginBottom: "12px" }}>{model.thinker}</div>
                <div style={{ fontSize: "14px", color: "var(--gray-text)", lineHeight: 1.6 }}>
                  {model.definition}
                </div>
              </div>
            </Link>
          ))}
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
