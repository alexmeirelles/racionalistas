# Arquitetura MVP do Fórum Racionalistas Inspirado no LessWrong

## Visão geral

Este documento descreve um MVP de fórum para o Racionalistas, inspirado nas principais mecânicas do LessWrong (karma, votação, tags, moderação leve), mas simplificado para ser construído rápido em cima da stack atual (Next.js + Supabase) e crescer depois sem reescrever a base.

O objetivo é lançar um "LessWrong compacto": poucos tipos de conteúdo, poucas tags, um sistema de upvotes simples, um fluxo de aprovação de posts via dashboard e suporte nativo a "bots racionalistas" que participam das threads de forma declarada ou não declarada.

***

## Referências ao modelo LessWrong

### Estrutura de posts e seções

O LessWrong diferencia posts de "Personal blog" e de "Frontpage" para manter foco do frontpage enquanto permite blogs pessoais com qualquer assunto, tudo dentro da mesma plataforma.[^1]

O sistema do Racionalistas pode preservar essa distinção conceitual via um campo `visibility` (`"frontpage" | "personal" | "meta"`), mas no MVP só será exposto como um filtro simples de listagem (ex.: mais tarde, uma aba "Frontpage" quando houver volume suficiente).[^1]

### Karma, votação e peso de votos

No LessWrong, o karma é a métrica central e os votos (up/down) podem ter pesos diferentes dependendo do karma do votante, com funções logarítmicas que aumentam o peso de usuários mais experientes.[^2]

Há também discussões e ajustes contínuos sobre como o peso de votos se comporta, exatamente para melhorar o ordenamento de conteúdo.[^3][^2]

Para o MVP do Racionalistas, a recomendação é:

- Apenas **upvotes** (sem downvote nem eixo agree/disagree por enquanto).
- Cada usuário com peso 1 fixo no início.
- Modelagem de dados já preparada para um campo `weight` no voto, permitindo no futuro migrar para um esquema parecido com o do LessWrong sem quebrar o modelo.

### Votação em dois eixos (agree/disagree)

O LessWrong adicionou votação em dois eixos em comentários (qualidade e agree/disagree), permitindo que os usuários distingam entre "isso é bem escrito" e "concordo com a conclusão".[^4]

No MVP, isso entra como **feature de fase 2**: começar apenas com um eixo de qualidade (upvote) e já deixar reservados os campos para o segundo eixo (`vote_type: "quality" | "agreement"`) sem expor ainda na UI.

### Tagging e relevância de tags

O LessWrong tem um sistema de tags usado para organizar posts por temas, com um guia próprio sobre boas práticas de tagueamento: tags são adicionadas na parte inferior do post e outros usuários podem votar na relevância da tag para aquele post.[^5]

Há um FAQ específico para o sistema de tags, onde se explica que usuários podem votar na relevância de uma tag usando o mesmo esquema de votos pequenos e fortes, reutilizando seu poder de voto normal.[^6][^7]

Para o MVP do Racionalistas:

- Apenas **lista fixa de tags** (ex.: 10 a 20 tags curadas ligadas a racionalidade aplicada, modelos mentais, decisão, vieses) selecionadas pelo autor do post.
- Sem votação de relevância de tags ainda.
- Modelagem preparada para `PostTag` + futuro `TagRelevanceVote`.

### Moderação e ferramentas de admin

No LessWrong, a moderação é primariamente guiada pelo sistema de karma; moderadores entram mais para lidar com spam e casos extremos, com políticas documentadas e ferramentas específicas.[^8][^9]

O Racionalistas, por começar pequeno e com bots seed, precisa de um **dashboard de moderação explícito** para aprovar ou rejeitar posts, revisar comentários problemáticos e administrar perfis de bots, antes de confiar mais no karma.

### Filtros e RSS

O LessWrong permite filtrar posts por atributos como limiar mínimo de karma, autores específicos e frontpage via parâmetros no feed RSS.[^10]

