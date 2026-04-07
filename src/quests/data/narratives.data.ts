export interface QuestTemplate {
  requiredTags: string[];
  titles: string[];
  descriptions: string[];
}

export const questTemplates: QuestTemplate[] = [
  // ─────────────────────────────────────────────
  // 1. HOLY + ASSASSINATION — Inquisição
  // ─────────────────────────────────────────────
  {
    requiredTags: ["holy", "assassination"],
    titles: [
      "O Édito Silencioso de {Actor}",
      "A Absolvição pelo Aço em {Region}",
      "Em Nome da Luz: A Sentença de {Actor}",
      "O Martírio Forjado em {Region}",
      "A Última Confissão de {Actor}",
    ],
    descriptions: [
      "A Ordem Sagrada emitiu um édito selado em cera vermelha: {Actor} deve perecer antes do amanhecer, e o ato jamais deve ser atribuído à mão da fé. {Region} guarda os passos do herege — e também os seus segredos mais perigosos.",
      "Há crimes que os tribunais mortais não podem julgar. {Actor} corrompeu a doutrina, seduziu os fiéis e agora se abriga em {Region}. A Ordem não deseja um mártir — deseja um silêncio limpo e sem testemunhas.",
      "O Sumo Sacerdote sussurrou ao ouvido de um assassino: '{Actor} viu o que não devia ver em {Region}. Garanta que essa visão seja a última.' Não haverá oração pelo morto — apenas alívio.",
      "A inquisição age onde a lei falha. Em {Region}, {Actor} reúne seguidores em torno de uma heresia que pode despedaçar a fé de uma geração inteira. A missão é cirúrgica. A missão é divina.",
      "Dizem que os santos também derramam sangue quando a causa é justa. {Actor} tornou-se um câncer dentro do corpo da Igreja, e {Region} é o lugar onde esse tumor deve ser extirpado — discretamente, e sem deixar cicatrizes visíveis.",
    ],
  },

  // ─────────────────────────────────────────────
  // 2. STEALTH + FORBIDDEN_KNOWLEDGE — Roubo de Grimório
  // ─────────────────────────────────────────────
  {
    requiredTags: ["stealth", "forbidden_knowledge"],
    titles: [
      "O Grimório Proibido de {Actor}",
      "Sombras na Biblioteca de {Region}",
      "O que {Actor} Não Deve Saber que Você Sabe",
      "A Herança Roubada de {Region}",
      "Páginas Que Não Devem Existir",
    ],
    descriptions: [
      "{Actor} possui um tomo que os Magos do Conclave destruíram há três séculos — ou assim acreditavam. Ele repousa em um cofre oculto em {Region}. Não há espaço para confronto: apenas para sombras, mãos habilidosas e pulmões que sabem prender o fôlego.",
      "A biblioteca proibida de {Region} foi selada por decreto real, mas seus cadeados são velhos e sua guarda é descuidada. Alguém quer um manuscrito específico — um que descreve a geometria do mundo antes dos deuses o moldarem. {Actor} não pode saber que ele foi levado.",
      "O conhecimento que {Actor} acumulou em {Region} é a razão pela qual impérios tombam. Alguém precisa infiltrar-se em sua torre, copiar os rituais inscritos no volume encadernado em pele humana, e sair antes que os servos façam a ronda da meia-noite.",
      "Três ladrões tentaram antes. Dois voltaram sem os dedos. Um não voltou. O grimório de {Actor} em {Region} possui proteções arcanas que detectam intenção — o desafio não é apenas a furtividade do corpo, mas a disciplina absoluta da mente.",
      "Não se trata de roubo, argumenta o contratante. Trata-se de 'preservação histórica urgente'. O fato de {Actor} ser o guardião legítimo do manuscrito em {Region}, e de que ele matará quem o tocar, são apenas... complicações menores.",
    ],
  },

  // ─────────────────────────────────────────────
  // 3. TRADE + BETRAYAL — Acordo em Sangue
  // ─────────────────────────────────────────────
  {
    requiredTags: ["trade", "betrayal"],
    titles: [
      "O Contrato Manchado de Sangue de {Actor}",
      "A Rota Perdida de {Region}",
      "Ouro e Traição em {Region}",
      "O Sócio que {Actor} Nunca Deveria ter Confiado",
      "Mercadores Não Perdoam em {Region}",
    ],
    descriptions: [
      "O acordo parecia simples: {Actor} forneceria a rota, o outro forneceria os bens. Mas as caravanas nunca chegaram em {Region}, os cofres estão vazios, e os corpos dos intermediários foram encontrados com a marca de uma faca nas costas. Descubra quem traiu quem — e recupere o que foi roubado.",
      "{Actor} assinou um pacto comercial com sangue — não metaforicamente. Em {Region}, os contratos da Guilda têm um preço literal para quem os quebra. Alguém quebrou. Os cobradores já foram enviados. Você chegou antes, ou depois?",
      "A rota de especiarias que atravessa {Region} valia uma fortuna. {Actor} vendeu essa informação para uma facção rival, depois para outra, e depois sumiu. Agora três grupos diferentes chegaram à mesma encruzilhada — armados e sem humor para negociação.",
      "Os registros contábeis de {Actor} revelam números impossíveis: mais ouro saiu de {Region} do que jamais entrou. Alguém está desviando cargas, falsificando selos e usando um nome que não é o seu. A traição tem camadas — e cada camada tem um preço.",
      "Em {Region}, dizem que {Actor} era o homem mais honesto do mercado. Dizem também que homens honestos não acumulam inimigos suficientes para precisar de um assassino particular. A verdade, como sempre, está enterrada junto com as vítimas.",
    ],
  },

  // ─────────────────────────────────────────────
  // 4. RITUAL + CORRUPTION — Magia de Sangue
  // ─────────────────────────────────────────────
  {
    requiredTags: ["ritual", "corruption"],
    titles: [
      "O Círculo Corrompido de {Actor}",
      "A Maré Negra em {Region}",
      "Quando o Ritual de {Actor} Quebrou o Véu",
      "Sangue e Cinzas em {Region}",
      "A Voz Que {Actor} Não Devia Ter Invocado",
    ],
    descriptions: [
      "{Actor} iniciou o ritual com intenções que talvez fossem puras. O que emergiu do círculo em {Region} não era o que foi invocado — e agora a corrupção se espalha pelo solo como raízes de uma árvore podre, deformando tudo que toca.",
      "As colheitas em {Region} apodrecem antes de madurecer. Os animais nascem com olhos na direção errada. Os aldeões mais velhos reconhecem os sinais: alguém realizou um ritual de sangue proibido, e {Actor} é o único com conhecimento e motivo. Encontre-o antes que a segunda lua cheia chegue.",
      "O grimório que {Actor} usou em {Region} não era um instrumento de poder — era uma armadilha colocada por algo muito mais antigo. O ritual atraiu uma entidade que agora usa o mago como hospedeiro, e a corrupção ao redor do local de invocação cresce a cada hora.",
      "Há uma mancha no mapa de {Region} que os cartógrafos se recusam a desenhar. No centro dessa mancha, {Actor} construiu um altar que ressoa com uma frequência que faz os cachorros uivar e os sacerdotes sangrar pelo nariz. O ritual ainda não terminou.",
      "A corrupção que {Actor} liberou em {Region} não é mágica no sentido que os estudiosos compreendem — é algo anterior à magia, anterior à linguagem, anterior ao primeiro nome que os deuses pronunciaram. E ela tem fome.",
    ],
  },

  // ─────────────────────────────────────────────
  // 5. UNDEAD + INVESTIGATION — Praga dos Mortos
  // ─────────────────────────────────────────────
  {
    requiredTags: ["undead", "investigation"],
    titles: [
      "Os Mortos Que Falam em {Region}",
      "A Origem da Praga de {Actor}",
      "Sepulturas Abertas em {Region}",
      "O Inquérito do Necromante de {Actor}",
      "Quando {Region} Parou de Enterrar os Seus Mortos",
    ],
    descriptions: [
      "Os cemitérios de {Region} estão vazios — não porque não haja mortos, mas porque eles não permanecem enterrados. {Actor} foi o último estudioso a documentar o fenômeno antes de desaparecer. Seus apontamentos incompletos são o único fio que resta.",
      "A morte em {Region} mudou. Os que tombam com ferimentos específicos — sempre na mesma posição, sempre sob a mesma lua — levantam três dias depois com os olhos brancos e as bocas em silêncio. {Actor} sabe o porquê. A questão é chegar a ele antes dos mortos.",
      "Um padrão emerge nos registros funerários de {Region}: todas as vítimas conheciam {Actor}. Todos frequentavam o mesmo poço. Todos compraram especiarias do mesmo vendedor ambulante que ninguém mais viu desde então. A investigação cheira a ritual.",
      "{Actor} deixou uma única nota antes de desaparecer em {Region}: 'Não é necromancia. É algo que estava aqui antes de nós e que apenas acordou.' Os mortos que caminham parecem concordar — eles não atacam, apenas observam, e apontam todos para a mesma direção.",
      "O Conselho de {Region} quer respostas, não rumores. {Actor} foi contratado para investigar o surgimento dos mortos-vivos e desapareceu no terceiro dia. Alguém precisa seguir suas pegadas — e rezar para que elas não terminem em uma cova rasa.",
    ],
  },

  // ─────────────────────────────────────────────
  // 6. ESCORT + WAR — Fuga Através do Front
  // ─────────────────────────────────────────────
  {
    requiredTags: ["escort", "war"],
    titles: [
      "Através das Linhas Inimigas com {Actor}",
      "A Última Rota para {Region}",
      "O Preço do Sangue em {Region}",
      "Escoltas Não Morrem em Vão: {Actor}",
      "A Travessia de {Region} sob Fogo",
    ],
    descriptions: [
      "A guerra entre as facções chegou a {Region} e as rotas civis foram cortadas. {Actor} — diplomata, testemunha ou portador de informação vital — precisa cruzar o front antes do amanhecer. Cada checkpost é uma sentença de morte. Cada sombra pode ser um arqueiro.",
      "O general que controla {Region} não faz prisioneiros de diplomatas — faz exemplos. {Actor} possui documentos que podem encerrar este conflito em semanas, mas eles não valem nada se ele morrer antes de chegar ao destino. Sua única escolta é você.",
      "{Actor} viu demais no campo de batalha de {Region} e sobreviveu quando não deveria. Agora ambos os lados o querem — um para protegê-lo, o outro para silenciá-lo permanentemente. O caminho seguro não existe; existe apenas o caminho menos mortal.",
      "As estradas de {Region} estão repletas de carranceiros, desertores e oportunistas que descobriram que a guerra é mais lucrativa como negócio do que como causa. Escoltar {Actor} até a fronteira significa navegar por essa selva humana com tato e aço em igual medida.",
      "Em tempos de guerra, a lealdade é a moeda mais cara de {Region}. {Actor} pagou bem — mas o contratante sabe que metade das pessoas nesta região venderia informações sobre a rota por um preço ainda mais alto. Confiar em alguém pode ser o maior erro.",
    ],
  },

  // ─────────────────────────────────────────────
  // 7. BLACKMAIL + DIPLOMACY — Chantagem Política
  // ─────────────────────────────────────────────
  {
    requiredTags: ["blackmail", "diplomacy"],
    titles: [
      "Os Segredos que {Actor} Prefere Comprar",
      "A Mesa de Negociação em {Region}",
      "Palavras Como Facas em {Region}",
      "O Preço do Silêncio de {Actor}",
      "Quando a Diplomacia Tem Dentes em {Region}",
    ],
    descriptions: [
      "{Actor} possui cartas — literalmente. Correspondências que, se tornadas públicas, desestabilizariam três alianças e provocariam pelo menos uma guerra em {Region}. Ele não quer sangue: quer concessões. A missão é negociar os termos sem deixar que nenhum lado perceba o quão fraco o outro realmente está.",
      "A paz em {Region} repousa sobre um segredo que {Actor} descobriu por acidente. Agora ele está sentado à mesa com um sorriso de quem segura uma espada invisível. Alguém precisa encontrar o documento original, antes que a negociação se transforme em chantagem aberta.",
      "Há uma arte em ameaçar sem ameaçar. {Actor} pratica essa arte com maestria em {Region}, trocando informações comprometedoras por influência política. Sua última 'negociação' eliminou um rival. A próxima pode eliminar um aliado. É hora de intervir.",
      "{Actor} foi enviado a {Region} como emissário da paz, mas chegou com bagagem demais — e parte dessa bagagem contém segredos de ambos os lados do conflito. Agora ele negocia para si mesmo, usando a diplomacia como escudo e a chantagem como lança.",
      "O tratado de {Region} está prestes a ser assinado, mas {Actor} recebeu uma mensagem anônima que muda tudo. Alguém sabe o que ele fez em {Region} há dez anos. A negociação de paz tornou-se uma negociação de sobrevivência.",
    ],
  },

  // ─────────────────────────────────────────────
  // 8. SUMMONING + CONTAINMENT — Entidade Invocada
  // ─────────────────────────────────────────────
  {
    requiredTags: ["summoning", "containment"],
    titles: [
      "O que {Actor} Invocou Não Quer Ir Embora",
      "Contenção em {Region}: A Besta de {Actor}",
      "O Círculo Quebrado de {Region}",
      "Quando {Actor} Perdeu o Controle do Nome",
      "A Invocação que Partiu {Region} ao Meio",
    ],
    descriptions: [
      "{Actor} invocou algo em {Region} que estava além de sua capacidade de controlar. A entidade está contida — por enquanto — em um círculo de contenção que se deteriora a cada hora. Trazer os componentes para reforçar o selo é uma corrida contra um relógio que ninguém consegue ouvir, mas todos conseguem sentir.",
      "O que foi convocado em {Region} não tem nome que a língua mortal possa pronunciar sem sangrar. {Actor} sabia disso e invocou assim mesmo. Agora ele está dentro do círculo com a criatura — voluntariamente — e ninguém entende por quê. A missão é tirá-lo de lá. Vivo ou não.",
      "Três magos de contenção foram enviados a {Region}. Dois voltaram em pedaços. O terceiro voltou sorrindo de um jeito que não era dele. {Actor} precisa de alguém diferente — alguém que entenda que conter uma entidade não é sobre poder mágico, mas sobre vontade inabalável.",
      "A invocação de {Actor} em {Region} foi um sucesso técnico e um desastre prático. O que foi trazido obedece — mas interpreta as ordens de maneiras que ninguém antecipou. Cada cumprimento de comando resulta em algo irreversível. Contê-lo antes da próxima ordem é a única prioridade.",
      "Em {Region}, há um edifício que ninguém se aproxima há quarenta dias. {Actor} colocou cartazes ordenando evacuação. O que está dentro dos muros respondeu quebrando cada janela ao mesmo tempo. Conter a situação exige mais do que magia — exige compreender o que a criatura quer.",
    ],
  },

  // ─────────────────────────────────────────────
  // 9. CLEANSING + GORE — Purgação de Covil
  // ─────────────────────────────────────────────
  {
    requiredTags: ["cleansing", "gore"],
    titles: [
      "A Purgação do Antro de {Actor}",
      "Deixe Apenas Cinzas em {Region}",
      "O Covil de {Actor} Não Deve Sobreviver",
      "Nada Deve Respirar em {Region} Esta Noite",
      "A Colheita de Sangue de {Region}",
    ],
    descriptions: [
      "O covil que {Actor} estabeleceu em {Region} não é um acampamento — é um matadouro. Os desaparecidos das últimas semanas foram encontrados, ou o que restou deles. A limpeza não é uma missão de resgate: é uma execução. Deixe as paredes de pé, mas não as criaturas.",
      "{Region} tem um problema que vai além da lei: {Actor} criou algo que não obedece a nenhuma lei conhecida. O local precisa ser purgado com fogo e aço, sem hesitação e sem prisioneiros. Quem entra no covil precisa entender que o que vai encontrar lá dentro deixou de ser humano faz muito tempo.",
      "A milícia local tentou limpar o ninho de {Actor} em {Region} e o que voltou — os poucos que voltaram — não consegue mais dormir. Precisamos de alguém com estômago forte, olhos frios e disposição para fazer o que os soldados comuns não conseguiram.",
      "{Actor} usou {Region} como câmara de experimentos por anos. O resultado são corredores cobertos de vestígios que os médicos legistas se recusaram a catalogar. A limpeza é necessária, urgente, e ninguém que tenha afeição à vida deve ser enviado sozinho.",
      "Não há negociação possível com o que habita {Region}. {Actor} criou ou liberou algo que só entende força. A missão é simples na teoria e brutal na prática: entre, elimine tudo que se mova de forma errada, e saia antes que a estrutura colapse sobre você.",
    ],
  },

  // ─────────────────────────────────────────────
  // 10. FAITH + EXORCISM — Possessão Sagrada
  // ─────────────────────────────────────────────
  {
    requiredTags: ["faith", "exorcism"],
    titles: [
      "A Alma de {Actor} Ainda Está Lá Dentro",
      "O Rito de Expulsão em {Region}",
      "Quando {Actor} Parou de Ser {Actor}",
      "A Batalha Pelo Espírito de {Actor}",
      "O Demônio que Usa o Rosto de {Actor}",
    ],
    descriptions: [
      "{Actor} era um devoto exemplar em {Region} — até três semanas atrás. O que fala com sua voz agora conhece segredos que um homem vivo não poderia saber, e sorri de um jeito que faz os cachorros correr. O exorcismo precisa ser conduzido antes da lua nova, ou o vínculo se torna permanente.",
      "A comunidade de fiéis em {Region} perdeu seu líder para algo que não deveria ser possível — uma possessão em plena luz do dia, durante os rituais sagrados. {Actor} luta por dentro; isso os conselheiros espirituais podem sentir. Mas o tempo é curto e a entidade aprende rápido.",
      "O Tribunal Sagrado de {Region} enviou três exorcistas para lidar com o caso de {Actor}. O primeiro foi convencido pela entidade de que estava errado. O segundo desapareceu. O terceiro está agora do lado errado. Precisamos de alguém com fé inabalável — e que não acredite em nada que {Actor} disser.",
      "{Actor} pediu o exorcismo a si mesmo, em um momento de lucidez que durou apenas segundos. A nota que deixou em {Region} diz: 'Não acredite nos meus olhos. Acredite apenas nas minhas palavras neste papel. Seja rápido. Eu estou perdendo.' A fé é a única arma que funcionará.",
      "O demônio que habita {Actor} em {Region} é antigo — mais antigo que as escrituras que seriam usadas contra ele. O exorcismo precisará de improvisação, de fé que vai além do ritual, e de alguém disposto a olhar nos olhos do abismo e não piscar.",
    ],
  },

  // ─────────────────────────────────────────────
  // 11. STEALTH + CRIME + VALUABLE — Roubo de Elite
  // ─────────────────────────────────────────────
  {
    requiredTags: ["stealth", "crime", "valuable"],
    titles: [
      "O Tesouro que {Actor} Pensa Ser Seu",
      "A Noite Mais Cara de {Region}",
      "O Cofre de {Actor} e Seus Segredos",
      "Quanto Vale o Silêncio em {Region}",
      "Dedos Rápidos e Cofres Fundos em {Region}",
    ],
    descriptions: [
      "{Actor} exibe sua coleção de relíquias como troféus em {Region} — e todas elas foram obtidas de maneiras que não suportam escrutínio legal. Alguém quer um item específico de volta. A missão não é punição: é recuperação silenciosa, antes que {Actor} perceba que algo mudou de lugar.",
      "O leilão em {Region} acontecerá em três dias. O item que {Actor} colocou em venda pertencia a uma família que foi assassinada para que ele pudesse obtê-lo. Recuperá-lo antes do leilão exige entrar na mansão, navegar por guardas, cães e armadilhas mecânicas, e sair sem deixar vestígios.",
      "Há um objeto em {Region} que {Actor} mantém em um cofre cujas paredes foram reforçadas por um mago. Quem quer o objeto diz que é de valor sentimental. A quantidade de ouro oferecida como pagamento sugere que é de valor muito mais concreto. Perguntas custam tempo — e tempo é o que não há.",
      "{Actor} roubou o que devia ser roubado apenas de pessoas que mereciam. Mas o artefato que ele tomou de {Region} pertence a uma ordem que não processa ladrões — os enterra. Devolver o objeto sem que nenhum dos lados saiba que você tocou nele é o único caminho seguro.",
      "Os guardas de {Actor} em {Region} são veteranos, não ornamentos. O cofre usa um sistema de chaves duplas com temporizador. Há um cão que não late — e justamente por isso é o mais perigoso. Tudo isso por um único anel. O contratante não explicou por quê. Os bons ladrões não perguntam.",
    ],
  },

  // ─────────────────────────────────────────────
  // 12. DUEL + HONOR — Honra e Sangue
  // ─────────────────────────────────────────────
  {
    requiredTags: ["duel", "assassination"],
    titles: [
      "O Desafio que {Actor} Não Pode Recusar",
      "Honra ou Morte em {Region}",
      "A Arena de {Region} Pede Sangue de {Actor}",
      "O Duelo que Nunca Foi Justo",
      "Ferro e Orgulho em {Region}",
    ],
    descriptions: [
      "{Actor} desafiou o homem errado para um duelo em {Region} — alguém que não tem intenção de seguir as regras do combate honrado. O patrocinador quer que você intervenha: não para salvar {Actor}, mas para garantir que o vencedor seja o certo. O que 'certo' significa aqui é uma questão de perspectiva.",
      "Em {Region}, os duelos são resolvidos com sangue ou com ouro. {Actor} não tem ouro suficiente e sabe disso. O que o desafiante realmente quer não é vitória em combate — é um pretexto. Descubra o pretexto, desfaça-o, ou esteja presente para garantir que o resultado seja o planejado.",
      "O código do duelo em {Region} é claro: nenhuma interferência externa. Mas {Actor} chegará ao campo com veneno nos dedos e um segundo armado escondido no público. Expor a traição sem provas é perigoso. Provas custam tempo. O duelo começa ao nascer do sol.",
      "{Actor} é o melhor espadachim de {Region} — e essa é exatamente a razão pela qual alguém o desafiou formalmente. O desafiante sabe que não pode vencer no ferro: então planeja vencer antes que as lâminas se cruzem. Impedir o assassinato sem quebrar o protocolo do duelo é o desafio real.",
      "O duelo foi marcado há duas semanas. Em {Region}, isso é tempo suficiente para que favores sejam cobrados, juízes sejam comprados e veneno seja adicionado a uma bainha. {Actor} não sabe que o campo de batalha já foi preparado contra ele. Ou talvez saiba — e esteja preparando o próprio counter.",
    ],
  },

  // ─────────────────────────────────────────────
  // 13. SURVIVAL + CORRUPTION — Território Maldito
  // ─────────────────────────────────────────────
  {
    requiredTags: ["survival", "corruption"],
    titles: [
      "Sobreviver em {Region} Não É Para Todos",
      "A Terra Que {Actor} Envenenou",
      "Quando {Region} Começa a Matar Seus Habitantes",
      "A Corrupção que Rasteja Sob {Region}",
      "O Preço de Cruzar {Region} Depois de {Actor}",
    ],
    descriptions: [
      "{Region} mudou depois que {Actor} realizou o ritual. A flora cresceu de maneiras que os botânicos chamam de 'impossíveis'. Os animais se comportam com uma inteligência que não deveriam ter. E a corrupção no solo significa que qualquer ferimento infecciona em horas. Sobreviver para chegar ao centro do problema é em si a missão.",
      "A expedição anterior a {Region} enviou um único sobrevivente de volta, e ele só conseguia repetir o nome de {Actor} em um ciclo ininterrupto. A corrupção no território não mata imediatamente — ela muda. Você precisa entrar, descobrir a fonte, e sair antes que a mudança comece em você.",
      "{Actor} descreveu {Region} como 'um experimento em progresso'. Os aldeões que tentaram deixar a área foram encontrados voltando involuntariamente — como se o território os repelisse para dentro. A corrupção tem vontade própria, e aparentemente quer companhia.",
      "Sobreviver em {Region} requer mais do que suprimentos e armas. Requer entender que as regras físicas foram alteradas por {Actor}: direções mudam, o sol nasce no lugar errado, e o tempo parece mais longo perto do centro da corrupção. Confie apenas em instrumentos. Não confie nos seus sentidos.",
      "{Actor} abandonou {Region} e não voltou — o que, dado o estado atual do local, pode ser o sinal mais ominoso de todos. A corrupção está se expandindo a um ritmo calculável: em onze dias, alcançará o primeiro vilarejo. Entrar, encontrar a fonte e desativá-la é a única opção que resta.",
    ],
  },

  // ─────────────────────────────────────────────
  // 14. FORGERY + DIPLOMACY — Documentos Falsos
  // ─────────────────────────────────────────────
  {
    requiredTags: ["forgery", "diplomacy"],
    titles: [
      "O Tratado Que Nunca Existiu em {Region}",
      "A Assinatura de {Actor} Que Não Foi Sua",
      "Tinta e Mentiras em {Region}",
      "O Diplomata Que {Actor} Nunca Foi",
      "Falso Ouro, Falsas Palavras em {Region}",
    ],
    descriptions: [
      "Um tratado de paz circula em {Region} com a assinatura de {Actor} — mas {Actor} nunca assinou nada. O documento é uma falsificação perfeita, e quem o criou entende não apenas de caligrafia, mas de geopolítica. Descobrir o autor antes que o tratado seja ratificado é a única forma de evitar uma guerra baseada em papel.",
      "{Actor} está sendo responsabilizado por acordos que jamais firmou em {Region}. Os documentos são convincentes demais para serem obra de um amador — alguém com acesso aos seus registros pessoais, ao seu selo e ao seu estilo de escrita. Um inimigo próximo. Muito próximo.",
      "A missão exige criar credenciais diplomáticas convincentes para infiltrar a corte de {Region}. {Actor} precisa de documentos que resistam ao escrutínio de escribas experientes, que contenham os selos corretos e que contem uma história coerente. A falsificação precisa ser impecável — porque as consequências de uma falha não são a prisão, mas a forca.",
      "Em {Region}, a palavra escrita tem força de lei divina. {Actor} descobriu isso da pior forma: alguém forjou um documento que o declara devedor de uma dívida impagável a uma facção poderosa. Contestar exige encontrar o falsificador e provar a fraude antes que os credores tomem ação.",
      "O emissário de {Region} chegou com documentos que ninguém deveria possuir — cópias de correspondências privadas, tratados secretos, mapas classificados. Tudo com aparência de autenticidade impecável. {Actor} quer saber quem tem acesso suficiente para falsificar em tal nível — e se ainda há tempo para conter o dano.",
    ],
  },

  // ─────────────────────────────────────────────
  // 15. PROTECTION + HOLY — Guarda Sagrada
  // ─────────────────────────────────────────────
  {
    requiredTags: ["protection", "holy"],
    titles: [
      "A Relíquia de {Actor} Não Pode Cair",
      "O Escudo da Fé em {Region}",
      "Guardar o que {Actor} Consagrou",
      "A Última Linha Sagrada de {Region}",
      "Quando a Fé Precisa de Espadas em {Region}",
    ],
    descriptions: [
      "A relíquia que {Actor} carrega é mais do que um objeto sagrado — é um ponto de ancoragem espiritual para toda {Region}. Se cair em mãos profanas, as consequências espirituais serão tão devastadoras quanto as físicas. Protegê-la durante a procissão significa colocar o próprio corpo entre a fé e aqueles que a odeiam.",
      "{Actor} é o último sacerdote de uma ordem que sobreviveu por quatro séculos em {Region}. Alguém quer que a ordem termine com ele. A proteção é discreta — {Actor} não deve saber que está sendo guardado, pois recusaria ajuda por princípio. A fé, às vezes, é seu próprio maior inimigo.",
      "O templo em {Region} foi ameaçado por três facções diferentes na última semana. {Actor} recusou-se a evacuar as relíquias sagradas, argumentando que fugir seria demonstrar falta de fé. Garantir que sua fé não resulte em seu martírio é um trabalho que exige tato, vigilância e a disposição de agir antes que a ameaça se materialize.",
      "O peregrinação que {Actor} lidera através de {Region} passa por território que três grupos diferentes consideram estratégico. Nenhum deles se importa com a dimensão espiritual da jornada. Proteger os peregrinos sem transformar um ato de fé em uma marcha militar é o desafio mais delicado desta missão.",
      "{Actor} possui um dom — ou um fardo — que o torna alvo. Em {Region}, aqueles que odeiam o sagrado sabem de sua existência. A proteção precisa acontecer nas sombras, porque colocar um guardião visível ao lado de um homem santo é o mesmo que pintar um alvo em sua testa.",
    ],
  },

  // ─────────────────────────────────────────────
  // 16. SABOTAGE + WAR — Operação Negra
  // ─────────────────────────────────────────────
  {
    requiredTags: ["sabotage", "war"],
    titles: [
      "Antes que o Canhão de {Actor} Dispare",
      "A Noite Antes da Batalha de {Region}",
      "Destrua as Linhas de Suprimento de {Actor}",
      "Operação Cinza em {Region}",
      "O Que Nunca Deve Chegar a {Region}",
    ],
    descriptions: [
      "A campanha de {Actor} em {Region} depende de uma linha de suprimentos que atravessa um único vale de difícil acesso. Destruir as pontes, enfermar os cavalos e incendiar os armazéns antes da grande ofensiva pode encerrar o conflito antes que comece. A missão é cirúrgica. A guerra não pode saber que foi você.",
      "{Actor} possui uma arma que mudará o equilíbrio da guerra em {Region}. Não é um exército — é um único artefato que, uma vez ativado, tornará qualquer resistência impossível. A sabotagem precisa acontecer antes da próxima lua, enquanto ainda está em transporte e vulnerável.",
      "As fortalezas de {Region} são impenetráveis por força direta. Mas toda fortaleza tem cozinheiros, ferreiros e carpinteiros. {Actor} não percebeu que sua principal vulnerabilidade não são as muralhas — são as pessoas que fazem tudo funcionar por dentro. Infiltrar-se, agir e sair é a única estratégia viável.",
      "A traição de {Actor} em {Region} custou mil vidas em um único dia. A retribuição não virá através do campo de batalha — virá através da sabotagem sistemática de tudo que ele construiu. Seus planos, suas alianças, suas rotas de abastecimento: tudo deve ser desfeito peça por peça.",
      "Em tempo de guerra, a informação vale mais que exércitos. {Actor} recebe despachos diários em {Region} que guiam cada movimento de sua campanha. Interceptar, falsificar e redirecionar esses despachos exige paciência, inteligência e a disposição de viver uma mentira por tempo indeterminado.",
    ],
  },

  // ─────────────────────────────────────────────
  // 17. MAGIC + INVESTIGATION — Anomalia Arcana
  // ─────────────────────────────────────────────
  {
    requiredTags: ["magic", "investigation"],
    titles: [
      "A Anomalia que {Actor} Não Consegue Explicar",
      "Rastros de Magia em {Region}",
      "O Que Aconteceu com {Actor} em {Region}",
      "A Investigação Arcana de {Region}",
      "Quando a Magia Não Obedece às Leis em {Region}",
    ],
    descriptions: [
      "Três magos morreram em {Region} na última quinzena, todos apresentando os mesmos sintomas: exsanguinação interna sem ferimentos externos, com os olhos fixos em uma direção específica. {Actor} era o investigador designado e enviou um único relatório antes de cortar toda comunicação. Descubra o que ele encontrou.",
      "{Actor} detectou uma anomalia arcana em {Region} que não corresponde a nenhum feitiço catalogado pelo Conclave nos últimos trezentos anos. A fonte da magia não obedece à geometria convencional — ela existe em um lugar que não está exatamente neste plano. A investigação requer alguém capaz de raciocinar quando a realidade para de fazer sentido.",
      "A magia em {Region} está se comportando de forma errática desde o desaparecimento de {Actor}. Feitiços falham. Outros se amplificam sem controle. Os componentes para rituais entram em combustão espontânea. Algo alterou o tecido arcano local — e descobrir o quê exige seguir as últimas anotações de {Actor}.",
      "{Actor} deixou uma pista antes de desaparecer em {Region}: uma sequência de números que, traduzidos pelo código correto, formam uma localização. O problema é que essa localização não existe em nenhum mapa — o que sugere que a investigação de {Actor} o levou a um lugar que literalmente não deveria ser acessível.",
      "A investigação das mortes em {Region} levou {Actor} a uma conclusão que o Conclave se recusa a aceitar: a magia não está sendo usada sobre as vítimas — está sendo extraída delas. Alguém ou algo está colhendo poder arcano diretamente das fontes vivas. E a colheita ainda não terminou.",
    ],
  },

  // ─────────────────────────────────────────────
  // 18. PURIFICATION + UNDEAD — Sagrada Chama
  // ─────────────────────────────────────────────
  {
    requiredTags: ["purification", "undead"],
    titles: [
      "Que a Chama de {Actor} Consuma {Region}",
      "A Purificação dos Mortos de {Region}",
      "O Rito Final de {Actor} em {Region}",
      "Fogo Sagrado Sobre os Túmulos de {Region}",
      "Quando Apenas a Chama Pode Curar {Region}",
    ],
    descriptions: [
      "Os mortos de {Region} não descansam, e a razão é um artefato enterrado no centro do cemitério mais antigo — uma pedra que nega o descanso eterno. {Actor} desenvolveu um rito de purificação, mas ele requer chegar ao centro do cemitério enquanto as criaturas estão ativas. Ele não pode fazer isso sozinho.",
      "A praga dos mortos-vivos em {Region} tem uma cura — mas ela exige queimar o solo sagrado onde os primeiros caíram, desfazendo séculos de sepultamento consagrado. {Actor} precisa de proteção enquanto conduz o rito de purificação, pois o processo dura horas e deixa o clérigo completamente vulnerável durante a execução.",
      "{Actor} purificou aldeias em {Region} antes — mas nunca em uma escala como esta. O número de mortos-vivos sugere um foco de corrupção subterrâneo que alimenta múltiplos focos. O rito de purificação precisará ser conduzido sequencialmente, o que significa passar múltiplas noites em campo com as criaturas ativas ao redor.",
      "A fé de {Actor} é inabalável — é sua competência marcial que é questionável. O rito de purificação que ele concebeu para {Region} é teologicamente impecável e praticamente suicida sem proteção adequada durante os momentos mais vulneráveis do ritual.",
      "Em {Region}, os mortos-vivos são mais numerosos que os vivos há três meses. {Actor} tem uma teoria: não são os mortos que estão corrompidos — é o próprio chão onde foram enterrados. A purificação do solo, não dos corpos, é a solução. Mas o processo vai irritar o que quer que esteja animando as criaturas.",
    ],
  },

  // ─────────────────────────────────────────────
  // 19. ASSASSINATION + STEALTH + BETRAYAL — Contrato Sujo
  // ─────────────────────────────────────────────
  {
    requiredTags: ["assassination", "stealth", "betrayal"],
    titles: [
      "O Contrato Que Tinha Dois Alvos",
      "A Sombra que Seguiu {Actor} até {Region}",
      "Quem Pagou Pelo Silêncio de {Actor}",
      "O Assassino de {Actor} Não Sabe que É o Alvo",
      "Traição em Dois Atos em {Region}",
    ],
    descriptions: [
      "O contrato para eliminar {Actor} parece direto — até que a investigação revela que o contratante é a própria pessoa que {Actor} protege. A traição tem camadas, e cada camada removida revela outra. Em {Region}, ninguém é exatamente o que parece, e o assassino mais habilidoso é aquele que sabe quando não matar.",
      "{Actor} recebeu um contrato em {Region} para eliminar um alvo específico. Metade do caminho, descobriu que o alvo é inocente e que o contratante é o verdadeiro criminoso. Sair do contrato significa uma pena de morte emitida pela Guilda. Cumpri-lo significa matar um inocente. A única saída é uma que ninguém ainda considerou.",
      "Em {Region}, chegou a informação de que um assassino foi contratado para eliminar {Actor}. O problema: {Actor} foi contratado para eliminar outra pessoa. Os dois contratos, rastreados de volta à origem, partem do mesmo contratante — que claramente quer que ambos morram, e que um faça o trabalho do outro.",
      "A traição de {Actor} custou a vida de uma equipe inteira em {Region}. O sobrevivente quer justiça, não a lei. O contrato foi emitido, o preço foi acordado, a localização foi confirmada. O que ninguém disse ao executor é que {Actor} sabe que está sendo caçado e preparou uma saudação adequada.",
      "{Actor} vendeu informações sobre uma operação em {Region} para o lado errado — e os colegas mortos por essa traição deixaram alguém para trás com recursos, paciência e a disposição de esperar a oportunidade perfeita. A missão está em andamento há meses. Esta noite é a noite certa.",
    ],
  },

  // ─────────────────────────────────────────────
  // 20. TRADE + MAGIC + FORBIDDEN_KNOWLEDGE — Mercado Negro Arcano
  // ─────────────────────────────────────────────
  {
    requiredTags: ["trade", "magic", "forbidden_knowledge"],
    titles: [
      "O Mercado Que {Actor} Não Deveria ter Aberto",
      "Artefatos Proibidos à Venda em {Region}",
      "O Preço do Conhecimento em {Region}",
      "O Comerciante de Segredos de {Actor}",
      "Quando o Arcano Tem Valor de Mercado em {Region}",
    ],
    descriptions: [
      "{Actor} abriu um mercado negro arcano em {Region} que comercializa não apenas artefatos proibidos, mas memórias, habilidades e fragmentos de consciência extraídos de magos capturados. O Conclave quer o mercado destruído. A Guilda dos Ladrões quer o inventário. E o comprador misterioso quer apenas {Actor}.",
      "Os objetos que circulam no mercado clandestino de {Actor} em {Region} passaram por muitas mãos antes de chegar lá — e cada mão que os tocou pagou um preço invisível. Rastrear a cadeia de custódia dos artefatos mais perigosos revela uma teia de transações que remonta a um evento que os livros de história afirmam nunca ter acontecido.",
      "{Actor} comercializa conhecimento proibido em {Region} através de um sistema engenhoso: os compradores nunca sabem o que estão comprando até completar a transação, e o conhecimento é transmitido de forma que não pode ser desaprendido. Vários compradores agora são perigos públicos. Vários outros estão mortos. Fechar o mercado é urgente.",
      "O inventário do mercado de {Actor} em {Region} inclui um item que o contratante reconheceu como algo roubado de um arquivo secreto do Conclave há cinquenta anos. Um item que, segundo os registros internos, não deveria existir fora das paredes do arquivo. A questão de como chegou a {Actor} é tão urgente quanto recuperá-lo.",
      "Em {Region}, {Actor} construiu uma reputação de encontrar o que não deveria ser encontrado e vender o que não deveria ser vendido. Sua última aquisição — um tomo que aparentemente escreve seus próprios capítulos — atraiu compradores de quatro países e pelo menos duas entidades que não deveriam ser capazes de fazer transações no plano material.",
    ],
  },

  // ─────────────────────────────────────────────
  // 21. ASSAULT + PROTECTION — Cerco e Defesa
  // ─────────────────────────────────────────────
  {
    requiredTags: ["assault", "protection"],
    titles: [
      "As Muralhas de {Region} Não Devem Cair",
      "O Cerco de {Actor} Começa ao Amanhecer",
      "Defender {Region} Até o Último Homem",
      "O Que {Actor} Quer Que Você Não Tem",
      "Muralhas, Sangue e Fé em {Region}",
    ],
    descriptions: [
      "{Actor} iniciou o cerco de {Region} com forças que deveriam ser impossíveis de reunir em tão pouco tempo. Os defensores estão mal equipados, mal alimentados e começando a perder a fé. A missão não é vencer — é comprar tempo suficiente para que o reforço chegue. E rezar para que o reforço esteja a caminho.",
      "O assalto de {Actor} à {Region} não é militar — é cirúrgico. Ele não quer as muralhas destruídas; quer um item específico que está dentro delas. Proteger o objetivo real, enquanto todos os outros defendem as portas, exige entender o que {Actor} sabe e por que ele não atacou diretamente.",
      "{Region} já resistiu a três cercos na última geração. Este, liderado por {Actor}, é diferente: não há demanda de rendição, não há negociação, não há sinal de que haverá sobreviventes caso as defesas cedam. A proteção dos civis torna-se tão urgente quanto a defesa das muralhas.",
      "A defesa de {Region} contra {Actor} exige mais do que espadas — exige inteligência. Cada ataque até agora foi um teste de uma resposta específica. {Actor} está mapeando as defesas, aprendendo os padrões, identificando os pontos fracos. Alguém precisa perceber o padrão antes que o ataque real comece.",
      "{Actor} enviou um emissário com uma proposta: entregue uma pessoa específica que se abriga em {Region}, e o cerco termina. A pessoa é inocente. A alternativa é uma batalha que {Region} provavelmente perderá. Às vezes, proteger significa fazer escolhas que os livros de história não registram com gentileza.",
    ],
  },

  // ─────────────────────────────────────────────
  // 22. CORRUPTION + FAITH + INVESTIGATION — Heresia Interna
  // ─────────────────────────────────────────────
  {
    requiredTags: ["corruption", "faith", "investigation"],
    titles: [
      "A Podridão Dentro do Templo de {Actor}",
      "Quando a Fé Mente em {Region}",
      "O Inquisidor de {Region} É o Herege",
      "A Heresia Que {Actor} Esconde em {Region}",
      "O Concílio Corrompido de {Region}",
    ],
    descriptions: [
      "A investigação dos desvios de dízimo em {Region} revelou algo muito pior do que fraude financeira: {Actor}, o alto sacerdote responsável pela auditoria, é ele mesmo o responsável pela corrupção. E a corrupção não é apenas monetária — é espiritual. Os rituais que ele conduz há anos têm um propósito diferente do que os fiéis acreditam.",
      "{Actor} chegou a {Region} como investigador de heresias e partiu como o maior herege que a região já produziu. Ele não foi corrompido aqui — ele chegou corrompido, com uma missão que usa a linguagem da fé para servir a algo que a fé rejeita. Encontrar as provas sem que {Actor} perceba o inquérito é o desafio mais delicado desta investigação.",
      "Os fiéis de {Region} notaram que os que questionam {Actor} desenvolvem doenças estranhas. Que os que investigam seus registros desaparecem. Que as crianças que frequentam o templo há mais de um ano apresentam comportamentos que os pais não reconhecem. A fé cega pode ser o maior aliado de uma corrupção paciente.",
      "{Actor} usou a estrutura da investigação religiosa para eliminar inimigos e acumular poder em {Region} por uma década. O momento de ser exposto chegou — mas expor um alto clérigo corrupto sem destruir a fé de milhares de pessoas inocentes requer evidências irrefutáveis, não apenas suspeitas.",
      "A corrupção que {Actor} introduziu nos rituais de {Region} é sutil o suficiente para escapar ao escrutínio teológico, mas seus efeitos são visíveis para quem sabe onde procurar. A investigação precisa de alguém que entenda tanto de fé quanto de fraude — e que tenha estômago para o que vai encontrar.",
    ],
  },

  // ─────────────────────────────────────────────
  // 23. ESCORT + STEALTH — Fuga Silenciosa
  // ─────────────────────────────────────────────
  {
    requiredTags: ["escort", "stealth"],
    titles: [
      "Tirar {Actor} de {Region} Sem que Ninguém Veja",
      "A Fuga Silenciosa de {Actor}",
      "Sombras e Segredos na Rota de {Region}",
      "O Desaparecimento Necessário de {Actor}",
      "Quando Escapar É a Única Vitória em {Region}",
    ],
    descriptions: [
      "{Actor} precisa deixar {Region} sem que nenhuma das três facções que o procuram perceba que ele partiu. A fuga não pode deixar rastros — nenhum guarda comprado, nenhum documento falsificado, nenhuma testemunha. A discrepância entre 'ele estava aqui' e 'ele nunca existiu' precisa ser mantida por pelo menos uma semana.",
      "Escoltar {Actor} através de {Region} é impossível pelo caminho óbvio — cada portão está guardado, cada rota conhecida está monitorada. O único caminho é o que ninguém considera: pelos esgotos, pelas catacumbas, pelas passagens que aparecem nos mapas mais antigos como simplesmente 'não investigado'.",
      "{Actor} não cooperará voluntariamente com a evacuação de {Region} — ele acredita que fugir é fraqueza. A missão é tirá-lo de lá de qualquer forma, sem que ele perceba que está sendo escoltado até que esteja seguro o suficiente para que a discussão possa acontecer. Convencer um homem orgulhoso depois do fato é mais fácil do que antes.",
      "A fuga de {Actor} de {Region} tem uma janela de quatro horas: o período entre a troca de guarda e o início da ronda de reconhecimento. Cada minuto acima dessas quatro horas dobra a probabilidade de interceptação. A rota está planejada. A execução precisa ser perfeita.",
      "{Actor} não sabe quem enviar a buscá-lo — todos os seus contatos em {Region} podem estar comprometidos. A missão chegou por um canal que ele não reconhece, através de uma pessoa que ele nunca viu. Estabelecer confiança suficiente para executar a fuga em tempo hábil é o primeiro obstáculo, e não é o menor.",
    ],
  },
];