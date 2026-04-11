const fs = require('fs');

const input = `Os 40 Modelos Mentais de Alto Impacto (A Caixa de Ferramentas)

Bloco 1: Psicologia e Vieses (As armadilhas da mente)

1. Incentivos (Super-resposta)
Definição: Pessoas agem por recompensas e evitam punições (não se importam com suas boas intenções).
Exemplo: Agências sugerem campanhas caras apenas porque ganham comissão sobre o orçamento investido.
Exercício: Antes de pedir algo a um cliente ou sócio, mostre primeiro e de forma clara o que ele ganha com isso.

2. Prova Social
Definição: O instinto de seguir a manada quando se está na dúvida.
Exemplo: Colocar depoimentos em vídeo na landing page do seu curso de IA converte mais que prometer mundos e fundos sozinho.
Exercício: Adicione um bloco de avaliações (Quem já usou) na sua oferta principal hoje.

3. Reciprocidade
Definição: A urgência psicológica em retribuir favores recebidos.
Exemplo: Entregar um diagnóstico gratuito e valioso de Holding Familiar antes de tentar vender a consultoria.
Exercício: Resolva um problema pequeno de um prospect no WhatsApp de graça, sem pedir nada em troca.

4. Aversão à Perda
Definição: A dor de perder dinheiro dói o dobro do prazer de ganhá-lo.
Exemplo: O anúncio "Veja o dinheiro que sua empresa queima ao ignorar a IA" tem taxa de clique maior que "Ganhe mais dinheiro com IA".
Exercício: Reformule uma headline focando estritamente no que o cliente perde se não te contratar.

5. Viés de Autoridade
Definição: A tendência humana de não questionar quem parece especialista.
Exemplo: O cliente aceita taxas ruins porque o gerente do banco está de terno e em uma sala de vidro.
Exercício: Remova o jargão técnico da sua próxima reunião e avalie se o cliente entende o valor real do seu serviço.

6. Efeito Lollapalooza
Definição: Múltiplos vieses empurrando na mesma direção para gerar uma decisão extrema.
Exemplo: Um leilão mistura escassez, urgência e prova social, forçando lances irracionais.
Exercício: Combine escassez (bônus some hoje) com prova social (x pessoas já compraram) na abertura do carrinho.

7. Viés de Confirmação
Definição: Buscar apenas informações que confirmem aquilo que você já decidiu acreditar.
Exemplo: O trader que só lê fóruns otimistas sobre a moeda que comprou e ignora os sinais gráficos de queda.
Exercício: Liste agora 3 motivos sólidos pelos quais seu principal projeto atual pode fracassar.

8. Viés de Disponibilidade
Definição: Acreditar que algo é frequente ou provável só porque é fácil de lembrar.
Exemplo: Achar que todo negócio digital fatura milhões rápido porque seu feed do Instagram só mostra os vencedores.
Exercício: Busque os números reais do mercado (taxa média de conversão do nicho) em vez de focar nos prints de gurus.

9. Inveja (Envy)
Definição: Para Munger, a inveja, não a ganância, é o motor oculto do mundo.
Exemplo: Pessoas trocam de carro para sinalizar status aos vizinhos, não por eficiência.
Exercício: Identifique a última compra cara que você fez apenas para impressionar outras pessoas.

10. Evitação de Inconsistência
Definição: A dificuldade extrema em mudar de ideia após assumir uma postura pública.
Exemplo: O empresário que continua queimando caixa num produto ruim porque foi ele quem teve a ideia.
Exercício: Admita publicamente um erro ou tese errada sua para a equipe nesta semana.

Bloco 2: Pensamento Crítico (Seu sistema operacional)

11. Inversão
Definição: Pensar em como fracassar (para evitar) em vez de pensar em como ter sucesso.
Exemplo: Para ficar rico, o passo 1 é listar e fugir de apostas estúpidas que levam à ruína.
Exercício: Liste 5 atitudes que quebrariam seu negócio digital em 6 meses, e crie barreiras contra elas.

12. Pensamento de Segunda Ordem
Definição: Perguntar sempre (E depois disso, o que acontece?).
Exemplo: Demitir o suporte gera economia hoje (1ª ordem), mas mancha sua marca no ReclameAqui amanhã (2ª ordem).
Exercício: Antes da sua próxima decisão grande, anote as consequências esperadas daqui a 1 semana e daqui a 1 ano.

13. Custo de Oportunidade
Definição: O valor real de uma escolha é aquilo que você precisou sacrificar para fazê-la.
Exemplo: Passar 4 horas formatando um PDF custa as 4 horas que você poderia gastar fechando contratos High Ticket.
Exercício: Defina o preço financeiro da sua hora e delegue qualquer tarefa operacional que custe menos que isso.

14. Margem de Segurança
Definição: Deixar espaço para o erro sistêmico.
Exemplo: Só colocar em testes de campanhas novas do Meta um orçamento que, se perdido 100%, não afeta sua vida pessoal.
Exercício: Quando um cliente perguntar o prazo de entrega, calcule o ideal e adicione 20% de "gordura".

15. Círculo de Competência
Definição: Operar apenas dentro do perímetro do que você entende profundamente.
Exemplo: Focar em marketing direto, automações de IA e consultorias, evitando investir na nova criptomoeda exótica do dia.
Exercício: Escreva no bloco de notas 3 áreas que você domina e 3 áreas que você precisa ignorar porque não entende.

16. Navalha de Occam
Definição: Entre duas explicações para o mesmo problema, a mais simples costuma ser a correta.
Exemplo: Se o lead do WhatsApp sumiu, ele não foi bloqueado pela operadora, a oferta apenas não foi boa o suficiente.
Exercício: Corte um passo desnecessário do seu funil de vendas ativo.

17. Navalha de Hanlon
Definição: Nunca atribua à malícia o que pode ser explicado pela incompetência.
Exemplo: Seu parceiro não te copiou no e-mail para te sabotar, ele apenas estava desatento.
Exercício: Na próxima falha do fornecedor, assuma confusão e exija um processo melhor, não fique ofendido.

18. O Mapa Não é o Território
Definição: Planilhas e planos teóricos não sobrevivem perfeitamente ao contato com a realidade.
Exemplo: O ROAS projetado de 10x na planilha despenca quando os clientes reais não entendem o criativo do anúncio.
Exercício: Coloque o MVP rodando no mercado com verba mínima em vez de passar o mês refinando o planejamento.

19. A Síndrome do Homem com o Martelo
Definição: Para quem só tem um martelo, qualquer problema parece prego.
Exemplo: Um programador acha que falta de vendas se resolve refazendo código, enquanto o problema é a falta de tráfego.
Exercício: Quando empacar em um gargalo, peça opinião a alguém de um mercado completamente diferente do seu.

20. Pensamento por Primeiros Princípios
Definição: Desconstruir um problema até seus blocos fundamentais de verdade indiscutível.
Exemplo: Em vez de cobrar igual ao concorrente pelo curso, calcule o custo do servidor, tráfego, seu tempo e construa o preço da base para cima.
Exercício: Pegue um (fato) aceito do seu mercado (Ex: preciso postar todo dia) e pergunte o porquê até chegar na base.

Bloco 3: Economia, Negócios e Escala (Lendo o mercado)

21. Vantagem Competitiva (Moat)
Definição: O fosso intransponível que protege seu lucro dos competidores.
Exemplo: A burocracia complexa que você resolve para as famílias ricas cria uma barreira gigante para amadores tentarem roubar o cliente.
Exercício: Liste um diferencial do seu serviço que seja absurdamente caro ou doloroso para um rival tentar copiar.

22. Economia de Escala
Definição: O custo por unidade despenca à medida que o volume aumenta.
Exemplo: Gravar as aulas e hospedar uma plataforma de IA tem o mesmo custo fixo para 10 ou 1.000 alunos.
Exercício: Aloque 20% do seu tempo de hoje criando um ativo de informação que possa ser vendido infinitas vezes.

23. Efeitos de Rede
Definição: O produto ganha mais valor para o usuário a cada novo usuário que entra.
Exemplo: Um grupo ou comunidade de alunos onde o networking entre eles vira o produto principal.
Exercício: Crie um ambiente onde seus clientes interajam entre si e gerem dados ou negócios uns para os outros.

24. Custos de Troca (Switching Costs)
Definição: A dor de cabeça de mudar de fornecedor.
Exemplo: Empresas não trocam sistemas de CRM ruins porque o custo de treinar 50 funcionários de novo é altíssimo.
Exercício: Faça seu serviço ou consultoria se conectar intimamente à rotina operacional diária do cliente.

25. Alavancagem
Definição: Usar Código, Capital, Mídia ou Mão de obra para multiplicar seus resultados com o mesmo esforço de base.
Exemplo: Um vídeo curto ou automação de disparo operando 24 horas por dia por você é alavancagem de mídia/código.
Exercício: Identifique uma tarefa que consome 1h por dia e automatize-a hoje mesmo usando IA.

26. Destruição Criativa
Definição: Inovações de base eliminam mercados velhos para criar novos.
Exemplo: Agências de tráfego braçal perdendo espaço para sistemas de otimização nativos e IAs focadas em criativos.
Exercício: Defina hoje qual frente do seu modelo de negócios vai desaparecer com a IA, e seja o primeiro a fazer a transição.

27. Gargalo (Teoria das Restrições)
Definição: O processo mais lento dita a velocidade máxima da empresa inteira.
Exemplo: Injetar 5 mil reais no tráfego não serve de nada se você tem apenas uma pessoa fechando vendas no WhatsApp.
Exercício: Encontre a etapa exata onde seus clientes abandonam o funil e melhore exclusivamente ela antes de escalar.

28. Seleção Adversa
Definição: Assimetrias de regras atraem o tipo exato de pessoa que você não quer.
Exemplo: Oferecer 30 dias de teste gratuito num serviço de luxo só atrai curiosos sem dinheiro e entope o suporte.
Exercício: Crie um filtro (como um formulário ou aumento de preço inicial) para remover clientes sugadores da sua agenda.

29. Oferta e Demanda
Definição: O preço sobe na escassez e desaba na abundância.
Exemplo: CPM de anúncios subindo estratosfericamente nas semanas de Black Friday devido à alta procura de empresas por atenção.
Exercício: Crie escassez verídica de tempo ou assentos para o seu próximo produto e aumente o preço.

30. Agente-Principal (Problema de Agência)
Definição: Quem gerencia as operações tem incentivos conflitantes com os interesses de quem é o dono do dinheiro.
Exemplo: O gestor terceirizado torra a verba para mostrar (alcance), enquanto você, o dono, só quer (lucro).
Exercício: Alinhe financeiramente a sua equipe (ou você com os clientes de holding) atrelando bônus diretamente aos resultados finais.

Bloco 4: Matemática e Probabilidade (Calculando a física do jogo)

31. Juros Compostos (Compounding)
Definição: Crescimento exponencial contínuo; funciona para dinheiro, hábitos e conhecimento.
Exemplo: Aprender um pouco de prompt engineering todo dia te dá capacidade de montar produtos complexos em 6 meses que novatos não alcançam.
Exercício: Escolha um único hábito intelectual focado de 20 minutos diários e não quebre a rotina nesta semana.

32. Valor Esperado (EV)
Definição: O balanço matemático entre a probabilidade de acerto (vezes o prêmio) e a probabilidade de erro (vezes o custo).
Exemplo: Investir R$ 200 para testar um funil com 10% de chance de ganhar um contrato anual de R$ 10.000 é um EV extremamente alto.
Exercício: Antes de comprar tráfego amanhã, verifique mentalmente se a pior hipótese custa pouco e a melhor hipótese paga todo o risco.

33. Assimetria de Risco
Definição: Estruturas onde você perde muito pouco se der errado, mas o teto de ganhos é incalculável.
Exemplo: Lançar um infoproduto gravado. Seu custo foi apenas o tempo de fim de semana, mas pode escalar infinitamente.
Exercício: Mate hoje qualquer projeto na sua gaveta que consuma seu tempo de forma fixa (alto custo) com teto baixo de faturamento.

34. Regressão à Média
Definição: Após resultados atípicos ou extremos, o sistema tende a voltar para a média histórica.
Exemplo: O ROAS estúpido de 15x de segunda-feira fatalmente vai cair para 3x até o domingo.
Exercício: Não mude completamente sua estratégia comercial baseando-se em apenas um pico isolado (para cima ou para baixo).

35. Lei dos Grandes Números
Definição: Padrões sólidos exigem amostragem volumosa, pois testes pequenos engolem flutuações.
Exemplo: Desligar um anúncio porque os 5 primeiros cliques não compraram, jogando fora o potencial de otimização de campanha.
Exercício: Espere pelo menos bater um número estatisticamente relevante (Ex: 100 leads) antes de decretar o fim de uma estratégia.

36. Caudas Gordas (Cisnes Negros)
Definição: A vida real não é uma curva normal perfeita; eventos imprevisíveis causam a maior parte da destruição ou da riqueza.
Exemplo: Mudanças súbitas e devastadoras no algoritmo de entrega do Instagram que apagam negócios da noite para o dia.
Exercício: Olhe para o seu caixa hoje. Ele sobrevive a 3 meses de interrupção forçada se sua principal fonte de aquisição quebrar?

37. Redundância (Backups)
Definição: Camadas de segurança parciais para que a falha de uma peça não derrube o sistema inteiro.
Exemplo: Estruturas de contingência com múltiplos BMs, perfis e contas de anúncios caso o Meta bloqueie um administrador.
Exercício: Faça backup offline do contato dos seus clientes principais e dos dados financeiros mais críticos da holding.

38. Massa Crítica (Tipping Point)
Definição: O limite exato de energia injetada onde a mudança ganha ritmo automático.
Exemplo: Um infoproduto não traciona até conseguir dezenas de depoimentos base; depois que a prova social se forma, ele se vende sozinho.
Exercício: Insista brutalmente no operacional não escalável (como vendas via 1 a 1) até juntar avaliações suficientes para a máquina rodar sozinha.

39. Sistemas Complexos (Não-linearidade)
Definição: Mais força aplicada nem sempre gera resultados proporcionais na ponta.
Exemplo: Injetar o triplo de dinheiro no mesmo criativo e no mesmo público não te dará o triplo de vendas (satura a frequência).
Exercício: Pare de socar recursos em um processo desgastado. Gaste o tempo pivotando a oferta criativa.

40. Ciclos de Feedback (Loops)
Definição: Processos onde a saída anterior é utilizada como a entrada seguinte do sistema.
Exemplo: O Pixel de inteligência aprendendo quem compra (Feedback Positivo) para buscar leads idênticos cada vez mais qualificados.
Exercício: Bloqueie na agenda de sexta-feira 15 minutos focados exclusivamente em revisão de métricas para definir o loop tático da semana seguinte.`;