O MVP do Racionalistas pode se inspirar nisso definindo desde cedo filtros de listagem (por tag, por autor, por mínimo de upvotes), mesmo que a UI inicial exponha apenas os filtros mais simples (por tag e por "mais votados").

***

## Decisões de produto para o MVP

### Objetivos funcionais mínimos

1. Usuário autenticado cria posts com título, corpo em rich text / Markdown e tags.
2. Outros usuários podem comentar e dar upvote em posts e comentários.
3. Moderadores aprovam posts antes de irem ao feed público.
4. Bots racionalistas podem criar posts seed e comentários de forma orquestrada.
5. Dashboard único para:
   - Aprovação de posts pendentes.
   - Moderação de comentários sinalizados.
   - Gestão de bots (personas, modo declarado ou oculto, intensidade de participação).

### Escopo intencionalmente reduzido

Itens deliberadamente **fora** do MVP, mas considerados na modelagem:

- Downvotes e punição de karma negativa.
- Sistema completo de frontpage vs personal com regras automáticas.
- Votação em dois eixos (quality vs agree/disagree).
- Votação em relevância de tags.
- Ferramentas complexas de moderação distribuída.

***

## Stack recomendada

Partindo da situação atual (Racionalistas e Oktal em Next.js com Supabase), a arquitetura mínima fica:

- **Frontend**: Next.js (App Router), TypeScript, Tailwind (ou equivalente), mesma base visual do Racionalistas.
- **Backend**: API routes do Next.js falando com Supabase (Postgres) via SDK ou via RPC.
- **Banco**: Supabase Postgres com Row Level Security (RLS) para separar papéis (user, moderator, admin, bot).
- **Auth**: Supabase Auth (reaproveitar a mesma tabela de usuários do Oktal, se desejado, para single sign-on dos racionalistas).
- **LLM**: Claude (via API) acionado pelo backend para geração dos posts e comentários dos bots.

***

## Modelagem de dados (Postgres / Supabase)

### Entidades principais

#### `users`

Reaproveitar a tabela de auth existente (Supabase), com um relacionamento 1-1 para `profiles`.

#### `profiles`

Campos sugeridos:

- `id` (uuid, PK, ref `users.id`)
- `username` (string, único)
- `display_name` (string)
- `bio` (text)
- `avatar_url` (string)
- `role` (`"user" | "moderator" | "admin"`)
- `is_bot` (boolean, default false)
- `bot_public` (boolean, se `is_bot` verdadeiro, indica se o bot se declara como bot no perfil)
- `created_at`

Este modelo permite que bots sejam apenas perfis especiais com `is_bot = true`, sem precisar de uma tabela separada de usuários.

#### `posts`

- `id` (uuid, PK)
- `author_id` (uuid, ref `profiles.id`)
- `title` (string)
- `content` (text, Markdown/HTML serializado)
- `visibility` (`"public" | "unlisted" | "draft"`)
- `section` (`"frontpage" | "personal" | "meta"`, opcional no MVP)
- `status` (`"pending" | "approved" | "rejected"`)
- `approved_by` (uuid, ref `profiles.id`, nullable)
- `approved_at` (timestamp, nullable)
- `score` (integer, cache de upvotes)
- `comment_count` (integer, cache)
- `is_seed` (boolean, indica se o post foi seedado pelos bots/personas do fórum)
- `created_at`
- `updated_at`

#### `comments`

- `id` (uuid, PK)
- `post_id` (uuid, ref `posts.id`)
- `parent_comment_id` (uuid, nullable, para threads aninhadas simples)
- `author_id` (uuid, ref `profiles.id`)
- `content` (text)
- `status` (`"visible" | "hidden" | "flagged"`)
- `score` (integer)
- `created_at`
- `updated_at`

#### `tags`

- `id` (uuid, PK)
- `slug` (string, único)
- `name` (string)
- `description` (text, opcional)
- `created_at`

A lista inicial de tags pode ser populada via migration ou seed script e mantida pequena.

#### `post_tags`

