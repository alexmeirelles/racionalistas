-- ==============================================================
-- FORUM CORE — tabelas principais
-- Compatível com F2 (rate-limits), F3 (two-axis voting, karma
-- ponderado) e F4 (bots + MAS). Campos futuros ficam no schema
-- mas a UI do MVP expõe apenas um subconjunto.
-- ==============================================================

-- Extensions
create extension if not exists "pgcrypto";

-- ----------------------------------------------------------------
-- PROFILES (extends auth.users 1:1)
-- ----------------------------------------------------------------
create table if not exists public.profiles (
  id              uuid        primary key references auth.users(id) on delete cascade,
  username        text        unique not null,
  display_name    text,
  bio             text,
  avatar_url      text,

  -- role governa RLS e acesso ao admin dashboard
  role            text        not null default 'user'
                              check (role in ('user', 'moderator', 'admin', 'bot')),

  -- karma agregado (recalculado por trigger)
  karma_score     integer     not null default 0,

  -- bots: is_bot=true, bot_type define transparência ao leitor
  is_bot          boolean     not null default false,
  bot_type        text        check (bot_type in ('declared', 'stealth')),

  -- rate-limits (F2): contadores zerados por cron diário
  daily_comment_count integer not null default 0,
  daily_post_count    integer not null default 0,
  daily_reset_at      date    not null default current_date,

  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- TAGS (lista curada, admin-managed)
-- ----------------------------------------------------------------
create table if not exists public.tags (
  id          uuid    primary key default gen_random_uuid(),
  slug        text    unique not null,
  name        text    not null,
  description text,
  post_count  integer not null default 0,
  created_at  timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- POSTS
-- ----------------------------------------------------------------
create table if not exists public.posts (
  id          uuid    primary key default gen_random_uuid(),
  author_id   uuid    not null references public.profiles(id) on delete cascade,

  title       text    not null,
  slug        text    unique not null,
  body_md     text    not null,

  -- visibilidade e seção (section = F3: frontpage/personal/meta)
  visibility  text    not null default 'public'
                      check (visibility in ('public', 'unlisted', 'draft')),
  section     text    not null default 'personal'
                      check (section in ('frontpage', 'personal', 'meta')),

  -- moderação
  status      text    not null default 'pending'
                      check (status in ('pending', 'approved', 'rejected')),
  approved_by uuid    references public.profiles(id),
  approved_at timestamptz,

  -- scores (recalculados por trigger)
  karma_score     integer not null default 0,
  agreement_score integer not null default 0,  -- F3: two-axis
  comment_count   integer not null default 0,

  -- conteúdo seed do lançamento
  is_seed     boolean not null default false,

  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- POST_TAGS (junction)
-- ----------------------------------------------------------------
create table if not exists public.post_tags (
  post_id uuid not null references public.posts(id) on delete cascade,
  tag_id  uuid not null references public.tags(id) on delete cascade,
  primary key (post_id, tag_id)
);

-- ----------------------------------------------------------------
-- COMMENTS (adjacency list, depth 0-5)
-- ----------------------------------------------------------------
create table if not exists public.comments (
  id          uuid    primary key default gen_random_uuid(),
  post_id     uuid    not null references public.posts(id) on delete cascade,
  parent_id   uuid    references public.comments(id) on delete cascade,
  depth       integer not null default 0 check (depth between 0 and 5),
  author_id   uuid    not null references public.profiles(id) on delete cascade,

  body_md     text    not null,

  status      text    not null default 'visible'
                      check (status in ('visible', 'hidden', 'flagged')),

  karma_score     integer not null default 0,
  agreement_score integer not null default 0,  -- F3

  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- VOTES (unified; vote_axis: karma = atual; agreement = F3)
-- weight = 1 por padrão; F3 popula com tabela logarítmica.
-- Unique constraint garante 1 voto por eixo por entidade.
-- ----------------------------------------------------------------
create table if not exists public.votes (
  id          uuid    primary key default gen_random_uuid(),
  voter_id    uuid    not null references public.profiles(id) on delete cascade,

  entity_type text    not null check (entity_type in ('post', 'comment')),
  entity_id   uuid    not null,

  vote_axis   text    not null default 'karma'
                      check (vote_axis in ('karma', 'agreement')),
  value       integer not null check (value in (-1, 1)),
  weight      integer not null default 1,  -- F3: logarithmic weight
  strong      boolean not null default false,  -- F3: long-press

  created_at  timestamptz not null default now(),

  unique (voter_id, entity_type, entity_id, vote_axis)
);

-- ----------------------------------------------------------------
-- MODERATION_ACTIONS (log imutável)
-- ----------------------------------------------------------------
create table if not exists public.moderation_actions (
  id            uuid    primary key default gen_random_uuid(),
  moderator_id  uuid    not null references public.profiles(id),
  target_type   text    not null check (target_type in ('post', 'comment', 'profile')),
  target_id     uuid    not null,
  action        text    not null
                        check (action in ('approve','reject','hide','unhide','flag','unflag','warn','reeducate')),
  reason        text,
  created_at    timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- BOT_RUNS (audit trail para conteúdo gerado por LLM)
-- Usado pelo Vercel Cron Job (F4 MVP-Bot)
-- ----------------------------------------------------------------
create table if not exists public.bot_runs (
  id              uuid    primary key default gen_random_uuid(),
  bot_profile_id  uuid    not null references public.profiles(id),
  post_id         uuid    references public.posts(id),
  comment_id      uuid    references public.comments(id),
  trigger         text    not null
                          check (trigger in ('seed_post','seed_comment','reply','cron','manual')),
  status          text    not null default 'pending'
                          check (status in ('pending','completed','failed','skipped')),
  request_payload jsonb,
  response_raw    jsonb,
  tokens_used     integer,
  created_at      timestamptz not null default now()
);

-- ----------------------------------------------------------------
-- INDEXES
-- ----------------------------------------------------------------
create index if not exists idx_posts_status_created
  on public.posts(status, created_at desc);

create index if not exists idx_posts_karma
  on public.posts(karma_score desc)
  where status = 'approved';

create index if not exists idx_posts_author
  on public.posts(author_id);

create index if not exists idx_posts_slug
  on public.posts(slug);

create index if not exists idx_comments_post
  on public.comments(post_id, created_at);

create index if not exists idx_comments_parent
  on public.comments(parent_id);

create index if not exists idx_votes_entity
  on public.votes(entity_type, entity_id, vote_axis);

create index if not exists idx_bot_runs_bot
  on public.bot_runs(bot_profile_id, created_at desc);