const toSlug = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const parseBlocks = () => {
    const lines = input.split("\\n");
    const models = [];
    let currentModel = null;
    let blockTopic = "";
    
    // Some basic colors and icons to assign
    const colors = ["#FF6B6B", "#4ECDC4", "#F59E0B", "#FFE66D", "#A78BFA", "#F97316", "#38BDF8", "#E879F9", "#94A3B8", "#34D399"];
    const icons = ["↻", "◇", "⊖", "◌", "⟁", "◎", "⟋", "⊘", "◈", "⊛", "⊙", "⊕", "⊟", "⊞", "☽", "⚑", "✧", "Δ", "∇", "⋈"];

    for (const line of lines) {
        if (line.startsWith("Bloco")) {
            blockTopic = line.split(":")[1].trim();
            continue;
        }
        
        const matchTitle = line.match(/^(\\d+)\\.\\s+(.+)$/);
        if (matchTitle) {
            if (currentModel) models.push(currentModel);
            const name = matchTitle[2].trim();
            
            // Randomly assign color and icon since not specified
            const color = colors[models.length % colors.length];
            const icon = icons[models.length % icons.length];
            
            currentModel = {
                id: toSlug(name),
                slug: toSlug(name),
                name: name,
                thinker: "Estratégia Coletiva", // Fallback thinker
                color: color,
                icon: icon,
                definition: "",
                detailedContent: [],
                triggerQuestion: "",
                example: ""
            };
            continue;
        }

        if (currentModel) {
            if (line.startsWith("Definição:")) {
                currentModel.definition = line.replace("Definição:", "").trim();
            } else if (line.startsWith("Exemplo:")) {
                currentModel.example = line.replace("Exemplo:", "").trim();
            } else if (line.startsWith("Exercício:")) {
                currentModel.triggerQuestion = line.replace("Exercício:", "").trim();
            }
            // we could infer some specific thinkers if we hardcode rules, but "Estratégia Coletiva" is fine
            // Wait, maybe we change labels to match the fields
            // "Exercício: " => triggerQuestion is conceptually different but used in the UI.
        }
    }
    if (currentModel) models.push(currentModel);
    
    return models;
}

