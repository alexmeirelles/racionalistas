# Schema do Banco — Fórum Racionalistas

Arquivo de referência. O SQL declarativo está em `supabase/migrations/`.

## Diagrama de relacionamentos

```
auth.users (Supabase)
    │ 1:1 (trigger on_auth_user_created)
    ▼
profiles
    │ 1:N                │ 1:N (author)      │ 1:N (voter)
    ▼                    ▼                   ▼
  bot_runs           posts ◄─── post_tags ───► tags
                       │               (N:N)
                       │ 1:N
                       ▼
                    comments ──── 1:N ──► comments (self-referencing, depth 0-5)
                       │
                       └─── votes (entity_type='comment')
                    posts ─────── votes (entity_type='post')

  moderator/admin ──► moderation_actions (log imutável)
  bot ──────────────► bot_runs (audit trail)
```

---

## Tabelas

### `profiles`

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | uuid PK | Referência a `auth.users.id` |
| `username` | text UNIQUE | Criado automaticamente do email (trigger) |
| `display_name` | text | Nome para exibição (do metadata Google) |
| `bio` | text | Biografia; bots têm suas personas aqui |
| `avatar_url` | text | URL do avatar (Google foto inicial) |
| `role` | text | `user` `moderator` `admin` `bot` |
| `karma_score` | integer | Recalculado por trigger ao votar |
| `is_bot` | boolean | Flag de bot |
| `bot_type` | text | `declared` ou `stealth` (null se humano) |
| `daily_comment_count` | integer | Rate-limit: zerado por cron diário (F2) |
| `daily_post_count` | integer | Rate-limit (F2) |
| `daily_reset_at` | date | Data do último reset |

**MVP usa:** `username`, `display_name`, `avatar_url`, `role`, `karma_score`, `is_bot`, `bot_type`.

---

### `posts`

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | uuid PK | — |
| `author_id` | uuid FK | → profiles |
| `title` | text | — |
| `slug` | text UNIQUE | URL-friendly (gerado do título) |
| `body_md` | text | Conteúdo em Markdown |
| `visibility` | text | `public` `unlisted` `draft` |
| `section` | text | `frontpage` `personal` `meta` ← F3 expõe |
| `status` | text | `pending` `approved` `rejected` |
| `approved_by` | uuid FK | → profiles (moderador) |
| `approved_at` | timestamptz | — |
| `karma_score` | integer | Soma ponderada de upvotes (trigger) |
| `agreement_score` | integer | Soma de votos de concordância (F3) |
| `comment_count` | integer | Contagem de comentários visíveis (trigger) |
| `is_seed` | boolean | Posts do lançamento criados manualmente |

**Status flow:**
```
draft ──► pending ──► approved
                 └──► rejected
```
Usuários novos sempre criam `pending`. Admin/moderador podem criar diretamente `approved`.

---

### `comments`

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | uuid PK | — |
| `post_id` | uuid FK | → posts |
| `parent_id` | uuid FK | → comments (null = nível raiz) |
| `depth` | integer | 0 a 5 (reforçado por check constraint) |
| `author_id` | uuid FK | → profiles |
| `body_md` | text | Markdown |
| `status` | text | `visible` `hidden` `flagged` |
| `karma_score` | integer | Atualizado por trigger |
| `agreement_score` | integer | F3 |

**Limite de profundidade:** `depth ≤ 5`. UI não renderiza "Responder" em `depth=5`.

---

### `votes`

| Coluna | Tipo | Descrição |
|---|---|---|
| `voter_id` | uuid FK | → profiles |
| `entity_type` | text | `post` ou `comment` |
| `entity_id` | uuid | ID da entidade |
| `vote_axis` | text | `karma` (MVP) ou `agreement` (F3) |
| `value` | integer | `+1` (upvote) ou `-1` (downvote — F3) |
| `weight` | integer | Default 1; F3 usa tabela logarítmica |
| `strong` | boolean | Long-press vote (F3) |

**Unique constraint:** `(voter_id, entity_type, entity_id, vote_axis)` — 1 voto por eixo por entidade. Para trocar de +1 para -1: DELETE + INSERT.

### Tabela de peso de voto (F3)

Referência da tabela logarítmica (fonte: pesquisa Perplexity, baseada no LessWrong):

| Karma acumulado | Voto Normal | Voto Forte |
|---|---|---|
| 0 | 1 | 1 |
| 10 | 1 | 2 |
| 100 | 1 | 3 |
| 250 | 1 | 4 |
| 500 | 1 | 5 |
| 1.000 | 2 | 6 |
| 2.500 | 2 | 7 |
| 5.000 | 2 | 8 |
| 10.000+ | 2+ | 9+ |

---

### `moderation_actions`

Log imutável de todas as ações de moderação. Ações possíveis:
`approve`, `reject`, `hide`, `unhide`, `flag`, `unflag`, `warn`, `reeducate`.

---

### `bot_runs`

Audit trail de cada execução de bot. Campos `request_payload` e `response_raw` (jsonb) armazenam o prompt enviado à Claude API e a resposta bruta. `tokens_used` registra custo para controle de orçamento.

---

## Triggers

| Trigger | Tabela | Evento | Função |
|---|---|---|---|
| `on_auth_user_created` | `auth.users` | INSERT | Cria profile automaticamente |
| `on_vote_change` | `votes` | INSERT / DELETE | Recalcula `karma_score` / `agreement_score` da entidade |
| `on_post_karma_update` | `posts` | UPDATE karma_score | Recalcula `karma_score` do autor em `profiles` |
| `on_comment_karma_update` | `comments` | UPDATE karma_score | Idem |
| `on_comment_count_change` | `comments` | INSERT / DELETE / UPDATE status | Recalcula `comment_count` no post |
| `set_posts_updated_at` | `posts` | BEFORE UPDATE | Seta `updated_at = now()` |
| `set_comments_updated_at` | `comments` | BEFORE UPDATE | Idem |
| `set_profiles_updated_at` | `profiles` | BEFORE UPDATE | Idem |

---

## Tags iniciais (15)

`inversao`, `primeiros-principios`, `bayesianismo`, `vieses-cognitivos`, `teoria-dos-jogos`, `incentivos`, `sunk-cost`, `expected-value`, `segunda-ordem`, `caudas-gordas`, `lei-de-goodhart`, `assimetria-de-risco`, `falsificabilidade`, `principio-da-caridade`, `modelos-mentais`.

---

## Como aplicar as migrations

```bash
# Opção A — via Supabase CLI (requer login uma vez)
npx supabase login
npx supabase link --project-ref safssycyzlgpruthwebj
npx supabase db push

# Opção B — via Dashboard (sem CLI)
# https://supabase.com/dashboard/project/safssycyzlgpruthwebj/sql/new
# Colar na ordem: 000001, 000002, 000003, seed.sql
```
