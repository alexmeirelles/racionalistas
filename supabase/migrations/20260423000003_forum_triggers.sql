-- ==============================================================
-- FORUM TRIGGERS — automação de agregados e lifecycle
-- 1. Auto-criar profile ao registrar usuário
-- 2. Recalcular scores de post/comment ao votar
-- 3. Recalcular karma do autor ao score mudar
-- 4. Atualizar comment_count no post
-- ==============================================================

-- ----------------------------------------------------------------
-- 1. Auto-criar PROFILE ao inserir em auth.users
-- ----------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  _base_username text;
  _username      text;
  _attempt       integer := 0;
begin
  -- Extrair prefixo do email, remover caracteres inválidos
  _base_username := lower(
    regexp_replace(split_part(new.email, '@', 1), '[^a-z0-9_]', '_', 'g')
  );
  _username := _base_username;

  -- Garantir unicidade adicionando sufixo aleatório se necessário
  while exists (select 1 from public.profiles where username = _username) loop
    _attempt := _attempt + 1;
    _username := _base_username || '_' || substr(gen_random_uuid()::text, 1, 6);
    if _attempt > 10 then
      _username := 'user_' || substr(gen_random_uuid()::text, 1, 8);
      exit;
    end if;
  end loop;

  insert into public.profiles (id, username, display_name, avatar_url)
  values (
    new.id,
    _username,
    coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      _base_username
    ),
    new.raw_user_meta_data->>'avatar_url'
  );

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ----------------------------------------------------------------
-- 2. Recalcular score da entidade (post ou comment) ao votar
-- ----------------------------------------------------------------
create or replace function public.update_entity_score()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  _entity_id   uuid;
  _entity_type text;
  _vote_axis   text;
  _karma_total integer;
  _agree_total integer;
begin
  -- Usar OLD em DELETE, NEW nos demais
  if TG_OP = 'DELETE' then
    _entity_id   := old.entity_id;
    _entity_type := old.entity_type;
    _vote_axis   := old.vote_axis;
  else
    _entity_id   := new.entity_id;
    _entity_type := new.entity_type;
    _vote_axis   := new.vote_axis;
  end if;

  -- Recalcular o eixo afetado
  if _entity_type = 'post' then
    if _vote_axis = 'karma' then
      select coalesce(sum(value * weight), 0)
      into _karma_total
      from public.votes
      where entity_type = 'post' and entity_id = _entity_id and vote_axis = 'karma';

      update public.posts set karma_score = _karma_total where id = _entity_id;

    elsif _vote_axis = 'agreement' then
      select coalesce(sum(value * weight), 0)
      into _agree_total
      from public.votes
      where entity_type = 'post' and entity_id = _entity_id and vote_axis = 'agreement';

      update public.posts set agreement_score = _agree_total where id = _entity_id;
    end if;

  elsif _entity_type = 'comment' then
    if _vote_axis = 'karma' then
      select coalesce(sum(value * weight), 0)
      into _karma_total
      from public.votes
      where entity_type = 'comment' and entity_id = _entity_id and vote_axis = 'karma';

      update public.comments set karma_score = _karma_total where id = _entity_id;

    elsif _vote_axis = 'agreement' then
      select coalesce(sum(value * weight), 0)
      into _agree_total
      from public.votes
      where entity_type = 'comment' and entity_id = _entity_id and vote_axis = 'agreement';

      update public.comments set agreement_score = _agree_total where id = _entity_id;
    end if;
  end if;

  return coalesce(new, old);
end;
$$;

drop trigger if exists on_vote_change on public.votes;
create trigger on_vote_change
  after insert or delete on public.votes
  for each row execute function public.update_entity_score();

-- ----------------------------------------------------------------
-- 3a. Recalcular karma do AUTOR quando post.karma_score muda
-- ----------------------------------------------------------------
create or replace function public.sync_author_karma_from_post()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.profiles
  set karma_score = (
    select coalesce(sum(s.k), 0)
    from (
      select karma_score as k
      from public.posts
      where author_id = new.author_id and status = 'approved'
      union all
      select karma_score as k
      from public.comments
      where author_id = new.author_id and status = 'visible'
    ) s
  )
  where id = new.author_id;
  return new;
end;
$$;

drop trigger if exists on_post_karma_update on public.posts;
create trigger on_post_karma_update
  after update of karma_score on public.posts
  for each row execute function public.sync_author_karma_from_post();

-- ----------------------------------------------------------------
-- 3b. Recalcular karma do AUTOR quando comment.karma_score muda
-- ----------------------------------------------------------------
create or replace function public.sync_author_karma_from_comment()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.profiles
  set karma_score = (
    select coalesce(sum(s.k), 0)
    from (
      select karma_score as k
      from public.posts
      where author_id = new.author_id and status = 'approved'
      union all
      select karma_score as k
      from public.comments
      where author_id = new.author_id and status = 'visible'
    ) s
  )
  where id = new.author_id;
  return new;
end;
$$;

drop trigger if exists on_comment_karma_update on public.comments;
create trigger on_comment_karma_update
  after update of karma_score on public.comments
  for each row execute function public.sync_author_karma_from_comment();

-- ----------------------------------------------------------------
-- 4. Atualizar comment_count no post ao inserir/remover comentário
-- ----------------------------------------------------------------
create or replace function public.sync_post_comment_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  _post_id uuid;
begin
  if TG_OP = 'DELETE' then
    _post_id := old.post_id;
  else
    _post_id := new.post_id;
  end if;

  update public.posts
  set comment_count = (
    select count(*)
    from public.comments
    where post_id = _post_id and status = 'visible'
  )
  where id = _post_id;

  return coalesce(new, old);
end;
$$;

drop trigger if exists on_comment_count_change on public.comments;
create trigger on_comment_count_change
  after insert or delete or update of status on public.comments
  for each row execute function public.sync_post_comment_count();

-- ----------------------------------------------------------------
-- 5. updated_at automático
-- ----------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists set_posts_updated_at on public.posts;
create trigger set_posts_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

drop trigger if exists set_comments_updated_at on public.comments;
create trigger set_comments_updated_at
  before update on public.comments
  for each row execute function public.set_updated_at();

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();
