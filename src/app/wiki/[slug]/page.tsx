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
    <article className="relative min-h-full pb-20 max-w-full">
      {/* Título Estilo Wikipedia (Sublinhado completo) */}
      <header className="mb-6 border-b border-slate-800 pb-2 flex items-baseline justify-between">
        <h1 className="text-4xl md:text-5xl font-serif text-white tracking-tight m-0">
          {model.name}
        </h1>
      </header>

      <div className="flex flex-col xl:flex-row-reverse gap-8 items-start">
        
        {/* Infobox Direito (Wikipedia Style) */}
        <aside className="w-full xl:w-72 flex-shrink-0 bg-slate-900/40 border border-slate-800 p-1 mb-8 xl:mb-0 xl:mt-2">
          <div className="bg-slate-900 border border-slate-800 flex items-center justify-center py-6 text-5xl mb-1" style={{ color: model.color }}>
            {model.icon}
          </div>
          <table className="w-full text-sm border-collapse text-left">
            <tbody>
              <tr className="border-b border-slate-800">
                <th className="py-2 px-3 text-slate-400 font-normal w-1/3">Origem</th>
                <td className="py-2 px-3 text-teal-400 font-medium">{model.thinker}</td>
              </tr>
              <tr className="border-b border-slate-800">
                <th className="py-2 px-3 text-slate-400 font-normal">Identificador</th>
                <td className="py-2 px-3 text-slate-200 font-mono text-xs">{model.id}</td>
              </tr>
              <tr>
                <th className="py-2 px-3 text-slate-400 font-normal">Sinal</th>
                <td className="py-2 px-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: model.color }}></div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bg-teal-900/20 text-teal-400/80 text-xs text-center py-2 mt-1 border border-teal-900/50">
            Padrão de Raciocínio
          </div>
        </aside>

        {/* Conteúdo Fluido */}
        <div className="prose prose-invert prose-lg prose-slate flex-1 max-w-3xl">
          
          <p className="text-slate-300 leading-relaxed font-serif text-xl first-letter:text-5xl first-letter:font-bold first-letter:text-teal-400 first-letter:mr-1 first-letter:float-left">
            {model.definition}
          </p>

          <h2 className="text-2xl font-serif text-white border-b border-slate-800 pb-2 mt-12 mb-6">
            A Dinâmica do Problema
          </h2>
          <p className="text-slate-400">
            A forma mais eficiente de instanciar o <strong className="text-slate-200 font-normal">{model.name}</strong> 
            no dia a dia é submeter a sua decisão à pressão de contradição dessa linha de raciocínio. 
            Em momentos de incerteza em arquitetura de negócio ou código, provoque sua hipótese utilizando o gatilho oficial:
          </p>

          <blockquote className="border-l-4 border-teal-500 bg-slate-900/50 p-6 my-8 not-italic">
            <div className="text-xs font-mono text-teal-600 mb-2 uppercase tracking-widest">
              Pergunta-Gatilho Operacional
            </div>
            <p className="text-xl md:text-2xl font-serif text-slate-200 mt-0 mb-0 leading-snug">
              "{model.triggerQuestion}"
            </p>
          </blockquote>

          <h2 className="text-2xl font-serif text-white border-b border-slate-800 pb-2 mt-12 mb-6">
            Caso de Estudo Comprovado
          </h2>
          <div className="text-slate-300 leading-relaxed pl-4 border-l border-slate-800">
            <span className="block text-xs font-mono text-slate-500 mb-4 uppercase">Arquivo: Acesso Histórico</span>
            <p className="m-0 bg-slate-900/30 p-4 rounded-r text-base">
              {model.example}
            </p>
          </div>

        </div>

      </div>
    </article>
  );
}
