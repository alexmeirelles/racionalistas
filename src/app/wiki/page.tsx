import React from 'react';
import Link from 'next/link';
import { wikiContent } from '@/lib/wiki-content';

export const metadata = {
  title: 'Wiki | Racionalistas',
  description: 'Catálogo de Modelos Mentais Racionalistas',
};

export default function WikiIndex() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-teal-400 mb-4 tracking-tight">
            Os 13 Modelos Mentais
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            A estrutura fundacional do pensamento não-linear. Aqui não há motivação. 
            Apenas ferramentas testadas para analisar a realidade e tomar decisões.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wikiContent.map((model) => (
            <Link 
              key={model.id}
              href={`/wiki/${model.slug}`}
              className="block group"
            >
              <article className="h-full bg-slate-900 border border-slate-800 rounded-xl p-6 transition-all duration-300 hover:border-teal-500/50 hover:bg-slate-800/80">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" style={{ color: model.color }}>{model.icon}</span>
                  <span className="text-xs font-mono text-slate-500">{model.id}</span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {model.name}
                </h2>
                
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                  {model.definition}
                </p>
                
                <div className="text-xs font-mono text-teal-600/70 uppercase tracking-wider">
                  {model.thinker}
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
