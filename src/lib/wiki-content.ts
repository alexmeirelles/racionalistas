export interface WikiModel {
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

export const wikiContent: WikiModel[] = [
  {
    id: "inversion",
    slug: "inversao",
    name: "Inversão",
    thinker: "Charlie Munger / Carl Jacobi",
    color: "#FF6B6B",
    icon: "↻",
    definition: "Em vez de pensar em como alcançar o sucesso, pense em como garantir o fracasso – e então evite essas ações. A inversão aborda problemas de trás para frente.",
    detailedContent: [
      "A Inversão é uma herança direta do matemático Carl Jacobi, cuja máxima era 'Invert, always invert' (Inverta, sempre inverta). Carl percebeu que muitos problemas difíceis na matemática poderiam ser resolvidos mais facilmente se a sua formulação fosse lida e operada de trás para frente. Charlie Munger cooptou essa premissa para a tomada de decisão humana, postulando que é notavelmente mais fácil e confiável evitar a estupidez do que tentar ser consistentemente brilhante.",
      "A mecânica mental da Inversão força o cérebro a olhar para o espectro negativo de uma distribuição de probabilidades. Na prática corporativa e estratégica, todos são treinados para responder à pergunta 'Como atingiremos nossa meta?'. Isso gera otimismo ilusório. A Inversão muda o eixo geométrico: 'Como garantiríamos que essa empresa vá à falência em 6 meses?'. A mente, exímia em enxergar ameaças (graças à evolução na savana), produzirá uma lista clara de gargalos, erros catastróficos e decisões negligentes.",
      "Com a lista da ruína em mãos, o framework tático não é buscar a genialidade, mas implementar defesas rigorosas contra a lista de fracasso. É um modelo mental projetado para extrair as variáveis antifrágeis de um sistema. Construtores de pontes e cirurgiões não operam tentando fazer a melhor ponte ou o curativo mais belo; eles invertem o problema operando para garantir que, sob nenhuma circunstância de estresse, ocorra o colapso estrutural."
    ],
    triggerQuestion: "Como eu poderia destruir esse projeto ou objetivo intencionalmente?",
    example: "Uma equipe quer melhorar o engajamento no aplicativo. Usando a inversão, eles se perguntam: 'Como faríamos os usuários odiarem o app?'. Listam: notificações invasivas, formulários lentos, bugs no login. Focam em erradicar isso antes de criar novas features periféricas."
  },
  {
    id: "firstPrinciples",
    slug: "primeiros-principios",
    name: "Primeiros Princípios",
    thinker: "Elon Musk / Aristóteles",
    color: "#4ECDC4",
    icon: "◇",
    definition: "Ato de desconstruir problemas complexos até suas verdades em estado puro (inegáveis), construindo soluções a partir da física ou fundamentos primordiais.",
    detailedContent: [
      "O Pensamento a partir dos Primeiros Princípios é o mais letal antídoto contra o raciocínio por analogia. Desde Aristóteles, define-se um primeiro princípio como 'a base a partir da qual algo é conhecido'. Em vez de basear expectativas e designs no que já foi feito ou nas convenções da indústria (analogia), a mente reduz o problema até a sua estrutura subjacente, geralmente leis físicas inquebráveis ou axiomas absolutos inegáveis.",
      "O raciocínio analógico é eficiente energeticamente: você presume que o software x custa Y porque outros softwares X custam Y. O raciocínio por primeiros princípios exige que você reduza o custo elétrico do servidor, a banda e as horas do programador. Se essa soma de partes fundamentais for absurdamente inferior ao preço praticado pelo mercado, você encontrou uma falha de precificação e um oceano azul corporativo, que é a verdadeira fundação de inovações disruptivas.",
      "Construir utilizando esse modelo exige coragem intelectual contraintuitiva. Ao se defrontar com a barreira imaginária de 'isso é impossível' cunhada pelos peritos, a pessoa racional decompõe a afirmação. Se as leis limitantes não são termodinâmicas, físicas ou biológicas estritas, então a barreira é puramente regulatória, mercadológica ou fruto da ausência crônica de imaginação de seus executores passados."
    ],
    triggerQuestion: "Qual é a verdade absoluta e física que conheço sobre este problema, livre de suposições de terceiros?",
    example: "Baterias elétricas custavam US$ 600 por kWh. Em vez de aceitar o preço histórico (analogia), a SpaceX desmembrou os componentes químicos essenciais comprando-os brutos no mercado de commodities, percebendo o real valor de ~US$ 80/kWh."
  },
  {
    id: "lossAversion",
    slug: "aversao-a-perda",
    name: "Aversão à Perda",
    thinker: "Daniel Kahneman / Amos Tversky",
    color: "#F59E0B",
    icon: "⊖",
    definition: "A dor de perder algo é psicologicamente duas vezes mais intensa do que a alegria de ganhar, gerando decisões irracionais voltadas para a inércia.",
    detailedContent: [
      "Catalogada primordialmente pelos pais da economia comportamental moderna, Daniel Kahneman e Amos Tversky, na formulação da 'Teoria da Perspectiva', a Aversão à Perda destrói a premissa de que o ser humano é um avaliador racional e linear de utilidade matemática. Evolutivamente, nossos circuitos neurais reagem com o dobro ou triplo da carga emocional ao perder propriedades ou energia vital, garantindo a sobrevivência austera dos hominídeos no passado selvagem.",
      "No contexto dos negócios e finanças, esse viés torna os operadores e executivos cegos perante as probabilidades de valor esperado positivo se um risco pontual envolver 'perda de status quo'. Preferimos ficar no zero a zero mantendo o emprego atual medíocre do que apostar em algo com 90% de ganho multiplicador (porque os 10% de perda nos paralisam em hiperestimulação somática).",
      "Profissionais que integram esse modelo mental audaciosamente em seus portfólios conseguem explorar e capitalizar o medo dos outros. Entendendo que os mercados super-corrigem (vendem exageradamente causando quedas bruscas) na presença de ameaça à perda, o racionalista atua como providenciador de liquidez para adquirir ativos artificialmente desvalorizados pelo terror psicológico de curto prazo, arbitrando a deficiência emocional em seu favor matemático."
    ],
    triggerQuestion: "Eu estaria disposto a pagar o preço ou arriscar o mesmo valor para adquirir isso agora, caso ainda não o tivesse?",
    example: "Um investidor mantém uma ação despencando porque não quer 'aceitar o prejuízo', mas não compraria essa ação caso os fundos estivessem no bolso. O ego o impede de realocar perdas para investimentos superiores."
  },
  {
    id: "regretMinimization",
    slug: "minimizacao-de-arrependimento",
    name: "Minimização de Arrependimento",
    thinker: "Jeff Bezos",
    color: "#FFE66D",
    icon: "◌",
    definition: "Uma heurística incisiva: projete-se para o fim da sua vida (aos 80 anos), e tome a decisão agora que minimizará seu futuro arrependimento.",
    detailedContent: [
      "Cunhada nos negócios por Jeff Bezos quando estava imerso em uma carreira próspera e garantida em Wall Street, mas almejava explorar sua visão de que a internet cresceria infinitamente no ano de 1994. A Minimização de Arrependimento é primordialmente um mecanismo neuro-hackeador: uma forma estruturada de silenciar a resposta instintiva e hiperativa do medo frente a riscos iminentes no curto prazo.",
      "As emoções cotidianas flutuam de ansiedade e conforto, influenciando drasticamente o peso probabilístico da escolha; o medo distorce o modelo. Ao mover artificialmente e cognitivamente seu ponto focal para os seus 80 anos de idade, o framework remove do cálculo da dor de arriscar, preservando apenas as métricas puramente fundamentais. Aos 80 anos, a falência temporária de uma startup fundadora aos 30 anos não tem qualquer peso de dor psicológica mensurável.",
      "Entretanto, aos mesmos 80 anos, o arrependimento — marcado pela ausência do desconhecido contrafactual e o fato de 'nunca ter entrado na arena' — ressoa pelo resto dos dias. A Minimização do Arrependimento orienta os operadores lógicos em direção a apostas assimétricas e ao empreendedorismo brutal, calibrando o risco de curto prazo não com a sobrevivência moderna mas como um erro temporário suportável perante a eterna lamentação."
    ],
    triggerQuestion: "Quando eu tiver 80 anos e olhar para trás em detalhes, qual decisão reduzirá ao máximo absoluto a chance de me arrepender profundamente por conta de omissão?",
    example: "Jeff Bezos imaginou-se aos 80 confessando que nunca participou da invenção incrível chamada 'internet'. O risco brutal de falir a Amazon nos anos 90 desvaneceu imediatamente perante a dor imposta pelo medo histórico de ficar inerte."
  },
  {
    id: "secondOrder",
    slug: "pensamento-de-segunda-ordem",
    name: "Pensamento de 2ª Ordem",
    thinker: "Howard Marks / G.K. Chesterton",
    color: "#A78BFA",
    icon: "⟁",
    definition: "O pensamento que enxerga as consequências das consequências. Desloca a solução da causa imediata do alívio direto para arquitetura dos subefeitos a longo prazo.",
    detailedContent: [
      "De acordo com Howard Marks, lendário megainvestidor do Oaktree, o pensamento de primeira ordem é simples, superficial e assemelha-se universalmente a: 'Temos uma excelente empresa na frente, vamos comprar as ações'. É o senso comum ditado que busca saciação e resolução linear imediata. Em contrapartida, o raciocínio em segunda e Nª ordem é o que separa lucros bilionários da massa de amadores, compreendendo as propriedades interconectadas, o ruído reativo de todos e o desdobramento oculto subjacente ao longo do fluxo causal de eventos temporais e secundários.",
      "O conceito também tem vínculo contínuo com a 'Cerca de Chesterton': não remova uma cerca de um campo a menos que você saiba a razão pela qual ela fora originalmente colocada no passado, porque as propriedades latentes ocultas no ecossistema (e sua remoção de 1ª ordem) trarão perturbações massivas indiretas na qual ela impedia silenciosamente as forças do caos de invadir (2ª ordem).",
      "É virtualmente indissociável das avaliações contemporâneas, seja lidando com regulações ou remanejo complexo de sistemas operacionais. Injetar um benefício curto pode e inevitavelmente trará falência colateral mais grave. Resolver problemas usando pensamento de segunda ordem leva tempo de processamento cognitivo deliberativo, sendo essencial no framework operacional de qualquer racionalista que saiba antecipar armadilhas."
    ],
    triggerQuestion: "Esta atitude resolve o problema agora (1ª ordem). Mas o que nos acontecerá como consequência desta solução da consequência principal (2ª, 3ª ordem)?",
    example: "Em tempos não muito distantes na Índia colonial, o governo ofereceu recompensa por najas mortas. 1ª ordem: caçadores eliminam najas da cidade. 2ª ordem: caçadores montam centros reprodutivos de najas para manter lucros na recompensa. Assim, o fluxo estourou e o governo desfez o mercado, mas com infinitas pragas liberadas."
  },
  {
    id: "circleOfCompetence",
    slug: "circulo-de-competencia",
    name: "Círculo de Competência",
    thinker: "Warren Buffett",
    color: "#F97316",
    icon: "◎",
    definition: "Entender claramente os limites do seu próprio conhecimento. O tamanho do círculo é irrelevante; a margem da glória repousa em jamais atuar fora dele impunemente.",
    detailedContent: [
      "Warren Buffett propõe esse pilar supremo com impeto repetitivo nos memoriais da Berkshire Hathaway. O mundo contemporâneo glorifica atitudes generalistas e impõe arrogância de expertise de forma descontrolada sobre todas as áreas, impulsionados pela síndrome de Dunning-Kruger (onde os inaptos imaginam ter sabedoria suprema do tema). Identificar exata, humilde e cirurgicamente onde e o quê você sabe operar é o pré-requisito primordial da riqueza e sobrevivência competitiva de ecossistemas perigosos.",
      "Dentro do Círculo de Competência, o jogador avista padrões instintivamente com processamento brutal de paralelos passados. Sua avaliação das nuances está próxima a perfeição absoluta e as perdas provêm de anomalias imponderáveis externas, sem surpresas desnecessárias causadas por inexperiência conceitual crassa. Tomar apostas complexas no perímetro exato traz rendimentos altamente assimétricos superiores ao mero talento aleatório inter-domínios.",
      "Por outro lado, extrapolar esses limites imaginando premonições ilusórias nas indústrias, nas profissões ou nos mercados fora dessa cerca destrói anos de progresso impecável. É uma defesa egoica essencial; ser excepcionalmente proficiente em X não implica absolutamente nenhuma aptidão analítica transferente e mágica em Y. Portanto, mantenha firme o centro ou desbrave Y calmamente como aprendiz iniciante focado do chão absoluto."
    ],
    triggerQuestion: "Nós ou Eu realmente dominamos as bases cruciais do sistema para operar de forma imprevisível aqui, ou estamos no perímetro cego do conhecimento?",
    example: "Warren Buffett repetidamente se recusa a aplicar fortunas bilionárias na mais moderna evolução da Inteligência Artificial porque confessa honestidade radical sobre ser inapto para prever dinâmicas corporativas desses softwares na década. Contudo, continua ganhando através de modelos perfeitos sobre refrigerantes, móveis e seguros perimétricos."
  },
  {
    id: "occamsRazor",
    slug: "navalha-de-occam",
    name: "Navalha de Ockham",
    thinker: "William de Ockham",
    color: "#38BDF8",
    icon: "⟋",
    definition: "O axioma heurístico da simplicidade lógica. Onde não se impõe pluralidade desnecessária para descrever e operar uma teoria quando os meios enxutos suprem o efeito.",
    detailedContent: [
      "Originada do teólogo e filósofo medieval William de Ockham (século XIV), a máxima 'Pluralitas non est ponenda sine necessitate' (Pluralidade não deve ser postulada sem necessidade) funciona na fundação do método científico e da arquitetura do conhecimento. Não postula infalibilidade sobre como o sistema funciona ou o erro se origina da mais clara verdade; Ockham sugere que se ambas hipóteses chegam numa justificativa, deve-se reter as rédeas probabilísticas do arranjo que insere menores variáveis em movimento e com o menor complexo conjeturado de provas exóticas ausentes.",
      "Matematicamente justificável na estrutura moderna de Probabilidade Bayesiana, as hipóteses com menor uso do inventário especulativo ostentam propriedades probatórias intrínsecas e apriorísticas mais rigorosas. Portanto, a Navalha torna imperativo podar paranoias excessivas, malabarismos dedutivos imensos e arquiteturas esmagadoras no software em prol de resoluções de pura e ríspida economia fundamental que preenche aos requisitos de engenharia exigíveis sem adentrar nas miragens do que poderia magicamente ocorrer como evento de intercessão extraordinária.",
      "Utilizá-la descomplica em extrema proporção o pânico no troubleshooting empresarial e no refactoring pragmático de sistemas densos. Ao identificar instabilidade nos produtos ou quebra num ecossistema humano, em vez de arquitetar maquinações maléficas ou espionagens colossais dos adversários contra você, aplique o método. Verifique negligência simples. Remediando os pressupostos purificados primeiro trará uma imensidão na clarificação intelectual do real gargalo."
    ],
    triggerQuestion: "Retirando os saltos de fé, narrativas conspiratórias e elos perdidos: qual fluxo mais primitivamente reto com a menor suposição e complexidade material explica esses fatores de vez?",
    example: "Um cliente majoritário deixa de retornar suas propostas de aquisição num silêncio hostil por dias. Ansiedade engendra teses infinitas variando de vazamentos para tráficos rivais ao ódio sumário e intencional. Usando Navalha, assumir a lotação infernal de e-mails esquecidos e problemas pessoais aleatórios não noticiados é quase certo matematicamente."
  },
  {
    id: "probabilistic",
    slug: "pensamento-probabilistico",
    name: "Pensamento Probabilístico",
    thinker: "Nassim Taleb / Blaise Pascal",
    color: "#E879F9",
    icon: "⊘",
    definition: "Processar do mundo como distribuições multifacetadas de chances incertas e caudas perigosas, ao revés dos absolutos ilusórios de confiança dogmática e retilínea e fatos.",
    detailedContent: [
      "Enraizados primitivamente no instinto do córtex pré-frontal pela simplicidade biológica para redução metabólica de gastos, a civilização em massa enxerga ocorrências na chave binária contígua: as coisas irão acontecer como esperado ou falharão estaladamente de vez. Blaise Pascal com o algebrismo no século 17 e, num tom visceral, Taleb nas modernidades empíricas redefiniram o axioma intelectual exigindo o fim estanque do determinismo para um panorama dinâmico complexo modelando matrizes em probabilidades subjacentes reais das frequências e aleatoriedade estocástica.",
      "Pensar probabilisticamente atrofia as correntes mentais do viés reativo após falhas; o sistema ou executante compreende e internaliza que se a jogada ostentava 30% de colapso predito, o colapso não configura um assombro sobrenatural nem requer demissões punitivas brutais se a aposta continha prêmios desvinculados em altaneiro (retorno de 50 vezes). Significa planejar portfólios onde mesmo diante do infortúnio normal o jogo prossiga para se valer das leis massivas das vitórias garantidas em distribuições logarítmicas num plano interativo longo. ",
      "Não basta dizer 'Acho isso uma ocorrência altamente favorável e óbvia' no empirismo cru do board estratégico. Os pensadores que cultivam o intelecto eximem opiniões vagas estancando palpites de viés emocional como sendo 'estimamos a ocorrência sob 80% do teto com 99% de garantia que superamos a métrica X se o parâmetro de estabilidade macro permanecer intocado'. Isto é pensar nas probabilidades. Transforma palpites de tribo sobre lucros em matemática mensurável e audível ao ceticismo sem ofender o analista da premissa base."
    ],
    triggerQuestion: "Não avaliamos em instâncias de sim ou não absoluto ou falsos positivos exatos. Quais são precisamente no percentil realista os 3 escopos de futuros possíveis e que fração realétrica os consagramos?",
    example: "Na gestão quantitativa e militar o general ou acionista jamais expõe dogmático: 'Essa aquisição renderá R$35 Milhões ano que vem certinho.' Eles mapeiam e alinham: 'R$ 7 Milhões de chances pessimistas sobrevindos a 35%, cenário real a R$18 mi beirando 55% centrais e cenário da sorte em 10% aos R$50 Mi. Posicionem orçamento pra blindar cenários 1'."
  },
  {
    id: "preMortem",
    slug: "pre-mortem",
    name: "Pré-Mortem",
    thinker: "Gary Klein",
    color: "#94A3B8",
    icon: "◈",
    definition: "Viaja com brutalidade mental ao futuro fixo na falência, utilizando a inversão ilusória pro grupo extirpar seus viéses grupais do otimismo inerte relatando o pior que ocasionou todo o sangramento.",
    detailedContent: [
      "Formatado pela psicologia natural de Gary Klein perante a avidez cega impulsionada pelas salas do corporativismo corporativo (o 'Grupo Think' infindável focado nos discursos imaculados infalíveis da vitória), o Pré-Mortem destrói agressivamente e imediatamente a premissa refratária de silenciar os pessimistas cautelosos ante a uma grande mudança perigosa da ordem atual, sem expurga-los com insultos morais como 'destrutivos' ao espírito.",
      "A estrutura ocorre posicionando temporalmente o eixo numa projeção artificial: Assumam 12 meses à frente que nossa operação colapsou vergonhosamente perdendo toda base do cliente. Qual exata e tangível sequência dos fatores vitais resultou com certeza nessa infame destruição das premissas passadas absolutas do planejamento tido? Usar a falha em constatações já realizadas retira toda vergonha natural perante confrontar e julgar o CEO frente as falácias de estabilidade. Estimula criativamente no hemisfério analítico respostas diretas sobre fragilidades antes ocultas atrás da modéstia protocolar.",
      "Surgirão e estourarão na câmara da análise todos os alertas submersos ou 'sentimentos obscuros premonitórios'. E por estarem prevendo cataclismos de ordem material baseados puramente no caos que visualizam, as contenções e contramedidas serão criadas preventivamente ali mesmo. De extrema magnificência para projetos da área médica, missões arriscadas da inteligência tecnológica, M&As bilionários ou refactoring impiedosos envolvendo o código principal em legado dos caixas operantes atuais, a mitigação retroativa salva."
    ],
    triggerQuestion: "Vamos ao avanço mental para seis meses após este lançamento, todos perdemos imensamente nosso tracionamento, nosso prestígio decai, a fúria ocorre. Qual a autópsia dos elos exatos dessa catástrofe irreparável?",
    example: "Os designers, CTO e o fundador de um App bilionário assumem que falharam monumentalmente em manter no server side o refactoring gigantesco da plataforma. Apontam gargalos desde bugs na infraestrutura migrada na API alheia desamarrada de contingentes de fallback até conflito na nova indexação do Firebase não cacheando e travando na AWS no tráfego pico indomável. Proteções extras nascem em minutos exatos a este exercício simples retro-futuro."
  },
  {
    id: "mungerBiases",
    slug: "vieses-de-munger",
    name: "Vieses de Munger",
    thinker: "Charlie Munger",
    color: "#34D399",
    icon: "⊛",
    definition: "Um compêndio definitivo decifratório da Psicologia do Julgamento Incorreto listando vinte e cinco forças e reações psíquicas que distorcem o bom alinhamento em mentes evoluídas e afiam equívocos catastróficos no meio humano.",
    detailedContent: [
      "Derivados exaustivos das compilações da vida investidora pragmática de Munger, condensadas primeiramente na magistral palestra chamada 'A Psicologia do Julgamento Humano Falho' feita aos engenheiros biológicos, os raciocínios que tangem a obra evidenciam uma crueza insensível sobre nós como vetores e hospedeiros dos circuitos dos mamíferos, inaptos para transacionar lógica moderna contra nossos neurotransmissores dopaminérgicos de reatividade tribais do pleistoceno gravados para a poupança do cérebro primata na era silvestre antiga e remota.",
      "Estritamente dissecados entre armadilhas biológicas como Reciprocidade (obrigação sub-consciente ao agrado social inútil), Viés da Prova Social (confiar piamente sem crivos no bando imbecil de outros seres cegos para o erro coletivo ou loucura no boom e crash nos preços irrefletidos dos mercados) ao Viés do Super-Reconhecimento à Autoridade. Este último destrói corporações provando que operadores cientes submetem-se perigosamente a direções de generais com listras ombro e não testagem na teoria operante perigosa ou moral base.",
      "É virtualmente indestrutível contra a loucura em manada. Os racionalistas incorporam checklists duros, independentes se portam prêmios nobeis em sabedoria; quando a tempestade influi e transbordam no seu dia-a-dia a reação instintiva da emoção destruturada com pânico imenso em frentes colapsantes do ativo negociável, eles acessam de antemão e com distanciamento insensato cada pilar deste rol monumental do Charlie evitando as precipícios mentais."
    ],
    triggerQuestion: "A despeito absoluto das conjecturas das lógicas explícitas deste debate, quais traços simiescos do viés instintual estariam pilotando essa minha escolha precipitante agora por conta exclusiva desse enredo emocional de fundo em transe social?",
    example: "O Viés de Conformidade da Influência Autorizada na prática destrói o ar ou oceanos profundos: Os peritos tripulantes ao identificar as chaves das hélices descalibradas de aviões civis frequentemente silenciam premonitórias ou recusam refrear fisicamente capitães idosos da ordem no erro óbvio porque reprimir autoridades rompem tabu evolucional das savanas da ordem vertical e de mando. Checklists desintegram tal transe falho reencaminhando a falha mortal natural instintiva em mera auditoria."
  },
  {
    id: "opportunityCost",
    slug: "custo-de-oportunidade",
    name: "Custo de Oportunidade",
    thinker: "Economia Clássica",
    color: "#FB923C",
    icon: "⊙",
    definition: "Nenhuma premissa e capital ou escolha existe isoladamente num ecossistema fechado nulo, seu uso absoluto custa invisível mas integralmente todas as vantagens de suas não-realizações alternativas exauridas e abandonadas na execução final dessa obra real presente fática atual.",
    detailedContent: [
      "Alicerçada pelos pilares fundamentais teóricos nos berços dos axiomas do capital na macro economia e em suas variações pragmáticas da utilidade no fim da margem do ganho marginal na história social; o Custo de Oportunidade evidencia a brutal e dura carência perpétua inerente da natureza limitativa humana: Toda aquisição engendra renúncia inevitável perimétrica tangível que foge ao raciocínio comum descalibrado, incapaz quase que perpetuamente a modelagem ou precificação correta das fantasias mortas num cemitério etéreo dos possíveis inexplorados no meio macro ambiental na vida finita.",
      "Com a escassez dos orçamentos do relógio (as brutais 24h indestrutíveis ou caixa fixo e imaculado inicial com base a provisões), assinalar fáticamente seu consentimento para reuniões triviais inúteis das diretrizes exaurindo energias exatas não tem custo nulo baseando sua falta das planilhas contábeis dos peritos. Tem custo intrínseco, mortal da estagnação inexplorada da grande obra magna oculta perante o mercado ou o aprendizado e prospecção eximida para faturamentos astronômicos.",
      "As decisões verdadeiramente sábias abandonam integralmente questionar 'Isto apresenta bom valor e é de boa fatia a meu favor a longo prazo e tráz bons méritos parciais do mundo real e retornos módicos?'. Focam obsessivamente implacáveis no comparativo holístico insano brutal do: 'Sobre bases iguais empíricas, exala o mais alto grau estático multiplicador supremo do universo em face das dez oportunidades de escabilidade do meu repertório imenso?'. Só então validam tal escolha base e expelem em recusas sistemáticas das fúteis miragens perigosas e brilhantes."
    ],
    triggerQuestion: "Se afirmo afincadamente a aprovação material disto pelo benefício em frente da minha presença ilusória natural; perante minhas disponibilidades imensas, que outras montanhas perdi do radar ao sacrificar e investir todas estas finitas balizas nesta única jogada e front?",
    example: "Fundador recebe uma oportunidade com lucros bons e imediatos (US$ 3.000 mensais extras para serviço lateral). Em vez de enxergar o dinheiro purista novo da jogada avulsa num otimismo simplório sem crivo fito (uma vitória contábil bruta inerte no livro), computa que 10 horas semanais subtraídas do MVP base em construção o privam de US$ 80 Milhões do exit na fundação com trações compostas logarítmicas a dois anos num software monopolista escalável na vertical inquebrável."
  },
  {
    id: "expectedValue",
    slug: "valor-esperado",
    name: "Valor Esperado",
    thinker: "Blaise Pascal / Von Neumann",
    color: "#60A5FA",
    icon: "⊕",
    definition: "O produto algébrico inafastável entre todos prêmios absolutos multiplicados e modelados impiedosamente contra a matriz inteira atômica das minúsculas probabilidades incrustadas num rolar sem fim perante a repetição de um conjunto gigantesco na ordem.",
    detailedContent: [
      "Uma armadura essencialmente pura e incorruptível concebida originária pela mecânica perante apostas nos luxuosos cassinos parisienses e maturada ao grau atômico absoluto moderno nos jogos contábeis dos peritos sistêmicos com Von Neumann na fundição e invenção purista pragmática da 'Teoria dos Jogos' insensível pura impessoal; retira a análise de casos singulares que detém aleatoriedade extrema indomável onde o indivíduo humano tenta extrair padronagem exótica nos ventos das ocorrências escuras onde os deuses e fatos jogam aleatoriamente contra si no limite de cada giro sem história passada das ocorrências cegas do acaso natural.",
      "Tradicionalmente ignorada e suplantada no córtex leigo da sociedade do impulso desqualificado (frequentadores ávidos impuros do lotérico), onde analisam ganhos absolutos esmagadores ignorando brutalmente a porcentagem atrelada da chance na ocorrência ou evitam com aversão pânica imensa aos negócios com alta falha sem notar as assimétrias celestes. Uma vitória em 10% do tempo exibe altíssima e sublime supremacia lógica num montante matemático exato contra vitórias prováveis em 90% contanto que o prêmio desta ínfima falha seja 10.000 vezes estrondoso a desbancar todas reparações do investimento marginal exaurido no campo.",
      "As indústrias supremas raras no topo predatorial e Venture Capital (Capital de Risco de alta performance com aversão zero no Vale) fundam inteiramente o edifício inquebrável desse conceito de forma algoritimica extrema. Empreendendo premissas onde há probabilidade real de colapso de 9/10 startups incipientes injetadas massivamente sob as estufas protetoras nos porões. O Valor Esperado imposto pelos executantes no bilionésimo de porcentual remanescente compensa toda queima imensurável perante lucros que retornam mil vezes baseando as equações com frieza suprema estrita absolvida sem ego ilusório emocional da dor perdedora frequente normal do ruído inicial iterativo na longa pista de dança e apostas."
    ],
    triggerQuestion: "Se executado e percorrido com insistente vigor metódico em frentes intermitentes com 10.000 reincidências contínuas num laboratório multiverso intemporal neutro absoluto focado em base estatística purista limpa real de vieses emocionais da vez pontual base, geraria balanços destrutivos imensos à fundação integral ou lucros e dividendos compostos irrecuperáveis impiedosos sem frestas?",
    example: "Uma rodada exige o porte e remessa de investimento inicial ao capital na base de cem mil para ganhos previstos estimados conservadores em exatos cinquenta milhões caso vença; porém baseia-se a chance exata estatística sob pálifa chance e miragem rarefeita nos cruéis dois por cento em concretização final da via do jogo total da rodada. A intuição grita ao repúdio; o cálculo aciona sinalizações claras: (0.02 * 50.000.000) = Valor em R$ 1 Milhão Positivo EV vs R$ -100 Mil reais de dor inicial da perda marginal certa do jogo na mesa e de imediato; executem agressivamente, imediatamente já."
  },
  {
    id: "marginOfSafety",
    slug: "margem-de-seguranca",
    name: "Margem de Segurança",
    thinker: "Benjamin Graham",
    color: "#4ADE80",
    icon: "⊟",
    definition: "Erguer superposições nos baluartes redundantes blindadores perante estimativas confidenciais plenas com certezas do alinhamento ideal como premissa da nossa incerteza cega baseada sobre cenários incontroláveis negros.",
    detailedContent: [
      "Institucionalizado no evangelho inquebrável atemporal supremo da Bíblia do Valor pelo pragmático perito incansável em contabilidade de lucros reais subjacentes tangíveis das pedras na rocha mestra da economia clássica da era industrial passada, Benjamin Graham — também tutor principal e mentor dogmático severo imbatível e arquiteto de pensamentos lógicos frios que alçou o gênio insigne de Warren Buffett ao sucesso vitalício intergeracional absoluto mundial sobre as esferas mercadológicas complexas financeiras insanas no planeta. É pautado em não apostar contra a lei máxima universal e implacável cruelmente inerte perante a física entrópica e a Lei implacável destrutiva de Murphy que regem incondicionalmente todos universos desguarnecidos expostos à falha e decaimento.",
      "Em engenharias cruciais onde vidas, pontilhões em valas, caldeirões termonucleares de sub-pressões da Marinha mercante militar blindada da frota russa ou elevadores no poço insano comercial operam perigos imensos e vitais contínuos inquebráveis ou sobem os ares diários, jamais modelados ao ponto limite estrito raso sem base exata de fadiga matemática dos ensaios de tração estipulado nos cabos limites do uso, multiplicados cegamente e irrefletidamente impiedosos de 10 a 20 vezes do necessário tido por suportável normal exato, salvaguardando erros aleatórios anômalos absolutos climáticos desestabilizadores pontuais atípicos crônicos inauditos.",
      "Transposto nas arquiteturas invisíveis financeiras cognitivas estratégicas; demanda recusa insana de propostas e modelagens de caixa das empresas bilionárias se sustentando unicamente perante horizontes sem distúrbios econômicos nas calmaria e águas límpidas em céus cristalinos da inflação no modelo teórico sem estragos. Estipular a blindagem severa com acumulação excessiva inútil tida de caixa e de tesouraria de guerra prevendo o impensável caótico pandêmico, retração impiedosa nos suprimentos basais fornecedores primários e traições societárias; de modo a garantir uma perenidade infindável resiliente, tornando-se soberano supremo do jogo que absorve mortes subitas falimentares impiedosas do ambiente dos pares arrogantes submissos às curvas justas perigosas desatentas no caminho tortuoso inibindo colapso base fatal irreversível sem cura estendendo reinados de glória e lucro intermitentes absolutos nas tragédias conjuntas totais absolutas purgadas com tranquilidade em banheiras com águas tépidas."
    ],
    triggerQuestion: "Qual resíduo redundante monumental deixado nos limites estruturais atrelados salvaguardaria todo este edifício dos caos impensáveis em falhas críticas imensuráveis sistêmicas obscuras no cerne fundamental originário nosso que temos extrema confiança sem abalos incisivos?",
    example: "Arquitetar banco central de estocagem severa na margem e suprimento sem uso imediato. Quando investindo quantias brutais no mercado em falência base, garantir o pilar analítico descontando brutalmente metade das garantias por precauções do balanço final oculto e dos fraudadores impenitentes camuflados e se, após o cálculo desastroso impiedoso cego e sujo, os retornos manterem altas viabilidades e atraentes taxas ininterruptas perante este desvio; operar compra."
  }
];
