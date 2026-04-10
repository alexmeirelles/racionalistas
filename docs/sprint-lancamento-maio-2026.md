# Sprint de Lançamento: Oktal + Racionalistas
**Reunião de Planejamento Executivo — Conselho Conjunto OPB + xSquads**
**Data:** 10 de abril de 2026
**Prazo:** 1 de maio de 2026 (21 dias corridos)
**Contexto:** Dois produtos em paralelo. Vibe coding com IA como motor. Limitações são técnicas e de tokens, não de time ou dinheiro.

---

## 1. Abertura — OPB Master CEO

**OPB Master CEO:**
"Vinte e um dias. Tenho dois produtos para lançar. Um está vivo — o Oktal — e precisa de três ferramentas entregues. O outro não tem uma linha de código ainda — o Racionalistas — e precisa de identidade, conteúdo, fórum e vida artificial suficiente pra parecer habitado no dia um.

Antes de alguém me dizer que é impossível: estamos desenvolvendo com IA. Vibe coding. O que levaria um time de quatro pessoas dois meses, eu posso fazer em três semanas porque a IA gera o código e eu dirijo. A limitação real não é velocidade. É clareza. Decisão ruim à velocidade da IA cria dívida técnica à velocidade da IA. Então: vamos ser cirúrgicos. Nada que não esteja no escopo de 1 de maio entra na conversa de hoje."

---

## 2. CTO — Diagnóstico Técnico dos Dois Projetos

**CTO (C-Level Squad):**
"Deixa eu separar os dois mundos antes de falarmos de cronograma.

**Oktal — estado atual:**
A Ferramenta 1 (O Inversor) existe. O prompt está rodando, a interface existe. O problema é que ela entrega resultado genérico demais. Precisa de reformulação do prompt e de uma interface mais impactante, com o output visualizado em 'passo a passo da rota do fracasso'. Trabalho de um dia de prompt engineering + meio dia de UI.

As Ferramentas 2 e 3 são net-new:
- **Ferramenta 2 (Os Mentores):** 'Converse com Munger', 'Peça conselho ao Elon'. São personas AI — cada uma com um system prompt cirúrgico conectado à mesma API que o Oktal já usa (OpenRouter). A interface é um chat com avatar e nome. Do ponto de vista técnico, é uma instância do `SocraticChat.tsx` com o `system_prompt` trocado. Não é uma nova arquitetura, é uma variação do que já existe.
- **Ferramenta 3 (Auditor de Falácias):** Textarea de entrada, POST para uma rota `/api/audit`, resposta em formato de lista com a falácia identificada, o trecho grifado e a explicação. Novo endpoint, novo prompt, interface limpa.

**Racionalistas — estado atual:**
Repositório existe no GitHub, mas está vazio. Temos 21 dias para entregar:
1. Site/hub com identidade visual
2. Wiki de modelos mentais (conteúdo estático, mas rico)
3. Newsletter automatizada por IA
4. Fórum estilo LessWrong com bots inteligentes semeando posts

Isso é um Next.js novo. Stack idêntica ao Oktal para reutilizar padrões."

---

## 3. Hormozi — A Oferta e o que Cortar

**Alex Hormozi:**
"Antes do cronograma, eu preciso que vocês tomem uma decisão dolorosa: o que está no MVP e o que está na versão 1.1.

O MVP do Oktal para 1 de maio é:
- **Ferramenta 1 reformulada.** Ela já existe. Aperfeiçoa, relança, reposiciona.
- **Ferramenta 2 com 5 mentores**, não 20. Munger, Musk, Bezos, Taleb, Naval. Esses cinco cobrem os 13 modelos mentais. Os outros 15 mentores são conteúdo de atualização futura — são posts do Instagram, são newsletters, são razões pra pessoa voltar.
- **Ferramenta 3 funcional.** Paste de texto, output de falácias. Simples. Limpo. Viral.

O que cai do MVP do Oktal:
- Qualquer nova feature no canvas atual que não seja as três ferramentas.
- Melhorias no chat socrático existente. Congela. Não quebra o que funciona.

