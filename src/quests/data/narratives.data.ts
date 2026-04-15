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
      "Em Nome da Fé: A Sentença de {Actor}",
      "O Julgamento Forjado em {Region}",
      "A Última Confissão de {Actor}",
    ],
    descriptions: [
      "Uma ordem selada chegou: {Actor} deve perecer antes do amanhecer, e o ato jamais deve ser atribuído à mão da fé. {Region} guarda os passos do alvo — e também os seus segredos mais perigosos.",
      "Há crimes que os tribunais comuns não podem julgar. {Actor} corrompeu o que devia proteger e agora se abriga em {Region}. Quem o enviou não deseja um mártir — deseja um silêncio limpo e sem testemunhas.",
      "Um sussurro chegou ao ouvido certo: '{Actor} viu o que não devia ver em {Region}. Garanta que essa visão seja a última.' Não haverá oração pelo morto — apenas alívio.",
      "Em {Region}, {Actor} reúne seguidores em torno de uma causa que pode despedaçar gerações inteiras. A missão é cirúrgica. A missão é, para quem a encomendou, sagrada.",
      "Dizem que até os devotos derramam sangue quando a causa é justa. {Actor} tornou-se uma ameaça interna, e {Region} é o lugar onde esse problema deve ser extirpado — discretamente, e sem deixar rastros visíveis.",
    ],
  },

  // ─────────────────────────────────────────────
  // 2. STEALTH + FORBIDDEN_KNOWLEDGE — Roubo de Grimório
  // ─────────────────────────────────────────────
  {
    requiredTags: ["stealth", "forbidden_knowledge"],
    titles: [
      "O Segredo Proibido de {Actor}",
      "Sombras na Guarda de {Region}",
      "O que {Actor} Não Deve Saber que Você Sabe",
      "A Herança Roubada de {Region}",
      "Páginas Que Não Devem Existir",
    ],
    descriptions: [
      "{Actor} possui um conhecimento que muitos acreditavam extinto há gerações. Ele repousa em um cofre oculto em {Region}. Não há espaço para confronto: apenas para sombras, mãos habilidosas e pulmões que sabem prender o fôlego.",
      "O arquivo proibido de {Region} foi selado por decreto, mas suas proteções são velhas e sua guarda é descuidada. Alguém quer um item específico — algo que descreve o que não deveria ser descrito. {Actor} não pode saber que foi levado.",
      "O conhecimento que {Actor} acumulou em {Region} é a razão pela qual pessoas morrem. Alguém precisa infiltrar-se em seu reduto, copiar ou recuperar o que está guardado, e sair antes que os sentinelas façam a ronda.",
      "Outros tentaram antes. Nenhum voltou com o que buscava. O que {Actor} guarda em {Region} possui proteções que detectam intenção — o desafio não é apenas a furtividade do corpo, mas a disciplina absoluta da mente.",
      "Não se trata de roubo, argumenta o contratante. Trata-se de 'recuperação urgente'. O fato de {Actor} ser o guardião do item em {Region}, e de que ele matará quem o tocar, são apenas... complicações menores.",
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
      "Negociantes Não Perdoam em {Region}",
    ],
    descriptions: [
      "O acordo parecia simples: {Actor} forneceria o acesso, o outro forneceria os recursos. Mas nada chegou em {Region}, os cofres estão vazios, e os intermediários foram encontrados com marcas de faca nas costas. Descubra quem traiu quem — e recupere o que foi roubado.",
      "{Actor} firmou um pacto que tem um preço literal para quem o quebra. Em {Region}, alguém quebrou. Os cobradores já foram enviados. A questão é: você chegou antes, ou depois?",
      "Uma rota valiosa que atravessa {Region} foi vendida para uma facção rival — e depois para outra. {Actor} desapareceu depois disso. Agora grupos diferentes chegaram à mesma encruzilhada, armados e sem humor para negociação.",
      "Os registros de {Actor} revelam números impossíveis: mais saiu de {Region} do que jamais entrou. Alguém está desviando, falsificando e operando sob um nome que não é o seu. A traição tem camadas — e cada camada tem um preço.",
      "Em {Region}, dizem que {Actor} era o mais confiável do seu ramo. Dizem também que pessoas confiáveis não acumulam inimigos suficientes para precisar de um intermediário armado. A verdade está enterrada junto com as vítimas.",
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
      "{Actor} iniciou o ritual com intenções que talvez fossem puras. O que emergiu do círculo em {Region} não era o que foi invocado — e agora a corrupção se espalha pelo local como raízes de uma árvore podre, deformando tudo que toca.",
      "As colheitas em {Region} apodrecem antes de amadurecer. Os animais se comportam de forma estranha. Os mais velhos reconhecem os sinais: alguém realizou um ritual proibido, e {Actor} é o único com conhecimento e motivo. Encontre-o antes que seja tarde demais.",
      "O que {Actor} usou em {Region} não era um instrumento de poder — era uma armadilha colocada por algo muito mais antigo. O ritual atraiu algo que agora cresce no local de invocação a cada hora que passa.",
      "Há uma área em {Region} que as pessoas evitam sem saber ao certo por quê. No centro, {Actor} ergueu algo que ressoa de forma perturbadora. O ritual ainda não terminou — e seus efeitos ainda não atingiram seu pico.",
      "A corrupção que {Actor} liberou em {Region} não segue os padrões conhecidos. Ela tem um comportamento próprio, quase intencional. E ela parece ter fome.",
    ],
  },

  // ─────────────────────────────────────────────
  // 5. UNDEAD + INVESTIGATION — Praga dos Mortos
  // ─────────────────────────────────────────────
  {
    requiredTags: ["undead", "investigation"],
    titles: [
      "Os Mortos Que Andam em {Region}",
      "A Origem da Praga de {Actor}",
      "Sepulturas Abertas em {Region}",
      "O Inquérito do Caso de {Actor}",
      "Quando {Region} Parou de Enterrar os Seus Mortos",
    ],
    descriptions: [
      "Os cemitérios de {Region} estão vazios — não porque não haja mortos, mas porque eles não permanecem enterrados. {Actor} foi o último a documentar o fenômeno antes de desaparecer. Seus apontamentos incompletos são o único fio que resta.",
      "A morte em {Region} mudou. Os que tombam sob certas circunstâncias levantam dias depois com os olhos vazios e as bocas em silêncio. {Actor} sabe o porquê. A questão é chegar a ele antes que os mortos cheguem primeiro.",
      "Um padrão emerge nos registros de {Region}: todas as vítimas tinham alguma ligação com {Actor}. A investigação cheira a ritual — e a algo que ninguém ainda quis nomear em voz alta.",
      "{Actor} deixou uma única nota antes de desaparecer em {Region}: 'Não é o que parece. É algo que estava aqui antes de nós e que apenas acordou.' Os mortos que caminham parecem concordar — eles apontam todos para a mesma direção.",
      "As autoridades de {Region} querem respostas, não rumores. {Actor} foi designado para investigar o surgimento dos mortos-vivos e desapareceu. Alguém precisa seguir suas pegadas — e rezar para que elas não terminem em uma cova rasa.",
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
      "O conflito chegou a {Region} e as rotas civis foram cortadas. {Actor} — portador de algo ou alguém vital — precisa cruzar o front antes do amanhecer. Cada posto de controle é uma sentença de morte. Cada sombra pode ser um arqueiro.",
      "Quem controla {Region} não trata prisioneiros com gentileza. {Actor} possui informações que podem mudar o rumo dos acontecimentos, mas elas não valem nada se ele morrer antes de chegar ao destino. Sua única escolta é você.",
      "{Actor} sobreviveu quando não deveria. Agora grupos diferentes o querem — um para protegê-lo, outro para silenciá-lo permanentemente. O caminho seguro não existe; existe apenas o caminho menos mortal.",
      "As estradas de {Region} estão repletas de oportunistas que descobriram que o conflito é mais lucrativo como negócio do que como causa. Escoltar {Actor} até a segurança significa navegar por essa selva humana com tato e aço em igual medida.",
      "Em tempos de guerra, a lealdade é a moeda mais cara de {Region}. {Actor} pagou bem — mas sabe que metade das pessoas na região venderia informações sobre a rota por um preço ainda mais alto. Confiar em alguém pode ser o maior erro.",
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
      "{Actor} possui informações que, se tornadas públicas, desestabilizariam acordos importantes e provocariam conflitos em {Region}. Ele não quer sangue: quer concessões. A missão é negociar os termos sem deixar que nenhum lado perceba o quão fraco o outro realmente está.",
      "A estabilidade de {Region} repousa sobre um segredo que {Actor} descobriu. Agora ele está sentado à mesa com o sorriso de quem segura uma espada invisível. Alguém precisa agir antes que a negociação se transforme em chantagem aberta.",
      "Há uma arte em ameaçar sem ameaçar. {Actor} pratica essa arte em {Region}, trocando informações comprometedoras por influência. Sua última 'negociação' eliminou um rival. A próxima pode eliminar um aliado.",
      "{Actor} chegou a {Region} como emissário, mas trouxe bagagem demais — e parte dela contém segredos de ambos os lados. Agora ele negocia para si mesmo, usando a diplomacia como escudo e a pressão como lança.",
      "Um acordo em {Region} está prestes a ser fechado, mas {Actor} recebeu uma mensagem que muda tudo. Alguém sabe o que ele fez no passado. A negociação de interesses tornou-se uma negociação de sobrevivência.",
    ],
  },

  // ─────────────────────────────────────────────
  // 8. SUMMONING + CONTAINMENT — Entidade Invocada
  // ─────────────────────────────────────────────
  {
    requiredTags: ["summoning", "containment"],
    titles: [
      "O que {Actor} Invocou Não Quer Ir Embora",
      "Contenção em {Region}: A Ameaça de {Actor}",
      "O Círculo Quebrado de {Region}",
      "Quando {Actor} Perdeu o Controle",
      "A Invocação que Abalou {Region}",
    ],
    descriptions: [
      "{Actor} invocou algo em {Region} que estava além de sua capacidade de controlar. A entidade está contida — por enquanto — em um perímetro que se deteriora a cada hora. Trazer o que é necessário para reforçar o selo é uma corrida contra o tempo.",
      "O que foi convocado em {Region} não responde a métodos convencionais. {Actor} está próximo da criatura — voluntariamente — e ninguém entende por quê. A missão é resolver a situação. Vivo ou não.",
      "Especialistas foram enviados a {Region}. Alguns voltaram em condições piores do que partiram. O terceiro voltou diferente. {Actor} precisa de alguém que entenda que conter algo assim não é sobre poder, mas sobre vontade inabalável.",
      "A invocação de {Actor} em {Region} foi um sucesso técnico e um desastre prático. O que foi trazido obedece — mas interpreta as ordens de maneiras que ninguém antecipou. Cada cumprimento de comando resulta em algo irreversível.",
      "Em {Region}, há um local que ninguém se aproxima há semanas. {Actor} ordenou a evacuação da área. O que está dentro respondeu de forma perturbadora. Conter a situação exige entender o que a criatura quer — não apenas enfrentá-la.",
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
      "O que {Actor} estabeleceu em {Region} não é um acampamento — é um matadouro. Os desaparecidos foram encontrados, ou o que restou deles. A limpeza não é uma missão de resgate: é uma execução. Não deixe nada com vida.",
      "{Region} tem um problema que vai além da lei ordinária: {Actor} criou ou atraiu algo que não obedece a regras conhecidas. O local precisa ser purgado sem hesitação e sem prisioneiros. Quem entra precisa estar preparado para o que vai encontrar.",
      "Outros tentaram limpar o ninho em {Region} e os poucos que voltaram não conseguem mais dormir. Precisamos de alguém com estômago forte, olhos frios e disposição para fazer o que os outros não conseguiram.",
      "{Actor} usou {Region} para propósitos que ninguém deveria testemunhar. O resultado são corredores que especialistas se recusaram a catalogar. A limpeza é necessária, urgente, e jamais deve ser feita por alguém despreparado.",
      "Não há negociação possível com o que habita {Region}. {Actor} criou ou liberou algo que só entende força. A missão é simples na teoria e brutal na prática: entre, elimine tudo que represente ameaça, e saia antes que seja tarde.",
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
      "O que Usa o Rosto de {Actor}",
    ],
    descriptions: [
      "{Actor} era uma pessoa comum em {Region} — até recentemente. O que fala com sua voz agora conhece segredos que não poderia saber, e sorri de um jeito que faz as pessoas ao redor recuarem. O rito precisa ser conduzido antes que o vínculo se torne permanente.",
      "A comunidade de {Region} perdeu alguém importante para algo que não deveria ser possível. {Actor} ainda luta por dentro — isso quem conhece do assunto consegue sentir. Mas o tempo é curto e a entidade aprende rápido.",
      "Especialistas foram enviados para lidar com o caso de {Actor} em {Region}. O primeiro foi convencido pela entidade de que estava errado. O segundo desapareceu. Precisamos de alguém com convicção inabalável — que não acredite em nada que {Actor} disser.",
      "{Actor} pediu ajuda a si mesmo, em um momento de lucidez que durou apenas segundos. A mensagem que deixou diz: 'Não acredite no que você ver. Acredite apenas nestas palavras. Seja rápido. Estou perdendo.' A fé é a única arma que funcionará.",
      "O que habita {Actor} em {Region} é antigo — mais antigo do que os métodos convencionais usados contra ele. O rito precisará de improvisação, de convicção que vai além do ritual, e de alguém disposto a encarar o abismo sem piscar.",
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
      "{Actor} exibe sua coleção como troféus em {Region} — e todos foram obtidos de maneiras que não suportam escrutínio. Alguém quer um item específico de volta. A missão não é punição: é recuperação silenciosa, antes que {Actor} perceba que algo mudou de lugar.",
      "Há um prazo. O item que {Actor} guarda em {Region} precisa ser recuperado antes que mude de mãos. Entrar significa navegar por guardas e armadilhas, e sair sem deixar vestígios.",
      "Há um objeto em {Region} que {Actor} mantém sob proteção reforçada. Quem quer o objeto diz que é de valor pessoal. A quantidade de ouro oferecida como pagamento sugere que é de valor muito mais concreto. Perguntas custam tempo — e tempo é o que não há.",
      "{Actor} tomou o que não era seu em {Region}, e agora pertence a alguém que não processa ladrões — os enterra. Devolver o objeto sem que nenhum dos lados saiba que você tocou nele é o único caminho seguro.",
      "Os guardas de {Actor} em {Region} são veteranos, não ornamentos. A proteção usa múltiplas camadas. E há pelo menos uma ameaça silenciosa que a maioria dos ladrões não considera. Tudo isso por um único item. O contratante não explicou por quê. Os bons profissionais não perguntam.",
    ],
  },

  // ─────────────────────────────────────────────
  // 12. DUEL + ASSASSINATION — Honra e Sangue
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
      "{Actor} desafiou a pessoa errada para um confronto em {Region} — alguém que não tem intenção de seguir as regras do combate honrado. O contratante quer intervenção: não para salvar {Actor}, mas para garantir que o vencedor seja o certo. O que 'certo' significa aqui é uma questão de perspectiva.",
      "Em {Region}, disputas são resolvidas com sangue ou com ouro. {Actor} não tem ouro suficiente e sabe disso. O que o desafiante realmente quer não é vitória em combate — é um pretexto. Descubra o pretexto, desfaça-o, ou esteja presente para garantir que o resultado seja o planejado.",
      "O código do duelo em {Region} proíbe interferência externa. Mas {Actor} chegará ao campo com vantagens escondidas e apoio encoberto. Expor a traição sem provas é perigoso. Provas custam tempo. O confronto começa ao nascer do sol.",
      "{Actor} é reconhecido como o mais habilidoso em {Region} — e essa é exatamente a razão pela qual alguém o desafiou formalmente. O desafiante sabe que não pode vencer no confronto direto: então planeja vencer antes. Impedir o ataque sem quebrar o protocolo é o desafio real.",
      "O duelo foi marcado com antecedência. Em {Region}, isso é tempo suficiente para que favores sejam cobrados, árbitros sejam comprados e armadilhas sejam preparadas. {Actor} não sabe que o campo já foi preparado contra ele. Ou talvez saiba — e esteja preparando a própria resposta.",
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
      "{Region} mudou depois que {Actor} passou por ali. A flora cresceu de forma estranha. Os animais se comportam de maneira que não deveriam. E qualquer ferimento no local infecta mais rápido do que o normal. Sobreviver o suficiente para chegar ao centro do problema é em si a missão.",
      "A expedição anterior a {Region} enviou um único sobrevivente de volta, e ele só repetia o nome de {Actor} sem parar. A corrupção no território não mata imediatamente — ela muda. Você precisa entrar, encontrar a fonte, e sair antes que a mudança comece em você.",
      "{Actor} descreveu {Region} como 'um experimento em progresso'. Os que tentaram deixar a área foram encontrados voltando involuntariamente — como se o território os repelisse para dentro. A corrupção parece ter vontade própria.",
      "Sobreviver em {Region} requer mais do que suprimentos e armas. As condições locais foram alteradas: direções enganam, o ambiente desorientam e o tempo parece distorcido perto do centro da corrupção. Confie apenas em instrumentos. Não confie nos seus sentidos.",
      "{Actor} abandonou {Region} e não voltou — o que, dado o estado atual do local, pode ser o sinal mais ominoso de todos. A corrupção está se expandindo. Em breve, alcançará áreas habitadas. Entrar, encontrar a fonte e desativá-la é a única opção que resta.",
    ],
  },

  // ─────────────────────────────────────────────
  // 14. FORGERY + DIPLOMACY — Documentos Falsos
  // ─────────────────────────────────────────────
  {
    requiredTags: ["forgery", "diplomacy"],
    titles: [
      "O Acordo Que Nunca Existiu em {Region}",
      "A Assinatura de {Actor} Que Não Foi Sua",
      "Tinta e Mentiras em {Region}",
      "O Emissário Que {Actor} Nunca Foi",
      "Falso Ouro, Falsas Palavras em {Region}",
    ],
    descriptions: [
      "Um documento importante circula em {Region} com a assinatura de {Actor} — mas {Actor} nunca assinou nada. O documento é uma falsificação convincente, e quem o criou entende não apenas de caligrafia, mas de política. Descobrir o autor antes que o documento produza efeitos é urgente.",
      "{Actor} está sendo responsabilizado por acordos que jamais firmou em {Region}. Os documentos são convincentes demais para serem obra de um amador — alguém com acesso próximo criou isso. Um inimigo de dentro. Muito próximo.",
      "A missão exige criar credenciais convincentes para infiltrar um ambiente controlado em {Region}. {Actor} precisa de documentos que resistam ao escrutínio de especialistas. A falsificação precisa ser impecável — porque as consequências de uma falha não são a prisão, mas a morte.",
      "Em {Region}, a palavra escrita tem força de lei. {Actor} descobriu isso da pior forma: alguém forjou um documento que o coloca em posição impossível perante uma facção poderosa. Contestar exige encontrar o falsificador e provar a fraude antes que os envolvidos tomem ação.",
      "Um mensageiro chegou a {Region} com documentos que ninguém deveria possuir — correspondências, acordos e informações sigilosas, tudo com aparência de autenticidade impecável. {Actor} quer saber quem tem acesso suficiente para produzir algo assim — e se ainda há tempo para conter o dano.",
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
      "O que {Actor} carrega é mais do que um objeto de valor — é um ponto de ancoragem para toda uma comunidade em {Region}. Se cair em mãos erradas, as consequências serão devastadoras. Protegê-lo significa colocar o próprio corpo entre a missão e aqueles que a odeiam.",
      "{Actor} é uma figura central em {Region} que alguém quer silenciar. A proteção precisa ser discreta — {Actor} não deve saber que está sendo guardado, pois recusaria ajuda por princípio. A devoção, às vezes, é seu próprio maior inimigo.",
      "O local em {Region} foi ameaçado por múltiplos grupos na última semana. {Actor} recusou-se a recuar, argumentando que fugir seria demonstrar fraqueza. Garantir que sua convicção não resulte em seu fim exige tato, vigilância e a disposição de agir antes que a ameaça se materialize.",
      "O trajeto que {Actor} lidera através de {Region} passa por território que diferentes grupos consideram estratégico. Nenhum deles se importa com o propósito da jornada. Proteger os envolvidos sem transformar uma missão pacífica em um confronto armado é o desafio mais delicado desta tarefa.",
      "{Actor} possui algo ou sabe de algo que o torna alvo em {Region}. Aqueles que o caçam já conhecem sua rotina. A proteção precisa acontecer nas sombras, porque um guardião visível ao lado de um alvo conhecido é o mesmo que pintar uma marca em sua testa.",
    ],
  },

  // ─────────────────────────────────────────────
  // 16. SABOTAGE + WAR — Operação Negra
  // ─────────────────────────────────────────────
  {
    requiredTags: ["sabotage", "war"],
    titles: [
      "Antes que {Actor} Avance",
      "A Noite Antes da Batalha de {Region}",
      "Destrua as Linhas de Suprimento de {Actor}",
      "Operação Cinza em {Region}",
      "O Que Nunca Deve Chegar a {Region}",
    ],
    descriptions: [
      "A campanha de {Actor} em {Region} depende de uma cadeia logística que passa por pontos vulneráveis. Cortar essa cadeia antes da grande ofensiva pode encerrar o conflito antes que ele comece. A missão é discreta. Ninguém pode saber que foi você.",
      "{Actor} possui um recurso que mudará o equilíbrio do conflito em {Region}. Não é um exército — é algo que, uma vez ativado, tornará qualquer resistência impossível. A sabotagem precisa acontecer enquanto ainda está em trânsito e vulnerável.",
      "As posições de {Region} são difíceis de romper por força direta. Mas toda operação tem pontos de apoio internos. {Actor} não percebeu que sua principal vulnerabilidade não são as defesas externas — são as pessoas que fazem tudo funcionar por dentro.",
      "A traição de {Actor} em {Region} custou muitas vidas. A retribuição não virá pelo confronto direto — virá pela sabotagem sistemática de tudo que ele construiu. Seus planos, suas alianças, suas rotas: tudo deve ser desfeito peça por peça.",
      "Em tempo de conflito, a informação vale mais que exércitos. {Actor} recebe despachos em {Region} que guiam cada movimento de sua campanha. Interceptar, falsificar e redirecionar essas comunicações exige paciência, inteligência e a disposição de viver uma mentira por tempo indeterminado.",
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
      "Pessoas ligadas ao uso de magia estão morrendo em {Region} com os mesmos sinais inexplicáveis. {Actor} era o investigador designado e enviou um único relatório antes de cortar toda comunicação. Descubra o que ele encontrou.",
      "{Actor} detectou uma anomalia em {Region} que não corresponde a nenhum padrão catalogado. A fonte não obedece às leis convencionais — ela parece existir à margem do que deveria ser possível. A investigação requer alguém capaz de raciocinar quando a realidade para de fazer sentido.",
      "A magia em {Region} está se comportando de forma errática desde o desaparecimento de {Actor}. Feitiços falham. Outros se amplificam sem controle. Algo alterou o tecido local — e descobrir o quê exige seguir as últimas anotações de {Actor}.",
      "{Actor} deixou uma pista antes de desaparecer em {Region}: uma indicação codificada que aponta para um local que não consta em nenhum registro. O que sugere que a investigação o levou a um lugar que literalmente não deveria ser acessível.",
      "A investigação das ocorrências em {Region} levou {Actor} a uma conclusão que as autoridades se recusam a aceitar. Alguém ou algo está extraindo poder diretamente de fontes vivas. E a colheita ainda não terminou.",
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
      "Fogo e Cinzas Sobre {Region}",
      "Quando Apenas a Chama Pode Curar {Region}",
    ],
    descriptions: [
      "Os mortos de {Region} não descansam, e a razão é algo enterrado no coração do local — um foco que nega o repouso eterno. {Actor} desenvolveu um rito de purificação, mas ele requer alcançar o centro enquanto as criaturas estão ativas. Ele não pode fazer isso sozinho.",
      "A praga dos mortos-vivos em {Region} tem uma solução — mas ela exige agir sobre o local onde tudo começou, desfazendo algo que existia antes de qualquer um dos envolvidos. {Actor} precisa de proteção durante o processo, pois ele o deixa completamente vulnerável.",
      "{Actor} já purificou locais antes — mas nunca em uma escala como esta. A extensão da corrupção sugere um foco subterrâneo que alimenta múltiplas fontes. O rito precisará ser conduzido em etapas, o que significa passar mais de uma noite em campo com as criaturas ativas ao redor.",
      "A convicção de {Actor} é inabalável — é sua capacidade de sobreviver ao combate que é questionável. O rito que ele concebeu para {Region} é correto em teoria e praticamente suicida sem proteção adequada durante os momentos mais críticos.",
      "Em {Region}, os mortos-vivos são maioria há algum tempo. {Actor} tem uma teoria: não são os mortos que estão corrompidos — é o próprio lugar onde foram sepultados. Purificar o local, não as criaturas, é a solução. Mas o processo vai provocar o que quer que esteja por trás disso.",
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
      "O Executor de {Actor} Não Sabe que É o Alvo",
      "Traição em Dois Atos em {Region}",
    ],
    descriptions: [
      "O contrato para eliminar {Actor} parece direto — até que a investigação revela que o contratante é a própria pessoa que {Actor} protege. A traição tem camadas, e cada camada removida revela outra. Em {Region}, ninguém é exatamente o que parece.",
      "{Actor} recebeu um trabalho em {Region} para eliminar um alvo. Metade do caminho, descobriu que o alvo é inocente e que quem o contratou é o verdadeiro problema. Sair do acordo tem um preço. Cumpri-lo também. A única saída é uma que ninguém ainda considerou.",
      "Em {Region}, chegou a informação de que alguém foi contratado para eliminar {Actor}. O problema: {Actor} foi contratado para eliminar outra pessoa. Rastreando as origens, ambos os contratos partem da mesma fonte — que claramente quer que os dois morram, usando um para fazer o trabalho do outro.",
      "A traição de {Actor} custou vidas em {Region}. Quem sobreviveu não quer a lei — quer justiça pessoal. O contrato foi emitido, o preço foi acordado, a localização foi confirmada. O que ninguém disse ao executor é que {Actor} sabe que está sendo caçado.",
      "{Actor} entregou informações para o lado errado — e os que morreram por isso deixaram alguém para trás com recursos e paciência. A missão está em andamento há tempo. Esta noite é a noite certa.",
    ],
  },

  // ─────────────────────────────────────────────
  // 20. TRADE + MAGIC + FORBIDDEN_KNOWLEDGE — Mercado Negro Arcano
  // ─────────────────────────────────────────────
  {
    requiredTags: ["trade", "magic", "forbidden_knowledge"],
    titles: [
      "O Mercado Que {Actor} Não Deveria ter Aberto",
      "Itens Proibidos à Venda em {Region}",
      "O Preço do Conhecimento em {Region}",
      "O Comerciante de Segredos de {Actor}",
      "Quando o Proibido Tem Valor de Mercado em {Region}",
    ],
    descriptions: [
      "{Actor} abriu um mercado clandestino em {Region} que comercializa não apenas objetos proibidos, mas conhecimentos e recursos que não deveriam circular livremente. Diferentes facções querem coisas diferentes desse mercado — e apenas uma delas quer simplesmente fechá-lo.",
      "Os itens que circulam pelo comércio de {Actor} em {Region} passaram por muitas mãos antes de chegar lá — e cada mão pagou um preço. Rastrear a origem dos mais perigosos revela uma cadeia de transações que remonta a algo que ninguém deveria ter tocado.",
      "{Actor} comercializa algo em {Region} através de um sistema que garante que compradores não compreendam totalmente o que estão adquirindo até a transação ser concluída. Vários compradores tornaram-se problemas públicos. Vários outros estão mortos. Fechar isso é urgente.",
      "O inventário de {Actor} em {Region} inclui algo que o contratante reconhece como pertencente a um arquivo que não deveria ter sido violado. Como chegou às mãos de {Actor} é uma questão tão urgente quanto recuperá-lo.",
      "Em {Region}, {Actor} construiu uma reputação de encontrar o que não deveria ser encontrado e vender o que não deveria ser vendido. Sua última aquisição atraiu interessados de vários lugares — incluindo alguns que não deveriam ser capazes de realizar transações no plano comum.",
    ],
  },

  // ─────────────────────────────────────────────
  // 21. ASSAULT + PROTECTION — Cerco e Defesa
  // ─────────────────────────────────────────────
  {
    requiredTags: ["assault", "protection"],
    titles: [
      "As Defesas de {Region} Não Devem Cair",
      "O Cerco de {Actor} Começa em Breve",
      "Defender {Region} Até o Último Homem",
      "O Que {Actor} Quer Que Você Não Tem",
      "Muralhas, Sangue e Resistência em {Region}",
    ],
    descriptions: [
      "{Actor} iniciou o cerco de {Region} com forças que pareciam impossíveis de reunir tão rapidamente. Os defensores estão mal equipados e começando a perder a confiança. A missão não é vencer — é comprar tempo suficiente para que o reforço chegue.",
      "O avanço de {Actor} sobre {Region} não é pelo que parece. Ele não quer destruir o lugar; quer algo específico que está dentro dele. Proteger o objetivo real, enquanto todos defendem os pontos óbvios, exige entender o que {Actor} realmente busca.",
      "{Region} já resistiu a outros cercos. Este, conduzido por {Actor}, é diferente: não há demanda de rendição, não há negociação, não há sinal de que haverá sobreviventes se as defesas cederem. Proteger os civis torna-se tão urgente quanto segurar as posições.",
      "A defesa de {Region} contra {Actor} exige mais do que força — exige inteligência. Cada ataque até agora foi um teste de uma resposta específica. {Actor} está mapeando as defesas, aprendendo os padrões, identificando os pontos fracos. Alguém precisa perceber isso antes que o ataque real comece.",
      "{Actor} enviou um emissário com uma proposta: entregue algo ou alguém específico em {Region}, e o cerco termina. A alternativa é um confronto que {Region} provavelmente perderá. Às vezes, proteger significa fazer escolhas que ninguém registrará com gentileza.",
    ],
  },

  // ─────────────────────────────────────────────
  // 22. CORRUPTION + FAITH + INVESTIGATION — Heresia Interna
  // ─────────────────────────────────────────────
  {
    requiredTags: ["corruption", "faith", "investigation"],
    titles: [
      "A Podridão Dentro do Círculo de {Actor}",
      "Quando a Fé Mente em {Region}",
      "O Guardião de {Region} É o Culpado",
      "A Corrupção Que {Actor} Esconde em {Region}",
      "O Conselho Corrompido de {Region}",
    ],
    descriptions: [
      "A investigação de irregularidades em {Region} revelou algo muito pior do que fraude: {Actor}, a figura responsável pela apuração, é ele mesmo o responsável pela corrupção. E a corrupção não é apenas material — é profunda. O que ele faz em segredo tem um propósito diferente do que os outros acreditam.",
      "{Actor} chegou a {Region} como investigador e partiu como o maior problema que o lugar já produziu. Ele não foi corrompido aqui — chegou assim, com uma missão disfarçada. Encontrar as provas sem que {Actor} perceba o inquérito é o desafio mais delicado desta investigação.",
      "Os que questionam {Actor} em {Region} desenvolvem problemas inesperados. Os que investigam seus registros desaparecem. Os que convivem com ele por tempo suficiente mudam de forma que os próximos não reconhecem. A confiança pode ser o maior aliado de uma corrupção paciente.",
      "{Actor} usou sua posição para eliminar inimigos e acumular poder em {Region} por muito tempo. O momento de ser exposto chegou — mas fazê-lo sem destruir a confiança de pessoas inocentes requer evidências irrefutáveis, não apenas suspeitas.",
      "A corrupção que {Actor} introduziu em {Region} é sutil o suficiente para escapar ao escrutínio comum, mas seus efeitos são visíveis para quem sabe onde procurar. A investigação precisa de alguém que entenda tanto de crença quanto de fraude — e que tenha estômago para o que vai encontrar.",
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
      "{Actor} precisa deixar {Region} sem que os grupos que o procuram percebam que ele partiu. A fuga não pode deixar rastros — nenhum contato comprado, nenhum documento, nenhuma testemunha. A diferença entre 'ele estava aqui' e 'ele nunca existiu' precisa ser mantida por tempo suficiente.",
      "Escoltar {Actor} através de {Region} é impossível pelo caminho óbvio — cada saída está monitorada, cada rota conhecida está coberta. O único caminho é o que ninguém considera: pelos lugares que aparecem nos registros como 'não investigado'.",
      "{Actor} não cooperará com a evacuação de {Region} — ele acredita que fugir é fraqueza. A missão é tirá-lo de lá de qualquer forma, sem que ele perceba que está sendo escoltado até que esteja seguro o suficiente para a conversa acontecer. Convencer um homem orgulhoso depois do fato é mais fácil do que antes.",
      "A fuga de {Actor} de {Region} tem uma janela limitada: o período entre turnos de guarda e o início da ronda de reconhecimento. Cada minuto acima dessa janela dobra a probabilidade de interceptação. A rota está planejada. A execução precisa ser perfeita.",
      "{Actor} não sabe em quem confiar — todos os seus contatos em {Region} podem estar comprometidos. A missão chegou por um canal que ele não reconhece. Estabelecer confiança suficiente para executar a fuga em tempo hábil é o primeiro obstáculo, e não é o menor.",
    ],
  },

  // ==========================================
  // REDES DE SEGURANÇA (CATCH-ALL TEMPLATES)
  // ==========================================
  {
    requiredTags: ['magic'],
    titles: [
      "Assuntos Arcanos em {Region}",
      "O Problema Oculto de {Actor}",
      "Perturbação Mágica"
    ],
    descriptions: [
      "As correntes de magia estão agitadas em {Region}. {Actor} precisa que você resolva um problema que olhos comuns não compreendem.",
      "Um trabalho que exige habilidade e nenhuma pergunta foi solicitado. Vá até o local e lide com a anomalia."
    ]
  },
  {
    requiredTags: ['war'],
    titles: [
      "Sangue e Aço para {Actor}",
      "Conflito Iminente em {Region}",
      "O Contrato de Batalha"
    ],
    descriptions: [
      "{Actor} convocou combatentes para um embate decisivo. O aço vai cantar e você será pago para garantir que o lado certo vença.",
      "Não há espaço para diplomacia. Marche para {Region} e faça o trabalho com a força e o preparo que a situação exige."
    ]
  },
  {
    requiredTags: ['stealth'],
    titles: [
      "Trabalho nas Sombras em {Region}",
      "O Contrato Silencioso de {Actor}",
      "Sem Deixar Rastros"
    ],
    descriptions: [
      "Para esta tarefa, o silêncio vale mais que a força. {Actor} exige que você opere de forma discreta em {Region}.",
      "Guarde a lâmina e prepare as ferramentas certas. Um trabalho furtivo de alta prioridade acabou de cair nas suas mãos."
    ]
  },
  {
    requiredTags: ['holy'],
    titles: [
      "A Vontade de {Actor}",
      "Intervenção Sagrada em {Region}",
      "A Luz Guia"
    ],
    descriptions: [
      "Assuntos de fé e purificação. {Actor} confia em seus valores para limpar a corrupção que assola a área.",
      "Onde a escuridão avança, a convicção deve permanecer inabalável. Uma intervenção direta é necessária em {Region}."
    ]
  },
  {
    requiredTags: ['trade'],
    titles: [
      "A Rota Comercial de {Actor}",
      "A Entrega Garantida",
      "Mercadorias e Moedas em {Region}"
    ],
    descriptions: [
      "O fluxo de recursos não pode parar. {Actor} tem assuntos que exigem braços confiáveis para garantir a transação em {Region}.",
      "Um acordo precisa ser finalizado em {Region}. Garanta que o que foi combinado chegue ao destino — e que ninguém interfira no caminho."
    ]
  }
];