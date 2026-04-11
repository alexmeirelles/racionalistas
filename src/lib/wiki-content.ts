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
    "id": "incentivos--super-resposta",
    "slug": "incentivos--super-resposta",
    "name": "Incentivos (Super-resposta)",
    "thinker": "Estratégia Coletiva",
    "color": "#FF6B6B",
    "icon": "↻",
    "definition": "Incentivos são o motor invisível do comportamento humano. Sempre que há dinheiro, status ou alívio de dor envolvidos, as pessoas ajustarão suas ações para maximizar esses ganhos, mesmo que isso contradiga o discurso oficial. Se você ignora incentivos, não entende o sistema que está gerindo.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Se você quer entender o comportamento, siga os incentivos.” – Charlie Munger*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Incentivos são recompensas e punições que moldam escolhas, muitas vezes de forma mais poderosa que valores declarados ou intenções conscientes. Pesquisas em psicologia de julgamento e tomada de decisão mostram que, em contextos organizacionais, incentivos financeiros, reconhecimento social e medo de perder posição explicam grande parte das “decisões irracionais”. Charlie Munger chegou a chamar os incentivos de “superpotência” da psicologia, pois conseguem alterar radicalmente o comportamento de pessoas que, fora daquele contexto, seriam consideradas éticas e razoáveis.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>O ponto central é que incentivos operam tanto de forma consciente quanto inconsciente: as pessoas racionalizam depois o que já foram levadas a fazer para preservar uma autoimagem de “boa pessoa”. Quando o sistema recompensa métricas superficiais, como cliques ou horas logadas, ele cria distorções que parecem más intenções individuais, mas na verdade são o resultado lógico de estímulos mal desenhados. Por isso, em vez de culpar indivíduos isolados, o modelo mental sugere olhar primeiro para a arquitetura de incentivos do ambiente.</p>",
      "<p>Ignorar incentivos é pedir para ser manipulado por eles; desenhá-los com consciência é uma das formas mais poderosas de dirigir comportamento em equipes, clientes e em si mesmo.</p>"
    ],
    "triggerQuestion": "Em qualquer decisão importante, faça duas perguntas: “Quem ganha o quê com essa escolha?” e “Que comportamento meu sistema está realmente premiando?”. Redesenhe metas, bônus e indicadores de forma que ninguém seja recompensado por ações que prejudiquem clientes, marca ou sustentabilidade financeira, mesmo que batam números de curto prazo. Em suas próprias escolhas, observe quando você está sendo levado por incentivos de curto prazo – como aprovação social instantânea – contra objetivos de longo prazo.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um gerente de banco é premiado por volume de produtos vendidos, não por adequação ao cliente; o resultado é a oferta sistemática de serviços desnecessários ou caros.</li><li style='margin-bottom: 12px;'>Em agências, comissões baseadas apenas em verba investida empurram o time a sugerir campanhas maiores, mesmo quando o cliente não tem maturidade para convertê-las em lucro.</li><li style='margin-bottom: 12px;'>Em startups, bônus atrelados apenas a crescimento de usuários incentivam aquisição agressiva com pouca preocupação em retenção ou qualidade do produto.</li></ul>"
  },
  {
    "id": "prova-social",
    "slug": "prova-social",
    "name": "Prova Social",
    "thinker": "Robert Cialdini",
    "color": "#4ECDC4",
    "icon": "◇",
    "definition": "Prova social é a tendência de assumir que um comportamento é correto quando vemos muitas pessoas, especialmente semelhantes a nós, fazendo a mesma coisa. Ela reduz a ansiedade da escolha, mas também pode levar à adoção acrítica de modas e bolhas.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Quando as pessoas estão inseguras, elas olham para o que os outros fazem para decidir o que é certo.” – Parafraseando Cialdini*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>A prova social é um princípio clássico da psicologia social que descreve como indivíduos usam o comportamento de outros como atalho para decidir como agir, sobretudo em situações ambíguas. Estudos mostram que mensagens destacando que “a maioria das pessoas semelhantes a você já faz X” aumentam significativamente a adesão a comportamentos desejados, como conservação de energia ou reutilização de toalhas. Em mercados digitais, depoimentos, avaliações, contadores de vendas e logos de clientes funcionam como gatilhos de prova social que reduzem o risco percebido de se comprometer com uma oferta.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>A prova social funciona como heurística de economia cognitiva: em vez de analisar todas as opções do zero, o cérebro copia o comportamento de quem parece saber mais ou se parecer conosco. Esse mecanismo evolutivo, útil em ambientes incertos, torna-se perigoso quando combinado com algoritmos que amplificam apenas casos de sucesso extremos, criando a ilusão de que “todo mundo está ganhando muito rápido”. O modelo mental não pede para ignorar a prova social, mas para enxergá-la como sinal a ser calibrado, não como prova definitiva.</p>",
      "<p>A prova social pode ser o que destrava a confiança que faltava para o cliente certo avançar – ou o que arrasta multidões para decisões que ninguém teria coragem de tomar sozinho.</p>"
    ],
    "triggerQuestion": "Em vendas e marketing, torne explícito “quem já confiou em você”: depoimentos em vídeo, estudos de caso segmentados, números de alunos e provas de uso real são ferramentas centrais. Ao consumir informação, questione se a percepção de que algo é comum não está sendo inflada pelo recorte do seu feed; busque dados agregados, não apenas exemplos chamativos. Em decisões importantes, pergunte: “Estou escolhendo isso porque faz sentido ou porque meu círculo está todo indo na mesma direção?”.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um hotel aumenta a taxa de reutilização de toalhas ao informar que a maioria dos hóspedes daquele mesmo quarto já aderiu à prática.</li><li style='margin-bottom: 12px;'>Landing pages com depoimentos específicos, incluindo resultados e contexto, convertem melhor do que aquelas que apenas prometem benefícios genéricos.</li><li style='margin-bottom: 12px;'>Produtos em marketplaces sobem no ranking e convertem mais depois de acumularem grande volume de avaliações positivas, criando um ciclo de reforço.</li></ul>"
  },
  {
    "id": "reciprocidade",
    "slug": "reciprocidade",
    "name": "Reciprocidade",
    "thinker": "Robert Cialdini",
    "color": "#F59E0B",
    "icon": "⊖",
    "definition": "Reciprocidade é a norma social que nos leva a devolver algo quando recebemos um benefício percebido como genuíno. É um dos gatilhos de influência mais confiáveis, mas exige cuidado ético: quando usado de forma manipulativa, gera ressentimento em vez de lealdade.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“As pessoas sentem-se obrigadas a retribuir favores, presentes e concessões.” – Robert Cialdini*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>A regra da reciprocidade está presente em praticamente todas as culturas estudadas, regulando trocas desde pequenas gentilezas até alianças políticas. Pesquisas clássicas mostram que pessoas tendem a comprar mais de quem lhes oferece pequenos presentes ou amostras, mesmo quando não havia intenção original de adquirir algo. A força desse mecanismo se explica porque, em contextos ancestrais, devolver favores aumentava a coesão do grupo e reduzia o risco de exclusão social.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Reciprocidade não é apenas sobre objetos; também envolve atenção, informação, introduções e tempo. O cérebro registra “créditos” sociais difusos, e pessoas que recebem algo de valor tendem a aceitar pedidos subsequentes mesmo quando não há proporção objetiva entre o favor e a retribuição. Esse efeito é amplificado quando o benefício é percebido como personalizado e genuinamente útil, não como brinde genérico.</p>",
      "<p>Quando a reciprocidade é autêntica, ela transforma estranhos em aliados; quando é calculada demais, transforma oportunidades em desconfiança.</p>"
    ],
    "triggerQuestion": "Construa sua estratégia de relacionamento oferecendo valor antes de pedir qualquer compromisso: conteúdos profundos, diagnósticos específicos, planilhas úteis e pequenos ajustes de graça têm impacto desproporcional. Faça isso com intenção limpa: ofereça algo que, por si só, já justificaria a interação, independentemente da venda. Ao mesmo tempo, proteja-se de tentativas de uso manipulativo da reciprocidade, reconhecendo quando brindes e favores são desenhados apenas para forçar decisões rápidas.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um garçom que deixa um doce extra junto com a conta aumenta significativamente o valor médio das gorjetas.</li><li style='margin-bottom: 12px;'>Amostras grátis em supermercados elevam as vendas de produtos específicos, mesmo para clientes que não planejavam comprar aquele item.</li><li style='margin-bottom: 12px;'>Consultores que oferecem diagnósticos detalhados e úteis sem cobrar nada geram forte sensação de dívida psicológica em potenciais clientes.</li></ul>"
  },
  {
    "id": "aversao-a-perda",
    "slug": "aversao-a-perda",
    "name": "Aversão à Perda",
    "thinker": "Daniel Kahneman",
    "color": "#FFE66D",
    "icon": "◌",
    "definition": "Aversão à perda é a tendência humana de reagir mais intensamente a perdas do que a ganhos equivalentes. Isso distorce decisões de investimento, negociação e mudança, levando pessoas a preservar o status quo mesmo quando a alternativa é estatisticamente melhor.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“A dor de perder é psicologicamente duas vezes mais poderosa que o prazer de ganhar.” – Parafraseando Kahneman e Tversky*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Aversão à perda é um dos pilares da Teoria da Perspectiva, modelo que descreve como as pessoas realmente tomam decisões sob risco, em contraste com a teoria clássica da utilidade esperada. Estudos mostram que, em muitos contextos, é necessário oferecer um ganho aproximadamente duas vezes maior que a perda para que pessoas considerem uma aposta aceitável. Além disso, indivíduos tendem a avaliar resultados relativamente a um ponto de referência (como seu estado atual), não em termos absolutos, o que reforça o medo de piorar.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Do ponto de vista evolutivo, evitar perdas catastróficas – como fome ou exclusão – foi mais crítico para a sobrevivência do que capturar ganhos marginais. O cérebro, portanto, superdimensiona ameaças à situação atual, mesmo quando dados objetivos indicam que o risco é pequeno e o potencial de ganho é grande. Em negociações, a forma como uma proposta é enquadrada – em termos de perdas evitadas ou ganhos obtidos – influencia fortemente a aceitação.</p>",
      "<p>Aversão à perda é excelente para evitar ruínas, mas péssima conselheira quando impede que você aceite riscos calculados que podem mudar estruturalmente seu jogo.</p>"
    ],
    "triggerQuestion": "Ao comunicar ofertas, destaque com honestidade o que o cliente perde se não agir: oportunidades desperdiçadas, erosão de competitividade ou manutenção de problemas caros. Nas próprias decisões, questione se o medo vem de uma perda real e grande ou apenas da desconfortável sensação de sair do conhecido. Reescreva apostas em termos de “quanto posso perder na pior hipótese?” e “isso é tolerável dado o potencial de ganho?”.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Investidores mantêm ações perdedoras por mais tempo do que deveriam, na esperança de “voltar ao zero”, e realizam lucros cedo demais em posições vencedoras.</li><li style='margin-bottom: 12px;'>Clientes preferem planos de assinatura estáveis a modelos com menor custo médio, mas risco de pagar mais em meses específicos.</li><li style='margin-bottom: 12px;'>Pessoas recusam propostas de mudança de cargo que oferecem crescimento de longo prazo, por medo de perder a segurança e o prestígio atuais.</li></ul>"
  },
  {
    "id": "vies-de-autoridade",
    "slug": "vies-de-autoridade",
    "name": "Viés de Autoridade",
    "thinker": "Estratégia Coletiva",
    "color": "#A78BFA",
    "icon": "⟁",
    "definition": "O viés de autoridade é a tendência de atribuir peso excessivo às opiniões de figuras percebidas como especialistas ou superiores hierárquicos. Ele economiza esforço cognitivo, mas expõe pessoas e organizações a aceitar recomendações ruins sem escrutínio.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Títulos, jalecos e ternos fazem mais por decisões do que dados, com mais frequência do que gostaríamos de admitir.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Em ambientes complexos, confiar em especialistas é racional até certo ponto: ninguém consegue dominar todos os domínios relevantes para decisões contemporâneas. Contudo, experimentos clássicos em psicologia social mostram que símbolos de autoridade – como uniformes, linguagem técnica e contextos institucionais – geram obediência mesmo quando pedidos são obviamente questionáveis. Isso é agravado em culturas corporativas altamente hierárquicas, onde discordar de alguém “acima” é visto como desrespeito.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>O viés de autoridade funciona como atalho de confiança: se alguém passou por filtros de certificação ou ganhou status social, a probabilidade de estar certo é maior que a de um desconhecido qualquer. O problema surge quando esse atalho substitui completamente a avaliação de incentivos, histórico e evidências por trás do conselho recebido. Em sistemas complexos, especialistas também estão sujeitos a vieses, pressões comerciais e limitações de visão.</p>",
      "<p>Autoridade legítima acelera decisões; autoridade incensada, sem questionamento, é atalho direto para erros caros abraçados com convicção.</p>"
    ],
    "triggerQuestion": "Mantenha o respeito por especialistas, mas trate qualquer recomendação como hipótese a ser testada contra seus objetivos, dados e contexto de risco. Em reuniões com clientes, reduza o uso de jargão técnico e incentive perguntas até que todos consigam explicar a decisão em linguagem simples. Internamente, crie culturas onde discordar com respeito – inclusive de líderes – é sinal de maturidade profissional.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Clientes aceitam produtos financeiros complexos de gerentes de banco sem compreender as taxas reais, confiando apenas na aparência profissional e no ambiente formal.</li><li style='margin-bottom: 12px;'>Times de tecnologia implementam arquiteturas arriscadas porque um “guru” do setor as defende em conferências, mesmo sem evidência robusta de adequação ao contexto da empresa.</li><li style='margin-bottom: 12px;'>Pacientes seguem prescrições médicas conflitantes sem pedir esclarecimentos, por receio de parecerem desrespeitosos com o especialista.</li></ul>"
  },
  {
    "id": "efeito-lollapalooza",
    "slug": "efeito-lollapalooza",
    "name": "Efeito Lollapalooza",
    "thinker": "Charlie Munger",
    "color": "#F97316",
    "icon": "◎",
    "definition": "Efeito lollapalooza é o nome dado ao fenômeno em que múltiplas forças psicológicas se alinham para produzir comportamentos extremos, como manias de mercado ou histerias coletivas. Entender esse acoplamento de vieses ajuda a identificar cenários em que o comportamento da multidão fica especialmente irracional.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Os maiores erros e os maiores acertos surgem quando vários vieses empurram na mesma direção.” – Charlie Munger*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Munger observou que raramente grandes distorções surgem de um único viés isolado; em vez disso, combinações de prova social, incentivos, escassez, reciprocidade e aversão à perda criam empurrões cumulativos. Em leilões, por exemplo, competição aberta, tempo limitado e status associado à vitória se combinam para levar participantes a pagar acima do valor intrínseco do item. Em mercados financeiros, ciclos de euforia e pânico são, em grande parte, manifestações de lollapalooza em escala coletiva.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>O lollapalooza não é apenas a soma de vieses, mas uma mudança de fase no sistema: depois de certo ponto, cada novo estímulo reforça a narrativa dominante, reduzindo drasticamente o pensamento crítico. As pessoas deixam de avaliar a oferta em si e passam a decidir com base em sinais sociais e emocionais, como “todos que admiro estão dentro” ou “se eu ficar de fora, vou me arrepender para sempre”. Identificar esses contextos exige observar não só o conteúdo das mensagens, mas também o clima emocional e a arquitetura do ambiente.</p>",
      "<p>O efeito lollapalooza é o que cria tanto irracionalidades perigosas quanto oportunidades únicas – a diferença está em reconhecer quando a maré emocional substituiu a análise lúcida.</p>"
    ],
    "triggerQuestion": "Ao estruturar lançamentos e ofertas, é possível combinar elementos como prova social, escassez e clareza de incentivos de forma ética, reforçando uma proposta que de fato gera valor sustentado para o cliente. Por outro lado, ao se ver diante de decisões altamente emocionais e massificadas, convém parar e listar quais vieses estão simultaneamente ativos, para ganhar distância da pressão do momento. Perguntas como “eu compraria isso se não houvesse contagem regressiva ou exposição pública?” ajudam a quebrar o transe.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Lançamentos de produtos com filas físicas, cobertura de mídia, bônus limitados e forte presença de influenciadores, criando sensação de que “só um louco ficaria de fora”.</li><li style='margin-bottom: 12px;'>Bolhas especulativas em ativos digitais, alimentadas por histórias de enriquecimento rápido, comunidades online intensas e medo de perder a oportunidade.</li><li style='margin-bottom: 12px;'>Campanhas virais em que urgência, contagem regressiva, depoimentos em massa e incentivos financeiros convergem para decisões aceleradas.</li></ul>"
  },
  {
    "id": "vies-de-confirmacao",
    "slug": "vies-de-confirmacao",
    "name": "Viés de Confirmação",
    "thinker": "Estratégia Coletiva",
    "color": "#38BDF8",
    "icon": "⟋",
    "definition": "Viés de confirmação é a tendência de buscar, interpretar e lembrar informações que reforcem crenças que já temos, ignorando dados que as contradizem. Isso afeta cientistas, empreendedores e investidores, distorcendo análises e mantendo projetos mortos-vivos.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“O que a mente humana faz melhor é distorcer novas informações até que elas se encaixem em conclusões pré-existentes.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Pesquisas em psicologia cognitiva mostram que, diante de evidências ambíguas, as pessoas sistematicamente preferem interpretações que preservam suas hipóteses originais. Em experimentos como a tarefa de seleção de Wason, participantes tendem a escolher testes que possam confirmar uma regra proposta, em vez de buscar cenários que a refutem. Esse comportamento é eficiente para proteger a autoimagem, mas ruim para descobrir a verdade.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>O viés de confirmação é reforçado por mecanismos modernos de filtragem, como algoritmos de recomendação que servem mais do que você já consome. Em comunidades online homogêneas, opiniões divergentes são rapidamente expulsas ou ridicularizadas, o que cria câmaras de eco onde cada novo dado é reinterpretado como prova adicional da narrativa dominante. O modelo mental alerta que a simples sensação de que “todo mundo inteligente concorda comigo” pode ser artefato de seleção, não evidência objetiva.</p>",
      "<p>O viés de confirmação não apenas nos impede de ver erros; ele também nos rouba oportunidades que só seriam visíveis se tivéssemos coragem de abandonar narrativas confortáveis.</p>"
    ],
    "triggerQuestion": "Deliberadamente, crie o hábito de buscar a melhor crítica à sua tese atual, seja ela um produto, uma estratégia ou uma visão de mercado. Em decisões importantes, formalize um momento de “ataque à ideia”, pedindo a alguém de fora do projeto que a destrua com argumentos. Use checklists que incluam explicitamente a pergunta: “Que evidência me faria mudar de ideia – e ela já existe?”.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um empreendedor lê apenas relatos de sucesso de modelos de assinatura e ignora estudos sobre taxas de churn altas em determinados nichos.</li><li style='margin-bottom: 12px;'>Um investidor acompanha fóruns otimistas sobre um ativo que já comprou, filtrando qualquer análise crítica como “FUD”.</li><li style='margin-bottom: 12px;'>Um time de produto descarta feedbacks negativos iniciais de usuários como “casos isolados”, prolongando a vida de uma solução que não encaixa no mercado.</li></ul>"
  },
  {
    "id": "vies-de-disponibilidade",
    "slug": "vies-de-disponibilidade",
    "name": "Viés de Disponibilidade",
    "thinker": "Estratégia Coletiva",
    "color": "#E879F9",
    "icon": "⊘",
    "definition": "Viés de disponibilidade é o atalho mental pelo qual julgamos a probabilidade de um evento pela facilidade com que lembramos de exemplos dele. Eventos recentes, emocionais ou muito divulgados parecem comuns, mesmo que sejam estatisticamente raros.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“O que vem fácil à mente parece mais frequente do que realmente é.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>A mente humana tem capacidade limitada de processamento e memória; por isso, usa a facilidade de lembrança como proxy para frequência e relevância. Pesquisas mostram que pessoas superestimam a incidência de crimes violentos logo após notícias sensacionalistas e subestimam riscos menos visíveis, porém mais prováveis, como doenças crônicas. Em negócios, histórias de sucesso extremo circulam muito mais do que a massa de casos medianos, criando percepção distorcida do que é normal.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>O viés de disponibilidade é reforçado por mídia e redes sociais que competem por atenção com conteúdo emocionalmente carregado, não proporcional à relevância estatística. Como a memória se organiza em torno de experiências vívidas, o cérebro usa esses poucos exemplos marcantes como base para generalizações amplas. Sem dados agregados, a intuição fica enviesada por episódios isolados.</p>",
      "<p>Quando você deixa o cérebro trabalhar só com o que lembra fácil, passa a dirigir olhando apenas para os últimos segundos do filme – e não para o filme inteiro.</p>"
    ],
    "triggerQuestion": "Antes de tomar decisões importantes com base em “impressões”, busque números: taxas médias de conversão, tempos de ciclo, distribuições de resultados. Ao consumir notícias e conteúdo, pergunte se aquele caso é representativo ou apenas outlier transformado em narrativa. Em gerenciamento de risco, complemente a percepção intuitiva com análises de base histórica mais ampla.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Empreendedores passam a acreditar que “todo mundo está ficando rico rápido com lançamentos digitais” porque o feed só mostra casos excepcionais.</li><li style='margin-bottom: 12px;'>Após um bug grave noticiado amplamente, clientes exigem mudanças urgentes em segurança, mesmo que a probabilidade daquele ataque específico seja baixa comparada a outras vulnerabilidades.</li><li style='margin-bottom: 12px;'>Gestores supervalorizam problemas que geraram crises públicas recentes e ignoram riscos silenciosos, porém estruturalmente mais perigosos.</li></ul>"
  },
  {
    "id": "inveja--envy",
    "slug": "inveja--envy",
    "name": "Inveja (Envy)",
    "thinker": "Charlie Munger",
    "color": "#94A3B8",
    "icon": "◈",
    "definition": "Inveja é o desconforto gerado ao comparar-se negativamente com o sucesso ou status de outra pessoa. Embora raramente admitida, ela direciona consumo, carreira e decisões financeiras mais do que métricas objetivas de bem-estar.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Não é a ganância, é a inveja que move o mundo.” – Atribuído a Charlie Munger*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>A inveja se alimenta de comparações relativas: o que importa não é apenas o que se tem, mas o quanto isso se destaca – ou não – em relação ao grupo de referência. Estudos em economia comportamental indicam que indivíduos frequentemente preferem ganhar menos em termos absolutos se isso significar ganhar mais do que os pares imediatos. Em ambientes digitais, onde sinais de status são continuamente exibidos, esse mecanismo é amplificado.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Da perspectiva evolutiva, acompanhar a posição relativa no grupo tinha importância direta para acesso a recursos e parceiros, o que explica a sensibilidade extrema a sinais de status. Hoje, essa sensibilidade é explorada por estratégias de marketing que associam produtos a estilos de vida aspiracionais, transformando consumo em teatro de superioridade simbólica. O modelo mental da inveja convida a enxergar essas dinâmicas com frieza, reduzindo sua influência sobre decisões estruturais.</p>",
      "<p>A inveja é péssima conselheira: faz você ganhar um jogo de aparências enquanto perde o jogo da vida real.</p>"
    ],
    "triggerQuestion": "Ao avaliar grandes compras ou mudanças de carreira, pergunte explicitamente: “Isso melhora minha vida concreta ou apenas meu placar imaginário com outras pessoas?”. Reforce métricas internas de progresso – como domínio de habilidades, qualidade de relacionamentos e liberdade de tempo – em vez de usar apenas sinais externos. Em marketing, use a compreensão de status com responsabilidade, associando posicionamento a realizações genuínas, não a comparações vazias.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Pessoas trocam de carro ou smartphone não por necessidade funcional, mas para sinalizar pertencimento a um determinado grupo.</li><li style='margin-bottom: 12px;'>Profissionais recusam oportunidades interessantes em áreas menos glamourosas porque temem perder prestígio perante o círculo social.</li><li style='margin-bottom: 12px;'>Empreendedores priorizam projetos que rendem cases “instagramáveis”, mesmo quando iniciativas discretas poderiam gerar mais lucro real.</li></ul>"
  },
  {
    "id": "evitacao-de-inconsistencia",
    "slug": "evitacao-de-inconsistencia",
    "name": "Evitação de Inconsistência",
    "thinker": "Estratégia Coletiva",
    "color": "#34D399",
    "icon": "⊛",
    "definition": "Evitação de inconsistência é a tendência de resistir a mudar de ideia depois de assumir uma postura de forma explícita, especialmente em público. O desejo de parecer coerente leva pessoas a manter compromissos ruins, mesmo quando novas evidências sugerem que deveriam recuar.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Depois que tomamos posição em público, ficamos prisioneiros dela.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>A necessidade de consistência é um dos princípios mais estudados em persuasão: uma vez que alguém se compromete com uma afirmação ou ação, cresce a probabilidade de continuar na mesma direção. Em nível psicológico, admitir erro ameaça a autoimagem e pode ser percebido como fraqueza perante o grupo, o que incentiva a racionalização de decisões passadas. Em organizações, isso se traduz em projetos que continuam recebendo recursos só porque alguém importante os patrocinou no início.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Evitação de inconsistência é, em parte, resultado de um mecanismo saudável: buscar coerência interna entre crenças e ações reduz conflito cognitivo. Porém, quando combinado com ego e exposição pública, transforma-se em prisão mental que impede ajustes de rota necessários. A cultura de punir quem muda de opinião, em vez de valorizar revisão baseada em novas evidências, agrava o problema.</p>",
      "<p>A verdadeira consistência valiosa não é insistir no erro, mas manter um compromisso inegociável com a realidade conforme ela se revela.</p>"
    ],
    "triggerQuestion": "Crie rituais explícitos para revisão de decisões, onde mudar de ideia seja visto como sinal de aprendizado, não de fraqueza. Ao defender uma tese, inclua desde o início condições de reversão: quais métricas, em qual prazo, fariam você abandonar o plano? Em comunicação externa, seja transparente sobre incertezas e hipóteses, reduzindo a pressão para parecer infalível.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um executivo mantém um produto no portfólio apesar de vendas fracas, para evitar admitir que a aposta original foi equivocada.</li><li style='margin-bottom: 12px;'>Um investidor se recusa a vender um ativo claramente problemático porque já defendeu publicamente sua tese em redes sociais.</li><li style='margin-bottom: 12px;'>Equipes evitam propor mudanças de rota estratégica para não desautorizar apresentações anteriores feitas à diretoria.</li></ul>"
  },
  {
    "id": "inversao",
    "slug": "inversao",
    "name": "Inversão",
    "thinker": "Charlie Munger",
    "color": "#FF6B6B",
    "icon": "⊙",
    "definition": "Pensar em como fracassar (para evitar) em vez de pensar em como ter sucesso.",
    "detailedContent": [],
    "triggerQuestion": "Liste 5 atitudes que quebrariam seu negócio digital em 6 meses, e crie barreiras contra elas.",
    "example": "Para ficar rico, o passo 1 é listar e fugir de apostas estúpidas que levam à ruína."
  },
  {
    "id": "pensamento-de-segunda-ordem",
    "slug": "pensamento-de-segunda-ordem",
    "name": "Pensamento de Segunda Ordem",
    "thinker": "Howard Marks",
    "color": "#4ECDC4",
    "icon": "⊕",
    "definition": "Perguntar sempre (E depois disso, o que acontece?).",
    "detailedContent": [],
    "triggerQuestion": "Antes da sua próxima decisão grande, anote as consequências esperadas daqui a 1 semana e daqui a 1 ano.",
    "example": "Demitir o suporte gera economia hoje (1ª ordem), mas mancha sua marca no ReclameAqui amanhã (2ª ordem)."
  },
  {
    "id": "custo-de-oportunidade",
    "slug": "custo-de-oportunidade",
    "name": "Custo de Oportunidade",
    "thinker": "Economia Clássica",
    "color": "#F59E0B",
    "icon": "⊟",
    "definition": "O valor real de uma escolha é aquilo que você precisou sacrificar para fazê-la.",
    "detailedContent": [],
    "triggerQuestion": "Defina o preço financeiro da sua hora e delegue qualquer tarefa operacional que custe menos que isso.",
    "example": "Passar 4 horas formatando um PDF custa as 4 horas que você poderia gastar fechando contratos High Ticket."
  },
  {
    "id": "margem-de-seguranca",
    "slug": "margem-de-seguranca",
    "name": "Margem de Segurança",
    "thinker": "Benjamin Graham",
    "color": "#FFE66D",
    "icon": "⊞",
    "definition": "Deixar espaço para o erro sistêmico.",
    "detailedContent": [],
    "triggerQuestion": "Quando um cliente perguntar o prazo de entrega, calcule o ideal e adicione 20% de \"gordura\".",
    "example": "Só colocar em testes de campanhas novas do Meta um orçamento que, se perdido 100%, não afeta sua vida pessoal."
  },
  {
    "id": "circulo-de-competencia",
    "slug": "circulo-de-competencia",
    "name": "Círculo de Competência",
    "thinker": "Warren Buffett",
    "color": "#A78BFA",
    "icon": "☽",
    "definition": "Operar apenas dentro do perímetro do que você entende profundamente.",
    "detailedContent": [],
    "triggerQuestion": "Escreva no bloco de notas 3 áreas que você domina e 3 áreas que você precisa ignorar porque não entende.",
    "example": "Focar em marketing direto, automações de IA e consultorias, evitando investir na nova criptomoeda exótica do dia."
  },
  {
    "id": "navalha-de-occam",
    "slug": "navalha-de-occam",
    "name": "Navalha de Occam",
    "thinker": "William de Ockham",
    "color": "#F97316",
    "icon": "⚑",
    "definition": "Entre duas explicações para o mesmo problema, a mais simples costuma ser a correta.",
    "detailedContent": [],
    "triggerQuestion": "Corte um passo desnecessário do seu funil de vendas ativo.",
    "example": "Se o lead do WhatsApp sumiu, ele não foi bloqueado pela operadora, a oferta apenas não foi boa o suficiente."
  },
  {
    "id": "navalha-de-hanlon",
    "slug": "navalha-de-hanlon",
    "name": "Navalha de Hanlon",
    "thinker": "Robert J. Hanlon",
    "color": "#38BDF8",
    "icon": "✧",
    "definition": "Nunca atribua à malícia o que pode ser explicado pela incompetência.",
    "detailedContent": [],
    "triggerQuestion": "Na próxima falha do fornecedor, assuma confusão e exija um processo melhor, não fique ofendido.",
    "example": "Seu parceiro não te copiou no e-mail para te sabotar, ele apenas estava desatento."
  },
  {
    "id": "o-mapa-nao-e-o-territorio",
    "slug": "o-mapa-nao-e-o-territorio",
    "name": "O Mapa Não é o Território",
    "thinker": "Alfred Korzybski",
    "color": "#E879F9",
    "icon": "Δ",
    "definition": "Planilhas e planos teóricos não sobrevivem perfeitamente ao contato com a realidade.",
    "detailedContent": [],
    "triggerQuestion": "Coloque o MVP rodando no mercado com verba mínima em vez de passar o mês refinando o planejamento.",
    "example": "O ROAS projetado de 10x na planilha despenca quando os clientes reais não entendem o criativo do anúncio."
  },
  {
    "id": "a-sindrome-do-homem-com-o-martelo",
    "slug": "a-sindrome-do-homem-com-o-martelo",
    "name": "A Síndrome do Homem com o Martelo",
    "thinker": "Estratégia Coletiva",
    "color": "#94A3B8",
    "icon": "∇",
    "definition": "Para quem só tem um martelo, qualquer problema parece prego.",
    "detailedContent": [],
    "triggerQuestion": "Quando empacar em um gargalo, peça opinião a alguém de um mercado completamente diferente do seu.",
    "example": "Um programador acha que falta de vendas se resolve refazendo código, enquanto o problema é a falta de tráfego."
  },
  {
    "id": "pensamento-por-primeiros-principios",
    "slug": "pensamento-por-primeiros-principios",
    "name": "Pensamento por Primeiros Princípios",
    "thinker": "Aristóteles / Elon Musk",
    "color": "#34D399",
    "icon": "⋈",
    "definition": "Desconstruir um problema até seus blocos fundamentais de verdade indiscutível.",
    "detailedContent": [],
    "triggerQuestion": "Pegue um (fato) aceito do seu mercado (Ex: preciso postar todo dia) e pergunte o porquê até chegar na base.",
    "example": "Em vez de cobrar igual ao concorrente pelo curso, calcule o custo do servidor, tráfego, seu tempo e construa o preço da base para cima."
  },
  {
    "id": "vantagem-competitiva--moat",
    "slug": "vantagem-competitiva--moat",
    "name": "Vantagem Competitiva (Moat)",
    "thinker": "Warren Buffett",
    "color": "#FF6B6B",
    "icon": "↻",
    "definition": "O fosso intransponível que protege seu lucro dos competidores.",
    "detailedContent": [],
    "triggerQuestion": "Liste um diferencial do seu serviço que seja absurdamente caro ou doloroso para um rival tentar copiar.",
    "example": "A burocracia complexa que você resolve para as famílias ricas cria uma barreira gigante para amadores tentarem roubar o cliente."
  },
  {
    "id": "economia-de-escala",
    "slug": "economia-de-escala",
    "name": "Economia de Escala",
    "thinker": "Estratégia Coletiva",
    "color": "#4ECDC4",
    "icon": "◇",
    "definition": "O custo por unidade despenca à medida que o volume aumenta.",
    "detailedContent": [],
    "triggerQuestion": "Aloque 20% do seu tempo de hoje criando um ativo de informação que possa ser vendido infinitas vezes.",
    "example": "Gravar as aulas e hospedar uma plataforma de IA tem o mesmo custo fixo para 10 ou 1.000 alunos."
  },
  {
    "id": "efeitos-de-rede",
    "slug": "efeitos-de-rede",
    "name": "Efeitos de Rede",
    "thinker": "Estratégia Coletiva",
    "color": "#F59E0B",
    "icon": "⊖",
    "definition": "O produto ganha mais valor para o usuário a cada novo usuário que entra.",
    "detailedContent": [],
    "triggerQuestion": "Crie um ambiente onde seus clientes interajam entre si e gerem dados ou negócios uns para os outros.",
    "example": "Um grupo ou comunidade de alunos onde o networking entre eles vira o produto principal."
  },
  {
    "id": "custos-de-troca--switching-costs",
    "slug": "custos-de-troca--switching-costs",
    "name": "Custos de Troca (Switching Costs)",
    "thinker": "Estratégia Coletiva",
    "color": "#FFE66D",
    "icon": "◌",
    "definition": "A dor de cabeça de mudar de fornecedor.",
    "detailedContent": [],
    "triggerQuestion": "Faça seu serviço ou consultoria se conectar intimamente à rotina operacional diária do cliente.",
    "example": "Empresas não trocam sistemas de CRM ruins porque o custo de treinar 50 funcionários de novo é altíssimo."
  },
  {
    "id": "alavancagem",
    "slug": "alavancagem",
    "name": "Alavancagem",
    "thinker": "Estratégia Coletiva",
    "color": "#A78BFA",
    "icon": "⟁",
    "definition": "Usar Código, Capital, Mídia ou Mão de obra para multiplicar seus resultados com o mesmo esforço de base.",
    "detailedContent": [],
    "triggerQuestion": "Identifique uma tarefa que consome 1h por dia e automatize-a hoje mesmo usando IA.",
    "example": "Um vídeo curto ou automação de disparo operando 24 horas por dia por você é alavancagem de mídia/código."
  },
  {
    "id": "destruicao-criativa",
    "slug": "destruicao-criativa",
    "name": "Destruição Criativa",
    "thinker": "Joseph Schumpeter",
    "color": "#F97316",
    "icon": "◎",
    "definition": "Inovações de base eliminam mercados velhos para criar novos.",
    "detailedContent": [],
    "triggerQuestion": "Defina hoje qual frente do seu modelo de negócios vai desaparecer com a IA, e seja o primeiro a fazer a transição.",
    "example": "Agências de tráfego braçal perdendo espaço para sistemas de otimização nativos e IAs focadas em criativos."
  },
  {
    "id": "gargalo--teoria-das-restricoes",
    "slug": "gargalo--teoria-das-restricoes",
    "name": "Gargalo (Teoria das Restrições)",
    "thinker": "Estratégia Coletiva",
    "color": "#38BDF8",
    "icon": "⟋",
    "definition": "O processo mais lento dita a velocidade máxima da empresa inteira.",
    "detailedContent": [],
    "triggerQuestion": "Encontre a etapa exata onde seus clientes abandonam o funil e melhore exclusivamente ela antes de escalar.",
    "example": "Injetar 5 mil reais no tráfego não serve de nada se você tem apenas uma pessoa fechando vendas no WhatsApp."
  },
  {
    "id": "selecao-adversa",
    "slug": "selecao-adversa",
    "name": "Seleção Adversa",
    "thinker": "Estratégia Coletiva",
    "color": "#E879F9",
    "icon": "⊘",
    "definition": "Assimetrias de regras atraem o tipo exato de pessoa que você não quer.",
    "detailedContent": [],
    "triggerQuestion": "Crie um filtro (como um formulário ou aumento de preço inicial) para remover clientes sugadores da sua agenda.",
    "example": "Oferecer 30 dias de teste gratuito num serviço de luxo só atrai curiosos sem dinheiro e entope o suporte."
  },
  {
    "id": "oferta-e-demanda",
    "slug": "oferta-e-demanda",
    "name": "Oferta e Demanda",
    "thinker": "Estratégia Coletiva",
    "color": "#94A3B8",
    "icon": "◈",
    "definition": "O preço sobe na escassez e desaba na abundância.",
    "detailedContent": [],
    "triggerQuestion": "Crie escassez verídica de tempo ou assentos para o seu próximo produto e aumente o preço.",
    "example": "CPM de anúncios subindo estratosfericamente nas semanas de Black Friday devido à alta procura de empresas por atenção."
  },
  {
    "id": "agente-principal--problema-de-agencia",
    "slug": "agente-principal--problema-de-agencia",
    "name": "Agente-Principal (Problema de Agência)",
    "thinker": "Estratégia Coletiva",
    "color": "#34D399",
    "icon": "⊛",
    "definition": "Quem gerencia as operações tem incentivos conflitantes com os interesses de quem é o dono do dinheiro.",
    "detailedContent": [],
    "triggerQuestion": "Alinhe financeiramente a sua equipe (ou você com os clientes de holding) atrelando bônus diretamente aos resultados finais.",
    "example": "O gestor terceirizado torra a verba para mostrar (alcance), enquanto você, o dono, só quer (lucro)."
  },
  {
    "id": "juros-compostos--compounding",
    "slug": "juros-compostos--compounding",
    "name": "Juros Compostos (Compounding)",
    "thinker": "Albert Einstein / Naval",
    "color": "#FF6B6B",
    "icon": "⊙",
    "definition": "Crescimento exponencial contínuo; funciona para dinheiro, hábitos e conhecimento.",
    "detailedContent": [],
    "triggerQuestion": "Escolha um único hábito intelectual focado de 20 minutos diários e não quebre a rotina nesta semana.",
    "example": "Aprender um pouco de prompt engineering todo dia te dá capacidade de montar produtos complexos em 6 meses que novatos não alcançam."
  },
  {
    "id": "valor-esperado--ev",
    "slug": "valor-esperado--ev",
    "name": "Valor Esperado (EV)",
    "thinker": "Blaise Pascal / Von Neumann",
    "color": "#4ECDC4",
    "icon": "⊕",
    "definition": "O balanço matemático entre a probabilidade de acerto (vezes o prêmio) e a probabilidade de erro (vezes o custo).",
    "detailedContent": [],
    "triggerQuestion": "Antes de comprar tráfego amanhã, verifique mentalmente se a pior hipótese custa pouco e a melhor hipótese paga todo o risco.",
    "example": "Investir R$ 200 para testar um funil com 10% de chance de ganhar um contrato anual de R$ 10.000 é um EV extremamente alto."
  },
  {
    "id": "assimetria-de-risco",
    "slug": "assimetria-de-risco",
    "name": "Assimetria de Risco",
    "thinker": "Nassim Taleb",
    "color": "#F59E0B",
    "icon": "⊟",
    "definition": "Estruturas onde você perde muito pouco se der errado, mas o teto de ganhos é incalculável.",
    "detailedContent": [],
    "triggerQuestion": "Mate hoje qualquer projeto na sua gaveta que consuma seu tempo de forma fixa (alto custo) com teto baixo de faturamento.",
    "example": "Lançar um infoproduto gravado. Seu custo foi apenas o tempo de fim de semana, mas pode escalar infinitamente."
  },
  {
    "id": "regressao-a-media",
    "slug": "regressao-a-media",
    "name": "Regressão à Média",
    "thinker": "Estratégia Coletiva",
    "color": "#FFE66D",
    "icon": "⊞",
    "definition": "Após resultados atípicos ou extremos, o sistema tende a voltar para a média histórica.",
    "detailedContent": [],
    "triggerQuestion": "Não mude completamente sua estratégia comercial baseando-se em apenas um pico isolado (para cima ou para baixo).",
    "example": "O ROAS estúpido de 15x de segunda-feira fatalmente vai cair para 3x até o domingo."
  },
  {
    "id": "lei-dos-grandes-numeros",
    "slug": "lei-dos-grandes-numeros",
    "name": "Lei dos Grandes Números",
    "thinker": "Estratégia Coletiva",
    "color": "#A78BFA",
    "icon": "☽",
    "definition": "Padrões sólidos exigem amostragem volumosa, pois testes pequenos engolem flutuações.",
    "detailedContent": [],
    "triggerQuestion": "Espere pelo menos bater um número estatisticamente relevante (Ex: 100 leads) antes de decretar o fim de uma estratégia.",
    "example": "Desligar um anúncio porque os 5 primeiros cliques não compraram, jogando fora o potencial de otimização de campanha."
  },
  {
    "id": "caudas-gordas--cisnes-negros",
    "slug": "caudas-gordas--cisnes-negros",
    "name": "Caudas Gordas (Cisnes Negros)",
    "thinker": "Nassim Taleb",
    "color": "#F97316",
    "icon": "⚑",
    "definition": "A vida real não é uma curva normal perfeita; eventos imprevisíveis causam a maior parte da destruição ou da riqueza.",
    "detailedContent": [],
    "triggerQuestion": "Olhe para o seu caixa hoje. Ele sobrevive a 3 meses de interrupção forçada se sua principal fonte de aquisição quebrar?",
    "example": "Mudanças súbitas e devastadoras no algoritmo de entrega do Instagram que apagam negócios da noite para o dia."
  },
  {
    "id": "redundancia--backups",
    "slug": "redundancia--backups",
    "name": "Redundância (Backups)",
    "thinker": "Estratégia Coletiva",
    "color": "#38BDF8",
    "icon": "✧",
    "definition": "Camadas de segurança parciais para que a falha de uma peça não derrube o sistema inteiro.",
    "detailedContent": [],
    "triggerQuestion": "Faça backup offline do contato dos seus clientes principais e dos dados financeiros mais críticos da holding.",
    "example": "Estruturas de contingência com múltiplos BMs, perfis e contas de anúncios caso o Meta bloqueie um administrador."
  },
  {
    "id": "massa-critica--tipping-point",
    "slug": "massa-critica--tipping-point",
    "name": "Massa Crítica (Tipping Point)",
    "thinker": "Estratégia Coletiva",
    "color": "#E879F9",
    "icon": "Δ",
    "definition": "O limite exato de energia injetada onde a mudança ganha ritmo automático.",
    "detailedContent": [],
    "triggerQuestion": "Insista brutalmente no operacional não escalável (como vendas via 1 a 1) até juntar avaliações suficientes para a máquina rodar sozinha.",
    "example": "Um infoproduto não traciona até conseguir dezenas de depoimentos base; depois que a prova social se forma, ele se vende sozinho."
  },
  {
    "id": "sistemas-complexos--nao-linearidade",
    "slug": "sistemas-complexos--nao-linearidade",
    "name": "Sistemas Complexos (Não-linearidade)",
    "thinker": "Estratégia Coletiva",
    "color": "#94A3B8",
    "icon": "∇",
    "definition": "Mais força aplicada nem sempre gera resultados proporcionais na ponta.",
    "detailedContent": [],
    "triggerQuestion": "Pare de socar recursos em um processo desgastado. Gaste o tempo pivotando a oferta criativa.",
    "example": "Injetar o triplo de dinheiro no mesmo criativo e no mesmo público não te dará o triplo de vendas (satura a frequência)."
  },
  {
    "id": "ciclos-de-feedback--loops",
    "slug": "ciclos-de-feedback--loops",
    "name": "Ciclos de Feedback (Loops)",
    "thinker": "Estratégia Coletiva",
    "color": "#34D399",
    "icon": "⋈",
    "definition": "Processos onde a saída anterior é utilizada como a entrada seguinte do sistema.",
    "detailedContent": [],
    "triggerQuestion": "Bloqueie na agenda de sexta-feira 15 minutos focados exclusivamente em revisão de métricas para definir o loop tático da semana seguinte.",
    "example": "O Pixel de inteligência aprendendo quem compra (Feedback Positivo) para buscar leads idênticos cada vez mais qualificados."
  }
];
