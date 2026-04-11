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
    "triggerQuestion": "Antes de tomar decisões importantes com base em “impressões”, busque números: taxas médias de conversão, tempos de ciclo, distribuições de resultados. Ao consumir notícias e conteúdo, pergunte se aquele caso é representativo ou apenas um outlier transformado em narrativa. Em gerenciamento de risco, complemente a percepção intuitiva com análises de base histórica mais ampla.",
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
    "definition": "Inversão é o hábito de pensar em como falhar – e então remover sistematicamente esses caminhos – antes de focar em como vencer. Em vez de só otimizar para o sucesso, você protege o sistema contra as formas mais prováveis de ruína.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Evite a estupidez com ainda mais energia do que busca a genialidade.” – Parafraseando Munger*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Inversão vem da matemática e da lógica: alguns problemas ficam mais simples quando virados ao avesso. Em vez de perguntar “como eu construo um negócio gigante?”, a pergunta torna-se “como eu certamente quebraria esse negócio em poucos meses?”. A resposta revela riscos negligenciados – como dependência de um único canal de aquisição ou concentração excessiva de receita em um cliente – que podem ser mitigados antes de escalar.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Pensar por inversão não é pessimismo; é engenharia de robustez. Ao reconhecer que muitos erros são evitáveis com um pouco de imaginação negativa, você reduz a dependência de “boa sorte”. Isso é especialmente relevante em sistemas com caudas gordas, em que um único erro grave pode anular anos de acertos.</p>",
      "<p>A genialidade raramente é necessária; evitar meia dúzia de erros previsíveis já coloca você na frente da maioria.</p>"
    ],
    "triggerQuestion": "Antes de lançar um produto, fazer uma grande contratação ou assumir um compromisso financeiro relevante, escreva: “como isso poderia dar muito errado?”. Transforme cada item em um plano de mitigação ou em uma condição de não prosseguir. Em rotinas, aplique inversão para hábitos: pergunte “o que eu preciso parar de fazer para não sabotar meu próprio progresso?”.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um investidor define cenários claros que o fariam encerrar uma posição, evitando ser pego por narrativas otimistas depois que os fatos mudam.</li><li style='margin-bottom: 12px;'>Um empreendedor lista as formas mais prováveis de falência (processos jurídicos, perda de reputação, crises de caixa) e trata cada uma como uma categoria de risco a ser gerida.</li><li style='margin-bottom: 12px;'>Um time de produto mapeia como destruiria a experiência do usuário – aumentando fricção, instabilidade ou confusão – e cria checklists para evitar esses pontos.</li></ul>"
  },
  {
    "id": "pensamento-de-segunda-ordem",
    "slug": "pensamento-de-segunda-ordem",
    "name": "Pensamento de Segunda Ordem",
    "thinker": "Howard Marks",
    "color": "#4ECDC4",
    "icon": "⊕",
    "definition": "Pensamento de segunda ordem é a disciplina de olhar além da consequência imediata de uma decisão e considerar efeitos em cadeia, no tempo e no sistema. Muitas decisões “boas” de primeira ordem geram danos quando seus desdobramentos são ignorados.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Depois disso, o que acontece?”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Decisões de primeira ordem focam no impacto direto: cortar custos aumenta a margem hoje, por exemplo. Pensamento de segunda ordem pergunta o que acontece depois – com marca, atendimento, moral do time, churn. Em sistemas complexos, onde variáveis interagem, ignorar essas camadas é uma das fontes mais comuns de erro gerencial.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Pensar em segunda ordem significa enxergar decisões como parte de um sistema dinâmico e não como eventos isolados. Em muitos casos, efeitos de segunda ordem têm magnitude maior que os de primeira; o problema é que aparecem mais tarde, quando a ligação causal já não é tão óbvia. A disciplina é perguntar sistematicamente “e depois?” até onde fizer sentido.</p>",
      "<p>Quem só pensa na próxima jogada vive apagando incêndio; quem pensa em segunda e terceira ordem constrói jogos onde os incêndios param de surgir.</p>"
    ],
    "triggerQuestion": "Para cada decisão relevante, crie duas linhas do tempo: consequências esperadas em uma semana, em um trimestre e em um ano. Discuta com o time quais efeitos colaterais podem surgir em reputação, pessoas e finanças. Prefira estratégias que sejam boas em primeira ordem e não destrutivas em segunda, mesmo que o benefício imediato pareça menor.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Demitir equipe de suporte reduz despesas no trimestre, mas aumenta reclamações públicas, reduzindo aquisição orgânica nos meses seguintes.</li><li style='margin-bottom: 12px;'>Oferecer descontos agressivos gera pico de receita na abertura de carrinho, mas “educa” o mercado a só comprar em promoção.</li><li style='margin-bottom: 12px;'>Forçar o time a trabalhar no limite aumenta entregas no curto prazo, mas gera burnout, perda de talentos e custos de substituição elevados.</li></ul>"
  },
  {
    "id": "custo-de-oportunidade",
    "slug": "custo-de-oportunidade",
    "name": "Custo de Oportunidade",
    "thinker": "Economia Clássica",
    "color": "#F59E0B",
    "icon": "⊟",
    "definition": "Custo de oportunidade é o valor do melhor uso alternativo de um recurso – tempo, dinheiro, atenção – que você sacrifica ao fazer uma escolha. Toda decisão “barata” pode ser cara se ocupa espaço que poderia ser usado em algo muito mais valioso.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“O preço de qualquer coisa é a quantidade de vida que você troca por ela.” – Henry David Thoreau*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Na economia, custo de oportunidade é o benefício que se deixa de obter ao escolher uma alternativa em vez de outra. No cotidiano, isso significa que aceitar um projeto de ticket médio baixo pode parecer racional isoladamente, mas é irracional se impede dedicar tempo a prospects muito melhores. Como tempo é não reembolsável, o custo de oportunidade sobre ele costuma ser o mais crítico.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>O cérebro tende a focar em custos e ganhos explícitos – o que é cobrado, o que é pago – e negligencia o que foi deixado de lado. Isso cria a ilusão de que algumas escolhas são “de graça” em termos de tempo ou foco, quando na verdade estão canibalizando espaço para atividades de maior retorno composto. O modelo de custo de oportunidade convida a enxergar cada sim como um não para algo invisível.</p>",
      "<p>Quando você passa a ver o custo de oportunidade claramente, muitos convites “honrosos” e tarefas “urgentes” revelam-se apenas formas caras de evitar o trabalho que realmente importa.</p>"
    ],
    "triggerQuestion": "Defina um valor de referência para a sua hora de trabalho, baseado em quanto você deseja ganhar e em quantas horas produtivas tem por semana. Avalie tarefas: se alguém pode fazer por menos que isso com qualidade aceitável, delegue ou elimine. Periodicamente, revise agenda e carteira de projetos perguntando: “se eu estivesse começando do zero hoje, escolheria estes mesmos compromissos?”.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Passar tardes formatando apresentações em vez de usar o mesmo tempo para falar com potenciais clientes de alto valor.</li><li style='margin-bottom: 12px;'>Manter linhas de serviço de baixa margem que ocupam grande parte da equipe e impedem desenvolver soluções escaláveis.</li><li style='margin-bottom: 12px;'>Gastar energia em discussões improdutivas em redes sociais enquanto projetos importantes acumulam atraso.</li></ul>"
  },
  {
    "id": "margem-de-seguranca",
    "slug": "margem-de-seguranca",
    "name": "Margem de Segurança",
    "thinker": "Benjamin Graham",
    "color": "#FFE66D",
    "icon": "⊞",
    "definition": "Margem de segurança é a folga deliberada entre o que você espera acontecer e o que o sistema suporta sem quebrar. Ela reconhece que modelos estão errados e cria espaço para erro, azar e eventos inesperados.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Nunca teste a profundidade do rio com os dois pés.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>O conceito vem de engenharia e investimento: um engenheiro dimensiona uma ponte para suportar muito mais do que a carga típica; investidores compram ativos com desconto em relação ao valor estimado. A margem de segurança protege contra imprecisões nos modelos e choques externos que não estavam nas planilhas.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Margem de segurança é um reconhecimento humilde de que o futuro nunca segue exatamente o plano. Pequenos erros de estimativa, atrasos, problemas técnicos e mudanças de mercado são a regra, não exceção. Sem margem, qualquer desvio vira crise; com margem, muitos problemas são absorvidos sem drama.</p>",
      "<p>Quem vive sem margem de segurança talvez ganhe alguns centímetros de velocidade no curto prazo, mas está sempre a um tropeço de cair do penhasco.</p>"
    ],
    "triggerQuestion": "Ao planejar projetos, some um percentual de folga realista a prazos e orçamentos. Em finanças pessoais e empresariais, trate reserva de emergência como infraestrutura, não como luxo. Nas apostas de crescimento, pergunte: “se tudo der errado, isso me quebra ou apenas dói um pouco?”. Evite decisões cuja pior hipótese seja inaceitável.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Manter reserva de caixa suficiente para cobrir alguns meses de despesas fixas, em vez de operar sempre no limite do fluxo de caixa.</li><li style='margin-bottom: 12px;'>Definir prazos de entrega que incluam folga realista para imprevistos, em vez de prometer o cenário ideal ao cliente.</li><li style='margin-bottom: 12px;'>Limitar o orçamento de testes em canais novos a um valor que, se perdido integralmente, não comprometa o negócio.</li></ul>"
  },
  {
    "id": "circulo-de-competencia",
    "slug": "circulo-de-competencia",
    "name": "Círculo de Competência",
    "thinker": "Warren Buffett",
    "color": "#A78BFA",
    "icon": "☽",
    "definition": "Círculo de competência é o conjunto de áreas em que você realmente entende o suficiente para avaliar riscos e oportunidades com discernimento. Operar fora dele aumenta brutalmente as chances de erro grave.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“É melhor ter um pequeno círculo de competência e ficar dentro dele do que fingir que entende o que não entende.” – Warren Buffett*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Buffett e Munger popularizaram a ideia de que não é necessário – nem possível – entender tudo, mas é crucial saber claramente o que se entende e o que não se entende. Dentro do círculo, sua intuição é calibrada pelo acúmulo de experiência; fora dele, a mesma intuição pode ser perigosa. Em temas complexos, os custos de estar enganado são amplificados.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>O círculo de competência não é estático, mas expandi-lo exige estudo deliberado, prática e feedback real, não apenas consumo superficial de conteúdo. O problema é que a combinação de excesso de confiança e prova social torna tentador operar em áreas onde o entusiasmo coletivo substitui o conhecimento profundo. O modelo convida a mapear conscientemente zonas de ignorância.</p>",
      "<p>Saber onde você não deve jogar é tão importante quanto encontrar onde tem vantagem; ignorar essa fronteira é terceirizar seu destino para a sorte.</p>"
    ],
    "triggerQuestion": "Liste em poucas linhas as áreas em que você tem histórico comprovado de decisões boas repetidas. Em seguida, liste domínios onde seu conhecimento é raso ou baseado apenas em narrativa. Use essa distinção para decidir onde assumir riscos maiores e onde ser conservador ou simplesmente dizer “não sei”. Em novos temas, entre com tickets pequenos e foco em aprendizado, não em retorno imediato.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um profissional de marketing digital que conhece profundamente tráfego pago e funis, mas decide especular em derivativos complexos sem estudo prévio.</li><li style='margin-bottom: 12px;'>Um médico que tenta gerenciar sozinho investimentos de alto risco em empresas de tecnologia sem compreender o setor.</li><li style='margin-bottom: 12px;'>Um empreendedor em serviços B2B que resolve “aproveitar uma oportunidade” em criptomoedas exóticas apenas porque ouviu histórias de enriquecimento rápido.</li></ul>"
  },
  {
    "id": "navalha-de-occam",
    "slug": "navalha-de-occam",
    "name": "Navalha de Occam",
    "thinker": "William de Ockham",
    "color": "#F97316",
    "icon": "⚑",
    "definition": "Navalha de Occam é o princípio que recomenda, entre explicações que competem e têm o mesmo poder explicativo, preferir a mais simples. Não por estética, mas porque hipóteses extras são pontos adicionais de possível erro.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Entia non sunt multiplicanda praeter necessitatem.” – Guilherme de Ockham*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>A formulação original da navalha de Occam surgiu no contexto filosófico e depois foi adotada em ciência como guia metodológico. Quando duas teorias explicam igualmente bem os dados disponíveis, a mais parcimoniosa tende a ser mais robusta, pois assume menos entidades, causas ou mecanismos não observados. Isso não significa que a realidade seja sempre simples, mas que a complexidade deve ser introduzida apenas quando necessária.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>A navalha de Occam protege contra narrativas rebuscadas criadas para preservar egos ou crenças queridas. É mais confortável culpar fatores misteriosos e externos do que admitir causas simples, porém incômodas, como falta de clareza estratégica. Em ciência e em negócios, explicações simples, bem testadas, frequentemente ganham de teorias grandiosas mas pouco ancoradas em dados.</p>",
      "<p>Profundidade não exige complicação; na maioria das vezes, encarar a explicação simples é mais difícil emocionalmente do que inventar histórias sofisticadas.</p>"
    ],
    "triggerQuestion": "Diante de um problema, liste as explicações possíveis e pergunte: “qual delas exige menos suposições extras?”. Comece testando essas causas simples antes de partir para hipóteses complexas. Em comunicações com clientes e stakeholders, simplifique descrições de soluções até o ponto em que continuem corretas; complexidade desnecessária é muitas vezes um disfarce para falta de entendimento.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um anúncio que performou mal pode ser explicado, mais provavelmente, por uma oferta fraca ou creativos confusos do que por uma conspiração de concorrentes.</li><li style='margin-bottom: 12px;'>Uma queda de produtividade em um time é mais plausivelmente causada por metas mal definidas e falta de foco do que por sabotagem deliberada.</li><li style='margin-bottom: 12px;'>Um bug recorrente em software costuma ser fruto de um erro específico de implementação, não de uma “maldição” difusa da tecnologia.</li></ul>"
  },
  {
    "id": "navalha-de-hanlon",
    "slug": "navalha-de-hanlon",
    "name": "Navalha de Hanlon",
    "thinker": "Robert J. Hanlon",
    "color": "#38BDF8",
    "icon": "✧",
    "definition": "Navalha de Hanlon recomenda evitar interpretar falhas como resultado de intenções maldosas quando causas mais comuns, como distração, desorganização ou desconhecimento, são suficientes para explicar o ocorrido.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Nunca atribua à malícia o que pode ser adequadamente explicado pela incompetência.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>No dia a dia, é tentador assumir que erros que nos prejudicam foram cometidos de propósito – por desrespeito, inveja ou sabotagem. No entanto, estatisticamente, a maioria dos problemas organizacionais decorre de sistemas mal desenhados, falta de treinamento ou sobrecarga, não de plano deliberado de dano. A navalha de Hanlon é um lembrete pragmático de que malícia é cara, enquanto incompetência é abundante.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Assumir malícia gatilha respostas emocionais intensas – raiva, ressentimento – que dificultam resolver o problema real. Ao considerar primeiro hipóteses de confusão ou falta de capacidade, você tende a responder com perguntas, ajustes de processo e acordos mais claros. Isso não significa descartar completamente a possibilidade de má fé, mas tratá-la como última hipótese, não como atalho automático.</p>",
      "<p>Ao trocar suspeita automática por curiosidade estruturada, você economiza energia emocional e aumenta a chance de evoluir a qualidade dos relacionamentos e dos sistemas que coordena.</p>"
    ],
    "triggerQuestion": "Quando algo der errado, formule primeiro uma pergunta neutra em vez de uma acusação: “Pode me explicar o que aconteceu do seu lado?”. Observe se padrões de falha se repetem mesmo após tentativas de melhoria; aí, sim, reavalie incentivos ou caráter. Em liderança, despersonalize problemas e foque em sistemas: “que processo permitiria que esse erro fosse menos provável de se repetir?”.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um fornecedor atrasa uma entrega crítica não por querer prejudicar sua empresa, mas porque opera sem processos robustos de controle de prazo.</li><li style='margin-bottom: 12px;'>Um colaborador deixa você fora de uma comunicação importante não para “cortar” sua participação, mas porque não tem clareza sobre quem deve ser copiado.</li><li style='margin-bottom: 12px;'>Um cliente responde de forma ríspida em um e-mail não por desprezar seu trabalho, mas porque está sob pressão com múltiplos problemas simultâneos.</li></ul>"
  },
  {
    "id": "o-mapa-nao-e-o-territorio",
    "slug": "o-mapa-nao-e-o-territorio",
    "name": "O Mapa Não é o Território",
    "thinker": "Alfred Korzybski",
    "color": "#E879F9",
    "icon": "Δ",
    "definition": "Qualquer modelo, planilha ou framework é apenas uma representação simplificada da realidade. Tratar o mapa como se fosse o próprio terreno leva a decisões ruins quando o contexto muda ou quando a simplificação ignora fatores críticos.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“O mapa não é o território.” – Alfred Korzybski*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Korzybski popularizou a ideia de que a linguagem e os modelos não capturam a totalidade do mundo que representam. Em negócios, projeções financeiras, personas de marketing e fluxos de funil são mapas: úteis, mas necessariamente incompletos. Confundir essas abstrações com a realidade é esquecer que suposições foram embutidas nelas – e que muitas se tornarão falsas com o tempo.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Mapas são indispensáveis porque permitem raciocinar sobre sistemas complexos sem precisar experimentar tudo diretamente. O problema surge quando são tratados como dogmas – “se está no slide, é verdade”. A realidade é sempre mais granular e imprevisível que qualquer modelo; o papel do mapa é ser revisado à luz de dados empíricos, não proteger o ego de quem o criou.</p>",
      "<p>Quem entende que o mapa não é o território usa modelos como instrumentos de navegação flexíveis; quem esquece isso acaba brigando com o terreno em vez de ajustar a rota.</p>"
    ],
    "triggerQuestion": "Ao construir planos e modelos, registre explicitamente as principais suposições por trás deles. Em operação, trate indicadores do mundo real como árbitros finais: se os números divergem muito do esperado, atualize o mapa em vez de forçar a realidade a caber na projeção. Use MVPs, testes pequenos e feedback de usuários para colocar seus mapas à prova o mais cedo possível.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um plano de mídia promete ROAS 10x baseado em benchmarks, mas quando a campanha roda, clientes reais não reagem como o “cliente ideal” da planilha.</li><li style='margin-bottom: 12px;'>Um manual de processos descreve um fluxo perfeito, ignorando improvisos que a equipe precisa fazer diariamente para contornar limitações de sistema.</li><li style='margin-bottom: 12px;'>Projeções de crescimento assumem CAC constante, desconsiderando saturação de audiência e mudanças em leilões de mídia.</li></ul>"
  },
  {
    "id": "a-sindrome-do-homem-com-o-martelo",
    "slug": "a-sindrome-do-homem-com-o-martelo",
    "name": "A Síndrome do Homem com o Martelo",
    "thinker": "Estratégia Coletiva",
    "color": "#94A3B8",
    "icon": "∇",
    "definition": "A síndrome do homem com o martelo descreve a tendência de aplicar a mesma ferramenta mental ou técnica a qualquer problema, apenas porque ela é familiar. Isso leva a soluções parciais ou inadequadas, principalmente em ambientes multidisciplinares.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Para quem só tem um martelo, tudo parece prego.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Munger usa essa metáfora para ressaltar o perigo de ter um repertório estreito de modelos mentais. Profissionais altamente especializados são particularmente vulneráveis: sua formação os leva a enxergar desafios pelo prisma em que se sentem mais competentes – código, design, jurídico, tráfego – mesmo quando outros ângulos seriam mais relevantes.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>A síndrome do martelo é confortável: aplicar a mesma solução repetidamente reforça a sensação de domínio. Porém, em sistemas complexos, problemas têm múltiplas camadas – técnica, humana, econômica, cultural – que raramente se resolvem com uma única lente. Ter uma caixa de ferramentas rica significa saber quando seu martelo é útil e quando é hora de buscar chave de fenda, alicate ou alguém de outra área.</p>",
      "<p>O martelo continua valioso – desde que você tenha mais ferramentas à mão e saiba quando ele não é a melhor escolha.</p>"
    ],
    "triggerQuestion": "Ao enfrentar um problema persistente, pergunte: “Que tipo de profissional ou disciplina diria que esse problema é dela?”. Confronte sua hipótese com pelo menos outra leitura vinda de alguém de um campo diferente. Em desenvolvimento de produtos e estratégias, monte times deliberadamente diversos em background para ampliar o conjunto de modelos disponíveis.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um programador insiste em resolver um problema de vendas reconstruindo o site, quando o gargalo real está na oferta e na qualificação de leads.</li><li style='margin-bottom: 12px;'>Um advogado tenta enquadrar um conflito de sócios apenas como disputa contratual, ignorando completamente a dimensão estratégica e relacional.</li><li style='margin-bottom: 12px;'>Um especialista em tráfego empurra mais mídia para um funil que já está convertendo mal, em vez de revisar a narrativa e o produto em si.</li></ul>"
  },
  {
    "id": "pensamento-por-primeiros-principios",
    "slug": "pensamento-por-primeiros-principios",
    "name": "Pensamento por Primeiros Princípios",
    "thinker": "Aristóteles / Elon Musk",
    "color": "#34D399",
    "icon": "⋈",
    "definition": "Pensar por primeiros princípios é decompor um problema até seus elementos básicos – restrições físicas, lógicas e econômicas – e reconstruir a solução a partir dessas bases, em vez de copiar soluções existentes por analogia.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Desconstrua as coisas até as verdades fundamentais e, a partir daí, raciocine.” – Parafraseando Elon Musk*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Na filosofia e na ciência, primeiros princípios são proposições tão fundamentais que não dependem de outras para serem validadas. Em negócios, isso significa separar o que é realmente necessário – como custo de insumos, limitações técnicas e requisitos do cliente – de convenções herdadas do mercado. Analogias são úteis, mas podem manter ineficiências intactas; primeiros princípios liberam espaço para desenhar algo genuinamente novo.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Pensar por primeiros princípios exige esforço e desconforto, porque retira muletas culturais que davam uma sensação de segurança – “sempre foi assim”. Ao desmontar um problema até o osso, fica mais claro o que é variável e o que é inegociável. Muitas soluções criativas nascem de perceber que certas “regras” eram apenas hábitos do setor, não leis da natureza.</p>",
      "<p>Primeiros princípios não garantem respostas fáceis, mas garantem que você esteja pensando com as próprias pernas, não apenas andando em trilhas abertas por outros.</p>"
    ],
    "triggerQuestion": "Escolha um problema importante do seu negócio e escreva tudo o que você assume como verdade sobre ele. Questione cada item: “isso é necessariamente verdadeiro ou é apenas o jeito como todo mundo faz?”. Use a técnica dos “5 porquês” até chegar em restrições físicas, lógicas ou econômicas claras. A partir daí, explore combinações de soluções que respeitem apenas essas restrições, não as convenções.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Em vez de precificar um curso apenas olhando concorrentes, o empreendedor calcula custos reais de produção, suporte, tráfego e margem desejada, e só então define o preço.</li><li style='margin-bottom: 12px;'>Em vez de assumir que “é preciso escritório físico”, um time remoto lista necessidades reais – comunicação, colaboração, foco – e encontra maneiras digitais de atendê-las.</li><li style='margin-bottom: 12px;'>Ao projetar um produto de IA, a equipe parte do problema do usuário e das limitações atuais dos modelos, em vez de tentar encaixar capacidades de moda em casos de uso artificiais.</li></ul>"
  },
  {
    "id": "vantagem-competitiva--moat",
    "slug": "vantagem-competitiva--moat",
    "name": "Vantagem Competitiva (Moat)",
    "thinker": "Warren Buffett",
    "color": "#FF6B6B",
    "icon": "↻",
    "definition": "Vantagem competitiva é o conjunto de características que permite a uma empresa sustentar lucros acima da média, mesmo sob ataque de concorrentes. É o “fosso” que protege o castelo do negócio.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“No longo prazo, a chave é ter uma grande vantagem competitiva e mantê-la.” – Warren Buffett*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Em estratégia, vantagem competitiva pode vir de vários fatores: marca forte, efeito de rede, propriedade intelectual, custos estruturais menores, acesso privilegiado a canais ou dados proprietários. Sem um fosso defensável, qualquer lucro atrai imitadores que rapidamente comprimem margens.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Vantagem competitiva não é apenas “ser melhor”, mas ser difícil de copiar. Inovações que podem ser replicadas rapidamente geram apenas ganhos temporários. Fossos verdadeiros costumam envolver efeitos de escala, lock-in de usuários, ativos intangíveis construídos ao longo do tempo ou barreiras regulatórias.</p>",
      "<p>Sem vantagem competitiva, toda vitória é provisória; com um fosso bem construído, até erros pontuais são absorvidos sem destruir o castelo.</p>"
    ],
    "triggerQuestion": "Liste seus diferenciais atuais e pergunte, para cada um, “quanto tempo e dinheiro um concorrente precisaria para copiar isso com qualidade similar?”. Foque em ampliar elementos que tenham resposta “muito tempo/muito dinheiro”: bases de dados, comunidades engajadas, processos proprietários, conteúdo único. Evite competir apenas em preço ou features facilmente imitáveis.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Uma plataforma de comunidade de alunos cria vínculos e conteúdos gerados pelo usuário que são difíceis de replicar por concorrentes.</li><li style='margin-bottom: 12px;'>Uma consultoria constrói especialização profunda em um nicho regulatório complexo, tornando a entrada de novos players demorada e cara.</li><li style='margin-bottom: 12px;'>Um software acumula histórico de dados e integrações tão profundas no fluxo de trabalho do cliente que alternativas genéricas não conseguem competir em valor percebido.</li></ul>"
  },
  {
    "id": "economia-de-escala",
    "slug": "economia-de-escala",
    "name": "Economia de Escala",
    "thinker": "Estratégia Coletiva",
    "color": "#4ECDC4",
    "icon": "◇",
    "definition": "Economia de escala ocorre quando o custo médio por unidade cai à medida que o volume aumenta. Em modelos digitais, isso é especialmente poderoso porque criar o produto é caro, mas replicá-lo é quase de graça.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Custos fixos altos e custos marginais baixos são terreno fértil para escala.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Em termos econômicos, empresas com custos fixos relevantes (infraestrutura, desenvolvimento, conteúdo) e custos variáveis pequenos por unidade produzida se beneficiam de diluição de custo à medida que atendem mais clientes. Softwares, plataformas de IA e infoprodutos são exemplos clássicos: desenvolver o curso ou a ferramenta é caro; vender para o milésimo cliente pouco altera o custo total.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Economia de escala cria vantagem competitiva porque players maiores podem operar com margens melhores ou preços mais agressivos sem perder rentabilidade. No entanto, perseguir escala sem modelo unit economics saudável apenas amplia prejuízos. Escalar algo que dá prejuízo por unidade é escalar um problema.</p>",
      "<p>Quando bem aproveitada, economia de escala transforma esforços pontuais em máquinas de resultado; quando ignorada, deixa você preso a trabalhos que recomeçam do zero todo mês.</p>"
    ],
    "triggerQuestion": "Identifique atividades do seu negócio com alto custo inicial e potencial de reaproveitamento: conteúdos, templates, produtos digitais, automações. Priorize a criação de ativos replicáveis em vez de apenas vender horas. Antes de buscar volume, garanta que cada unidade vendida tenha margem positiva após considerar custos diretos.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um curso gravado em vídeo exige esforço intenso inicial, mas pode ser vendido para milhares de pessoas com custo marginal próximo de zero.</li><li style='margin-bottom: 12px;'>Um SaaS de automação de marketing precisa de investimento pesado em desenvolvimento, mas cada novo usuário adicional consome poucos recursos adicionais de servidor.</li><li style='margin-bottom: 12px;'>Uma newsletter paga usa o mesmo texto para todos os assinantes, aumentando receita sem multiplicar o esforço de produção proporcionalmente.</li></ul>"
  },
  {
    "id": "efeitos-de-rede",
    "slug": "efeitos-de-rede",
    "name": "Efeitos de Rede",
    "thinker": "Estratégia Coletiva",
    "color": "#F59E0B",
    "icon": "⊖",
    "definition": "Efeitos de rede acontecem quando o valor de um produto ou serviço para cada usuário aumenta conforme mais usuários entram. Isso pode criar curvas de crescimento muito íngremes e fossos profundos contra concorrentes.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Quanto mais gente usa, melhor fica.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Redes sociais, marketplaces e plataformas colaborativas são exemplos clássicos: cada novo participante adiciona conexões, conteúdo ou liquidez, beneficiando todos os demais. Existem efeitos de rede diretos (usuários interagindo entre si) e indiretos (mais usuários atraindo mais parceiros, conteúdos ou integrações).</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Efeitos de rede criam loops de feedback positivo: mais usuários geram mais valor, que atrai mais usuários, e assim por diante. Porém, antes da massa crítica, a rede é frágil e pode parecer pouco promissora. Entender esse comportamento em “S” ajuda a não desistir cedo demais – e também a reconhecer quando uma rede não está decolando.</p>",
      "<p>Produtos com bons efeitos de rede deixam de ser apenas soluções e se tornam ecossistemas; competir contra um ecossistema exige muito mais do que ter apenas um bom recurso técnico.</p>"
    ],
    "triggerQuestion": "Se seu produto tem potencial de rede, desenhe mecânicas explícitas para conexões entre usuários: fóruns, grupos, eventos, recursos colaborativos. Incentive contribuições de alta qualidade que aumentem o valor percebido da comunidade. Em estágios iniciais, trate manualmente os “super usuários” e cases que podem servir de base para prova social e densidade de interações.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um marketplace de freelancers torna-se mais valioso à medida que reúne mais profissionais e clientes, aumentando as chances de bons matches.</li><li style='margin-bottom: 12px;'>Uma comunidade de alunos passa a ser um ativo central do curso quando o networking entre eles gera negócios, parcerias e suporte mútuo.</li><li style='margin-bottom: 12px;'>Um app de mensagens é inútil com poucos contatos, mas torna-se indispensável quando a maioria das pessoas relevantes já está lá.</li></ul>"
  },
  {
    "id": "custos-de-troca--switching-costs",
    "slug": "custos-de-troca--switching-costs",
    "name": "Custos de Troca (Switching Costs)",
    "thinker": "Estratégia Coletiva",
    "color": "#FFE66D",
    "icon": "◌",
    "definition": "Custos de troca são os custos financeiros, operacionais, emocionais e de risco envolvidos em mudar de fornecedor ou solução. Mesmo produtos superiores podem ser rejeitados se a troca parecer trabalhosa ou arriscada demais.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Quanto mais dói mudar, mais difícil é perder o cliente.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Empresas não decidem apenas com base em comparação de features; elas consideram o esforço de migrar dados, treinar pessoas, adaptar processos e lidar com possíveis falhas de transição. Quanto mais integrada a solução estiver ao fluxo de trabalho e à cultura, maior o custo de troca.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Custos de troca podem ser naturais (complexidade real de migração) ou artificiais (cláusulas contratuais, formatos proprietários). Ambos criam lock-in, mas o primeiro tende a gerar lealdade pragmática; o segundo, ressentimento latente. Em termos estratégicos, aumentar custos de troca saudáveis significa tornar-se tão útil e bem integrado que sair seja claramente desvantajoso.</p>",
      "<p>Negócios com custos de troca altos não vivem de retenção forçada, mas de uma combinação de utilidade real e fricção racional para abandonar algo que funciona bem.</p>"
    ],
    "triggerQuestion": "No desenho de produtos e serviços, pense em integrações profundas com os fluxos do cliente: automações, relatórios personalizados, suporte a decisões críticas. Facilite ao máximo a entrada (onboarding) e torne a saída comparativamente mais trabalhosa – sem armadilhas éticas. Ao avaliar fornecedores, coloque na mesa não só preço e recurso, mas o custo total de trocar no futuro.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Uma empresa permanece em um CRM limitado porque mudar exigiria treinar dezenas de pessoas e adaptar integrações críticas.</li><li style='margin-bottom: 12px;'>Um cliente corporativo mantém uma agência de marketing mediana porque acredita que trocar demandaria meses de ramp-up e risco de queda nos resultados.</li><li style='margin-bottom: 12px;'>Usuários de software aceitam aumentos de preço graduais porque a dor de migrar todos os dados e rotinas para outra ferramenta parece maior que o incômodo financeiro imediato.</li></ul>"
  },
  {
    "id": "alavancagem",
    "slug": "alavancagem",
    "name": "Alavancagem",
    "thinker": "Estratégia Coletiva",
    "color": "#A78BFA",
    "icon": "⟁",
    "definition": "Alavancagem é usar código, capital, mídia ou pessoas para multiplicar o impacto do seu esforço. Em vez de depender apenas de horas diretas, você constrói sistemas que geram resultado repetidamente.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Trabalhe com alavancas que continuem empurrando mesmo quando você não estiver lá.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>No contexto moderno, há quatro alavancas principais: código (automação), capital (dinheiro), mídia (conteúdo) e mão de obra (pessoas). Todas têm em comum a capacidade de fazer com que uma unidade de esforço produza resultado muitas vezes maior do que produziria isoladamente.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Alavancagem não é só “crescer rápido”; é construir um mecanismo em que suas melhores decisões e competências sejam amplificadas. Sem alavanca, cada novo resultado exige esforço proporcional. Com alavanca, boa parte do esforço passa a ser construir e ajustar máquinas de resultado.</p>",
      "<p>Quem domina alavancagem sai do jogo de vender horas e entra no jogo de construir ativos que produzem valor em escala.</p>"
    ],
    "triggerQuestion": "Liste atividades recorrentes que consomem muito tempo e identifique quais podem ser automatizadas, transformadas em conteúdo escalável ou delegadas com qualidade. Reserve blocos de agenda para construir alavancas (scripts de automação, playbooks, ativos de mídia) em vez de apenas apagar incêndios. Pergunte regularmente: “o que eu fiz esta semana que continua trabalhando por mim daqui a seis meses?”.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Uma automação de atendimento qualifica leads 24/7 no WhatsApp, liberando o time humano para conversas de fechamento.</li><li style='margin-bottom: 12px;'>Um vídeo bem produzido continua atraindo leads e vendas por meses ou anos, sem esforço adicional além de manutenção mínima.</li><li style='margin-bottom: 12px;'>Um pequeno time altamente treinado opera processos padronizados e documentados, multiplicando a capacidade produtiva do fundador.</li></ul>"
  },
  {
    "id": "destruicao-criativa",
    "slug": "destruicao-criativa",
    "name": "Destruição Criativa",
    "thinker": "Joseph Schumpeter",
    "color": "#F97316",
    "icon": "◎",
    "definition": "Destruição criativa é o processo pelo qual inovações radicais desconstroem setores e modelos existentes, ao mesmo tempo em que criam novos mercados e formas de trabalho. Resistir a esse processo tende a ser mais arriscado do que liderá-lo.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“O novo sempre destrói o velho antes de se consolidar.” – Parafraseando Schumpeter*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Joseph Schumpeter descreveu o capitalismo dinâmico como um processo contínuo de destruição criativa: empresas e tecnologias novas inevitavelmente substituem antigas. Isso não é desvio, mas característica fundamental do sistema. Quem se apega demais ao modelo atual corre o risco de ser superado por soluções mais eficientes ou convenientes.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Destruição criativa parece injusta para quem está na parte “destruída” do ciclo, mas é também o que cria espaço para novos empreendedores e modelos. Ignorar sinais de mudança tecnológica ou regulatória porque o presente ainda é lucrativo é uma forma de risco escondido. O modelo mental convida a perguntar “qual parte do meu negócio eu destruiria se fosse meu próprio concorrente?”.</p>",
      "<p>Negócios que abraçam destruição criativa com intenção viram protagonistas da próxima fase; os que só reagem tarde demais viram casos de estudo do que não fazer.</p>"
    ],
    "triggerQuestion": "Identifique quais componentes do seu modelo atual são mais vulneráveis à automação, digitalização ou desintermediação. Em vez de defender essas partes com unhas e dentes, seja o primeiro a experimentar formas novas que poderiam, em tese, canibalizá-las. Reserve orçamento e tempo para apostas exploratórias, separadas da operação core, para que a “nova empresa” tenha espaço de crescer.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Plataformas digitais reduzindo drasticamente a relevância de lojas físicas em certos segmentos.</li><li style='margin-bottom: 12px;'>IAs generativas automatizando partes do trabalho de agências que viviam de tarefas braçais de tráfego e produção simples.</li><li style='margin-bottom: 12px;'>Serviços de streaming substituindo a venda unitária de mídia física e mudando toda a lógica de distribuição.</li></ul>"
  },
  {
    "id": "gargalo--teoria-das-restricoes",
    "slug": "gargalo--teoria-das-restricoes",
    "name": "Gargalo (Teoria das Restrições)",
    "thinker": "Estratégia Coletiva",
    "color": "#38BDF8",
    "icon": "⟋",
    "definition": "A Teoria das Restrições afirma que, em qualquer sistema, há sempre um gargalo que limita o desempenho total. Otimizar o que não é gargalo gera pouco resultado; atacar o gargalo certo gera saltos relevantes.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“O sistema é tão rápido quanto seu ponto mais lento.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Na manufatura e em serviços, o throughput – volume de saída – é determinado pela etapa mais lenta ou mais frágil do processo. Investir em eficiência em partes não restritivas pode até piorar o sistema, gerando acúmulo de trabalho em fila à frente do gargalo. O desafio é identificar continuamente qual é a restrição atual.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>A Teoria das Restrições propõe um ciclo contínuo: identificar o gargalo, explorá-lo ao máximo, subordinando o resto do sistema a ele, elevá-lo (com melhorias ou recursos) e, quando ele se deslocar, recomeçar. Isso contrasta com abordagens que buscam “eficiência geral” sem foco.</p>",
      "<p>Quem aprende a enxergar gargalos para de gastar energia em otimizações cosméticas e passa a fazer mudanças que realmente movem a agulha.</p>"
    ],
    "triggerQuestion": "Mapeie seu fluxo principal (de lead até dinheiro em caixa, por exemplo) e descubra onde clientes ou entregas ficam parados por mais tempo. Concentre energia em destravar essa etapa antes de jogar mais volume no topo. Reavalie o gargalo periodicamente: cada melhoria significativa muda o ponto de estrangulamento.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Funil de vendas em que o tráfego é abundante, mas o atendimento no WhatsApp é feito por uma única pessoa, gerando filas e perda de leads.</li><li style='margin-bottom: 12px;'>Operação de agência em que o gargalo é a aprovação do cliente; aumentar volume de criação sem resolver aprovações só aumenta retrabalho.</li><li style='margin-bottom: 12px;'>Produção de conteúdo em que falta pauta clara: melhorar câmera e edição não resolve a ausência de estratégia.</li></ul>"
  },
  {
    "id": "selecao-adversa",
    "slug": "selecao-adversa",
    "name": "Seleção Adversa",
    "thinker": "Estratégia Coletiva",
    "color": "#E879F9",
    "icon": "⊘",
    "definition": "Seleção adversa acontece quando a forma de estruturar uma oferta atrai, de forma desproporcional, o tipo de cliente ou participante que você menos deseja. É o problema de desenhar filtros que deixam passar quem mais vai dar dor de cabeça.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Regras erradas atraem exatamente quem você não quer.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>O conceito é clássico em seguros e crédito: se o prêmio é o mesmo para todos, quem mais tende a aderir são justamente os de maior risco. Em outros contextos, ofertas “amigáveis demais” para curiosos e oportunistas acabam espantando clientes sérios.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Seleção adversa não é azar; é consequência lógica da assimetria entre o que você oferece e o que diferentes perfis valorizam. Quando o filtro é mal desenhado, pessoas que deveriam ser prioridade se desinteressam, enquanto aquelas que deveriam ser filtradas se aglutinam em torno da oferta.</p>",
      "<p>Ao desenhar filtros melhores, você passa a gastar energia com quem realmente pode gerar valor mútuo, em vez de viver apagando incêndios com clientes e parceiros errados.</p>"
    ],
    "triggerQuestion": "Revise suas ofertas e processos perguntando: “que tipo de pessoa isso atrai naturalmente?”. Ajuste preço, formulários, requisitos de entrada e mensagens para afastar perfis problemáticos e sinalizar com clareza para quem a proposta é feita. Em serviços de alta demanda, use barreiras leves (questionários, taxas iniciais) para filtrar quem não leva a sério o processo.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Oferecer teste gratuito longo em serviço premium e atrair majoritariamente curiosos que não têm condição de pagar pelo plano completo.</li><li style='margin-bottom: 12px;'>Cobrar muito barato por consultoria de alta complexidade, chamando clientes que esperam milagres com pouco comprometimento.</li><li style='margin-bottom: 12px;'>Criar processos de recrutamento que favorecem quem sabe “jogar o jogo” da entrevista, mas não quem tem competência real.</li></ul>"
  },
  {
    "id": "oferta-e-demanda",
    "slug": "oferta-e-demanda",
    "name": "Oferta e Demanda",
    "thinker": "Estratégia Coletiva",
    "color": "#94A3B8",
    "icon": "◈",
    "definition": "O modelo de oferta e demanda explica como preços emergem do equilíbrio entre a quantidade que produtores querem vender e a quantidade que consumidores querem comprar. Alterações em qualquer lado mudam o ponto de equilíbrio.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Quando algo é escasso e muito desejado, o preço sobe.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Se a demanda por um bem aumenta enquanto a oferta permanece constante, compradores competem entre si, elevando preços. Se a oferta cresce muito em relação à demanda, vendedores competem e reduzem preços para fechar negócios. Em mercados de mídia, tecnologia e serviços, esses movimentos acontecem em janelas de tempo cada vez menores.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Oferta e demanda não dizem apenas “preço sobe ou desce”; ajudam a antecipar onde vale investir para construir vantagem: em competências escassas e em proposições de valor muito desejadas. Quando você se posiciona onde a demanda tende a crescer e a oferta é difícil de aumentar rapidamente, captura margens melhores por mais tempo.</p>",
      "<p>Ignorar oferta e demanda é delegar sua rentabilidade ao acaso; antecipar esses movimentos permite jogar em mercados onde o vento sopra a seu favor.</p>"
    ],
    "triggerQuestion": "Observe tendências: quais problemas estão ficando mais agudos e para os quais ainda há poucos bons solucionadores? Desenvolva competências e produtos nesses espaços. Em pricing, ajuste preços conforme a relação entre sua disponibilidade real (agenda, capacidade) e o volume de demanda qualificada.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Custos de anúncios online sobem em datas como Black Friday, quando muitas empresas disputam atenção nos mesmos leilões de mídia.</li><li style='margin-bottom: 12px;'>Profissionais de uma habilidade de alta demanda e baixa oferta conseguem cobrar cachês bem maiores que a média do mercado.</li><li style='margin-bottom: 12px;'>Produtos digitais genéricos, fáceis de replicar, veem seu preço despencar quando surgem muitos concorrentes semelhantes.</li></ul>"
  },
  {
    "id": "agente-principal--problema-de-agencia",
    "slug": "agente-principal--problema-de-agencia",
    "name": "Agente-Principal (Problema de Agência)",
    "thinker": "Estratégia Coletiva",
    "color": "#34D399",
    "icon": "⊛",
    "definition": "O problema de agência surge quando o agente (gestor, consultor, funcionário) tem incentivos diferentes dos do principal (dono do dinheiro ou do ativo). Mesmo sem má fé, essa assimetria leva a decisões subótimas para quem financia o jogo.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Quem decide nem sempre é quem paga a conta.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Em empresas, executivos tomam decisões em nome de acionistas; em fundos, gestores operam recursos de investidores; em consultorias, profissionais influenciam o destino do negócio do cliente. Se a forma como são avaliados e remunerados não estiver alinhada com o resultado final do principal, comportamentos distorcidos aparecem.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>O problema de agência não é resolvido apenas com “boa cultura”; requer engenharia de incentivos. Sem mecanismos de alinhamento – como participação nos resultados, métricas compartilhadas e transparência – agentes agem racionalmente de acordo com seus interesses, mesmo que isso prejudique o principal.</p>",
      "<p>Quando agentes e principais jogam o mesmo jogo, a energia de todos é canalizada para criar valor em vez de negociar brechas nos contratos.</p>"
    ],
    "triggerQuestion": "Ao estruturar contratos com equipe e parceiros, vincule parte relevante da remuneração a métricas que realmente importam para o dono do capital, não apenas a indicadores intermediários. Como agente, busque modelos de trabalho em que você se beneficie diretamente quando gera valor real para o principal, aumentando a confiança de longo prazo.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Um gestor de tráfego focado em métricas de alcance e cliques, não em lucro líquido, otimiza campanhas para volume em vez de resultado.</li><li style='margin-bottom: 12px;'>Executivos com bônus atrelados a lucro de curto prazo cortam investimentos estratégicos de longo prazo que seriam importantes para a saúde futura da empresa.</li><li style='margin-bottom: 12px;'>Consultores são remunerados por hora, e não por solução entregue, o que pode criar incentivos implícitos a prolongar projetos.</li></ul>"
  },
  {
    "id": "juros-compostos--compounding",
    "slug": "juros-compostos--compounding",
    "name": "Juros Compostos (Compounding)",
    "thinker": "Albert Einstein / Naval",
    "color": "#FF6B6B",
    "icon": "⊙",
    "definition": "Juros compostos descrevem processos em que resultados são reinvestidos continuamente, gerando crescimento exponencial. O mesmo princípio vale para dinheiro, conhecimento, reputação e saúde.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“O juro composto é a oitava maravilha do mundo. Quem o entende, ganha; quem não entende, paga.” – Atribuído a Einstein*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Em finanças, juros compostos ocorrem quando os juros de um período são somados ao principal e passam também a render no período seguinte. Em termos mais amplos, é “crescimento sobre crescimento”: cada ganho se torna base para o próximo. No curto prazo, a curva parece lenta; com tempo suficiente, dispara.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Compounding é contraintuitivo porque humanos subestimam crescimento exponencial e superestimam o impacto de ações isoladas. Pequenos hábitos positivos ou negativos se acumulam silenciosamente; de repente, o resultado parece “mágico”. O mesmo vale para erros: más decisões repetidas também se compõem, deteriorando saúde, finanças e reputação.</p>",
      "<p>Quem domina o compounding para de buscar viradas milagrosas e passa a construir, pacientemente, curvas de crescimento que parecem sorte para quem só vê o final.</p>"
    ],
    "triggerQuestion": "Escolha poucos hábitos de alto impacto – estudo focado, produção de conteúdo, cuidado com o corpo, aporte financeiro – e faça deles práticas diárias ou semanais inegociáveis. Evite interrupções frequentes que “quebrem” o ciclo do juro composto. Pergunte-se regularmente: “o que estou compondo hoje – ativos que me fortalecem ou dívidas que vão me cobrar juros depois?”.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Investimentos mensais moderados em um fundo que reinveste rendimentos acumulam patrimônio significativo após anos.</li><li style='margin-bottom: 12px;'>Estudo diário de uma habilidade específica cria uma vantagem de conhecimento dificilmente alcançável por quem aprende de forma esporádica.</li><li style='margin-bottom: 12px;'>Relacionamentos nutridos consistentemente geram uma rede de confiança que abre portas inesperadas ao longo do tempo.</li></ul>"
  },
  {
    "id": "valor-esperado--ev",
    "slug": "valor-esperado--ev",
    "name": "Valor Esperado (EV)",
    "thinker": "Blaise Pascal / Von Neumann",
    "color": "#4ECDC4",
    "icon": "⊕",
    "definition": "Valor esperado é uma forma de avaliar decisões incertas ponderando cada possível resultado pela sua probabilidade e impacto. Uma opção com baixa chance de sucesso pode ser excelente se o ganho potencial for enorme e a perda limitada.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Não pense em estar certo ou errado, pense em expectativa matemática.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Em estatística e teoria da decisão, o valor esperado de uma opção é a soma de cada resultado possível multiplicado pela sua probabilidade. Em termos práticos: EV considera tanto tamanho do prêmio quanto probabilidade de ganhá-lo, e tanto tamanho da perda quanto probabilidade de perdê-la. Decisões repetidas com EV positivo tendem a gerar bons resultados ao longo do tempo, mesmo que algumas rodadas individuais sejam negativas.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Pensar em EV obriga a sair da dicotomia “deu certo/deu errado” e a enxergar decisões como parte de um portfólio de apostas. Ele é especialmente útil em contextos com incerteza inevitável, onde buscar certeza leva à paralisia ou a oportunidades perdidas. Ao mesmo tempo, EV puro precisa ser combinado com noção de risco de ruína: não adianta ter expectativa positiva se uma única perda possível pode destruir o jogo.</p>",
      "<p>Quem internaliza valor esperado para de buscar certezas e começa a buscar boas apostas repetíveis.</p>"
    ],
    "triggerQuestion": "Para decisões relevantes, liste cenários principais (melhor caso, caso base, pior caso) e estime probabilidades aproximadas. Avalie se a pior hipótese é tolerável e se a combinação dos cenários gera uma expectativa atrativa. Prefira múltiplas apostas de EV positivo com downside limitado a poucas apostas gigantescas que, se derem errado, destroem sua base.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Investir uma quantia pequena para testar um funil de vendas com potencial de contratos recorrentes altos; a perda máxima é pequena, o upside é grande.</li><li style='margin-bottom: 12px;'>Apostar em campanhas de marketing com múltiplos criativos, sabendo que alguns vão falhar, mas que o conjunto tem boa expectativa de retorno.</li><li style='margin-bottom: 12px;'>Aceitar palestras não pagas em contextos estratégicos que podem gerar parcerias ou clientes relevantes, mesmo sem garantia.</li></ul>"
  },
  {
    "id": "assimetria-de-risco",
    "slug": "assimetria-de-risco",
    "name": "Assimetria de Risco",
    "thinker": "Nassim Taleb",
    "color": "#F59E0B",
    "icon": "⊟",
    "definition": "Assimetria de risco é a situação em que a perda potencial de uma ação é pequena, mas o ganho potencial é grande. Essas apostas são especialmente valiosas porque o pior cenário é suportável e o melhor pode mudar o jogo.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Perder pouco se der errado, ganhar muito se der certo.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Em muitas decisões, o risco não é simétrico: a mesma quantia que se pode ganhar não é a que se pode perder. Estruturas assimétricas favoráveis são aquelas em que o downside é limitado e o upside é aberto. Exemplos incluem produtos digitais escaláveis, experimentos de marketing baratos e conversas estratégicas que podem abrir oportunidades.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Assimetria de risco se relaciona com valor esperado, mas enfatiza o formato do payoff: busca-se evitar apostas em que um erro destrói anos de progresso e privilegiar aquelas em que erros são baratos. Em ambientes com caudas gordas, construir um portfólio de assimetrias positivas aumenta a chance de capturar um “cisne negro” favorável.</p>",
      "<p>A vida fica radicalmente diferente quando você para de aceitar riscos simétricos ruins e passa a colecionar assimetrias positivas.</p>"
    ],
    "triggerQuestion": "Revisite sua lista de projetos e mate aqueles com alto custo fixo e teto baixo de faturamento. Em vez disso, gaste energia criando ativos e testes de baixo custo com potencial significativo de ganho. Pergunte antes de entrar em algo: “se der errado, o que acontece comigo?”; se a resposta envolver ruína ou dano estrutural, recuse ou redesenhe a aposta.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Gravar um infoproduto em um fim de semana: o custo é algumas horas de trabalho; o upside é potencialmente centenas de vendas ao longo de meses.</li><li style='margin-bottom: 12px;'>Testar uma nova copy ou criativo em pequena parte da verba de mídia antes de escalar para todo o orçamento.</li><li style='margin-bottom: 12px;'>Enviar uma mensagem bem pensada para um potencial mentor ou parceiro; se ignorada, o custo é quase zero, se aceita, pode gerar grande valor.</li></ul>"
  },
  {
    "id": "regressao-a-media",
    "slug": "regressao-a-media",
    "name": "Regressão à Média",
    "thinker": "Estratégia Coletiva",
    "color": "#FFE66D",
    "icon": "⊞",
    "definition": "Regressão à média é o fenômeno estatístico em que resultados extremos tendem a ser seguidos por resultados mais próximos da média. Sem entender isso, é fácil interpretar variações aleatórias como efeitos de ações específicas.",
    "detailedContent": [
      "<p style=\"font-style: italic; color: var(--amber-dim)\">*“Picos são seguidos por normalidade, não por mais picos.”*</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Introdução e explicação</strong><p>Quando se observa um valor extraordinariamente alto ou baixo de uma variável influenciada por acaso, é provável que a medição seguinte esteja mais perto da média. Isso não significa que há uma força “puxando” para a média, mas que extremos costumam ser combinações de tendência real com sorte incomum.</p>",
      "<strong style=\"color: var(--off-white); display: block; margin-top: 16px; margin-bottom: 8px;\">Nova explicação para reforço</strong><p>Sem considerar regressão à média, líderes podem tomar decisões drásticas baseadas em dados de curto prazo: punir um time após um resultado ruim extremo que, na verdade, teria melhorado sozinho, ou superpremiar por um pico que não se repetirá. O modelo alerta para não atribuir causalidade forte a variações que podem ser apenas ruído.</p>",
      "<p>Regressão à média é um lembrete de humildade: nem seu melhor dia prova que você dominou o jogo, nem seu pior dia prova que tudo está perdido.</p>"
    ],
    "triggerQuestion": "Sempre que vir um resultado muito fora da curva, espere um pouco antes de redesenhar toda a estratégia. Colete mais dados e verifique se o padrão se mantém. Use janelas de análise mais longas e compare períodos equivalentes (mês contra mês anterior, ano contra ano) para minimizar influência de extremos isolados.",
    "example": "<ul style='padding-left: 20px; list-style-type: disc; margin-bottom: 0;'><li style='margin-bottom: 12px;'>Uma campanha de anúncios tem um dia com ROAS absurdo; dias seguintes, mesmo sem mudança significativa, voltam a níveis mais normais.</li><li style='margin-bottom: 12px;'>Um vendedor tem mês extraordinário por coincidência de grandes clientes fechando ao mesmo tempo; meses seguintes retornam à média histórica.</li><li style='margin-bottom: 12px;'>Uma empresa vive trimestre excepcionalmente ruim e, sem intervenção dramática, já mostra melhora no trimestre seguinte, apenas pela diluição de eventos negativos raros.</li></ul>"
  },
  {
    "id": "lei-dos-grandes-numeros",
    "slug": "lei-dos-grandes-numeros",
    "name": "Lei dos Grandes Números",
    "thinker": "Estratégia Coletiva",
    "color": "#A78BFA",
    "icon": "☽",
    "definition": "",
    "detailedContent": [],
    "triggerQuestion": "",
    "example": ""
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
