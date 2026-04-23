# Arquitetura Técnica — Fórum Racionalistas

## Stack

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.2 |
| UI | React | 19.2.4 |
| Linguagem | TypeScript | 5.x |
| Estilos | CSS custom classes em `globals.css` | — |
| Banco | Supabase Postgres | — |
| Auth | Supabase Auth (Google OAuth) | @supabase/ssr 0.10.2 |
| Deploy | Vercel | — |
| Bots (F1-Bot) | Vercel Cron Jobs → API Route → Anthropic Claude | — |

### Regra de estilos
O projeto usa **CSS custom class names definidas em `globals.css`**, não Tailwind utilities. Tailwind está importado no topo do arquivo mas serve apenas para a diretiva `@import`. Novos componentes devem seguir esse padrão.

Design tokens globais: `--black`, `--off-white`, `--amber`, `--amber-dim`, `--gray`, `--gray-mid`, `--gray-text`. Tipografia: `--serif` (Playfair Display), `--sans` (DM Sans), `--mono` (JetBrains Mono).

---

## Separação de responsabilidades

```
Server Components   → feed, post detail, thread de comentários, perfil
                      (SSR direto via createClient() do @supabase/ssr)

Client Components   → VoteButton, CommentEditor, PostEditor, TagPicker
                      (interatividade: clicks, forms, optimistic updates)

Server Actions      → createPost, createComment, toggleVote, moderatePost
                      (mutações; chamam supabase server client)

API Routes          → /api/auth/* (OAuth callback — já existe)
                      /api/bots/cron (Vercel Cron endpoint — F1-Bot)
                      /api/bots/run (executar persona manualmente — F1-Bot)

Middleware          → src/middleware.ts
                      refresh de sessão em todas as requests
                      proteção de /forum/novo e /admin/**
```

---

## Rotas (App Router)

```
/forum                        Feed público (SSR)
/forum/novo                   Criar post (requer auth)
/forum/[slug]                 Detalhe do post + thread (SSR)
/forum/tag/[tag]              Feed filtrado por tag (SSR)
/forum/u/[username]           Perfil público + posts do autor (SSR)

/admin/moderacao              Dashboard: posts pendentes + comments flagged
/admin/tags                   CRUD de tags
/admin/bots                   Gerenciar personas + logs de bot_runs (F1-Bot)

/login                        Google OAuth (já existe)
/api/auth/callback            OAuth callback (já existe)
/api/bots/cron                Endpoint do Vercel Cron Job (F1-Bot)
```

---

## Fluxo: criar e publicar um post

```
Usuário → /forum/novo
  → preenche PostEditor (título + markdown + tags + fricção UI)
  → Ctrl+Enter dispara Server Action createPost()
  → insere na tabela posts com status='pending'
  → redirect para /forum (msg: "Post enviado para curadoria")

Moderador → /admin/moderacao
  → vê post na fila "Pendentes"
  → clica Aprovar → Server Action moderatePost(id, 'approve')
  → posts.status = 'approved', approved_by, approved_at preenchidos
  → post aparece no feed público /forum
```

## Fluxo: votar (upvote)

```
Usuário clica ▲ no VoteButton (Client Component)
  → optimistic update: +1 no score local
  → Server Action toggleVote(entityType, entityId)
    → se voto existe: DELETE → trigger recalcula score → -1
    → se voto não existe: INSERT (value=1, weight=1, axis='karma')
                         → trigger recalcula score → +1
  → revalidatePath() para refletir no SSR (fallback)
```

## Fluxo: bot seed (Vercel Cron)

```
Vercel → POST /api/bots/cron  (schedule: "0 */6 * * *" — 4x/dia)
  → verifica posts sem comentário de bot nas últimas 6h
  → seleciona persona aleatória (perfil com is_bot=true)
  → chama Anthropic Claude API com system prompt da persona
  → exige saída JSON: { content_markdown, tension_score, opposing_argument }
  → insere na tabela comments como author_id=bot_profile_id
  → insere em bot_runs (audit trail)
  → registra tokens_used
```

---

## Segurança

### RLS (Row-Level Security)
Todas as tabelas têm RLS habilitado. Resumo das regras críticas:
- **posts**: leitura pública só de `status='approved' AND visibility='public'`
- **comments**: leitura pública só de `status='visible'`
- **votes**: qualquer autenticado pode votar; só o próprio pode remover
- **admin/moderacao**: apenas `role IN ('moderator','admin')`
- **bot_runs**: apenas `role='admin'`

### Service Role Key
O endpoint `/api/bots/cron` usa `SUPABASE_SERVICE_ROLE_KEY` para:
- Ignorar RLS ao inserir comentários de bots (`status='approved'` diretamente)
- Registrar `bot_runs`

Esse endpoint é protegido pelo header `Authorization: Bearer CRON_SECRET` verificado no middleware, e só Vercel o acessa.

### Variáveis de ambiente necessárias
```
NEXT_PUBLIC_SUPABASE_URL          # URL pública do projeto
NEXT_PUBLIC_SUPABASE_ANON_KEY     # Chave anon para cliente browser
SUPABASE_SERVICE_ROLE_KEY         # Chave service para API bots/cron
ANTHROPIC_API_KEY                 # Para o orquestrador de bots
CRON_SECRET                       # Secret para autorizar chamadas do Vercel Cron
```

---

## Estrutura de arquivos (novos)

```
src/
├── middleware.ts
├── lib/forum/
│   ├── types.ts           — tipos TS espelhando o schema
│   ├── queries.ts         — queries SSR (feed, post, comments)
│   ├── actions.ts         — Server Actions (createPost, vote, comment, moderate)
│   ├── markdown.ts        — render markdown seguro
│   ├── time.ts            — formatHumanTime(date)
│   └── bots/
│       ├── personas.ts    — definições das 10 personas
│       └── orchestrator.ts — lógica de escolha + chamada Claude API
├── components/forum/
│   ├── VoteButton.tsx     — [client]
│   ├── PostCard.tsx        — [server]
│   ├── CommentThread.tsx   — [server + client híbrido]
│   ├── CommentEditor.tsx   — [client, com fricção]
│   ├── PostEditor.tsx      — [client, com NormasSidebar]
│   ├── NormasSidebar.tsx   — [server]
│   ├── TagPicker.tsx       — [client]
│   └── HumanTime.tsx       — [client, hydration-safe]
└── app/
    ├── forum/
    │   ├── page.tsx        — feed (rewrite do mockup atual)
    │   ├── novo/page.tsx
    │   ├── [slug]/page.tsx
    │   ├── tag/[tag]/page.tsx
    │   └── u/[username]/page.tsx
    ├── admin/
    │   ├── moderacao/page.tsx
    │   ├── tags/page.tsx
    │   └── bots/page.tsx   — F1-Bot
    └── api/
        └── bots/
            ├── cron/route.ts    — Vercel Cron endpoint
            └── run/route.ts     — execução manual
```
