# UX Epistêmica — Princípios de Design do Fórum

## Premissa central

Enquanto plataformas comerciais reduzem atrito para maximizar engajamento impulsivo, o Fórum Racionalistas opera no paradigma **inverso**: cada decisão de UX existe para dificultar o pensamento reativo e recompensar o raciocínio de formato longo.

Isso não é sobre ser difícil de usar. É sobre tornar *o caminho de menor resistência* compatível com o nível de discurso que queremos.

---

## Princípios ativos (MVP)

### 1. Enter cria parágrafo; Ctrl+Enter submete

A tecla Enter no editor de posts e comentários insere `\n\n` (novo parágrafo), não submete o formulário. Para publicar, o usuário precisa pressionar `Ctrl+Enter` (desktop) ou clicar explicitamente no botão.

**Por quê:** Elimina fisicamente a possibilidade de publicar uma única frase impulsiva. Força revisão mínima.

**Implementação:** `CommentEditor.tsx` e `PostEditor.tsx` interceptam `keydown` com `event.key === 'Enter'` e `!event.ctrlKey && !event.metaKey`.

---

### 2. Timestamps em horas/dias, nunca segundos

Datas exibidas como "há 3 horas", "há 2 dias", "12 abr 2026". Nunca "há 12 segundos" ou "há 1 minuto".

**Por quê:** Timestamps de segundos criam urgência artificial — a lógica de feed de rede social. Horas e dias comunicam que o conteúdo é para leitura atenta, não monitoramento em tempo real.

**Implementação:** `src/lib/forum/time.ts` com `formatHumanTime(date)`. Regra: abaixo de 1h → "há X horas" (arredonda para cima para a hora); abaixo de 48h → "há X horas" ou "há 1 dia"; acima → "há X dias" ou data absoluta.

---

### 3. Normas visíveis ao lado do editor

O `PostEditor` exibe, ao lado do campo de texto, um painel fixo com os 4 princípios epistêmicos:

> **Vise explicar, não persuadir.**
> Seu objetivo é clareza, não convencer. Se o argumento for sólido, ele convence sozinho.

> **Forneça modelos concretos e previsões falsificáveis.**
> Afirmações vagas são irrefutáveis e, portanto, inúteis. Diga o que mudaria sua opinião.

> **Rastreie e distinga inferências de observações.**
> "Vi que..." é diferente de "Concluo que...". Marque a fronteira entre dado e interpretação.

> **Princípio da Caridade: interprete o argumento do outro em sua versão mais forte.**
> Refute o melhor caso possível do argumento adversário, não uma versão fraca.

Estes aparecem como texto estático no painel direito durante a edição. No mobile, colapsa para um ícone expandível.

---

### 4. Editor Markdown (sem WYSIWYG)

O editor do MVP é uma `textarea` com preview ao lado. Sem botões de formatação, sem toolbar.

**Por quê:** Editores WYSIWYG incentivam formatação decorativa sem conteúdo. Markdown com preview separa estrutura de apresentação e lembra o autor que está escrevendo para ser lido, não para ser *visto*.

**Conversão:** `marked` + `isomorphic-dompurify` para sanitizar HTML gerado.

---

### 5. Sem contagem em tempo real

Scores de karma e contagem de comentários são renderizados via SSR (Server Components). Não atualizam em tempo real sem reload.

**Por quê:** Contadores em tempo real criam ansiedade de validação social. O conteúdo deve ser avaliado pelo mérito, não pela velocidade de acumulação de votos.

**Exceção:** O VoteButton usa optimistic update local apenas para o voto do usuário atual — não para o score total.

---

### 6. Sem "notificações" no MVP

Não há sistema de notificação push no MVP. O usuário sabe quando há respostas visitando o fórum.

**Por quê:** Notificações criam ciclos de verificação compulsiva. Para audiência 0, não há volume que justifique o custo de atenção.

---

## Princípios planejados (F2+)

### Rate-limits de novatos (F2)

Usuários novos (karma < 10) têm restrições:
- Máximo 3 comentários por dia
- Máximo 1 post por semana
- Todos os posts iniciam como `pending` (independente de karma)

Quando atingem o limite: mensagem explicativa, não erro genérico.
> *"Você atingiu o limite de comentários de hoje. Novos membros contribuem com qualidade, não volume. Volte amanhã."*

---

### Vetor de reeducação (F2)

Quando um moderador rejeita um post, pode selecionar um motivo pedagógico:

| Código | Mensagem ao autor |
|---|---|
| `principio_caridade` | "Sua postagem não aplica o Princípio da Caridade ao argumento que refuta." |
| `inferencia_observacao` | "Há inversão entre inferências e observações — apresenta conclusões como fatos." |
| `falsificabilidade` | "A afirmação central não é falsificável. Adicione uma condição que a refutaria." |
| `persuasao_sem_evidencia` | "O texto visa persuadir em vez de explicar. Remova o apelo emocional ou forneça evidências." |
| `generalizacao_indevida` | "Generalização sem base suficiente. Reduza o escopo da afirmação ou adicione qualificadores." |

O post retorna para `draft` com o código de reeducação salvo em `moderation_actions.reason`. O autor vê o feedback ao reabrir o rascunho.

---

### Two-axis voting: Karma vs. Concordância (F3)

Dois controles independentes em cada comentário:

```
▲ 12   │   ✓ 8 / ✗ 3
karma  │   concordância
```

- **Eixo karma (esquerda):** qualidade epistêmica, clareza, robustez. Afeta score e visibilidade.
- **Eixo concordância (direita):** alinhamento com a tese. **Não** afeta karma nem visibilidade.

Isso permite: "argumento excelente, mas discordo da conclusão" — upvote em karma, downvote em concordância.

**Schema já preparado:** colunas `agreement_score` em posts e comments; `vote_axis='agreement'` em votes.

---

## Anti-padrões que evitamos explicitamente

| Padrão | Por que evitar |
|---|---|
| Auto-play / notificação de "X pessoas viram seu post" | Ansiedade de validação, foco no receptor e não no argumento |
| Hot-take threads de uma linha | Enter=parágrafo elimina isso estruturalmente |
| Feed algorítmico de "para você" | Câmara de eco personalizada; usamos ordenação por karma/tempo |
| Reações (👍❤️😂) | Substituem argumento por sinalização emocional; só upvote |
| Menção/@reply em tempo real | Chat assíncrono via threads aninhadas; sem @notificações no MVP |
