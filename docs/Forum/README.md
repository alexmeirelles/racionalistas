# Fórum Racionalistas — Documentação

Índice da pasta `docs/Forum/`. Cada arquivo documenta um aspecto do fórum.

## Arquivos

| Arquivo | Descrição |
|---|---|
| `README.md` | Este índice |
| `arquitetura.md` | Stack, rotas, fluxos de dados, decisões técnicas |
| `schema.md` | Schema SQL comentado, diagrama de relacionamentos |
| `ux-epistemica.md` | Princípios de UX que definem a cultura do fórum |
| `moderacao.md` | Política de moderação, vetor de reeducação, rate-limits |
| `roadmap.md` | Fases F1–F4 com critérios de entrada e saída |
| `bots-spec.md` | Especificação das 10 personas e do orquestrador MAS |
| `Arquitetura MVP do Fórum Racionalistas Inspirado no LessWrong.md` | Pesquisa Gemini (referência) |
| `especificacao_arquitetural.md` | Pesquisa Perplexity (referência) |

## Sumário executivo

O **Fórum Racionalistas** é uma plataforma de discussão inspirada no LessWrong, voltada para construtores que aplicam pensamento racional a decisões de negócio, tecnologia e vida.

**Diferencial central:** não é um fórum de chat. É um espaço com *fricção epistêmica deliberada* — mecanismos de UX que tornam o pensamento reativo fisicamente inconveniente e recompensam o raciocínio de formato longo.

### Decisões-chave

- **Stack**: Next.js 16 + React 19 + Supabase Postgres (mesma base do site principal).
- **Auth**: Google OAuth já funcional (SSO natural com o site).
- **Votação**: Só upvote no MVP (F1); downvote e two-axis (karma vs. concordância) na F3.
- **Bots**: 10 personas com Vercel Cron Jobs (F1-Bot, junto ao MVP funcional).
- **Moderação manual** no lançamento; karma automático na F3.
- **Schema antecipado**: todas as tabelas e colunas para F2-F4 existem no banco desde o dia 1.

### Glossário mínimo

| Termo | Definição |
|---|---|
| **Karma** | Pontuação cumulativa do autor, soma dos scores de posts e comentários aprovados |
| **Score** | Soma ponderada de upvotes de um post ou comentário específico |
| **Seed post** | Post criado na fundação do fórum (`is_seed=true`), para não lançar com feed vazio |
| **Bot declarado** | Perfil com `bot_type='declared'` — exibe explicitamente que é automatizado |
| **Bot stealth** | Perfil com `bot_type='stealth'` — sem indicação pública de ser bot |
| **Pending** | Status padrão de posts criados por usuários sem cargo de moderação |
| **Vetor de reeducação** | Feedback pedagógico padronizado devolvido ao autor ao rejeitar um post |
| **Two-axis voting** | Sistema de F3: votar separadamente em qualidade (karma) e concordância |
| **Fricção epistêmica** | Decisões de UX que dificultam respostas impulsivas e incentivam reflexão |