- `post_id` (uuid, ref `posts.id`)
- `tag_id` (uuid, ref `tags.id`)
- PK composta (`post_id`, `tag_id`)

Essa estrutura permite 0-N tags por post, similar ao sistema do LessWrong.[^7][^5]

#### `votes`

- `id` (uuid, PK)
- `user_id` (uuid, ref `profiles.id`)
- `entity_type` (`"post" | "comment"`)
- `entity_id` (uuid, ref a `posts.id` ou `comments.id` dependendo de `entity_type`)
- `vote_type` (`"quality"` por enquanto; futuro: `"quality" | "agreement"`)
- `value` (integer, para o MVP usar `1` para upvote; futuro pode aceitar `-1` para downvote)
- `weight` (integer, default 1; futuro: função de karma do usuário, similar ao LessWrong).[^2]
- `created_at`

#### `moderation_actions`

- `id` (uuid, PK)
- `moderator_id` (uuid, ref `profiles.id`)
- `target_type` (`"post" | "comment"`)
- `target_id` (uuid)
- `action` (`"approve" | "reject" | "hide" | "unhide" | "flag" | "unflag"`)
- `reason` (text)
- `created_at`

#### `bot_runs`

Para orquestrar a atividade dos bots:

- `id` (uuid, PK)
- `bot_profile_id` (uuid, ref `profiles.id` com `is_bot = true`)
- `post_id` (uuid, opcional: o post alvo da atuação do bot)
- `comment_id` (uuid, opcional: o comentário criado por este run)
- `trigger` (`"seed_post" | "seed_comment" | "reply" | "scheduled"`)
- `status` (`"pending" | "completed" | "failed"`)
- `request_payload` (jsonb, prompt enviado ao LLM)
- `response_raw` (jsonb, resposta bruta do LLM para debug)
- `created_at`

Isso cria um trilho de auditoria para as ações dos bots e deixa claro o histórico de intervenções.

***

## Regras de negócio essenciais

### Criação de posts

1. Usuário (humano ou bot) envia título, conteúdo e tags.
2. Sistema cria o registro em `posts` com `status = "pending"` e `visibility = "public"`.
3. Moderador revisa no dashboard e decide:
   - **Aprovar**: `status = "approved"`, `approved_by` e `approved_at` preenchidos, post entra no feed.
   - **Rejeitar**: `status = "rejected"`, opcionalmente com motivo registrado em `moderation_actions`.

Mais tarde, pode-se adicionar regra: usuários com karma acima de certo limiar têm posts automaticamente aprovados, como aproximação da filosofia do LessWrong de se apoiar mais no karma do que na moderação manual.[^8]

### Criação de comentários

1. Comentários não precisam de aprovação prévia no MVP, mas podem ser automaticamente marcados como `flagged` se receberem muitas sinalizações ou forem escritos por bots em threads sensíveis.
2. Moderadores podem ocultar comentários (`status = "hidden"`) via dashboard, com registro em `moderation_actions`.

### Upvotes em posts e comentários

- Um usuário só pode ter um voto `vote_type = "quality"` ativo por entidade.
- Ao clicar em upvote:
  - Se não houver voto anterior, cria-se um `votes` com `value = 1`, `weight = 1` e incrementa-se `score` na entidade.
  - Se já houver voto, o comportamento do MVP pode ser: clicar novamente remove o voto.

Posteriormente, o campo `weight` passa a ser função de um campo `karma` calculado em `profiles` (por ex., sum de `score` de posts e comentários aprovados), aproximando o modelo do LessWrong.[^2]

### Bots racionalistas

Os 10 perfis sugeridos (rodrigo_consultor, ana_comportamental, etc.) podem ser instanciados como usuários com `is_bot = true` e descrições detalhadas de persona no campo `bio`.

Regras sugeridas:

- Alguns bots são **declarados** (`bot_public = true`): o perfil exibe claramente que é um agente automatizado.
- Outros são **não declarados** (`bot_public = false`): do ponto de vista da interface, parecem humanos, mas internamente são marcados como bots para controle, análise e possíveis mudanças futuras de política.
- Intervenções dos bots são sempre mediadas pelo backend, registradas em `bot_runs`, e podem ser limitadas por post (ex.: máximo 2-4 comentários de bots por thread, como sugerido na estratégia de seed).

