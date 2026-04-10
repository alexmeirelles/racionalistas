import React from 'react';
import Link from 'next/link';
import { wikiContent } from '@/lib/wiki-content';

export const metadata = {
  title: 'Wiki | Racionalistas',
  description: 'Catálogo de Modelos Mentais Racionalistas',
};

export default function WikiIndex() {
  return (
    <>
      <header className="mb-12 border-b border-slate-900 pb-8">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">
          A Enciclopédia Racionalista
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl font-serif italic">
          O portal colaborativo (e fechado) de infraestrutura cognitiva.
        </p>
      </header>

      <div className="prose prose-invert prose-lg prose-slate max-w-none">
        
        <div className="bg-slate-900/40 border border-slate-800 rounded-md p-6 mb-12 flex gap-4 md:gap-8 items-start">
          <div className="text-3xl hidden md:block opacity-50">🧭</div>
          <div>
            <h2 className="text-xl font-bold text-white mt-0 mb-2">Bem-vindo(a) ao Catálogo</h2>
            <p className="text-base text-slate-300 mt-0 mb-0">
              A maioria das pessoas decide no piloto automático. A intuição é útil em padrões repetitivos, mas falha em ambientes caóticos. A proposta deste diretório é mapear, arquivar e exemplificar os Modelos Mentais mais robustos documentados pela humanidade. Utilize o índice ao lado para navegar por cada estrutura de pensamento.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-serif text-teal-400 border-b border-slate-800 pb-2 mb-6">
          Índice Alfabético Geral
        </h2>
        
        {/* Usando colunas nativas de CSS para simular índice da wikipedia */}
        <div className="columns-1 md:columns-2 gap-8 space-y-4">
          {wikiContent.concat().sort((a,b) => a.name.localeCompare(b.name)).map((model) => (
            <div key={model.id} className="break-inside-avoid">
              <Link 
                href={`/wiki/${model.slug}`}
                className="group flex flex-col p-4 bg-slate-900/20 border border-slate-800 rounded hover:bg-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-teal-300 group-hover:text-teal-400 group-hover:underline underline-offset-4 decoration-slate-700">
                    {model.name}
                  </span>
                  <span className="opacity-50" style={{ color: model.color }}>{model.icon}</span>
                </div>
                <p className="text-sm text-slate-400 line-clamp-2 mt-0 mb-0">
                  {model.definition}
                </p>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