const models = parseBlocks();

// Specific thinkers manual mapping
const thinkersMap = {
    "Inversão": "Charlie Munger",
    "Pensamento de Segunda Ordem": "Howard Marks",
    "Custo de Oportunidade": "Economia Clássica",
    "Margem de Segurança": "Benjamin Graham",
    "Círculo de Competência": "Warren Buffett",
    "Navalha de Occam": "William de Ockham",
    "Navalha de Hanlon": "Robert J. Hanlon",
    "Primeiros Princípios": "Aristóteles / Elon Musk",
    "Aversão à Perda": "Daniel Kahneman",
    "Prova Social": "Robert Cialdini",
    "Reciprocidade": "Robert Cialdini",
    "Efeito Lollapalooza": "Charlie Munger",
    "Inveja (Envy)": "Charlie Munger",
    "Pensamento por Primeiros Princípios": "Aristóteles / Elon Musk",
    "Juros Compostos (Compounding)": "Albert Einstein / Naval",
    "Valor Esperado (EV)": "Blaise Pascal / Von Neumann",
    "Caudas Gordas (Cisnes Negros)": "Nassim Taleb",
    "Assimetria de Risco": "Nassim Taleb",
    "O Mapa Não é o Território": "Alfred Korzybski",
    "Vantagem Competitiva (Moat)": "Warren Buffett",
    "Destruição Criativa": "Joseph Schumpeter"
};

for (const m of models) {
    if (thinkersMap[m.name]) {
        m.thinker = thinkersMap[m.name];
    } else if (m.name.includes("Munger")) {
       m.thinker = "Charlie Munger";
    }
}

let out = \`export interface WikiModel {
  id: string;
  slug: string;
  name: string;
  thinker: string;
  color: string;
  icon: string;
  definition: string;
  detailedContent: string[];
  triggerQuestion: string;
  example: string;
}

export const wikiContent: WikiModel[] = \` + JSON.stringify(models, null, 2) + ";";

fs.writeFileSync("/tmp/wiki-content.ts", out);
console.log("Done. Models parsed: " + models.length);
