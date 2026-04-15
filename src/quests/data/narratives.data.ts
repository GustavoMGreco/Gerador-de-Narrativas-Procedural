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
      "O Julgamento de {Region}",
      "A Última Confissão de {Actor}",
      "A Punição Divina sobre {Actor}",
      "O Canto do Carrasco em {Region}",
      "Hereticídio em {Region}",
      "O Veridito de Ferro de {Actor}",
      "Luz sobre o Sangue de {Actor}"
    ],
    descriptions: [
      "{Actor} representa uma ameaça que os fiéis de {Region} não podem ignorar. O serviço é delicado e a discrição é esperada.",
      "A fé tem suas próprias formas de fazer justiça. {Actor} está em {Region} e há quem pague para que isso mude.",
      "Nem todo trabalho sujo vem de mãos sujas. Em {Region}, {Actor} é o problema — e você é a solução escolhida.",
      "Um enviado da fé busca alguém disposto a resolver um assunto sensível em {Region}. O alvo é {Actor}. Os detalhes, presencialmente.",
      "Em {Region}, {Actor} cruzou uma linha que certas pessoas não perdoam. O pagamento está garantido. A discrição também é esperada.",
      "O pecado de {Actor} em {Region} é uma mancha que só o sangue pode limpar. O conselho exige o fim dessa heresia.",
      "A igreja não pode se envolver abertamente, mas {Actor} deve ser removido de {Region} antes do próximo solstício.",
      "Misericórdia é para os deuses; em {Region}, seu trabalho é garantir que {Actor} os encontre o quanto antes.",
      "Dizem que {Actor} profanou o solo sagrado de {Region}. A sentença já foi escrita: morte sem alarde.",
      "Um dízimo de sangue foi pago para que {Actor} nunca mais caminhe por {Region}. Cumpra a vontade divina."
    ],
  },

  // ─────────────────────────────────────────────
  // 2. STEALTH + FORBIDDEN_KNOWLEDGE — Roubo de Grimório
  // ─────────────────────────────────────────────
  {
    requiredTags: ["stealth", "forbidden_knowledge"],
    titles: [
      "O Segredo Proibido de {Actor}",
      "Sombras em {Region}",
      "O que {Actor} Não Deve Saber que Você Sabe",
      "O que {Region} Esconde",
      "Aquilo que Não Deve Existir",
      "O Tomo Oculto de {Actor}",
      "Sussurros na Biblioteca de {Region}",
      "O Roubo do Olhar de {Actor}",
      "Páginas Rasgadas de {Region}",
      "O Silêncio dos Escribas em {Region}"
    ],
    descriptions: [
      "{Actor} guarda algo em {Region} que o contratante quer de volta. Sem confronto, sem barulho.",
      "Há algo em posse de {Actor} que não deveria estar. O trabalho é entrar em {Region}, pegar e sair.",
      "O contratante prefere não revelar o que quer de {Actor} — apenas onde encontrá-lo em {Region} e quanto está pagando.",
      "Um trabalho discreto em {Region}. {Actor} tem algo. Você pega. Simples, se feito direito.",
      "Alguém em {Region} guarda o que não é seu. {Actor} é esse alguém. O resto é com você.",
      "{Actor} desenterrou conhecimentos em {Region} que podem destruir mentes despreparadas. Recupere o registro.",
      "A biblioteca particular de {Actor} em {Region} contém um pergaminho único. O dono não sentirá falta se você for rápido.",
      "Informação é a moeda mais cara de {Region}. {Actor} tem o cofre cheio, e você tem as gazuas.",
      "Não deixe que as guardas de {Actor} o vejam. Em {Region}, o conhecimento proibido é punido com a cegueira.",
      "O contratante precisa da fórmula que {Actor} esconde sob sete chaves em {Region}. Entre como uma sombra."
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
      "O Preço da Ganância de {Actor}",
      "A Moeda de Troca em {Region}",
      "Dívida de Honra de {Actor}",
      "O Golpe do Mercador de {Region}",
      "Sangue no Balcão de {Actor}"
    ],
    descriptions: [
      "{Actor} quebrou um acordo em {Region} e alguém saiu no prejuízo. O contratante quer o que é seu de volta — ou uma satisfação.",
      "Nem todo calote fica sem resposta. {Actor} deve algo a alguém em {Region}, e esse alguém está contratando.",
      "Um negócio deu errado em {Region} e {Actor} sumiu com a melhor parte. Localize-o e resolva a situação.",
      "{Actor} não honrou o combinado em {Region}. Quem foi prejudicado busca alguém para cobrar essa dívida.",
      "Em {Region}, confiar em {Actor} foi um erro. Agora o lesado quer reparação — e está pagando por isso.",
      "Ouro flui em {Region}, mas a lealdade de {Actor} secou. Recupere o investimento por qualquer meio necessário.",
      "{Actor} vendeu o que não lhe pertencia em {Region}. O verdadeiro dono quer a cabeça dele como compensação.",
      "Uma caravana de {Actor} foi 'desviada' convenientemente em {Region}. Alguém sabe que foi traição interna.",
      "O contrato era claro, mas {Actor} achou que as leis de {Region} não o alcançariam. Mostre que ele errou.",
      "A traição de {Actor} custou caro para as famílias de {Region}. Eles querem o lucro de volta, com juros de sangue."
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
      "Quando o Ritual de {Actor} Saiu do Controle",
      "Sangue e Cinzas em {Region}",
      "O que {Actor} Despertou em {Region}",
      "O Altar de Carne de {Actor}",
      "A Voz do Abismo em {Region}",
      "A Podridão de {Actor} em {Region}",
      "Oferendas Malditas em {Region}",
      "O Beijo da Corrupção de {Actor}"
    ],
    descriptions: [
      "Algo foi feito em {Region} e o lugar não está bem desde então. {Actor} sabe o que aconteceu — ou causou.",
      "{Region} mudou depois de um ritual mal conduzido. {Actor} está envolvido e alguém quer que o estrago seja reparado.",
      "Os moradores de {Region} notaram que as coisas não estão certas. Dizem que {Actor} tem culpa nisso.",
      "Um ritual deixou marcas em {Region}. {Actor} é o nome que aparece nas conversas. O contratante quer o problema resolvido.",
      "Em {Region}, {Actor} fez algo que não devia. O resultado é visível. Quem contratou quer que pare.",
      "A terra está morrendo em {Region} porque {Actor} a alimentou com o que não devia. Interrompa o ciclo.",
      "O ritual de {Actor} em {Region} exige sacrifícios que a decência não permite. Acabe com a cerimônia.",
      "{Actor} está infectando o éter de {Region} com magia proibida. O contratante exige a purificação imediata.",
      "Gritos foram ouvidos na propriedade de {Actor} em {Region}. O que quer que ele esteja conjurando, deve ser parado.",
      "A corrupção se espalha a partir das mãos de {Actor}. Se {Region} quiser sobreviver, ele precisa cair."
    ],
  },

  // ─────────────────────────────────────────────
  // 5. UNDEAD + INVESTIGATION — Praga dos Mortos
  // ─────────────────────────────────────────────
  {
    requiredTags: ["undead", "investigation"],
    titles: [
      "Os Mortos que Andam em {Region}",
      "A Origem do Problema de {Actor}",
      "Sepulturas Abertas em {Region}",
      "O Inquérito de {Region}",
      "Quando {Region} Parou de Enterrar os Seus Mortos",
      "Onde os Mortos não Descansam",
      "A Herança Maldita de {Actor}",
      "Rastros Pútridos em {Region}",
      "O Coveiro de {Actor}",
      "O Mistério do Sudário em {Region}"
    ],
    descriptions: [
      "Algo está errado com os mortos em {Region}. {Actor} pode saber o que é — ou ser parte do motivo.",
      "Em {Region}, os mortos não estão ficando onde deveriam. Alguém quer saber por quê, e {Actor} é o começo da resposta.",
      "{Actor} foi visto em {Region} pouco antes dos problemas com os mortos-vivos começarem. Coincidência ou não, o contratante quer investigação.",
      "Os mortos caminham em {Region} e ninguém sabe ao certo por quê. {Actor} é o fio mais próximo. Puxe-o.",
      "Uma investigação discreta em {Region} sobre os mortos que voltaram. {Actor} é o primeiro nome da lista.",
      "O cemitério de {Region} está estranhamente silencioso, mas as sepulturas estão vazias. {Actor} tem as chaves.",
      "Encontre {Actor} em {Region}. Dizem que ele conversa com o que deveria estar enterrado. Descubra o que ele busca.",
      "Uma praga de mortos-vivos está isolando {Region}. Investigue se {Actor} é a fonte ou apenas mais uma vítima.",
      "Alguém está reanimando antigos senhores de {Region}. O nome de {Actor} foi sussurrado em rituais macabros.",
      "Siga o cheiro de decomposição em {Region}. Ele leva diretamente ao esconderijo de {Actor}."
    ],
  },

  // ─────────────────────────────────────────────
  // 6. ESCORT + WAR — Fuga Através do Front
  // ─────────────────────────────────────────────
  {
    requiredTags: ["escort", "war"],
    titles: [
      "Através das Linhas com {Actor}",
      "A Última Rota para {Region}",
      "O Preço do Sangue em {Region}",
      "Escoltas Não Morrem em Vão",
      "A Travessia de {Region}",
      "Comboio de Guerra de {Actor}",
      "O General de {Region}",
      "Sob Fogo Cruzado em {Region}",
      "O Caminho das Cinzas para {Actor}",
      "Escudo Humano em {Region}"
    ],
    descriptions: [
      "{Actor} precisa chegar a {Region} e o caminho não é seguro. Você é a escolta. O pagamento é na chegada.",
      "Com o conflito em {Region}, viajar com {Actor} virou um risk. Alguém está pagando para que ele chegue bem.",
      "Leve {Actor} de um lado ao outro de {Region} sem que nada de ruim aconteça no caminho. É isso.",
      "{Actor} não pode viajar sozinho por {Region} agora. O contratante precisa de alguém confiável para acompanhá-lo.",
      "Um trabalho de escolta em {Region}. {Actor} é quem você protege. O destino e o pagamento são informados ao aceitar.",
      "As tropas inimigas cercam {Region}. {Actor} carrega ordens cruciais e precisa furar o bloqueio.",
      "O campo de batalha em {Region} é impiedoso. Garanta que {Actor} não vire apenas mais uma baixa de guerra.",
      "{Actor} tem informações que podem virar a guerra em {Region}. Seu trabalho é ser a espada e o escudo dele.",
      "Ninguém entra ou sai de {Region} sem lutar. {Actor} escolheu você para garantir que ele seja a exceção.",
      "A escolta de {Actor} em {Region} será testada pelo aço. Não deixe que o alvo caça antes do destino."
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
      "O Escândalo de {Actor} em {Region}",
      "Cartas Marcadas em {Region}",
      "A Honra Vendida de {Actor}",
      "Sussurros na Corte de {Region}",
      "O Ultimato de {Actor}"
    ],
    descriptions: [
      "{Actor} sabe de algo que não devia. Em {Region}, isso virou problema. O contratante quer que seja resolvido com palavras — ou o que vier depois.",
      "Uma negociação delicada espera em {Region}. {Actor} está do outro lado da mesa e não está jogando limpo.",
      "Em {Region}, {Actor} usa o que sabe para pressionar quem não pode reagir abertamente. Alguém contratou para mudar isso.",
      "O contratante precisa de alguém com jogo de cintura para tratar de um assunto sensível com {Actor} em {Region}.",
      "Há informação circulando em {Region} que prejudica o contratante. {Actor} está no meio disso. Resolva.",
      "Um documento comprometedor coloca {Actor} em uma posição difícil em {Region}. Use isso para garantir o acordo.",
      "Política em {Region} é um jogo de sombras. Convença {Actor} de que o silêncio dele é a opção mais lucrativa.",
      "{Actor} tem um passado sujo em {Region}. O contratante quer que você 'lembre' ele disso durante a reunião.",
      "A paz de {Region} depende de {Actor} aceitar os termos. Se a diplomacia falhar, use o que descobrimos sobre ele.",
      "Em {Region}, a reputação é tudo. {Actor} está prestes a perder a dele, a menos que colabore conosco."
    ],
  },

  // ─────────────────────────────────────────────
  // 8. SUMMONING + CONTAINMENT — Entidade Invocada
  // ─────────────────────────────────────────────
  {
    requiredTags: ["summoning", "containment"],
    titles: [
      "O que {Actor} Invocou Não Quer Ir Embora",
      "Contenção em {Region}",
      "O Círculo Quebrado de {Region}",
      "Quando {Actor} Perdeu o Controle",
      "A Invocação que Abalou {Region}",
      "O Horror de {Actor} em {Region}",
      "Cárcere Etéreo para {Actor}",
      "O Elo Interrompido de {Region}",
      "A Fenda Aberta por {Actor}",
      "Banimento em {Region}"
    ],
    descriptions: [
      "{Actor} trouxe algo para {Region} que não está mais sob controle. Precisa de ajuda para conter antes que piore.",
      "Há algo solto em {Region} por culpa de {Actor}. O trabalho é conter. O pagamento é generoso pelo risco.",
      "Em {Region}, {Actor} perdeu o controle do que invocou. Quem contratou quer o problema resolvido antes que se espalhe.",
      "Uma contenção urgente em {Region}. {Actor} sabe o que é, mas não consegue lidar sozinho. É aí que você entra.",
      "O que {Actor} trouxe para {Region} não vai embora por bem. O contratante quer alguém que saiba lidar com isso.",
      "A entidade que {Actor} chamou está devorando a essência de {Region}. Erga a barreira antes que seja tarde.",
      "Um experimento de invocação em {Region} deu errado. {Actor} está preso com sua própria criação.",
      "Selar a fenda é a única prioridade em {Region}. {Actor} foi o catalisador, mas você será o carcereiro.",
      "O que quer que {Actor} tenha visto no além, agora está solto em {Region}. Traga-o de volta para o vazio.",
      "Correntes mágicas não foram suficientes para {Actor} em {Region}. Use força bruta para conter o abismo."
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
      "Nada Deve Restar em {Region}",
      "Limpeza Total em {Region}",
      "O Açougue de {Actor} em {Region}",
      "Extermínio em {Region}",
      "Solo Sagrado sobre {Actor}",
      "A Varredura de Sangue em {Region}",
      "Fim do Ciclo de {Actor}"
    ],
    descriptions: [
      "O que {Actor} criou em {Region} precisa ser eliminado. Sem parcimônia, sem exceções.",
      "{Region} tem um problema que só vai embora com força. {Actor} é a origem. O trabalho é limpar.",
      "Outros hesitaram. O contratante quer alguém que não hesite. Em {Region}, {Actor} precisa ser removido — junto com tudo que trouxe.",
      "Uma limpeza completa em {Region}. {Actor} está lá dentro. O que mais houver, também vai.",
      "O lugar de {Actor} é {Region} — por enquanto. Após o serviço, não haverá mais nem lugar nem {Actor}.",
      "O cheiro de carne queimada em {Region} será o sinal do seu sucesso. Elimine {Actor} e sua prole maldita.",
      "Em {Region}, as paredes do covil de {Actor} estão banhadas em sangue. Não deixe ninguém vivo para contar.",
      "Purificação exige métodos extremos. Incendeie o refúgio de {Actor} em {Region} e certifique-se de que nada saia.",
      "{Actor} transformou {Region} em um matadouro. É hora de inverter os papéis e limpar a sujeira.",
      "O contratante quer que o covil de {Actor} em {Region} seja apagado do mapa. Use o aço para a faxina."
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
      "A Batalha pelo Espírito de {Actor}",
      "O que Usa o Rosto de {Actor}",
      "O Demônio de {Actor} em {Region}",
      "Expurgo em {Region}",
      "As Correntes Espirituais de {Actor}",
      "Santuário para {Actor}",
      "O Renascimento de {Actor} em {Region}"
    ],
    descriptions: [
      "{Actor} não está bem desde que voltou de {Region}. Quem o conhece acredita que algo entrou. Precisa de alguém com fé e preparo para tirar.",
      "Um exorcismo é necessário em {Region}. {Actor} é o afetado. O contratante paga bem por discrição e resultado.",
      "Algo está usando {Actor} em {Region} e os próximos estão preocupados. Um rito de expulsão pode resolver — mas alguém precisa conduzido.",
      "Em {Region}, {Actor} mudou de um dia para o outro. A família suspeita de possessão e busca ajuda espiritual.",
      "O rito precisa ser conduzido em {Region}. {Actor} é o alvo da possessão. Fé e firmeza são os requisitos.",
      "Ouça os gritos de {Actor} em {Region}. Aquilo que habita nele não pertence a este mundo. Expulse-o.",
      "Fé é sua única arma em {Region}. O espírito que tomou {Actor} é antigo e faminto.",
      "Limpe a alma de {Actor} antes que o mal em {Region} se torne permanente. O tempo está acabando.",
      "Um caso grave de possessão em {Region} requer intervenção imediata. {Actor} é apenas o hospedeiro.",
      "Prepare os símbolos sagrados em {Region}. Vamos arrancar a escuridão que se aninhou em {Actor}."
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
      "O Cofre de {Actor}",
      "Quanto Vale o Silêncio em {Region}",
      "Dedos Rápidos em {Region}",
      "A Herança de {Actor} em {Region}",
      "Ouro Fantasma de {Actor}",
      "Invasão à Mansão de {Region}",
      "O Relicário de Sangue de {Actor}",
      "Pilhagem Silenciosa em {Region}"
    ],
    descriptions: [
      "{Actor} tem algo em {Region} que pertence a outra pessoa. O trabalho é devolver — discretamente.",
      "Entre onde {Actor} guarda seus pertences em {Region}, pegue o item descrito e suma. Sem alarde.",
      "Um item específico está em posse de {Actor} em {Region}. O contratante quer de volta e não pode aparecer pessoalmente.",
      "Furtividade requerida. Em {Region}, {Actor} guarda o que o contratante precisa. Recupere e traga.",
      "Trabalho noturno em {Region}. {Actor} guarda algo valioso. Você entra, pega, sai. O pagamento está esperando.",
      "A segurança de {Actor} em {Region} é lendária. Prove que ela é inútil contra alguém do seu calibre.",
      "O que {Actor} esconde no subsolo em {Region} brilha mais que o sol. Traga o objeto para quem realmente sabe usar.",
      "Uma joia de família foi 'adquirida' por {Actor} em {Region}. Recupere-a sem deixar pegadas.",
      "Não toque em nada além do contrato. {Actor} é paranoico e {Region} está cheia de armadilhas.",
      "O preço pela cabeça de {Actor} é baixo, mas o que ele esconde em {Region} vale uma fortuna. Foque no espólio."
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
      "A Arena de {Region}",
      "O Duelo que Nunca Foi Justo",
      "Ferro e Orgulho em {Region}",
      "O Último Sangue de {Actor}",
      "Julgamento por Combate em {Region}",
      "A Lâmina de {Actor} Cai em {Region}",
      "Desafio ao Meio-Dia em {Region}",
      "O Fim da Linhagem de {Actor}"
    ],
    descriptions: [
      "Um confronto está marcado em {Region} e {Actor} é peça central. O contratante tem interesse no resultado.",
      "Em {Region}, {Actor} vai enfrentar alguém. Alguém está pagando para garantir quem sai de pé.",
      "Um duelo em {Region} — com {Actor} envolvido. O contratante quer interferência. Os detalhes são pessoalmente.",
      "Há um encontro marcado em {Region}. {Actor} estará lá. O contratante precisa de alguém no local para garantir o desfecho certo.",
      "O confronto de {Actor} em {Region} não pode ser deixado ao acaso. Alguém está pagando para que o resultado seja o esperado.",
      "Provocar {Actor} em {Region} é fácil. O difícil é garantir que ele não sobreviva à resposta. Mate-o 'em honra'.",
      "A etiqueta de duelo em {Region} é rígida, mas {Actor} deve morrer. Sabote a lâmina dele ou mate-o no pátio.",
      "O círculo de aço em {Region} espera por {Actor}. Você será o carrasco mascarado de um oponente covarde.",
      "Mate {Actor} durante o duelo oficial em {Region}. Faça parecer uma tragédia, não um assassinato.",
      "A honra de {Actor} é sua maior fraqueza. Use um desafio formal em {Region} para silenciá-lo permanentemente."
    ],
  },

  // ─────────────────────────────────────────────
  // 13. SURVIVAL + CORRUPTION — Território Maldito
  // ─────────────────────────────────────────────
  {
    requiredTags: ["survival", "corruption"],
    titles: [
      "Sobreviver em {Region} Não É Para Todos",
      "A Terra que {Actor} Envenenou",
      "Quando {Region} Começa a Matar Seus Habitantes",
      "A Corrupção que Avança em {Region}",
      "O Preço de Cruzar {Region}",
      "O Alento Podre de {Region}",
      "A Praga de {Actor} em {Region}",
      "Resistir ao Mal de {Region}",
      "O Fim da Sanidade em {Region}",
      "As Raízes Negras de {Actor}"
    ],
    descriptions: [
      "{Region} não está bem. Quem vai até lá precisa saber cuidar de si. {Actor} é o motivo — e parte do trabalho.",
      "O lugar mudou e {Actor} tem algo a ver com isso. O contratante precisa de alguém que aguente entrar em {Region} e resolver.",
      "Ir até {Region} não é seguro, mas é necessário. {Actor} está lá e o problema precisa de atenção antes que piore.",
      "{Region} ficou perigosa depois do que {Actor} fez. O contratante quer alguém que sobreviva ao caminho e resolva o que encontrar.",
      "Adentrar {Region} agora é arriscado. Mesmo assim, {Actor} precisa ser encontrado e o problema, contido.",
      "O ar em {Region} é tóxico desde que {Actor} liberou a mácula. Encontre-o antes que seus pulmões falhem.",
      "A fauna de {Region} sofreu mutações sob o comando de {Actor}. Sobreviva à jornada e traga a cabeça dele.",
      "Não durma em {Region}. A corrupção de {Actor} entra pelos sonhos. O trabalho é rápido: entrar, matar, sair.",
      "Cada passo em {Region} é uma luta contra a natureza distorcida. {Actor} é o coração dessa podridão.",
      "O contratante paga pela sua sobrevivência e pelo fim de {Actor}. Em {Region}, a vida é a mercadoria mais cara."
    ],
  },

  // ─────────────────────────────────────────────
  // 14. FORGERY + DIPLOMACY — Documentos Falsos
  // ─────────────────────────────────────────────
  {
    requiredTags: ["forgery", "diplomacy"],
    titles: [
      "O Acordo que Nunca Existiu em {Region}",
      "A Assinatura de {Actor} que Não Foi Sua",
      "Tinta e Mentiras em {Region}",
      "O Emissário que {Actor} Nunca Foi",
      "Palavras Falsas em {Region}",
      "O Selo Perdido de {Region}",
      "A Farsa Política de {Actor}",
      "Tratados de Vidro em {Region}",
      "A Caligrafia do Engano de {Actor}",
      "Mentiras Reais em {Region}"
    ],
    descriptions: [
      "Papéis falsos circulam em {Region} e {Actor} está no meio disso. O contratante quer o problema resolvido antes que cause mais dano.",
      "Em {Region}, algo foi assinado que não devia. {Actor} é o elo mais próximo. Descubra e resolva.",
      "Um documento errado nas mãos erradas pode estragar muito. Em {Region}, {Actor} é o problema. Quem contratou quer solução.",
      "O contratante precisa de alguém que entenda de papéis e de situações delicadas. Em {Region}, {Actor} está complicando as coisas.",
      "Fraude documental em {Region}. {Actor} envolvido. Quem contratou quer provas ou o problema desaparecido.",
      "Substitua o testamento de {Actor} em {Region} por esta cópia. O destino de uma linhagem depende disso.",
      "Um selo diplomático foi roubado por {Actor} em {Region}. Recupere-o ou force-o a assinar a renúncia.",
      "Convença os conselheiros de {Region} que {Actor} é um impostor usando estas provas 'reais' que fabricamos.",
      "A paz com {Actor} em {Region} é baseada em uma mentira. Certifique-se de que a mentira seja bem contada.",
      "Em {Region}, um documento vale mais que mil espadas. {Actor} tem o documento; você tem a versão falsa."
    ],
  },

  // ─────────────────────────────────────────────
  // 15. PROTECTION + HOLY — Guarda Sagrada
  // ─────────────────────────────────────────────
  {
    requiredTags: ["protection", "holy"],
    titles: [
      "Proteja o que {Actor} Carrega",
      "O Escudo da Fé em {Region}",
      "Guardar o que {Actor} Consagrou",
      "A Última Linha Sagrada de {Region}",
      "Quando a Fé Precisa de Espadas em {Region}",
      "A Vigília de {Actor} em {Region}",
      "Santuário Móvel para {Actor}",
      "O Portador da Luz em {Region}",
      "Defesa do Ungido em {Region}",
      "A Benção de Ferro de {Actor}"
    ],
    descriptions: [
      "{Actor} precisa de proteção em {Region}. O motivo é sagrado para quem paga. Sua parte é garantir que ele fique inteiro.",
      "Escoltar {Actor} por {Region} sem que nada de ruim aconteça. Simples de pedir, nem sempre simples de cumprir.",
      "Em {Region}, {Actor} é alvo. O contratante quer alguém entre ele e o perigo enquanto o trabalho dele não termina.",
      "Guardar {Actor} em {Region} é o serviço. Ele não vai facilitar — mas precisa de proteção mesmo assim.",
      "Uma guarda discreta em {Region}. {Actor} não pode saber que está sendo protegido. Mas precisa chegar são ao fim do dia.",
      "Peregrinos em {Region} estão sendo atacados. Proteja {Actor} até que ele complete o rito de purificação.",
      "{Actor} é o último de sua ordem em {Region}. Se ele cair, a luz se apaga. Não permita isso.",
      "Em {Region}, o aço protege a alma. Seja a muralha que mantém {Actor} vivo contra os infiéis.",
      "O contratante exige que {Actor} termine a oração em {Region}. O que vier para interromper deve morrer.",
      "A vida de {Actor} em {Region} é uma promessa divina. Garanta que ela não seja quebrada por assassinos."
    ],
  },

  // 16 até 23 seguem o mesmo padrão de lógica (Dobragem)...

  // ─────────────────────────────────────────────
  // 16. SABOTAGE + WAR — Operação Negra
  // ─────────────────────────────────────────────
  {
    requiredTags: ["sabotage", "war"],
    titles: [
      "Antes que {Actor} Avance", "A Noite Antes da Batalha de {Region}", "Corte as Linhas de {Actor}", "Operação Cinza em {Region}", "O que Não Deve Chegar a {Region}",
      "Engenhos de Guerra de {Actor}", "Chamas na Retaguarda de {Region}", "O Ferro Quebrado de {Actor}", "Abastecimento Interrompido em {Region}", "O Silêncio dos Canhões de {Actor}"
    ],
    descriptions: [
      "{Actor} está se preparando em {Region}. O contratante quer que essa preparação seja interrompida — discreta e eficientemente.",
      "Antes que {Actor} aja em {Region}, alguém precisa agir primeiro. Sem ser visto. Sem deixar rastros.",
      "Em {Region}, {Actor} tem uma vantagem que pode ser tirada. O trabalho é fazer isso antes que ele perceba.",
      "Uma operação discreta contra {Actor} em {Region}. Sabote o que puder, saia antes de ser pego.",
      "O contratante quer atrasar ou impedir o que {Actor} está fazendo em {Region}. Você escolhe o método.",
      "A destruição das forjas de {Actor} em {Region} atrasará o exército por semanas. O fogo é seu aliado.",
      "Envenene os poços que o batalhão de {Actor} usará em {Region}. Uma guerra se vence antes do primeiro golpe.",
      "Sabote as catapultas de {Actor} em {Region}. Quando o cerco começar, o fracasso dele deve ser total.",
      "O ouro para o soldo de {Actor} passará por {Region}. Garanta que ele nunca chegue às mãos dos mercenários.",
      "Sem suprimentos, {Actor} não sustenta {Region}. Queime os armazéns e observe o caos de longe."
    ]
  },

  // ─────────────────────────────────────────────
  // 17. MAGIC + INVESTIGATION — Anomalia Arcana
  // ─────────────────────────────────────────────
  {
    requiredTags: ["magic", "investigation"],
    titles: [
      "A Anomalia que {Actor} Não Consegue Explicar",
      "Rastros de Magia em {Region}",
      "O que Aconteceu com {Actor} em {Region}",
      "A Investigação Arcana de {Region}",
      "Quando a Magia Não Obedece em {Region}",
      "O Eco do Éter de {Actor}",
      "A Cicatriz Arcana em {Region}",
      "O que {Actor} Escondeu no Véu",
      "A Ressonância Maldita de {Region}",
      "O Paradoxo de {Actor} em {Region}"
    ],
    descriptions: [
      "Algo estranho está acontecendo em {Region} e {Actor} é o fio mais próximo. Investigue e traga respostas.",
      "A magia em {Region} não está se comportando direito. {Actor} sabe mais do que está dizendo — ou desapareceu tentando descobrir.",
      "Em {Region}, há sinais de uso irregular de magia. {Actor} está envolvido. O contratante quer saber como e por quê.",
      "{Actor} sumiu enquanto investigava algo em {Region}. Continue de onde ele parou e descubra o que o fez sumir.",
      "Uma investigação arcana em {Region}. {Actor} é o ponto de partida. O contratante paga por respostas concretas.",
      "As leis da física em {Region} estão se dobrando. {Actor} foi visto manipulando o fluxo. Descubra a origem da falha.",
      "Encontre o laboratório abandonado de {Actor} em {Region}. Algo lá dentro ainda está pulsando e o contratante quer saber o que é.",
      "A energia em {Region} ficou estática e perigosa. {Actor} alega inocência, mas os rastros levam diretamente a ele.",
      "Um crime místico foi cometido em {Region}. O único rastro é a assinatura mágica de {Actor}. Siga-a.",
      "O céu sobre {Region} mudou de cor após o experimento de {Actor}. Investigue se a realidade ainda é segura."
    ],
  },

  // ─────────────────────────────────────────────
  // 18. PURIFICATION + UNDEAD — Sagrada Chama
  // ─────────────────────────────────────────────
  {
    requiredTags: ["purification", "undead"],
    titles: [
      "A Chama que Purifica {Region}",
      "A Purificação dos Mortos de {Region}",
      "O Rito Final em {Region}",
      "Fogo e Cinzas Sobre {Region}",
      "Somente a Chama Pode Curar {Region}",
      "O Descanso Forçado de {Actor}",
      "Luz Incendiária em {Region}",
      "O Crematório de {Actor} em {Region}",
      "A Pira Sagrada de {Region}",
      "O Fim da Noite para {Actor}"
    ],
    descriptions: [
      "{Actor} pode realizar o rito que vai resolver o problema dos mortos-vivos em {Region} — mas não sozinho.",
      "Os mortos em {Region} precisam descansar. {Actor} sabe o rito. Você garante que ele consiga conduzi-lo.",
      "Um rito de purificação precisa acontecer em {Region}. {Actor} conduz. Sua função é manter o que não deve interromper longe.",
      "Em {Region}, o problema com os mortos tem solução. {Actor} tem o conhecimento. O trabalho é dar a ele a chance de usá-lo.",
      "Proteja {Actor} enquanto ele realiza o rito em {Region}. Quando terminar, o problema dos mortos-vivos deve estar resolvido.",
      "O solo de {Region} recusa os mortos por causa de {Actor}. Use a chama para forçar a paz que eles merecem.",
      "A infestação em {Region} chegou ao limite. Escorte {Actor} com a pira sagrada até o centro da necrópole.",
      "Transforme o exército de {Actor} em cinzas. Em {Region}, a morte deve ser o fim, não o começo.",
      "O rito de {Actor} exige que você mantenha as hordas ocupadas enquanto a luz consome as ruas de {Region}.",
      "Purifique a igreja profanada por {Actor} em {Region}. Que a chama não deixe rastro da podridão que ali habita."
    ],
  },

  // ─────────────────────────────────────────────
  // 19. ASSASSINATION + STEALTH + BETRAYAL — Contrato Sujo
  // ─────────────────────────────────────────────
  {
    requiredTags: ["assassination", "stealth", "betrayal"],
    titles: [
      "O Contrato que Tinha Dois Alvos",
      "A Sombra que Seguiu {Actor} até {Region}",
      "Quem Pagou pelo Silêncio de {Actor}",
      "O Executor que Não Sabe que É o Alvo",
      "Traição em Dois Atos em {Region}",
      "A Adaga nas Costas de {Actor}",
      "O Beijo de Judas em {Region}",
      "O que {Actor} Deixou no Escuro",
      "Preço de Sangue em {Region}",
      "A Última Mentira de {Actor}"
    ],
    descriptions: [
      "{Actor} traiu alguém em {Region} e agora há um preço sobre sua cabeça. O trabalho é discreto e o pagamento, imediato.",
      "Um contrato simples em {Region} — mas {Actor} já sabe que pode estar sendo caçado. Cuidado extra é aconselhável.",
      "Em {Region}, {Actor} não é o que parece. O contratante foi traído e quer reparação. Os detalhes, ao aceitar.",
      "Há mais de um lado nessa história em {Region}. {Actor} traiu, alguém quer acerto. Você foi escolhido para fechar a conta.",
      "O contrato chega por canais tortos, o alvo é {Actor} em {Region}, e o contratante prefere anonimato. Tome suas conclusões.",
      "Mate {Actor} e recupere o anel de sinete que ele roubou ao trair a guilda em {Region}.",
      "O contratante quer que {Actor} morra sem saber quem o vendeu. Em {Region}, a traição é a norma, não a exceção.",
      "Infiltre-se na festa de {Actor} em {Region}. Quando ele se sentir seguro, mostre que a lealdade dele tinha um preço.",
      "O alvo é um traidor que se esconde sob a guarda de {Region}. Mate {Actor} antes que ele venda mais segredos.",
      "Em {Region}, {Actor} pensou que sua traição passaria impune. Mostre que o silêncio é a única garantia."
    ],
  },

  // ─────────────────────────────────────────────
  // 20. TRADE + MAGIC + FORBIDDEN_KNOWLEDGE — Mercado Negro Arcano
  // ─────────────────────────────────────────────
  {
    requiredTags: ["trade", "magic", "forbidden_knowledge"],
    titles: [
      "O Mercado que {Actor} Não Devia ter Aberto",
      "Itens Proibidos à Venda em {Region}",
      "O Preço do Conhecimento em {Region}",
      "O Comerciante de Segredos de {Actor}",
      "Quando o Proibido Tem Preço em {Region}",
      "O Bazar das Sombras de {Actor}",
      "Contrabando de Almas em {Region}",
      "A Mercadoria Maldita de {Actor}",
      "O Leilão do Abismo em {Region}",
      "Ouro Sangrento de {Actor} em {Region}"
    ],
    descriptions: [
      "{Actor} vende em {Region} o que não deveria estar à venda. O contratante quer o mercado fechado ou um item específico recuperado.",
      "Em {Region}, {Actor} comercializa coisas que atraem o tipo errado de comprador. Alguém quer que isso pare.",
      "Há algo circulando no comércio de {Actor} em {Region} que o contratante precisa de volta. Infiltre-se e recupere.",
      "{Actor} montou um ponto de venda irregular em {Region}. O contratante quer o negócio encerrado — de um jeito ou de outro.",
      "O que {Actor} negocia em {Region} não é para qualquer um — mas está chegando a qualquer um. Alguém quer que isso acabe.",
      "Talismanãs feitos de carne humana estão sendo vendidos por {Actor} em {Region}. Interrompa o fornecimento.",
      "O conhecimento proibido que {Actor} vende em {Region} está enlouquecendo a população local. Destrua o estoque.",
      "Seja o comprador ou o carrasco. {Actor} tem o tomo que o contratante deseja e está em {Region} agora.",
      "O comércio de {Actor} em {Region} financia rituais sombrios. Corte o fluxo de moedas e de magia.",
      "Encontre o mercador {Actor} em {Region}. Ele tem um segredo que não pertence ao mercado livre."
    ],
  },

  // ─────────────────────────────────────────────
  // 21. ASSAULT + PROTECTION — Cerco e Defesa
  // ─────────────────────────────────────────────
  {
    requiredTags: ["assault", "protection"],
    titles: [
      "As Defesas de {Region} Não Devem Cair",
      "O Avanço de {Actor} Começa em Breve",
      "Defender {Region} Até o Fim",
      "O que {Actor} Quer Está em {Region}",
      "Resistência em {Region}",
      "A Muralha de {Actor} em {Region}",
      "Último Bastião contra {Actor}",
      "O Cerco Inquebrável de {Region}",
      "Sangue no Portão de {Region}",
      "A Queda de {Actor} em {Region}"
    ],
    descriptions: [
      "{Actor} está vindo para {Region}. Quem está lá dentro precisa de reforço. O contratante paga pela resistência.",
      "Em {Region}, a defesa está fraca e {Actor} sabe disso. Alguém precisa garantir que o lugar aguente.",
      "{Actor} quer algo em {Region}. O trabalho é garantir que ele não consiga — protegendo o que for necessário.",
      "Uma defesa urgente em {Region} contra {Actor}. Sem detalhes no aviso — só no local.",
      "O contratante precisa que {Region} resista ao que {Actor} está planejando. Você é o reforço.",
      "As paliçadas de {Region} estão cedendo. Mantenha a posição contra o exército de {Actor} até o amanhecer.",
      "Proteja os civis de {Region} enquanto {Actor} tenta incendiar o distrito. Cada minuto conta.",
      "Não deixe que o ariete de {Actor} alcance o portão principal de {Region}. Seja a linha de frente.",
      "Em {Region}, o contrato é simples: nada entra, nada sai sem sua permissão. {Actor} será o teste.",
      "Ocupar {Region} foi o erro de {Actor}. Garanta que a retomada seja vitoriosa protegendo os flancos."
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
      "A Corrupção que {Actor} Esconde em {Region}",
      "O Círculo Corrompido de {Region}",
      "Falsos Profetas de {Region}",
      "O Julgamento Secreto de {Actor}",
      "A Máscara de Piedade em {Region}",
      "Onde {Actor} Perdeu a Fé",
      "A Inquisição de {Actor} em {Region}"
    ],
    descriptions: [
      "Em {Region}, alguém de confiança não merece essa confiança. {Actor} é o suspeito. O trabalho é investigar sem alertar.",
      "{Actor} ocupa um lugar de respeito em {Region} — e pode estar abusando disso. Alguém quer provas antes de agir.",
      "Há corrupção dentro do círculo de {Actor} em {Region}. O contratante quer saber até onde vai antes de tomar atitude.",
      "Em {Region}, {Actor} parece honesto. Parece. O contratante tem razões para duvidar e precisa de alguém para investigar.",
      "Uma investigação delicada em {Region}. {Actor} é a figura central. Discrição total é exigida.",
      "O templo de {Region} está sendo usado para ritos obscuros por {Actor}. Encontre as provas sob o altar.",
      "A fé move montanhas, mas a de {Actor} em {Region} está movendo apenas ouro e cadáveres. Investigue.",
      "{Actor} está pregando a heresia em {Region}. Descubra quem está financiando essa distorção dos textos sagrados.",
      "Documentos indicam que {Actor} vendeu relíquias sagradas de {Region} para colecionadores de arte proibida.",
      "A santidade de {Region} foi maculada por {Actor}. O contratante quer saber o quão profunda é a heresia."
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
      "Sombras na Rota de {Region}",
      "O Desaparecimento Necessário de {Actor}",
      "Quando Escapar É a Única Vitória em {Region}",
      "O Fantasma de {Actor} em {Region}",
      "Passagem Obscura por {Region}",
      "O Passageiro Invisível de {Region}",
      "Fora do Radar em {Region}",
      "A Saída dos Fundos de {Actor}"
    ],
    descriptions: [
      "{Actor} precisa sair de {Region} sem que percebam. Você garante a saída — discreta e sem rastros.",
      "Tire {Actor} de {Region} sem chamar atenção. Há quem o procure. A rota é com você.",
      "Uma extração silenciosa em {Region}. {Actor} precisa sumir antes que os errados notem. Rápido e sem barulho.",
      "{Actor} precisa ir embora de {Region} — mas não pode parecer que foi. O trabalho é fazer isso acontecer.",
      "Escolte {Actor} para fora de {Region} sem que ninguém saiba que ele foi. Os detalhes da rota, ao aceitar o contrato.",
      "A guarda de {Region} tem ordens de prender {Actor}. Mostre que as sombras são um caminho melhor que as estradas.",
      "Se {Actor} for visto em {Region}, o acordo de paz acaba. Sua missão é garantir que ele seja um fantasma.",
      "Mantenha {Actor} agachado e em silêncio enquanto cruza os postos avançados de {Region}.",
      "O contratante quer {Actor} longe de {Region} até amanhã. O método é furtividade; o erro é a morte.",
      "Contorne as patrulhas de {Region} e leve {Actor} até a fronteira. Se ele for detectado, o contrato falha."
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