import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { wikiContent } from '@/lib/wiki-content';

export function generateStaticParams() {
  return wikiContent.map((model) => ({
    slug: model.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const model = wikiContent.find((m) => m.slug === params.slug);
  if (!model) return { title: 'Não Encontrado' };
  
  return {
    title: `${model.name} | Racionalistas Wiki`,
    description: model.definition,
  };
}

export default function WikiArticle({ params }: { params: { slug: string } }) {
  const model = wikiContent.find((m) => m.slug === params.slug);

  if (!model) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-slate-200">
      
      {/* Navbar Minimalista */}
      <nav className="border-b border-slate-900 bg-black/80 backdrop-blur-md sticky top-0 z-10 w-full py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href="/wiki" className="text-teal-500 hover:text-teal-400 text-sm font-mono flex items-center gap-2 transition-colors">
          <span>&larr;</span> Voltar para Wiki
        </Link>
        <span className="text-xs font-mono text-slate-600 uppercase tracking-widest hidden md:inline-block">
          Racionalistas
        </span>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header do Artigo */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span 
              className="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-3xl"
              style={{ color: model.color, textShadow: `0 0 20px ${model.color}40` }}
            >
              {model.icon}
            </span>
            <div>
              <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">
                Modelo 
                <span className="mx-2 text-slate-700">|</span> 
                {model.id}
              </span>
              <div className="text-sm font-mono text-teal-600/80 mt-1">
                {model.thinker}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-tight">
            {model.name}
          </h1>
        </header>

        {/* Corpo do Artigo */}
        <article className="prose prose-invert prose-lg prose-slate max-w-none">
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 mb-12">
            <h2 className="text-xl font-serif text-teal-400 mt-0 mb-4 border-b border-slate-800 pb-4">
              Definição
            </h2>
            <p className="text-slate-300 leading-relaxed m-0">
              {model.definition}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif text-white mb-6">Como aplicar na prática</h2>
            
            <div className="pl-6 border-l-2 border-teal-500/50 my-8 py-2">
              <h3 className="text-sm font-mono text-teal-500 uppercase tracking-wider mt-0 mb-3">
                A Pergunta-Gatilho
              </h3>
              <p className="text-xl md:text-2xl font-serif text-slate-200 mt-0 mb-0 leading-snug italic">
                "{model.triggerQuestion}"
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="text-6xl font-serif">Ex</span>
            </div>
            <h2 className="text-xl font-serif text-white mt-0 mb-4 flex items-center gap-2">
              Exemplo Real
            </h2>
            <p className="text-slate-400 leading-relaxed m-0 relative z-10">
              {model.example}
            </p>
          </div>

        </article>

      </main>
    </div>
  );
}