O MVP do Racionalistas para 1 de maio é:
- **Landing page + identidade.** Manifesto. Visualmente próximo ao LessWrong, mas com o DNA dark/teal do Oktal como irmão mais velho.
- **Wiki com 13 artigos** — um por modelo mental. Não enciclopédia. Uma página por modelo: definição, pergunta-gatilho, exemplo real. Conteúdo gerado por IA, revisado por você.
- **Fórum com seed de bots.** 10 usuários fictícios com personas calibradas. 20 posts iniciais. 50 comentários distribuídos. Parece vivo. É teatro de alta qualidade.
- **Newsletter.** Cadastro no formulário, entrega automatizada. Primeiro número sai no dia do lançamento.

O que cai do MVP do Racionalistas:
- Instagram não é produto. É canal de distribuição. Cria a conta, define a identidade, programa 7 posts para a semana do lançamento. Não precisa de nada técnico.
- Monetização do Racionalistas. Não existe ainda. Ele é topo de funil puro — aponta pro Oktal Pro."

---

## 4. Naval — A Lógica dos Dois Produtos

**Naval Ravikant:**
"Deixa eu nomear o que você está construindo, porque isso vai guiar todas as decisões de prioridade.

O **Oktal** é o produto. É onde o dinheiro entra. É onde a IA trabalha. É onde o usuário resolve um problema específico e paga por isso.

O **Racionalistas** é a mídia. É onde a atenção entra. É onde o usuário aprende que o problema existe e que existe uma linguagem para nomeá-lo. Quando ele descobre que já usa inversão sem saber, ou que está comprando por aversão à perda, ele quer a ferramenta que sistematiza isso. E a ferramenta tem nome: Oktal.

A relação entre os dois não é 'hub com links'. É **topo de funil com intenção educacional levando para conversão.** O Racionalistas ensina a linguagem. O Oktal vende o software para falar essa linguagem com mais precisão.

Implicação prática: o Racionalistas não precisa ser tecnicamente impressionante. Precisa ser intelectualmente respeitável. Um fórum feio mas com posts bons é melhor que um fórum bonito e vazio. Invista no conteúdo dos bots mais do que na UI do fórum."

---

## 5. Munger — O Alerta do Risco Oculto

**Charlie Munger:**
"Vou nomear o risco que ninguém está falando: **qualidade dos bots**.

Se os bots do fórum parecerem bots — respostas genéricas, vocabulário de ChatGPT sem personalidade, entusiasmo artificial — você não vai ter um fórum vazio. Vai ter um fórum que repele. Um usuário inteligente que chega, lê dois posts, percebe que é texto de IA mal calibrado, e vai embora com a impressão de que o Racionalistas é fake. E ele vai contar para as pessoas certas que é fake.

A solução: os bots precisam ser personas com história, opinião e até contradições. 'Rodrigo, 34 anos, ex-consultor, cético de startup-hype' posta diferente de 'Ana, economista comportamental, leitora de Kahneman'. Cada bot tem um system prompt de 500 palavras com personalidade, vocabulário proibido (sem 'excelente', 'ótimo ponto', 'concordo plenamente'), e temas que domina versus temas que ignora.

Essa é a diferença entre um fórum que parece habitado e um que parece uma apresentação de PowerPoint."

---

## 6. Data Squad — Arquitetura dos Bots do Fórum

**Data Squad:**
"Munger está certo. Aqui está o design das personas de seed:

**10 usuários fictícios — arquétipos:**

