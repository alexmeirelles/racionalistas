import { Header } from "../../components/Header";
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fórum Racionalista — Diálogos para Escalar o Pensamento",
  description: "Fórum de discussão sobre modelos mentais, vieses cognitivos e estratégia para founders. Troca de teses, dissecação de frameworks e depuração de vieses na arquitetura de negócios.",
  alternates: {
    canonical: "https://www.racionalistas.com.br/forum",
  },
  openGraph: {
    title: "Fórum Racionalista — Diálogos para Escalar o Pensamento",
    description: "A praça pública dos construtores racionais. Discussões sobre modelos mentais, vieses cognitivos e estratégia para founders.",
    url: "https://www.racionalistas.com.br/forum",
  },
};

// Mockup data inspired by LessWrong's sophisticated intellectual curation
const FILTERS = ["Curadoria", "Página Inicial", "Discussões Recentes", "Debates em Alta", "Meta"];

const FORUM_POSTS = [
  {
    id: 1,
    title: "A Ruína dos Sistemas de Bônus: Por Que Gamificação Corporativa Quase Sempre Falha",
    excerpt: "Neste ensaio, decomponho uma série de incidentes em scale-ups recentes onde a Lei de Goodhart destruiu as finanças em longo prazo. Quando o alvo vira a meta...",
    author: "Alexandre Meirelles",
    date: "12 Abril 2026",
    karma: 142,
    comments: 34,
    category: "Engenharia de Incentivos"
  },
  {
    id: 2,
    title: "Notas sobre a Transição do ODS para Arquiteturas Bayesianas",
    excerpt: "O modelo padrão de resolução falha em assimetrias desconhecidas. Propomos uma readequação pesada de árvores de decisão Bayesianas quando o time de engenharia está construindo arquiteturas core...",
    author: "Luiz P.",
    date: "11 Abril 2026",
    karma: 95,
    comments: 18,
    category: "Sistemas Racionais"
  },
  {
    id: 3,
    title: "Como Blindar a Si Mesmo do Viés de Inconsistência na Construção de Startups",
    excerpt: "Identificando o ponto exato em que fundadores desistem de pivotar porque o investimento mental afundado (sunk cost) distorce o mapa da realidade do produto...",
    author: "Felipe S.",
    date: "09 Abril 2026",
    karma: 210,
    comments: 54,
    category: "Vieses Cognitivos"
  },
  {
    id: 4,
    title: "O Problema do Agente-Principal na Cultura Remota e Assíncrona",
    excerpt: "Quando a empresa escala, o distanciamento da visão do fundador sofre atrito puro com as métricas de performance individuais. Como amarrar capital social entre os colaboradores?",
    author: "Mariana T.",
    date: "07 Abril 2026",
    karma: 88,
    comments: 12,
    category: "Estratégia Coletiva"
  },
  {
    id: 5,
    title: "[Desafio] Quebrando um Ciclo de Destruição Criativa",
    excerpt: "Cenário de teste: Sua empresa fatura $10M de um legado, mas um novo player open-source ameaça o mercado em 24 meses. Como você destrói sua receita inteira para pivotar antes da morte?",
    author: "Alexandre Meirelles",
    date: "05 Abril 2026",
    karma: 345,
    comments: 89,
    category: "Mental Models Workout"
  }
];

const SIDEBAR_COMMENTS = [
  { id: 101, author: "Juliano", text: "Eu discordo da premissa do parágrafo 3. O alinhamento bayesiano depende...", postTitle: "Notas sobre a Transição..." },
  { id: 102, author: "Cássia", text: "Isso lembra muito os primeiros princípios que Munger falava lá em 1990...", postTitle: "O Problema do Agente-Principal..." },
  { id: 103, author: "Marcos L.", text: "Exato! A assimetria de risco ali era óbvia pra quem visse as caudas gordas da distribuição...", postTitle: "[Desafio] Quebrando um Ciclo..." },
];