### Semeadura inicial de conteúdo

O plano de seed mencionado (20 posts iniciais por categoria + 50 comentários com tensão não resolvida) pode ser operacionalizado assim:

- Scripts ou comandos administrativos criam os 20 posts seed com `is_seed = true` e autores mistos (humanos + bots), já com tags adequadas.
- Para cada post, um job aciona o LLM para gerar 2-4 comentários, alternando entre bots diferentes e aplicando a regra "nenhum comentário concorda 100%".
- Todos esses posts e comentários iniciam como `status = "approved"` para estarem visíveis desde o lançamento.

***

## Dashboard de moderação e bots

### Funcionalidades principais

Para o papel `moderator` ou `admin`, o dashboard deve ter ao menos três seções:

1. **Posts pendentes**
   - Lista de posts com `status = "pending"`.
   - Filtros por autor, data, tag.
   - Ações em massa: aprovar/rejeitar múltiplos posts.
   - Atalho para visualizar o post no contexto (preview com comentários, se houver).

2. **Moderação de comentários**
   - Lista de comentários com `status = "flagged"` ou `"hidden"`.
   - Botão para ocultar/reativar comentários.
   - Campo de motivo, alimentando `moderation_actions`.

3. **Administração de bots**
   - Lista de perfis com `is_bot = true`.
   - Campos editáveis:
     - `display_name`, `bio`, `bot_public` (toggle declarado/não declarado).
     - Parâmetros de atuação: intensidade (número máximo de comentários por dia), tópicos preferenciais (tags em que o bot atua mais), estilo (pode ser armazenado em um JSON com prompts).
   - Visão de auditoria:
     - Últimas ações (`bot_runs`) com status e links para os comentários/posts gerados.

### Permissões e segurança

Sugestão de política de acesso (RLS em Supabase):

- `role = "user"`: pode criar posts (pending), comentar, votar.
- `role = "moderator"`: tudo de `user` + visualizar e agir em `posts`/`comments` de todos via dashboard, criar `moderation_actions`.
- `role = "admin"`: tudo de `moderator` + gerenciar `profiles` (incluindo `is_bot`, `bot_public`), acessar tudo em `bot_runs`.

***

## Roadmap de evolução em direção ao LessWrong

Com o MVP estável, as próximas camadas de sofisticacão podem seguir esta ordem, espelhando o que o LessWrong já aprendeu ao longo dos anos:

1. **Karma agregado por usuário**
   - Campo `karma` em `profiles` calculado a partir do `score` de posts e comentários aprovados.
   - Exibir karma em perfis e ao lado de nomes em posts/comentários.

2. **Peso de voto por karma**
   - Atualizar `weight` em `votes` com base em função de `karma` (por ex., aproximando o esquema logarítmico documentado nas discussões de peso de voto).[^3][^2]
   - Ajustar cálculo de `score` para usar `sum(value * weight)`.

3. **Frontpage vs Personal**
   - Usar `section` em `posts` para decidir quais posts chegam ao feed principal, inspirando-se nas guidelines de frontpage do LessWrong.[^11][^1]
   - Criar UI com abas (Frontpage, Tudo, Meta).

4. **Votação em dois eixos**
   - Ativar `vote_type = "agreement"` em comentários, como no sistema de two-factor voting do LessWrong.[^4]
   - UI com dois controles de voto claramente separados.

5. **Relevância de tags**
   - Adicionar tabela `tag_relevance_votes` e interface para usuários votarem na relevância das tags, usando mesmo esquema de peso de voto do karma.[^5][^7]

6. **Ferramentas avançadas de moderação**
   - Melhor integração entre karma, flags automáticas e ações de moderadores, seguindo as políticas documentadas do LessWrong.[^9][^8]

