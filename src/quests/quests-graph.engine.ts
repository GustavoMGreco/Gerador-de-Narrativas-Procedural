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
  [ActionType.Infiltrate]: {
    action: ActionType.Infiltrate,
    allowedTargets: [TargetCategory.Location],
    narrativeTags: ['stealth', 'planning', 'crime'],
    precondition: (ctxt) => ctxt.intensity < 5, // ex: só pode infiltrar se o clima não estiver em guerra declarada
    edges: [
      {
        to: ActionType.Steal,
        baseWeight: 10,
        weightModifier: (ctxt) => ctxt.heroClass === HeroClass.Rogue ? 2 : 1  // rogue tem o dobro de chance de roubar após infiltrar
      },
      {
        to: ActionType.Assassinate,
        baseWeight: 5,
        weightModifier: (ctxt) => ctxt.hostility ? 3 : 1  // chance de assassinato triplica se NPC for hostil
      },
      {
        to: ActionType.Investigate,
        baseWeight: 8
      }
    ]
  },

  [ActionType.Steal]: {
    action: ActionType.Steal,
    allowedTargets: [TargetCategory.Item],
    narrativeTags: ['stealth', 'valuable'],
    // só pode roubar se já tiver infiltrado ou se for rogue
    precondition: (ctxt) => ctxt.actionHistory.includes(ActionType.Infiltrate) || ctxt.heroClass === HeroClass.Rogue,
    edges: [
      {
        to: ActionType.Flee,
        baseWeight: 10
      },
      {
        to: ActionType.Deliver,
        baseWeight: 5
      }
    ]
  },
  [ActionType.Siege]: {
    action: ActionType.Siege,
    allowedTargets: [TargetCategory.Location],
    narrativeTags: ['assault', 'criminals', 'war'],
    precondition: (ctxt) => ctxt.intensity >= 5 || ctxt.heroClass === HeroClass.Warrior,
    edges: [
      {
        to: ActionType.Execute,
        baseWeight: 10,
        weightModifier: (ctxt) => ctxt.actorRole === ActorRole.Mayor ? 2 : 1
      },
      {
        to: ActionType.Rescue,
        baseWeight: 5
      }
    ]
  },
  [ActionType.Execute]: {
    action: ActionType.Execute,
    allowedTargets: [TargetCategory.Person, TargetCategory.Monster, TargetCategory.Warrior],
    narrativeTags: ['assassination', 'gore'],
    precondition: (ctxt) => ctxt.actionHistory.includes(ActionType.Siege) || ctxt.actionHistory.includes(ActionType.Challenge),
    edges: []
  }
}

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
