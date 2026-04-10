import Image from "next/image";
import iconPic from "./icon.png";

export default function Home() {
  return (
    <>


  {/* NAV */}
  <nav>
    <div className="logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Image src={iconPic} alt="Racionalistas" width={24} height={24} style={{ filter: "brightness(0) invert(1)" }} />
      <span>Racionalistas<span>.</span></span>
    </div>
    <div className="nav-links">
      <a href="#manifesto" className="nav-link">Manifesto</a>
      <a href="/wiki" className="nav-link">Wiki</a>
      <a href="#oktal" className="nav-link">Oktal</a>
      <a href="#assinar" className="nav-cta">Assinar grátis</a>
    </div>
  </nav>

  {/* HERO */}
  <div className="hero">
    <div className="hero-tag">Comunidade de pensamento estratégico</div>
    <h1>Para quem recusa decidir no <em>piloto automático.</em></h1>
    <p className="hero-sub">Modelos mentais, vieses cognitivos e frameworks de decisão. Conteúdo semanal gratuito para founders e solopreneurs que levam pensamento estruturado a sério.</p>
    <div className="hero-actions">
      <a href="#assinar" className="btn-primary">Assinar a newsletter</a>
      <a href="#oktal" className="btn-ghost">Conheça o Oktal →</a>
    </div>
  </div>

  <div className="divider"><hr /></div>

  {/* QUOTE SECTION */}
  <section style={{ textAlign: "center", padding: "3rem 1rem", maxWidth: "700px", margin: "0 auto" }}>
    <p style={{ fontSize: "1.6rem", fontStyle: "italic", color: "var(--gray-text)", lineHeight: 1.4, margin: "0 0 1rem 0" }}>
      &quot;Decisões difíceis tornam a vida fácil. Decisões fáceis tornam a vida difícil.&quot;
    </p>
    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "2px", opacity: 0.5 }}>
      — Jerzy Gregorek
    </div>
  </section>

  <div className="divider"><hr /></div>

  {/* MANIFESTO */}
  <section className="manifesto" id="manifesto">
    <div className="section-tag">Manifesto</div>
    <div className="manifesto-text">
      A maioria das pessoas decide no piloto automático. Escolhem por impulso. Justificam depois. Chamam isso de intuição.
      <span className="dim">Nós não.</span>
      Nós sabemos que a intuição é apenas reconhecimento de padrões. Funciona quando os padrões são familiares. <strong>Falha em tudo que realmente importa.</strong>
      <span className="dim">Racionalista não é quem pensa mais. É quem estrutura o pensamento antes de agir.</span>
      Não é frieza. É disciplina.<br />
      Não é lentidão. É precisão.<br />
      Não é medo de errar. É respeito pelo custo do erro.
      <span className="dim"><strong>Pensamento claro não é talento. É infraestrutura.</strong></span>
    </div>
  </section>

  <div className="divider"><hr /></div>

  {/* WHAT YOU GET */}
  <section>
    <div className="section-tag">O que você recebe</div>
    <h2 className="section-title">Três formas de pensar melhor. Todas gratuitas.</h2>
    <div className="offerings-grid">
      <div className="offering">
        <div className="offering-icon">Newsletter</div>
        <div className="offering-title">A Lente</div>
        <div className="offering-desc">Toda terça-feira às 7h. Um dilema real analisado por um modelo mental. Um viés cognitivo identificado. Em 5 minutos de leitura.</div>
      </div>
      <div className="offering">
        <div className="offering-icon">Instagram</div>
        <div className="offering-title">Provocações</div>
        <div className="offering-desc">Modelos mentais em formato direto. Sem guru, sem fórmula mágica, sem engagement bait. O post termina quando o pensamento termina.</div>
      </div>
      <div className="offering">
        <div className="offering-icon">Comunidade</div>
        <div className="offering-title">Os Racionalistas</div>
        <div className="offering-desc">Um espaço para quem leva decisão a sério. Discussões sobre frameworks, vieses e decisões reais. Sem conselho genérico.</div>
      </div>
    </div>
  </section>

  <div className="divider"><hr /></div>

  {/* MODELS */}
  <section id="modelos">
    <div className="section-tag">Repertório</div>
    <h2 className="section-title">Alguns dos modelos que exploramos.</h2>
    <p className="section-text">Cada semana, um modelo mental diferente. Cada modelo, uma lente nova sobre o mesmo problema.</p>
    <div className="models-grid">
      <div className="model-card">
        <div className="model-name">Inversão</div>
        <div className="model-thinker">Munger</div>
      </div>
      <div className="model-card">
        <div className="model-name">Primeiros Princípios</div>
        <div className="model-thinker">Musk</div>
      </div>
      <div className="model-card">
        <div className="model-name">Pre-mortem</div>
        <div className="model-thinker">Klein</div>
      </div>
      <div className="model-card">
        <div className="model-name">Segunda Ordem</div>
        <div className="model-thinker">Marks</div>
      </div>
      <div className="model-card">
        <div className="model-name">Antifragilidade</div>
        <div className="model-thinker">Taleb</div>
      </div>
      <div className="model-card">
        <div className="model-name">Regret Minimization</div>
        <div className="model-thinker">Bezos</div>
      </div>
      <div className="model-card">
        <div className="model-name">Círculo de Competência</div>
        <div className="model-thinker">Buffett</div>
      </div>
      <div className="model-card">
        <div className="model-name">Loop OODA</div>
        <div className="model-thinker">Boyd</div>
      </div>
      <div className="model-card">
        <div className="model-name">Pele no Jogo</div>
        <div className="model-thinker">Taleb</div>
      </div>
      <div className="model-card">
        <div className="model-name">Navalha de Occam</div>
        <div className="model-thinker">William of Ockham</div>
      </div>
      <div className="model-card">
        <div className="model-name">Alavancagem</div>
        <div className="model-thinker">Naval</div>
      </div>
      <div className="model-card">
        <div className="model-name">+ 50 modelos</div>
        <div className="model-thinker">na newsletter</div>
      </div>
    </div>
  </section>

  <div className="divider"><hr /></div>

  {/* OKTAL PRODUCT CARD */}
  <section id="oktal">
    <div className="section-tag">O Produto</div>
    <h2 className="section-title">Oktal — a ferramenta dos Racionalistas.</h2>
    <p className="section-text">Se o Racionalistas ensina a pensar, o Oktal faz o trabalho pesado. 8 lentes analíticas aplicadas em sequência sobre qualquer decisão.</p>
    <div className="product-card">
      <div>
        <div className="product-badge">Produto</div>
        <div className="product-title">8 lentes.<br />1 decisão clara.</div>
        <div className="product-desc">Descreva um dilema de negócio. O Oktal processa por 8 frameworks de pensadores como Munger, Bezos e Taleb. O output é uma árvore de cenários, não um parágrafo genérico.</div>
        <div className="product-price"><span>R$47</span>/mês</div>
        <a href="#" className="btn-primary">Teste grátis por 7 dias</a>
      </div>
      <div className="product-visual">
        <div className="lens-preview">
          <span className="num">01</span>
          <span className="name">Inversão</span>
          <span className="who">Munger</span>
        </div>
        <div className="lens-preview">
          <span className="num">02</span>
          <span className="name">Primeiros Princípios</span>
          <span className="who">Musk</span>
        </div>
        <div className="lens-preview">
          <span className="num">03</span>
          <span className="name">Regret Minimization</span>
          <span className="who">Bezos</span>
        </div>
        <div className="lens-preview">
          <span className="num">04</span>
          <span className="name">Segunda Ordem</span>
          <span className="who">Marks</span>
        </div>
        <div className="lens-preview">
          <span className="num">05</span>
          <span className="name">Antifragilidade</span>
          <span className="who">Taleb</span>
        </div>
        <div className="lens-preview" style={{borderLeftColor: "rgba(200,169,126,0.3)", opacity: 0.5}}>
          <span className="num">06–08</span>
          <span className="name" style={{fontStyle: "italic", fontFamily: "var(--sans)", fontSize: "13px", color: "var(--gray-text)"}}>Descubra por dentro</span>
          <span className="who"></span>
        </div>
      </div>
    </div>
  </section>

  <div className="divider"><hr /></div>

  {/* EMAIL CAPTURE */}
  <section className="capture" id="assinar">
    <div className="section-tag">Newsletter gratuita</div>
    <h2 className="section-title">A Lente — toda terça às 7h.</h2>
    <p className="section-text">Um dilema real. Um modelo mental. Um viés cognitivo. Em 5 minutos.</p>
    <div className="email-form">
      <input type="email" className="email-input" placeholder="Seu melhor email" />
      <button className="email-submit">Assinar</button>
    </div>
    <div className="capture-note">Sem spam. Sem fórmula mágica. Só pensamento estruturado.</div>
  </section>

  {/* FOOTER */}
  <footer>
    <div className="footer-copy">© 2026 Racionalistas. Todos os direitos reservados.</div>
    <div className="footer-tagline">Pensamento claro é infraestrutura.</div>
  </footer>


    </>
  );
}