export default function ForumIndex() {
  return (
    <>
      <Header />

      <section style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        
        {/* Header / Intro do Forum */}
        <div style={{ marginBottom: "64px" }}>
          <div className="section-tag">O Fórum Racionalista</div>
          <h2 className="section-title" style={{ maxWidth: "800px", marginBottom: "24px" }}>Diálogos para Escalar o Pensamento</h2>
          <p className="section-text" style={{ maxWidth: "700px" }}>
            A praça pública dedicada a construtores lógicos. Um ambiente rigorosamente focado na troca de teses, dissecação de modelos mentais e depuração de vieses na arquitetura tecnológica dos negócios.
          </p>
        </div>

        {/* Layout Principal: 2 Colunas (Feed + Sidebar) */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 340px", 
          gap: "64px", 
          alignItems: "start" 
        }}>
          
          {/* Main Feed Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            
            {/* Nav Tabs */}
            <div style={{ 
              display: "flex", 
              gap: "24px", 
              borderBottom: "1px solid var(--gray-mid)", 
              paddingBottom: "16px",
              overflowX: "auto"
            }}>
              {FILTERS.map((f, idx) => (
                <div key={idx} style={{ 
                  color: idx === 0 ? "var(--off-white)" : "var(--gray-text)", 
                  fontSize: "14px", 
                  fontFamily: "var(--mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  borderBottom: idx === 0 ? "2px solid var(--amber-dim)" : "none",
                  paddingBottom: "4px",
                  whiteSpace: "nowrap"
                }}>
                  {f}
                </div>
              ))}
            </div>

            {/* Posts List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {FORUM_POSTS.map(post => (
                <div key={post.id} className="model-card" style={{ 
                  display: "flex", 
                  gap: "24px", 
                  padding: "32px",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}>
                  {/* Karma Column (LessWrong style) */}
                  <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center",
                    gap: "8px",
                    minWidth: "40px"
                  }}>
                    <span style={{ color: "var(--gray-text)", cursor: "pointer", fontSize: "14px", padding: "4px" }}>▲</span>
                    <span style={{ color: "var(--amber-dim)", fontFamily: "var(--mono)", fontSize: "18px", fontWeight: "bold" }}>{post.karma}</span>
                    <span style={{ color: "var(--gray-text)", cursor: "pointer", fontSize: "14px", padding: "4px", opacity: 0.3 }}>▼</span>
                  </div>

                  {/* Post Content */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
                    <h3 style={{ margin: 0, fontSize: "22px", fontFamily: "var(--serif)", color: "var(--off-white)", lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", fontFamily: "var(--mono)", color: "var(--gray-text)" }}>
                      <span style={{ color: "var(--off-white)" }}>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span style={{ color: "#FFE66D" }}>{post.category}</span>
                    </div>

                    <p style={{ margin: 0, color: "var(--gray-text)", fontSize: "15px", lineHeight: 1.6 }}>
                      {post.excerpt}
                    </p>

                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
                      <span style={{ fontSize: "13px", fontFamily: "var(--mono)", color: "var(--gray-mid)" }}>
                        {post.comments} COMENTÁRIOS →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <button style={{ 
                background: "transparent", 
                border: "1px solid var(--amber-dim)", 
                color: "var(--amber-dim)",
                fontFamily: "var(--mono)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "16px 32px",
                cursor: "pointer",
                fontSize: "12px"
              }}>
                Carregar Mais Diálogos
              </button>
            </div>

          </div>

          {/* Sidebar / Meta Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            
            {/* Call to Action */}
            <div style={{ 
              background: "var(--gray)", 
              padding: "32px", 
              border: "1px solid var(--gray-mid)",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: "20px", color: "var(--off-white)" }}>
                Tem uma tese sólida?
              </div>
              <div style={{ fontSize: "14px", color: "var(--gray-text)", lineHeight: 1.6 }}>
                Artigos e frameworks que passam pela nossa Curadoria ganham alcance na linha de frente dos projetos Oktal.
              </div>
              <button style={{ 
                background: "var(--off-white)", 
                border: "none", 
                color: "#000",
                fontFamily: "var(--mono)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "12px"
              }}>
                Escrever Novo Ensaio
              </button>
            </div>

            {/* Quick Takes / Recent Comments */}
            <div>
              <div style={{ 
                fontFamily: "var(--mono)", 
                fontSize: "12px", 
                letterSpacing: "0.1em", 
                color: "var(--off-white)",
                textTransform: "uppercase",
                borderBottom: "1px solid var(--gray-mid)",
                paddingBottom: "16px",
                marginBottom: "24px"
              }}>
                Comentários Recentes
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {SIDEBAR_COMMENTS.map(c => (
                  <div key={c.id} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ fontSize: "12px", fontFamily: "var(--mono)", color: "var(--amber-dim)" }}>
                      {c.author} <span style={{ color: "var(--gray-text)" }}>em</span>
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--off-white)", fontFamily: "var(--serif)", fontStyle: "italic" }}>
                      "{c.text}"
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--gray-mid)", fontFamily: "var(--mono)", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                      ↳ {c.postTitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard Excerpt */}
            <div>
              <div style={{ 
                fontFamily: "var(--mono)", 
                fontSize: "12px", 
                letterSpacing: "0.1em", 
                color: "var(--off-white)",
                textTransform: "uppercase",
                borderBottom: "1px solid var(--gray-mid)",
                paddingBottom: "16px",
                marginBottom: "24px"
              }}>
                Mural de Honra Mensal
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "var(--gray-text)" }}>
                  <span>1. Alexandre M.</span>
                  <span style={{ color: "var(--amber-dim)", fontFamily: "var(--mono)" }}>1.4K ▲</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "var(--gray-text)" }}>
                  <span>2. Julia T.</span>
                  <span style={{ color: "var(--amber-dim)", fontFamily: "var(--mono)" }}>950 ▲</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "var(--gray-text)" }}>
                  <span>3. Marcus F.</span>
                  <span style={{ color: "var(--amber-dim)", fontFamily: "var(--mono)" }}>812 ▲</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <div className="divider" style={{ width: "100%" }}><hr/></div>
      
      <footer>
        <div className="footer-copy">© 2026 Racionalistas. Todos os direitos reservados.</div>
        <div className="footer-tagline">Pensamento claro é infraestrutura.</div>
      </footer>
    </>
  );
}
