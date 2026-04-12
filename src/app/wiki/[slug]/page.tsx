import { wikiContent } from '@/lib/wiki-content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import iconPic from "../../icon.png";
import { Header } from "../../../components/Header";
import type { Metadata } from "next";

const SITE_URL = "https://www.racionalistas.com.br";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const model = wikiContent.find(m => m.slug === resolvedParams.slug);

  if (!model) {
    return {
      title: "Modelo não encontrado",
    };
  }

  const title = `${model.name} — Modelo Mental | Racionalistas`;
  const description = model.definition.length > 155
    ? model.definition.substring(0, 152) + "..."
    : model.definition;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/wiki/${model.slug}`,
    },
    openGraph: {
      title: `${model.name} — Modelo Mental`,
      description,
      url: `${SITE_URL}/wiki/${model.slug}`,
      type: "article",
      publishedTime: "2026-04-01T00:00:00Z",
      authors: ["Alexandre Meirelles"],
      tags: ["modelo mental", model.name, model.thinker, "racionalidade", "tomada de decisão"],
    },
    twitter: {
      card: "summary",
      title: `${model.name} — Modelo Mental`,
      description,
    },
  };
}

export default async function WikiArticle({ params }: Props) {
  const resolvedParams = await params;
  const model = wikiContent.find(m => m.slug === resolvedParams.slug);

  if (!model) {
    notFound();
  }

  // JSON-LD Article structured data for this specific mental model
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: model.name,
    description: model.definition,
    author: {
      "@type": "Person",
      name: "Alexandre Meirelles",
    },
    publisher: {
      "@type": "Organization",
      name: "Racionalistas",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/wiki/${model.slug}`,
    },
    datePublished: "2026-04-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    inLanguage: "pt-BR",
    keywords: `${model.name}, ${model.thinker}, modelo mental, racionalidade, tomada de decisão`,
    about: {
      "@type": "DefinedTerm",
      name: model.name,
      description: model.definition,
    },
  };

  // BreadcrumbList structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Racionalistas",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wiki",
        item: `${SITE_URL}/wiki`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: model.name,
        item: `${SITE_URL}/wiki/${model.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />

      <article style={{ paddingTop: "140px", maxWidth: "900px", margin: "0 auto" }}>
        
        {/* BREADCRUMB NAV */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: "24px" }}>
          <Link href="/wiki" style={{ 
            fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.15em", 
            textTransform: "uppercase", color: "var(--gray-text)", textDecoration: "none",
            display: "inline-block" 
          }}>
            ← Voltar para o Catálogo
          </Link>
        </nav>

        {/* CABEÇALHO DO ARTIGO */}
        <header style={{ marginBottom: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <span style={{ color: model.color, fontSize: "2rem" }} aria-hidden="true">{model.icon}</span>
            <div className="section-tag" style={{ margin: 0, color: model.color }}>{model.thinker}</div>
          </div>
          
          <h1 className="section-title" style={{ maxWidth: "100%", marginBottom: "24px" }}>
            {model.name}
          </h1>
        </header>

        {/* CORPO DO TEXTO */}
        <div style={{ 
          fontSize: "18px", color: "var(--gray-text)", lineHeight: 1.8, 
          fontFamily: "var(--serif)", paddingBottom: "48px" 
        }}>
          <div style={{ color: "var(--off-white)", fontSize: "22px", marginBottom: "48px" }} dangerouslySetInnerHTML={{ __html: model.definition }}></div>

          {model.detailedContent && model.detailedContent.map((paragraph, index) => (
            <div key={index} style={{ marginBottom: "28px", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: paragraph }}></div>
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
              Exercício Tático
            </div>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", color: "var(--off-white)", margin: 0, fontStyle: "italic", lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: `"${model.triggerQuestion}"` }}></div>
          </div>

          <h2 style={{ fontFamily: "var(--serif)", fontSize: "28px", color: "var(--off-white)", marginBottom: "24px", paddingTop: "32px", borderTop: "1px solid var(--amber-dim)" }}>
            Caso de Estudo Comprovado
          </h2>
          <div style={{ paddingLeft: "32px", borderLeft: "1px solid var(--gray-mid)" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--gray-text)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
              Arquivo // Acesso Histórico
            </div>
            <div style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: model.example }}></div>
          </div>

        </div>
      </article>

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
