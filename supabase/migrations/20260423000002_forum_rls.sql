-- ==============================================================
-- FORUM RLS — Row-Level Security policies
-- 4 papéis: user | moderator | admin | bot
-- Leitura pública onde faz sentido; escrita restrita ao autor.
-- ==============================================================

-- Helper: verifica role do usuário autenticado
create or replace function public.get_my_role()
returns text as $$
  select role from public.profiles where id = auth.uid()
$$ language sql stable security definer;

-- ----------------------------------------------------------------
-- PROFILES
-- ----------------------------------------------------------------
alter table public.profiles enable row level security;

-- leitura: todos vêem todos os perfis
create policy "profiles_select_all" on public.profiles
  for select using (true);

-- update: só o próprio dono edita (exceto role — admin usa SQL direto)
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id)
  with check (auth.uid() = id);

-- insert: só via trigger (handle_new_user) — bloqueia insert direto
create policy "profiles_insert_trigger_only" on public.profiles
  for insert with check (false);

-- admin pode fazer tudo (gerenciar bots, promover moderadores)
create policy "profiles_admin_all" on public.profiles
  for all using (public.get_my_role() = 'admin');

-- ----------------------------------------------------------------
-- TAGS
-- ----------------------------------------------------------------
alter table public.tags enable row level security;

create policy "tags_select_all" on public.tags for select using (true);

create policy "tags_admin_write" on public.tags
  for all using (public.get_my_role() = 'admin');

-- ----------------------------------------------------------------
-- POSTS
-- ----------------------------------------------------------------
alter table public.posts enable row level security;

-- leitura pública: apenas posts aprovados e visíveis
create policy "posts_select_public" on public.posts
  for select using (status = 'approved' and visibility = 'public');

-- autor vê os próprios posts (pending, draft, rejected)
create policy "posts_select_own" on public.posts
  for select using (auth.uid() = author_id);

-- moderador/admin/bot vêem tudo
create policy "posts_select_elevated" on public.posts
  for select using (public.get_my_role() in ('moderator', 'admin', 'bot'));

-- insert: usuário autenticado (status sempre 'pending')
create policy "posts_insert_auth" on public.posts
  for insert with check (auth.uid() = author_id and status = 'pending');

-- autor pode editar draft próprio apenas
create policy "posts_update_own_draft" on public.posts
  for update using (auth.uid() = author_id and status = 'draft')
  with check (auth.uid() = author_id);

-- moderador/admin pode atualizar qualquer post (approvar, rejeitar, etc.)
create policy "posts_update_mod" on public.posts
  for update using (public.get_my_role() in ('moderator', 'admin'));

-- bot pode inserir como se fosse usuário (status = 'pending' ou 'approved' se seed)
create policy "posts_insert_bot" on public.posts
  for insert with check (
    public.get_my_role() = 'bot' and auth.uid() = author_id
  );

-- ----------------------------------------------------------------
-- POST_TAGS
-- ----------------------------------------------------------------
alter table public.post_tags enable row level security;

create policy "post_tags_select_public" on public.post_tags
  for select using (
    exists (
      select 1 from public.posts p
      where p.id = post_id
        and (p.status = 'approved' or p.author_id = auth.uid())
    )
  );

create policy "post_tags_insert_author" on public.post_tags
  for insert with check (
    exists (
      select 1 from public.posts p
      where p.id = post_id and p.author_id = auth.uid()
    )
  );

create policy "post_tags_delete_author" on public.post_tags
  for delete using (
    exists (
      select 1 from public.posts p
      where p.id = post_id and p.author_id = auth.uid()
    )
  );

create policy "post_tags_mod_all" on public.post_tags
  for all using (public.get_my_role() in ('moderator', 'admin'));

-- ----------------------------------------------------------------
-- COMMENTS
-- ----------------------------------------------------------------
alter table public.comments enable row level security;

-- leitura pública: comentários visíveis em posts aprovados
create policy "comments_select_visible" on public.comments
  for select using (
    status = 'visible'
    and exists (
      select 1 from public.posts p
      where p.id = post_id and p.status = 'approved'
    )
  );

-- autor vê os próprios comentários
create policy "comments_select_own" on public.comments
  for select using (auth.uid() = author_id);

-- moderador/admin/bot vêem tudo
create policy "comments_select_elevated" on public.comments
  for select using (public.get_my_role() in ('moderator', 'admin', 'bot'));

-- insert: usuário autenticado em post aprovado
create policy "comments_insert_auth" on public.comments
  for insert with check (
    auth.uid() = author_id
    and exists (
      select 1 from public.posts p
      where p.id = post_id and p.status = 'approved'
    )
  );

-- moderador/admin pode atualizar status (hide, unhide, flag)
create policy "comments_update_mod" on public.comments
  for update using (public.get_my_role() in ('moderator', 'admin'));

-- ----------------------------------------------------------------
-- VOTES
-- ----------------------------------------------------------------
alter table public.votes enable row level security;

-- leitura pública (scores são públicos)
create policy "votes_select_all" on public.votes for select using (true);

-- insert: autenticado; só pode votar em nome próprio
create policy "votes_insert_auth" on public.votes
  for insert with check (auth.uid() = voter_id);

-- delete: só pode remover voto próprio
create policy "votes_delete_own" on public.votes
  for delete using (auth.uid() = voter_id);

-- ----------------------------------------------------------------
-- MODERATION_ACTIONS
-- ----------------------------------------------------------------
alter table public.moderation_actions enable row level security;

create policy "mod_actions_select" on public.moderation_actions
  for select using (public.get_my_role() in ('moderator', 'admin'));

create policy "mod_actions_insert" on public.moderation_actions
  for insert with check (
    public.get_my_role() in ('moderator', 'admin')
    and auth.uid() = moderator_id
  );

-- ----------------------------------------------------------------
-- BOT_RUNS
-- ----------------------------------------------------------------
alter table public.bot_runs enable row level security;

-- apenas admin vê o audit trail de bots
create policy "bot_runs_admin" on public.bot_runs
  for all using (public.get_my_role() = 'admin');

-- bots inserem os próprios runs
create policy "bot_runs_bot_insert" on public.bot_runs
  for insert with check (
    public.get_my_role() = 'bot'
    and auth.uid() = bot_profile_id
  );
