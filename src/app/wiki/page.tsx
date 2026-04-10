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
      <div className="mb-12 border-b border-slate-900 pb-8">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">
          A Enciclopédia Racionalista
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl font-serif italic m-0">
          O portal colaborativo (e fechado) de infraestrutura cognitiva.
        </p>
      </div>

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
        
        {/* Lista simples em estilo diretório ao invés de colunas nativas problemáticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {wikiContent.concat().sort((a,b) => a.name.localeCompare(b.name)).map((model) => (
            <div key={model.id} className="flex border-b border-slate-900 pb-4">
              <div className="mr-4 mt-1 opacity-80 text-xl" style={{ color: model.color }}>{model.icon}</div>
              <div className="flex-1">
                <Link 
                  href={`/wiki/${model.slug}`}
                  className="inline-block font-bold text-teal-400 hover:text-teal-300 hover:underline underline-offset-4 decoration-teal-500 mb-1"
                >
                  {model.name}
                </Link>
                <div className="text-xs text-slate-500 mb-1 font-mono uppercase tracking-widest">{model.thinker}</div>
                <p className="text-sm text-slate-400 line-clamp-2 mt-0 mb-0 leading-snug">
                  {model.definition}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
