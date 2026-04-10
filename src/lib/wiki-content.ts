export interface WikiModel {
  id: string;
  slug: string;
  name: string;
  thinker: string;
  color: string;
  icon: string;
  definition: string;
  triggerQuestion: string;
  example: string;
}

export const wikiContent: WikiModel[] = [
  {
    id: "inversion",
    slug: "inversao",
    name: "Inversão",
    thinker: "Charlie Munger / Carl Jacobi",
    color: "#FF6B6B",
    icon: "↻",
    definition: "Em vez de pensar em como alcançar o sucesso, pense em como garantir o fracasso – e então evite essas ações. A inversão aborda problemas de trás para frente, reconhecendo que é mais fácil evitar a estupidez do que buscar a genialidade.",
    triggerQuestion: "Como eu poderia destruir esse projeto ou objetivo intencionalmente?",
    example: "Uma equipe quer melhorar o engajamento no aplicativo. Usando a inversão, eles se perguntam: 'Como faríamos os usuários odiarem o app?'. Eles listam: notificações demais, formulários lentos, bugs de login. Aí focam em erradicar essas coisas antes de adicionar novas features."
  },
  {
    id: "firstPrinciples",
    slug: "primeiros-principios",
    name: "Primeiros Princípios",
    thinker: "Elon Musk / Aristóteles",
    color: "#4ECDC4",
    icon: "◇",
    definition: "Ato de desconstruir problemas complexos até suas verdades mais fundamentais e inegáveis, construindo soluções a partir do zero em vez de usar analogias ou ideias herdadas.",
    triggerQuestion: "Qual é a verdade absoluta e inegável que conheço sobre este problema, livre de suposições de terceiros?",
    example: "Baterias elétricas custavam US$ 600 por kWh. Em vez de aceitar o preço herdado pela indústria (raciocínio por analogia), a SpaceX separou os componentes materiais (cobalto, níquel, lítio) comprando-os no mercado de metais de Londres a US$ 80/kWh, montando as baterias internamente."
  },
  {
    id: "lossAversion",
    slug: "aversao-a-perda",
    name: "Aversão à Perda",
    thinker: "Daniel Kahneman / Amos Tversky",
    color: "#F59E0B",
    icon: "⊖",
    definition: "A dor de perder algo é psicologicamente cerca de duas vezes mais intensa do que a alegria equivalente de ganhar. Isso leva a escolhas irracionalmente conservadoras para manter o status quo.",
    triggerQuestion: "Eu estaria disposto a pagar ou arriscar o mesmo valor para adquirir isso, caso ainda não fosse meu?",
    example: "Um investidor mantém uma ação que está despencando porque não quer 'aceitar a perda', mas não compraria aquela mesma ação nas condições atuais do mercado se tivesse o dinheiro livre. A aversão à perda o impede de vender e realocar melhor."
  },
  {
    id: "regretMinimization",
    slug: "minimizacao-de-arrependimento",
    name: "Minimização de Arrependimento",
    thinker: "Jeff Bezos",
    color: "#FFE66D",
    icon: "◌",
    definition: "Uma heurística para tomar decisões difíceis de longo prazo: projeta-se até o fim da vida, olha para trás sobre a escolha em questão, e seleciona a opção que gerará a menor quantidade de arrependimento.",
    triggerQuestion: "Quando eu tiver 80 anos e olhar para trás, qual decisão reduzirá ao máximo a chance de me arrepender por não ter tentado?",
    example: "Um profissional tem medo de largar seu emprego de Wall Street para fundar uma startup. Ele se imagina aos 80 anos e percebe que jamais se perdoaria por não ter tentado participar da revolução na internet. O risco imediato desaparece diante da certeza do arrependimento."
  },
  {
    id: "secondOrder",
    slug: "pensamento-de-segunda-ordem",
    name: "Pensamento de 2ª Ordem",
    thinker: "Howard Marks / G.K. Chesterton",
    color: "#A78BFA",
    icon: "⟁",
    definition: "O pensamento de primeira ordem enxerga apenas as consequências imediatas de uma ação. O pensamento de segunda ordem vai além e foca na consequência da consequência (e assim por diante).",
    triggerQuestion: "A curto prazo isso resolve o problema. Mas a longo prazo (daqui a 6 meses, 1 ano, 5 anos), o que acontece 'e depois?'",
    example: "Em tempos não muito distantes na Índia colonial, o governo ofereceu uma recompensa por cada cobra (naja) morta entregue. Consequência de 1ª ordem: menos cobras. Consequência de 2ª ordem: empreendedores começaram a criar fazendas de najas para ganhar a recompensa. O governo revogou a lei (3ª ordem), os criadores soltaram as najas e a população de cobras triplicou."
  },
  {
    id: "circleOfCompetence",
    slug: "circulo-de-competencia",
    name: "Círculo de Competência",
    thinker: "Warren Buffett",
    color: "#F97316",
    icon: "◎",
    definition: "Entender claramente os limites do seu próprio conhecimento. O tamanho do círculo não é importante; conhecer seus limites exatos é o que impede desastres. Fique dentro dele para obter vantagens brutais e evitar fiascos.",
    triggerQuestion: "Eu realmente domino os fundamentos necessários para tomar essa decisão ou estou operando fora do que conheço profundamente?",
    example: "Warren Buffett historicamente evita investir em redes sociais porque ele clama não ter capacidade de prever a durabilidade comercial dessas tecnologias daqui a 10 anos (fora de seu círculo), focando em bancos e seguradoras, áreas onde sua competência preditiva é quase perfeita."
  },
  {
    id: "occamsRazor",
    slug: "navalha-de-occam",
    name: "Navalha de Ockham",
    thinker: "William de Ockham",
    color: "#38BDF8",
    icon: "⟋",
    definition: "A explicação mais simples — a que exige o menor número de novas suposições — é quase sempre a correta. Em meio a várias teorias concorrentes para o mesmo fenômeno, não multiplique entidades sem necessidade.",
    triggerQuestion: "Qual é a teoria mais simples que, com o mínimo de suposições ou malabarismos mentais, justifica o resultado?",
    example: "Um cliente grande não responde a um email crucial há dias. Teoria 1: o competidor os subornou. Teoria 2: o cliente odeia você. Teoria 3 (Navalha): a pessoa está com a caixa de e-mail cheia, viajou, se perdeu e só não viu. A teoria 3 lidera quase sempre."
  },
  {
    id: "probabilistic",
    slug: "pensamento-probabilistico",
    name: "Pensamento Probabilístico",
    thinker: "Nassim Taleb / Blaise Pascal",
    color: "#E879F9",
    icon: "⊘",
    definition: "A capacidade de estimar a probabilidade de múltiplos resultados e usá-los como um norte, em vez de assumir certezas ou acreditar apenas no cenário que nos agrada mais. É abraçar os cenários como um leque de distribuições.",
    triggerQuestion: "Quais são as três possíveis ramificações deste evento e a chance realista (%) de cada um acontecer?",
    example: "Na gestão de risco de projetos, você não pensa: 'Temos certeza de que isso lança dia 1º'. Pensa: 'Temos 20% de chance de lançamento semana que vem, 60% na semana seguinte, 20% de atrasar 1 mês'. E traça defesas e budgets alinhados para todos esses cenários."
  },
  {
    id: "preMortem",
    slug: "pre-mortem",
    name: "Pré-Mortem",
    thinker: "Gary Klein",
    color: "#94A3B8",
    icon: "◈",
    definition: "Uma técnica em que o projeto é levado adiante no tempo para ser visualizado como um desastre completo. Em seguida, os participantes documentam agressivamente os motivos pelos quais ocorreu o falso fracasso total para evitar isso preventivamente.",
    triggerQuestion: "Viaje mentalmente para o dia de amanhã. É oficial que este projeto ou decisão foi um desastre absoluto. O que nos matou?",
    example: "Antes de uma cirurgia de alto nível, os médicos se encontram na equipe. A cirurgia falhou, e o paciente não sobreviveu. O que falhou? Eles listam desde erro na dosagem de anestésico até a entrada de equipamento infeccioso na UTI, bloqueando assim as avenidas do erro primário e criando check-lists extras."
  },
  {
    id: "mungerBiases",
    slug: "vieses-de-munger",
    name: "Vieses de Munger",
    thinker: "Charlie Munger",
    color: "#34D399",
    icon: "⊛",
    definition: "O reconhecimento de que o cérebro humano tem tendências inatas e profundamente embutidas – formadas na savana para gastar menos energia –, que o tornam previsivelmente péssimo para decisões modernas (como reciprocidade distorcida ou prova social).",
    triggerQuestion: "Qual padrão arraigado e instintivo da minha biologia e sociologia pode estar conduzindo meu comportamento nesta situação, sem que eu note?",
    example: "O 'Viés de Autoridade'. Passageiros e peritos de voo às vezes não corrigem acidentes iminentes, mesmo com avisos explícitos nos mostradores, só porque não ousam questionar ordens dadas pelo capitão sênior na cabine."
  },
  {
    id: "opportunityCost",
    slug: "custo-de-oportunidade",
    name: "Custo de Oportunidade",
    thinker: "Economia Clássica",
    color: "#FB923C",
    icon: "⊙",
    definition: "Todo capital, de tempo ou financeiro, aplicado a um propósito específico não está mais disponível para outras finalidades. A verdadeira medida do custo deste propósito é aquilo que foi sacrificado.",
    triggerQuestion: "Para cada 'Sim', estou dando centenas de 'Nãos'. Qual é a melhor coisa que estou deixando de fazer dizendo esse 'Sim'?",
    example: "Assistir um filme por 2 horas ou uma temporada no streaming. O custo direto é zero. O verdadeiro custo de oportunidade: são 10 horas em que não praticou inglês, nem leu as recomendações sobre negócios, ou dormiu adequadamente."
  },
  {
    id: "expectedValue",
    slug: "valor-esperado",
    name: "Valor Esperado",
    thinker: "Blaise Pascal / Von Neumann",
    color: "#60A5FA",
    icon: "⊕",
    definition: "O somatório do valor de todos os possíveis desfechos multiplicados pela probabilidade de cada um. É a medida matemática verdadeira do benefício de um risco repetido num grande número de vezes.",
    triggerQuestion: "Se eu pudesse executar esta escolha 1.000 vezes em universos paralelos, eu fecharia o saldo positivo a longo prazo?",
    example: "Uma roleta tem uma casa verde com zero, na qual ela toma o dinheiro do par/ímpar. Uma aposta repetida 1.000 vezes tenderá, por base probabilística, a enriquecer a casa no longo prazo com base no EV do prêmio x risco. Por outro lado, um investidor que arrisca 1 ganha se houver 30% de bater uma aposta multiplicada por 10x."
  },
  {
    id: "marginOfSafety",
    slug: "margem-de-seguranca",
    name: "Margem de Segurança",
    thinker: "Benjamin Graham",
    color: "#4ADE80",
    icon: "⊟",
    definition: "No design de grandes estruturas críticas (como uma ponte ou seu patrimônio líquido), engenheiros e investidores constroem para aguentar choques múltiplas vezes maiores do que o maior esforço já pressuposto em toda a história.",
    triggerQuestion: "Eu deixei redundância e capital sobrando caso minhas estimativas, que tenho certeza que estão corretas, estejam magicamente desastrosamente erradas?",
    example: "Bancos que sobrealavancam baseando suas expectativas de ganho caso os mercados hipotecários permaneçam normais acabam falindo, enquanto um investidor deixa caixa líquido intocável de 25% com a simples lógica de se blindar de 'cisnes negros'."
  }
];
