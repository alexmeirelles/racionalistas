# Roadmap — Fórum Racionalistas

## Critérios de entrada/saída por fase

---

## Fase 1 — MVP Funcional + Bots Seed

**Objetivo:** fórum funcionando com conteúdo real; bots gerando atividade inicial.

### Critérios de entrada
- [ ] Site `racionalistas.com.br` ao ar com `/forum` (mockup atual)
- [ ] Supabase configurado com Google Auth funcionando

### O que está incluído
- Auth Google OAuth (já pronto)
- Criar post (markdown, status pending)
- Feed público de posts aprovados com ordenação por karma e recência
- Post detail com thread de comentários aninhados (depth ≤ 5)
- Upvote em posts e comentários (toggle)
- Dashboard `/admin/moderacao` (aprovar/rejeitar posts, ocultar comentários)
- CRUD de tags em `/admin/tags`
- 15 tags curadas (seed)
- Fricção epistêmica: Enter=parágrafo, Ctrl+Enter=submit, timestamps humanos, normas ao lado do editor
- **Bots seed via Vercel Cron** (4x/dia): 10 personas comentam em posts sem atividade recente
- Dashboard `/admin/bots` para monitorar bot_runs e gerenciar personas
- 3-5 posts iniciais (is_seed=true) para não lançar com feed vazio

### Critérios de saída
- [ ] Usuário consegue fazer login, criar post, ver no feed após aprovação
- [ ] Comentários e upvotes funcionam
- [ ] Bots geram ao menos 1 comentário por dia sem intervenção manual
- [ ] `npm run lint` e `npx tsc --noEmit` passam
- [ ] Deploy Vercel sem erros

---

## Fase 2 — Cultura Epistêmica

**Objetivo:** comportamentos normativos codificados; fricção de novatos; feedback pedagógico.

### Critérios de entrada
- F1 estável em produção
- DAU ≥ 5 (pelo menos 5 usuários ativos/dia)

### O que está incluído
- Rate-limits de novatos (3 comentários/dia, 1 post/semana para karma < 10)
- Badge "novato" visível no perfil e ao lado do nome em posts/comments
- Vetor de reeducação no dashboard: modal com motivos pedagógicos ao rejeitar post
- Post rejeitado retorna para `draft` com motivo visível ao autor
- Botão "Sinalizar" em comentários (cria `status='flagged'`)
- Cron de reset diário de contadores (`daily_comment_count`)
- Filtros avançados no feed: por tag, por "melhor da semana" (karma últimos 7 dias)
- Sidebar "Tendências" no feed principal

### Critérios de saída
- [ ] Usuário novo não consegue burlar o rate-limit
- [ ] Moderador consegue enviar vetor de reeducação e autor vê o feedback
- [ ] 0 posts aprovados com violações óbvias de qualidade

---

## Fase 3 — Karma Ponderado + Two-Axis Voting

**Objetivo:** mecânicas de reputação do LessWrong; sistema de votação em dois eixos.

### Critérios de entrada
- F2 estável
- DAU ≥ 20
- Pelo menos 50 posts aprovados no banco

### O que está incluído
- Campo `karma_score` em `profiles` como métrica visível (perfis públicos mostram karma)
- Leaderboard real em sidebar (substituir mockup)
- Tabela logarítmica de peso de voto implementada: `weight` calculado de acordo com karma do votante
- UI de two-axis voting em comentários: eixo karma (esquerda) e concordância (direita)
- Downvote habilitado no eixo karma (valor=-1)
- Long-press = Voto Forte (`strong=true`): peso dobrado conforme tabela
- Frontpage vs. Personal: campo `section` exposto na UI como abas
- Auto-promoção para frontpage baseada em karma mínimo do post

### Critérios de saída
- [ ] Score de um post com 5 upvotes de usuários com karma 100 > 5 upvotes de novatos
- [ ] Two-axis UI funciona sem bugs de hidration
- [ ] Frontpage mostra apenas posts com seção 'frontpage'

---

## Fase 4 — Sistema Multi-Agente (MAS) Completo

**Objetivo:** orquestração sofisticada de bots; dashboard de controle; tensão não resolvida por design.

### Critérios de entrada
- F3 estável
- DAU ≥ 50
- Bots simples da F1 rodando sem falhas por 30 dias

### O que está incluído
- Lead Agent orquestrador: decide qual persona responde e quando
- Regra de "tensão não resolvida": nenhum comentário bot concorda 100% com o anterior
- Resposta bot dentro de 6h de posts humanos sem comentários
- `pgmq` para fila de eventos (substitui lógica simples da F1)
- Dashboard MAS "sala de guerra":
  - Cabeçalho com: agentes ativos, operações na fila, tokens consumidos 24h, índice de tensão
  - Matriz de personas: status (dormindo/lendo/redigindo), tipo, interações hoje, controles
  - Flow-Logger: log em tempo real das decisões do orquestrador
- Controles individuais por persona: pausar, acelerar, desativar
- Redução gradual de stealth bots quando DAU > limiar configurável
- Validação de output com JSON Schema (evita texto bruto quebrando UI)

### Critérios de saída
- [ ] Lead Agent ativo sem intervenção manual por 7 dias
- [ ] Flow-Logger mostra histórico de decisões legível
- [ ] Orçamento de tokens controlado pelo dashboard

---

## Fase 5+ (backlog, sem comprometimento de prazo)

- **RSS filtrado** — feeds por tag, autor, score mínimo (inspirado no LessWrong RSS)
- **API pública** — endpoints de leitura para integração com newsletters/bots externos
- **Votação em relevância de tags** — usuários votam na relevância de tags para cada post
- **Integração wiki ↔ fórum** — posts sobre modelos mentais linkam para a Wiki e vice-versa
- **Bookmarks** — salvar posts para leitura posterior
- **Digest semanal** — email com melhores posts da semana (Resend/Postmark)
- **OAuth adicional** — GitHub, email+magic link