| Usuário | Perfil | Estilo de post |
|---------|--------|---------------|
| rodrigo_consultor | Ex-McKinsey, cético, 38 anos | Longo, referências a casos reais, nunca concorda fácil |
| ana_comportamental | Pesquisadora, leitora de Kahneman/Thaler | Técnica, cita papers, faz perguntas incômodas |
| mateus_founder | Fundou e vendeu uma startup pequena | Prático, quer aplicação imediata, desconfia de teoria |
| bia_investidora | Analista de VC, 29 anos | Quantitativa, pede números, usa o modelo de Valor Esperado |
| leo_engenheiro | Backend sênior que lê filosofia | Preciso, vai ao primeiro princípio, odeia jargão |
| carla_mkt | Growth hacker que virou cética do próprio campo | Autocrítica, usa o Auditor de Falácias contra si mesma |
| thiago_med | Médico, raciocínio diagnóstico apurado | Usa analogias clínicas, pede probabilidades |
| priya_design | Designer de produto, ex-Google | Pensa em sistemas, usa segunda ordem naturalmente |
| edu_economista | Mestre em economia, odeia autoajuda | Rigoroso, vai apontar quando um argumento é fraco |
| sofia_jornalista | Investigativa, checagem de fatos | Pergunta pela fonte, não aceita 'todo mundo sabe' |

**20 posts iniciais distribuídos por categoria:**
- 6 posts de abertura de debate ('A inversão resolve, mas quando ela paralisa?')
- 4 análises de decisões públicas reais com os modelos mentais
- 4 perguntas abertas sem resposta do autor ('Alguém consegue aplicar pré-mortem em decisões pessoais sem entrar em ansiedade?')
- 3 relatos de experiência pessoal aplicando as ferramentas
- 3 críticas a conceitos populares ('Por que 'fail fast' é um conselho perigoso sem contexto')

**50 comentários distribuídos:**
Cada post seed recebe 2-4 comentários de bots diferentes com perspectivas divergentes. Nenhum comentário concorda 100%. Toda thread tem pelo menos uma tensão não resolvida — isso força o usuário real a querer responder."

---

## 7. Movement Squad — Identidade do Racionalistas

**Líder do Movement Squad:**
"O Racionalistas precisa de um manifesto de abertura que seja memorável. Uma frase que o usuário compartilhe.

Proposta:

> **'Aqui, argumentos ruins não sobrevivem à noite.'**

Essa é a promessa de cultura. Não é 'seja bem-vindo'. É uma ameaça gentil: você vai ter que pensar de verdade.

A paleta visual: o DNA dark do Oktal, mas com tipografia serifada para remeter a livros e ensaios. LessWrong usa fonte sans-serif padrão e parece um blog de 2009. Nós podemos fazer melhor. **Manifold** ou **Lora** para títulos. Corpo em `font-mono` para os posts do fórum — remete a terminal, a código, a precisão.

Instagram: 7 posts para a semana do lançamento. Formato carrossel. Cada post é um modelo mental explicado em 5 slides. Sem motivação. Sem 'você pode'. Apenas: 'Inversão: como Munger pensa em fracasso antes de pensar em sucesso.' Arte minimalista, fundo escuro, tipografia grande."

---

## 8. COO — O Cronograma Real em 21 Dias

**COO (C-Level Squad):**
"Aqui está o cronograma. Sem gordura.

---

### SEMANA 1 — Alicerces (10–16 de abril)

**Oktal:**
- [ ] Refinamento do prompt da Ferramenta 1 (O Inversor)
- [ ] UI da Ferramenta 1 reformulada — output em passo a passo visual
- [ ] System prompts dos 5 mentores (Munger, Musk, Bezos, Taleb, Naval)
- [ ] Interface básica da Ferramenta 2 (chat com avatar + nome do mentor)
- [ ] Rota `/api/audit` + prompt do Auditor de Falácias

**Racionalistas:**
- [ ] Criar repositório Next.js com estrutura base
- [ ] Identidade visual: paleta, tipografia, componentes-base
- [ ] Landing page com manifesto
- [ ] Estrutura do fórum (schema de banco, rotas, auth básico)

---

### SEMANA 2 — Construção (17–23 de abril)

**Oktal:**
- [ ] UI da Ferramenta 2 completa (seletor de mentor, chat funcional)
- [ ] UI da Ferramenta 3 (Auditor de Falácias) — textarea, output com highlights
- [ ] Integração das 3 ferramentas na navegação do Oktal
- [ ] Testes de prompt em edge cases (problema vago, texto sem falácias, etc.)