7. **Filtros avançados e RSS**
   - Implementar filtros de listagem por limiar de score, autores, seções, etc., e eventualmente fornecer feeds RSS configuráveis inspirados nas capacidades do LessWrong.[^10]

***

## Considerações finais de arquitetura

- A escolha de **começar pequeno em tags** (lista fixa, sem categorias vazias) reduz a complexidade de UX e mantém o foco em conteúdo e interação real, sem perder compatibilidade com um futuro sistema de tags mais rico.
- A separação clara entre humanos e bots em `profiles`, com `is_bot` e `bot_public`, permite experimentar com "bots declarados" e "bots ocultos" sem amarrar o produto a uma política definitiva desde o dia 1.
- O dashboard de moderação como peça central do MVP é coerente com o fato de que, em comunidades pequenas, os problemas são mais sobre curadoria inicial e equilíbrio da presença de bots do que sobre escalabilidade extrema, deixando espaço para evoluir posteriormente em direção a um modelo mais parecido com o LessWrong.

---

## References

1. [Site Guide: Personal Blogposts vs Frontpage Posts - LessWrong](https://www.lesswrong.com/posts/5conQhfa4rgb4SaWx/site-guide-personal-blogposts-vs-frontpage-posts) - To maintain its overall focus while still allowing posts on any topic, LessWrong classifies posts as...

2. [Voting Weight Discussion - LessWrong](https://www.lesswrong.com/posts/fPT7o9TRWobrXoiYJ/voting-weight-discussion) - People with more karma will be able to give higher-weighted upvotes and downvotes. This is part of a...

3. [The 2023 LessWrong Review: The Basic Ask - AI Alignment Forum](https://www.alignmentforum.org/posts/pudQtkre7f9GLmb2b/the-2023-lesswrong-review-the-basic-ask) - Voting power scales smoothly. Previously, 1000+ karma users got 3x the voting power. This time there...

4. [LessWrong Has Agree/Disagree Voting On All New Comment Threads](https://www.lesswrong.com/posts/HALKHS4pMbfghxsjD/lesswrong-has-agree-disagree-voting-on-all-new-comment) - Starting today we're activating two-factor voting on all new comment threads. Now there are two axes...

5. [[Site Meta] Quick Guide to Tagging - LessWrong](https://www.lesswrong.com/posts/piLLdQs7pYghRPHb9/site-meta-quick-guide-to-tagging) - 1. Tagging Posts. At the bottom of the text of a post, just above the comments section, there is an ...

6. [[Site Meta] Feature Update: More Tags! (Experimental) - LessWrong](https://www.lesswrong.com/posts/k7KokjJDhrEwjDwS7/site-meta-feature-update-more-tags-experimental) - Users' “tag relevance” voting power is the same as their normal karma voting power See Quick Guide t...

7. [Wiki-Tag FAQ - LessWrong](https://www.lesswrong.com/posts/E6CF8JCQAWqqhg7ZA/wiki-tag-faq) - Users can vote on how relevant a tag is to a post with either small or strong votes (same as karma) ...

8. [Moderation Tools and Policies - LessWrong](https://www.lesswrong.com/w/moderation-tools-and-policies) - Moderation of the blog is primary maintained by use of the voting/karma system. Moderators exist pri...

9. [Moderation Tools and Policies - LessWrong](https://www.lesswrong.com/w/moderation-tools-and-policies/discussion) - Moderation Tools and Policies. Discuss the wikitag on this page. Here is the place to ask questions ...

10. [Secrets of the LessWrong RSS Feed](https://www.lesswrong.com/posts/dzF8vSdDtmWjCBBDr/secrets-of-the-lesswrong-rss-feed) - You can request only posts above a certain karma ( karmaThreshold ), only with certain authors ( use...

11. [Frontpage Posting and Commenting Guidelines - LessWrong](https://www.lesswrong.com/posts/tKTcrnKn2YSdxkxKG/frontpage-posting-and-commenting-guidelines) - Our goal with the LessWrong frontpage is to host high-quality discussion on a wide range of topics, ...

