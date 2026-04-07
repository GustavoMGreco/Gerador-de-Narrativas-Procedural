import { ActionType, TargetCategory, ActorRole, HeroClass } from '@prisma/client';

// contexto
export interface QuestContext {
  heroLevel: number;
  heroClass: HeroClass;
  actorRole: ActorRole;
  hostility: boolean;

  // atributos dinâmicos
  intensity: number;
  tags: Set<string>; // tags para formar o título no final
  actionHistory: ActionType[];
}

// o caminho para o próximo objetivo (aresta)
export interface Edge {
  to: ActionType;
  baseWeight: number;
  
  // ex: se o herói for rogue, multiplica a chance de ir para 'steal' por 2.
  weightModifier?: (ctxt: QuestContext) => number;  // opcional, pode ser usado para customizar o peso dinamicamente
}

// a ação (nó)
export interface ActionNode {
  action: ActionType;
  allowedTargets: TargetCategory[];
  narrativeTags: string[];
  
  // ex: não dá pra fazer 'siege' se a intensity estiver baixa.
  precondition: (ctxt: QuestContext) => boolean;
  edges: Edge[];
}

export const questGraph: Partial<Record<ActionType, ActionNode>> = {
  // nós de entrada (sem pré-condições rígidas)
  [ActionType.Investigate]: {
    action: ActionType.Investigate,
    allowedTargets: [TargetCategory.Location, TargetCategory.Person, TargetCategory.Item],
    narrativeTags: ['investigation'],
    precondition: () => true,
    edges: [
      { to: ActionType.Spy, baseWeight: 10 },
      { to: ActionType.Decipher, baseWeight: 8, weightModifier: (ctx) => ctx.heroClass === HeroClass.Mage ? 3 : 1 },
      { to: ActionType.Negotiate, baseWeight: 5 }
    ]
  },
  [ActionType.Gather]: {
    action: ActionType.Gather,
    allowedTargets: [TargetCategory.Item, TargetCategory.Monster],
    narrativeTags: ['trade', 'survival'],
    precondition: () => true,
    edges: [
      { to: ActionType.Deliver, baseWeight: 15 },
      { to: ActionType.Trade, baseWeight: 10 }
    ]
  },
  [ActionType.Guard]: {
    action: ActionType.Guard,
    allowedTargets: [TargetCategory.Location, TargetCategory.Person],
    narrativeTags: ['protection'],
    precondition: () => true,
    edges: [
      { to: ActionType.Protect, baseWeight: 10 },
      { to: ActionType.Survive, baseWeight: 5, weightModifier: (ctx) => ctx.intensity > 5 ? 3 : 1 }
    ]
  },
  [ActionType.Rally]: {
    action: ActionType.Rally,
    allowedTargets: [TargetCategory.Person, TargetCategory.Warrior],
    narrativeTags: ['war', 'diplomacy'],
    precondition: (ctx) => ctx.heroClass === HeroClass.Warrior || ctx.actorRole === ActorRole.Mayor,
    edges: [
      { to: ActionType.Siege, baseWeight: 15 },
      { to: ActionType.Challenge, baseWeight: 10 }
    ]
  },

  // rogue e crime
  [ActionType.Infiltrate]: {
    action: ActionType.Infiltrate,
    allowedTargets: [TargetCategory.Location],
    narrativeTags: ['stealth', 'crime'],
    precondition: (ctx) => ctx.intensity < 6,
    edges: [
      { to: ActionType.Steal, baseWeight: 10 },
      { to: ActionType.Assassinate, baseWeight: 5, weightModifier: (ctx) => ctx.hostility ? 3 : 1 },
      { to: ActionType.Sabotage, baseWeight: 8 }
    ]
  },
  [ActionType.Spy]: {
    action: ActionType.Spy,
    allowedTargets: [TargetCategory.Person, TargetCategory.Location],
    narrativeTags: ['stealth', 'investigation'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Investigate) || ctx.heroClass === HeroClass.Rogue,
    edges: [
      { to: ActionType.Blackmail, baseWeight: 10 },
      { to: ActionType.Infiltrate, baseWeight: 5 }
    ]
  },
  [ActionType.Pickpocket]: {
    action: ActionType.Pickpocket,
    allowedTargets: [TargetCategory.Person],
    narrativeTags: ['stealth', 'crime', 'valuable'],
    precondition: (ctx) => ctx.heroClass === HeroClass.Rogue,
    edges: [
      { to: ActionType.Flee, baseWeight: 10 },
      { to: ActionType.Deliver, baseWeight: 5 }
    ]
  },
  [ActionType.Forge]: {
    action: ActionType.Forge,
    allowedTargets: [TargetCategory.Item],
    narrativeTags: ['crime', 'forgery'],
    precondition: (ctx) => ctx.heroClass === HeroClass.Rogue || ctx.actorRole === ActorRole.Merchant,
    edges: [
      { to: ActionType.Trade, baseWeight: 10 },
      { to: ActionType.Blackmail, baseWeight: 8 }
    ]
  },
  [ActionType.Blackmail]: {
    action: ActionType.Blackmail,
    allowedTargets: [TargetCategory.Person],
    narrativeTags: ['crime', 'diplomacy'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Spy) || ctx.actionHistory.includes(ActionType.Forge),
    edges: [
      { to: ActionType.Trade, baseWeight: 10 },
      { to: ActionType.Betray, baseWeight: 5 }
    ]
  },
  [ActionType.Steal]: {
    action: ActionType.Steal,
    allowedTargets: [TargetCategory.Item],
    narrativeTags: ['stealth', 'valuable'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Infiltrate) || ctx.actionHistory.includes(ActionType.Pickpocket),
    edges: [
      { to: ActionType.Flee, baseWeight: 10 },
      { to: ActionType.Deliver, baseWeight: 10 }
    ]
  },
  [ActionType.Assassinate]: {
    action: ActionType.Assassinate,
    allowedTargets: [TargetCategory.Person, TargetCategory.Mage, TargetCategory.Cleric],
    narrativeTags: ['assassination', 'stealth'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Infiltrate) || ctx.hostility,
    edges: [
      { to: ActionType.Flee, baseWeight: 10 }
    ]
  },
  [ActionType.Sabotage]: {
    action: ActionType.Sabotage,
    allowedTargets: [TargetCategory.Location, TargetCategory.Item],
    narrativeTags: ['sabotage', 'stealth'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Infiltrate),
    edges: [
      { to: ActionType.Flee, baseWeight: 10 },
      { to: ActionType.Destroy, baseWeight: 5 }
    ]
  },

  // warrior e combate aberto
  [ActionType.Siege]: {
    action: ActionType.Siege,
    allowedTargets: [TargetCategory.Location],
    narrativeTags: ['assault', 'war'],
    precondition: (ctx) => ctx.intensity >= 5 || ctx.heroClass === HeroClass.Warrior,
    edges: [
      { to: ActionType.Execute, baseWeight: 10 },
      { to: ActionType.Destroy, baseWeight: 8 },
      { to: ActionType.Rescue, baseWeight: 5 }
    ]
  },
  [ActionType.Challenge]: {
    action: ActionType.Challenge,
    allowedTargets: [TargetCategory.Warrior, TargetCategory.Monster],
    narrativeTags: ['duel', 'war'],
    precondition: (ctx) => ctx.heroClass === HeroClass.Warrior,
    edges: [
      { to: ActionType.Kill, baseWeight: 15 },
      { to: ActionType.Intimidate, baseWeight: 5 }
    ]
  },
  [ActionType.Kill]: {
    action: ActionType.Kill,
    allowedTargets: [TargetCategory.Monster, TargetCategory.Person],
    narrativeTags: ['assault', 'gore'],
    precondition: (ctx) => ctx.intensity >= 4,
    edges: [
      { to: ActionType.Flee, baseWeight: 5 },
      { to: ActionType.Survive, baseWeight: 5 }
    ]
  },
  [ActionType.Destroy]: {
    action: ActionType.Destroy,
    allowedTargets: [TargetCategory.Location, TargetCategory.Item],
    narrativeTags: ['assault', 'sabotage'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Siege) || ctx.actionHistory.includes(ActionType.Sabotage),
    edges: []
  },
  [ActionType.Execute]: {
    action: ActionType.Execute,
    allowedTargets: [TargetCategory.Person, TargetCategory.Monster, TargetCategory.Warrior],
    narrativeTags: ['assassination', 'gore'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Siege) || ctx.actionHistory.includes(ActionType.Betray),
    edges: []
  },

  // mage e arcano
  [ActionType.Decipher]: {
    action: ActionType.Decipher,
    allowedTargets: [TargetCategory.Item],
    narrativeTags: ['magic', 'forbidden_knowledge'],
    precondition: (ctx) => ctx.heroClass === HeroClass.Mage || ctx.actionHistory.includes(ActionType.Investigate),
    edges: [
      { to: ActionType.Ritual, baseWeight: 10 },
      { to: ActionType.Enchant, baseWeight: 8 }
    ]
  },
  [ActionType.Ritual]: {
    action: ActionType.Ritual,
    allowedTargets: [TargetCategory.Location, TargetCategory.Monster],
    narrativeTags: ['magic', 'ritual'],
    precondition: (ctx) => ctx.heroClass === HeroClass.Mage,
    edges: [
      { to: ActionType.Contain, baseWeight: 10 },
      { to: ActionType.Banish, baseWeight: 8 }
    ]
  },
  [ActionType.Enchant]: {
    action: ActionType.Enchant,
    allowedTargets: [TargetCategory.Item],
    narrativeTags: ['magic', 'trade'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Decipher),
    edges: [
      { to: ActionType.Deliver, baseWeight: 10 },
      { to: ActionType.Trade, baseWeight: 5 }
    ]
  },
  [ActionType.Contain]: {
    action: ActionType.Contain,
    allowedTargets: [TargetCategory.Monster, TargetCategory.Item],
    narrativeTags: ['magic', 'containment'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Ritual),
    edges: [
      { to: ActionType.Banish, baseWeight: 10 },
      { to: ActionType.Deliver, baseWeight: 5 }
    ]
  },
  [ActionType.Banish]: {
    action: ActionType.Banish,
    allowedTargets: [TargetCategory.Monster, TargetCategory.Mage],
    narrativeTags: ['magic', 'containment'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Contain) || ctx.actionHistory.includes(ActionType.Ritual),
    edges: []
  },

  // cleric e sagrado
  [ActionType.Exorcise]: {
    action: ActionType.Exorcise,
    allowedTargets: [TargetCategory.Person, TargetCategory.Location],
    narrativeTags: ['holy', 'exorcism'],
    precondition: (ctx) => ctx.heroClass === HeroClass.Cleric,
    edges: [
      { to: ActionType.Purify, baseWeight: 10 },
      { to: ActionType.Heal, baseWeight: 5 }
    ]
  },
  [ActionType.Purify]: {
    action: ActionType.Purify,
    allowedTargets: [TargetCategory.Location, TargetCategory.Item],
    narrativeTags: ['holy', 'purification', 'cleansing'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Exorcise) || ctx.heroClass === HeroClass.Cleric,
    edges: [
      { to: ActionType.Consecrate, baseWeight: 10 },
      { to: ActionType.Deliver, baseWeight: 5 }
    ]
  },
  [ActionType.Consecrate]: {
    action: ActionType.Consecrate,
    allowedTargets: [TargetCategory.Location],
    narrativeTags: ['holy', 'faith'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Purify),
    edges: []
  },
  [ActionType.Convert]: {
    action: ActionType.Convert,
    allowedTargets: [TargetCategory.Person],
    narrativeTags: ['holy', 'diplomacy'],
    precondition: (ctx) => ctx.heroClass === HeroClass.Cleric,
    edges: [
      { to: ActionType.Recruit, baseWeight: 10 },
      { to: ActionType.Negotiate, baseWeight: 5 }
    ]
  },
  [ActionType.LastRites]: {
    action: ActionType.LastRites,
    allowedTargets: [TargetCategory.Person, TargetCategory.Warrior],
    narrativeTags: ['holy', 'undead'],
    precondition: (ctx) => ctx.heroClass === HeroClass.Cleric && ctx.intensity > 5,
    edges: []
  },

  // social, proteção e genéricos
  [ActionType.Negotiate]: {
    action: ActionType.Negotiate,
    allowedTargets: [TargetCategory.Person],
    narrativeTags: ['diplomacy'],
    precondition: () => true,
    edges: [
      { to: ActionType.Trade, baseWeight: 10 },
      { to: ActionType.Intimidate, baseWeight: 5 },
      { to: ActionType.Recruit, baseWeight: 8 }
    ]
  },
  [ActionType.Intimidate]: {
    action: ActionType.Intimidate,
    allowedTargets: [TargetCategory.Person],
    narrativeTags: ['diplomacy', 'assault'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Negotiate) || ctx.heroClass === HeroClass.Warrior,
    edges: [
      { to: ActionType.Blackmail, baseWeight: 8 },
      { to: ActionType.Trade, baseWeight: 5 }
    ]
  },
  [ActionType.Trade]: {
    action: ActionType.Trade,
    allowedTargets: [TargetCategory.Item],
    narrativeTags: ['trade'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Negotiate) || ctx.actionHistory.includes(ActionType.Gather),
    edges: [
      { to: ActionType.Deliver, baseWeight: 15 },
      { to: ActionType.Betray, baseWeight: 2, weightModifier: (ctx) => ctx.heroClass === HeroClass.Rogue ? 5 : 1 }
    ]
  },
  [ActionType.Recruit]: {
    action: ActionType.Recruit,
    allowedTargets: [TargetCategory.Person, TargetCategory.Warrior],
    narrativeTags: ['diplomacy', 'war'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Negotiate) || ctx.actionHistory.includes(ActionType.Convert),
    edges: [
      { to: ActionType.Rally, baseWeight: 10 },
      { to: ActionType.Siege, baseWeight: 5 }
    ]
  },
  [ActionType.Escort]: {
    action: ActionType.Escort,
    allowedTargets: [TargetCategory.Person],
    narrativeTags: ['protection', 'escort'],
    precondition: () => true,
    edges: [
      { to: ActionType.Protect, baseWeight: 10 },
      { to: ActionType.Betray, baseWeight: 2 },
      { to: ActionType.Deliver, baseWeight: 8 } // Entregar a pessoa em segurança
    ]
  },
  [ActionType.Protect]: {
    action: ActionType.Protect,
    allowedTargets: [TargetCategory.Person, TargetCategory.Location],
    narrativeTags: ['protection', 'war'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Escort) || ctx.actionHistory.includes(ActionType.Guard),
    edges: [
      { to: ActionType.Survive, baseWeight: 10 },
      { to: ActionType.Kill, baseWeight: 8 }
    ]
  },
  [ActionType.Rescue]: {
    action: ActionType.Rescue,
    allowedTargets: [TargetCategory.Person],
    narrativeTags: ['protection', 'stealth'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Siege) || ctx.intensity > 5,
    edges: [
      { to: ActionType.Escort, baseWeight: 10 },
      { to: ActionType.Heal, baseWeight: 8 }
    ]
  },
  [ActionType.Heal]: {
    action: ActionType.Heal,
    allowedTargets: [TargetCategory.Person],
    narrativeTags: ['protection', 'holy'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Rescue) || ctx.actionHistory.includes(ActionType.Exorcise),
    edges: [
      { to: ActionType.Escort, baseWeight: 10 }
    ]
  },
  [ActionType.Betray]: {
    action: ActionType.Betray,
    allowedTargets: [TargetCategory.Person],
    narrativeTags: ['betrayal', 'crime'],
    precondition: (ctx) => ctx.actionHistory.includes(ActionType.Trade) || ctx.actionHistory.includes(ActionType.Escort),
    edges: [
      { to: ActionType.Execute, baseWeight: 8 },
      { to: ActionType.Flee, baseWeight: 10 }
    ]
  },
  
  // terminais (sem arestas de saída, finalizam a quest instantaneamente)
  [ActionType.Deliver]: {
    action: ActionType.Deliver,
    allowedTargets: [TargetCategory.Person, TargetCategory.Location],
    narrativeTags: ['trade'],
    precondition: (ctx) => ctx.actionHistory.length >= 1, // Não pode ser a primeira ação da quest
    edges: [] 
  },
  [ActionType.Flee]: {
    action: ActionType.Flee,
    allowedTargets: [TargetCategory.Location],
    narrativeTags: ['survival', 'stealth'],
    precondition: (ctx) => ctx.intensity > 6 || ctx.actionHistory.includes(ActionType.Steal) || ctx.actionHistory.includes(ActionType.Assassinate),
    edges: []
  },
  [ActionType.Survive]: {
    action: ActionType.Survive,
    allowedTargets: [TargetCategory.Location],
    narrativeTags: ['survival', 'war'],
    precondition: (ctx) => ctx.intensity > 7 || ctx.actionHistory.includes(ActionType.Protect),
    edges: []
  }
};

export function selectNextAction(currentNode: ActionNode, ctxt: QuestContext): ActionType | null {
  const validEdges: { to: ActionType; weight: number }[] = [];
  let totalWeight = 0;

  for (const edge of currentNode.edges) {
    const destinationNode = questGraph[edge.to];

    if (!destinationNode || !destinationNode.precondition(ctxt)) {
      continue;
    }

    const modifier = edge.weightModifier ? edge.weightModifier(ctxt) : 1;
    const finalWeight = edge.baseWeight * modifier;

    validEdges.push({ to: edge.to, weight: finalWeight });
    totalWeight += finalWeight;
  }

  if (validEdges.length === 0 || totalWeight === 0) {
    return null;
  }

  let random = Math.random() * totalWeight;

  for (const edge of validEdges) {
    random -= edge.weight;
    if (random <= 0) {
      return edge.to;
    }
  };

  return null;
}