**Racionalistas:**
- [ ] Wiki: 13 artigos gerados e revisados (um por modelo mental)
- [ ] Sistema de bots: 10 personas criadas com system prompts
- [ ] Script de seed: 20 posts + 50 comentários gerados e revisados
- [ ] Formulário de newsletter + integração de envio (Resend ou similar)
- [ ] Conteúdo do primeiro número da newsletter

---

### SEMANA 3 — Polimento e Lançamento (24 de abril – 1 de maio)

**Oktal:**
- [ ] Review geral das 3 ferramentas — prompts, UI, fluxo
- [ ] Atualizar landing page do Oktal mencionando as novas ferramentas
- [ ] Deploy em produção verificado

**Racionalistas:**
- [ ] Deploy em produção
- [ ] Seed do fórum executado (bots postam antes do lançamento público)
- [ ] 7 posts de Instagram criados e agendados
- [ ] Link entre Racionalistas → Oktal verificado e rastreável (UTM)
- [ ] Lançamento: 1 de maio, newsletter + post no fórum de abertura oficial

---

**Total de entregas: 28 itens checkáveis.**
**Densidade média: 4 itens/dia útil.**
Com vibe coding e IA gerando código e conteúdo, isso é executável."

---

## 9. Thiel — A Decisão mais Importante

**Peter Thiel:**
"Uma decisão que não foi tomada ainda e que vai determinar se o lançamento de 1 de maio tem impacto ou não: **quem vai ser o primeiro usuário real do Racionalistas?**

Não estou falando de tráfego. Estou falando de um ser humano específico — um founder, um investidor, um intelectual brasileiro com audiência — que você vai convidar pessoalmente antes do lançamento público. Que vai postar uma resposta real para um dos posts seed. Que vai transformar o fórum de 'teatro de alta qualidade' em 'começo de algo real'.

Se você lançar sem nenhum usuário real, o fórum será perfeito e inerte. Se você lançar com cinco pessoas reais que já postaram, o fórum tem gravidade.

Essa pessoa existe no seu network. Encontre ela antes de 24 de abril. Mande uma mensagem pessoal. Não um link. Uma mensagem: 'Estou construindo o que o LessWrong deveria ter sido no Brasil. Quero sua perspectiva antes de abrir pro público. Você topa ser um dos fundadores?'"

---

## 10. Veredicto Final — OPB Master CEO

**OPB Master CEO:**
"Decisões tomadas nessa reunião:

**Oktal:**
1. Ferramenta 1 (O Inversor) — refinar prompt e UI. Prazo: 14 de abril.
2. Ferramenta 2 (Os Mentores) — 5 personas no MVP: Munger, Musk, Bezos, Taleb, Naval. Prazo: 21 de abril.
3. Ferramenta 3 (Auditor de Falácias) — scan de texto. Prazo: 21 de abril.
4. Congelar todo o resto do Oktal até 1 de maio.

**Racionalistas:**
1. Stack: Next.js, mesmo padrão do Oktal.
2. Wiki: 13 artigos, um por modelo mental, gerados por IA e revisados. Prazo: 21 de abril.
3. Fórum: estrutura funcional + seed de 10 bots, 20 posts, 50 comentários. Prazo: 24 de abril.
4. Newsletter: primeiro número pronto no dia do lançamento.
5. Instagram: 7 posts agendados para a semana de lançamento. Não é produto, é canal.
6. Buscar 1 usuário real antes de 24 de abril. Ação de alta prioridade, não técnica.

**Relação entre os produtos:**
O Racionalistas aponta pro Oktal com links rastreados. O Racionalistas educa. O Oktal converte. Não são concorrentes. São estágios do mesmo funil.

**Data de lançamento: 1 de maio de 2026. Inabalável.**

Vamos começar."

---

*Reunião encerrada. Próximo passo: abrir o backlog e dar o primeiro commit no Racionalistas.*
