import React from 'react';
import Link from 'next/link';
import { wikiContent } from '@/lib/wiki-content';

export const metadata = {
  title: 'Wiki | Racionalistas',
  description: 'Catálogo de Modelos Mentais Racionalistas',
};

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-black text-slate-200 min-h-screen">
      
      {/* Sidebar - Fixa lateral desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-black border-r border-slate-900 h-screen sticky top-0 overflow-y-auto">
        <div className="p-6 pb-2 border-b border-slate-900 sticky top-0 bg-black z-10">
          <Link href="/" className="text-xl font-serif text-white hover:text-teal-400 transition-colors flex items-center gap-2">
            Racionalistas.
          </Link>
          <div className="text-xs font-mono text-teal-600/70 mt-1 mb-4 uppercase tracking-widest">
            A Enciclopédia
          </div>
          
          <div className="relative group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3 top-2.5 text-slate-500 group-focus-within:text-teal-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Pesquisar modelo..." 
              className="w-full bg-slate-900/50 border border-slate-800 rounded-md py-2 pl-9 pr-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500/50 focus:bg-slate-900 transition-all font-mono"
            />
          </div>
        </div>

        <div className="p-4 pt-6 flex-1">
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest pl-2 mb-3">
            Conteúdos
          </h3>
          <ul className="space-y-[1px]">
            {wikiContent.map((model) => (
              <li key={model.id}>
                <Link 
                  href={`/wiki/${model.slug}`}
                  className="flex items-center gap-3 px-2 py-1.5 rounded-md text-sm text-slate-400 hover:text-teal-400 hover:bg-teal-900/10 transition-colors group"
                >
                  <span className="opacity-60 group-hover:opacity-100" style={{ color: model.color }}>{model.icon}</span>
                  <span className="truncate">{model.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Área Principal (Topbar + Conteúdo) */}
      <div className="flex-1 flex flex-col min-w-0 bg-black">
        
        {/* Topbar Mobile */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-900 bg-black/80 backdrop-blur-md sticky top-0 z-20">
          <Link href="/" className="text-lg font-serif text-white flex items-center gap-2">
            Racionalistas.
          </Link>
          <button className="text-slate-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Topbar Desktop (Opcional, apenas status) */}
        <div className="hidden md:flex items-center justify-end p-4 h-16 w-full absolute top-0 right-0 z-10 pointer-events-none">
          <div className="flex items-center gap-6 text-sm font-mono text-slate-500 pointer-events-auto">
            <Link href="/" className="hover:text-white transition-colors">Ler Manifesto</Link>
          </div>
        </div>

        <main className="flex-1 p-6 md:p-12 lg:p-16 max-w-4xl mx-auto w-full pt-16 md:pt-24 bg-black">
          {children}
        </main>
      </div>
    </div>
  );
}
