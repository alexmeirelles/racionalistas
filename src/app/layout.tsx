import type { Metadata } from "next";
import "./globals.css";
import { ParticleBG } from "../components/ParticleBG";

const SITE_URL = "https://www.racionalistas.com.br";
const SITE_NAME = "Racionalistas";
const SITE_DESCRIPTION = "Modelos mentais, vieses cognitivos e frameworks de decisão para founders e solopreneurs que levam pensamento estratégico a sério. Conteúdo semanal gratuito.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Racionalistas — Para quem recusa decidir no piloto automático",
    template: "%s | Racionalistas",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "modelos mentais", "vieses cognitivos", "pensamento estratégico",
    "frameworks de decisão", "racionalidade", "Charlie Munger",
    "primeiros princípios", "inversão", "tomada de decisão",
    "founders", "empreendedorismo racional", "pensamento crítico",
    "heurísticas", "psicologia cognitiva", "estratégia de negócios"
  ],
  authors: [{ name: "Alexandre Meirelles", url: SITE_URL }],
  creator: "Alexandre Meirelles",
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Racionalistas — Para quem recusa decidir no piloto automático",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/icon.png`,
        width: 512,
        height: 512,
        alt: "Racionalistas — Pensamento claro é infraestrutura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Racionalistas — Para quem recusa decidir no piloto automático",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/icon.png`],
  },
};

// JSON-LD Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: SITE_DESCRIPTION,
  founder: {
    "@type": "Person",
    name: "Alexandre Meirelles",
  },
  sameAs: [],
};

// JSON-LD WebSite structured data (enables sitelinks searchbox)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/wiki?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <ParticleBG particleColor="200,169,126" />
        <div style={{ position: "relative", zIndex: 10 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
