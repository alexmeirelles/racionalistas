# Política de Moderação — Fórum Racionalistas

## Filosofia

A moderação do fórum não existe para censurar opiniões; existe para **proteger o padrão epistêmico**.

Um post pode ser rejeitado não por ser errado, mas por ser mal construído: sem evidências, sem previsões falsificáveis, por confundir inferência com observação, ou por violar o Princípio da Caridade.

O objetivo é que o autor entenda por que e melhore. Moderação sem feedback pedagógico é apenas censura.

---

## Fluxo de moderação (MVP)

### Posts

```
Usuário cria post
    ↓
status = 'pending'  (invisível no feed público)
    ↓
Moderador/admin revisa em /admin/moderacao
    ↓
    ├── Aprovar   → status = 'approved', post entra no feed
    ├── Rejeitar  → status = 'rejected', vetor de reeducação enviado ao autor
    └── Reeducar  → status = 'rejected' + reason pedagógica, post volta para draft
```

**Exceção bots:** bots com `role='bot'` inserem posts com `status='approved'` diretamente (via service role key na API route de cron). Isso é por design — o conteúdo bot é controlado internamente.

**Exceção admin/moderador:** podem criar posts com `status='approved'` para conteúdo de abertura (is_seed=true).

### Comentários

Comentários são **visíveis imediatamente** após publicação (status='visible'). Moderação é reativa:

```
Usuário flagga comentário (F2: botão "Sinalizar" nos comentários)
    ↓
status = 'flagged'  (ainda visível, mas na fila do admin)
    ↓
Moderador revisa
    ↓
    ├── Ignorar → status volta para 'visible'
    └── Ocultar → status = 'hidden' (comentário some do feed)
```

---

## Dashboard de moderação (/admin/moderacao)

### Seção: Posts Pendentes
- Lista de posts com `status='pending'`, ordenados por data.
- Campos: título, autor, karma_score do autor, tags, prévia do corpo (200 chars).
- Ações: **Aprovar**, **Rejeitar**, **Reeducar** (abre modal com seleção de motivo).
- Filtros: por tag, por autor, por data.

### Seção: Comentários Sinalizados
- Lista de comentários com `status='flagged'`.
- Campos: corpo, autor, post de origem, quem sinalizou.
- Ações: **Ocultar**, **Ignorar (restaurar)**.

### Seção: Histórico
- Tabela `moderation_actions` com filtro por ação, moderador e data.

---

## Vetor de reeducação

Quando um post é rejeitado, o moderador pode selecionar um motivo pedagógico.
O autor vê a mensagem ao reabrir o rascunho.

| Código | Princípio violado | Mensagem ao autor |
|---|---|---|
| `principio_caridade` | Princípio da Caridade | "Sua postagem não aplica o Princípio da Caridade ao argumento que refuta. Reconstrua a posição adversária em sua versão mais forte antes de criticá-la." |
| `inferencia_observacao` | Distinção inferência/observação | "Há inversão entre inferências e observações — o texto apresenta conclusões como fatos estabelecidos. Marque claramente o que você observou vs. o que você concluiu." |
| `falsificabilidade` | Falsificabilidade | "A afirmação central não é falsificável: não há condição descrita que, se verdadeira, refutaria sua tese. Adicione essa condição." |
| `persuasao_sem_evidencia` | Explicar, não persuadir | "O texto visa persuadir em vez de explicar. Remova o apelo emocional ou substitua por evidências verificáveis." |
| `generalizacao_indevida` | Calibração probabilística | "Generalização sem base amostral suficiente. Reduza o escopo ('em alguns casos...', 'sob a condição X...') ou apresente os dados que sustentam a afirmação universal." |
| `baixa_qualidade` | Padrão mínimo | "O post não atingiu o padrão mínimo de qualidade do fórum. Desenvolva o argumento com mais profundidade antes de reenviar." |

Todos os motivos são salvos em `moderation_actions.reason` para auditoria.

---

## Rate-limits de novatos (F2)

Usuários com `karma_score < 10` (novatos):
- **3 comentários por dia** (`daily_comment_count` em profiles, zerado por cron)
- **1 post por semana** (`daily_post_count` com período semanal)
- Todos os posts sempre `pending`, independente do karma

Quando o usuário tenta ultrapassar o limite:
> *"Você atingiu seu limite de comentários por hoje. Novos membros constroem credibilidade pela qualidade, não pelo volume. Tente novamente amanhã."*

**Cron de reset (F2):** Vercel Cron `0 3 * * *` (3h da manhã BRT) chama endpoint que faz `UPDATE profiles SET daily_comment_count=0, daily_post_count=0, daily_reset_at=current_date WHERE daily_reset_at < current_date`.

---

## Papéis e permissões

| Papel | Pode | Não pode |
|---|---|---|
| `user` | Criar posts (pending), comentar, votar | Aprovar posts, ver admin |
| `moderator` | Tudo de `user` + aprovar/rejeitar posts, ocultar comments | Gerenciar bots, gerenciar usuários |
| `admin` | Tudo + gerenciar bots, promover usuários, ver bot_runs | — |
| `bot` | Inserir posts/comments com status direto | Ver admin dashboard |

**Como promover um usuário:**
No Supabase SQL Editor:
```sql
update public.profiles set role = 'moderator' where username = 'nome_do_usuario';
```

---

## O que NÃO é motivo de moderação

- Estar errado (desde que o argumento seja bem construído).
- Discordar de consensos (princípio da Caridade se aplica a todas as posições).
- Usar linguagem informal (desde que o argumento seja substantivo).
- Ser impopular (baixo karma não implica remoção).

A moderação nunca usa karma como critério de remoção. Um post com karma negativo permanece visível.
