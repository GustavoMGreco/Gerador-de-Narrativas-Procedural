import { ActionType, ActorRole, TargetCategory } from '@prisma/client';

export const roleTranslator: Record<ActorRole, string> = {
  Blacksmith: 'Ferreiro',
  Guard:      'Guarda',
  Alchemist:  'Alquimista',
  Innkeeper:  'Taverneiro',
  Adventurer: 'Aventureiro',
  Merchant:   'Mercador',
  Mayor:      'Prefeito',
};

export const actionTranslator: Record<ActionType, string> = {
  // Genéricos
  Kill:       'Matar',
  Gather:     'Coletar',
  Escort:     'Escoltar',
  Investigate:'Investigar',
  Betray:     'Trair',
  Negotiate:  'Negociar',
  Intimidate: 'Intimidar',
  Trade:      'Trocar',
  Heal:       'Curar',
  Deliver:    'Entregar',
  Survive:    'Sobreviver',
  Destroy:    'Destruir',
  Steal:      'Roubar',
  Rescue:     'Resgatar',
  Protect:    'Proteger',
  Spy:        'Espionar',
  Flee:       'Fugir',
  Recruit:    'Recrutar',
  Sabotage:   'Sabotar',
  // Warrior
  Challenge:  'Desafiar',
  Siege:      'Sitiar',
  Guard:      'Guardar',
  Execute:    'Executar',
  Rally:      'Reagrupar',
  // Mage
  Ritual:     'Ritualizar',
  Banish:     'Banir',
  Decipher:   'Decifrar',
  Enchant:    'Encantar',
  Contain:    'Conter',
  // Rogue
  Infiltrate:  'Infiltrar',
  Assassinate: 'Assassinar',
  Forge:       'Falsificar',
  Blackmail:   'Chantagear',
  Pickpocket:  'Bater Carteira',
  // Cleric
  Purify:      'Purificar',
  Consecrate:  'Consagrar',
  Exorcise:    'Exorcizar',
  LastRites:   'Últimos Ritos',
  Convert:     'Converter',
};

export const specificActions: Record<string, ActionType[]> = {
  Warrior: [ActionType.Challenge, ActionType.Siege, ActionType.Guard, ActionType.Execute, ActionType.Rally],
  Rogue:   [ActionType.Infiltrate, ActionType.Assassinate, ActionType.Forge, ActionType.Blackmail, ActionType.Pickpocket],
  Mage:    [ActionType.Ritual, ActionType.Banish, ActionType.Decipher, ActionType.Enchant, ActionType.Contain],
  Cleric:  [ActionType.Purify, ActionType.Consecrate, ActionType.Exorcise, ActionType.LastRites, ActionType.Convert],
};

export const genericActions: Record<string, ActionType[]> = {
  Warrior: [ActionType.Kill, ActionType.Escort, ActionType.Intimidate, ActionType.Protect, ActionType.Survive, ActionType.Destroy, ActionType.Rescue, ActionType.Recruit, ActionType.Negotiate],
  Rogue:   [ActionType.Betray, ActionType.Investigate, ActionType.Intimidate, ActionType.Spy, ActionType.Steal, ActionType.Deliver, ActionType.Flee, ActionType.Sabotage, ActionType.Trade],
  Mage:    [ActionType.Investigate, ActionType.Gather, ActionType.Kill, ActionType.Survive, ActionType.Destroy, ActionType.Protect, ActionType.Negotiate, ActionType.Recruit],
  Cleric:  [ActionType.Heal, ActionType.Escort, ActionType.Negotiate, ActionType.Protect, ActionType.Rescue, ActionType.Investigate, ActionType.Recruit, ActionType.Deliver, ActionType.Betray],
};

export const categoryArticle: Record<TargetCategory, string> = {
  [TargetCategory.Monster]:  'o',
  [TargetCategory.Person]:   'o(a)',
  [TargetCategory.Item]:     'o',
  [TargetCategory.Location]: 'o local',
  [TargetCategory.Warrior]:  'o',
  [TargetCategory.Rogue]:    'o',
  [TargetCategory.Mage]:     'o',
  [TargetCategory.Cleric]:   'o',
};

export const narrativeOverrides: Partial<Record<ActionType, Partial<Record<TargetCategory, string>>>> = {
  [ActionType.Kill]: {
    [TargetCategory.Monster]: 'Abater',
    [TargetCategory.Person]:  'Eliminar',
    [TargetCategory.Warrior]: 'Duelar com',
  },
  [ActionType.Gather]: {
    [TargetCategory.Item]: 'Recuperar',
    [TargetCategory.Mage]: 'Extrair',
  },
  [ActionType.Steal]: {
    [TargetCategory.Item]:  'Surrupiar',
    [TargetCategory.Rogue]: 'Roubar de',
  },
  [ActionType.Destroy]: {
    [TargetCategory.Location]: 'Arruinar',
    [TargetCategory.Item]:     'Destruir',
  },
  [ActionType.Heal]: {
    [TargetCategory.Person]: 'Estabilizar',
  },
  [ActionType.Assassinate]: {
    [TargetCategory.Person]: 'Silenciar',
    [TargetCategory.Rogue]:  'Eliminar discretamente',
  },
  [ActionType.Exorcise]: {
    [TargetCategory.Person]:  'Libertar a alma de',
    [TargetCategory.Monster]: 'Exorcizar', // plural compatível: "Exorcizar 3x Espectro"
    [TargetCategory.Cleric]:  'Purgar',
  },
  [ActionType.Recruit]: {
    [TargetCategory.Person]:  'Convencer',
    [TargetCategory.Warrior]: 'Aliar-se a',
  },
};

// Ações incontáveis por natureza independente do alvo (processos, estados)
export const uncountableActions = new Set<ActionType>([
  ActionType.Survive,
  ActionType.Flee,
  ActionType.Investigate,
  ActionType.Spy,
  ActionType.Infiltrate,
  ActionType.Ritual,
  ActionType.Consecrate,
  ActionType.Purify,
  ActionType.Decipher,
  ActionType.LastRites,
]);

// Ações incontáveis SOMENTE quando o alvo não é Monster ou Item
export const uncountableVsNonMonster = new Set<ActionType>([
  ActionType.Banish, 
  ActionType.Exorcise,
  ActionType.Contain,
]);

export const uncountableCategories = new Set<TargetCategory>([
  TargetCategory.Person,
  TargetCategory.Location,
  TargetCategory.Warrior,
  TargetCategory.Rogue,
  TargetCategory.Mage,
  TargetCategory.Cleric,
]);

export const locationTemplates: Partial<Record<ActionType, (name: string) => string>> = {
  [ActionType.Destroy]:     (name) => `Arruinar ${name} por completo`,
  [ActionType.Survive]:     (name) => `Sobreviver aos perigos de ${name}`,
  [ActionType.Investigate]: (name) => `Investigar os arredores de ${name}`,
  [ActionType.Siege]:       (name) => `Realizar um cerco em ${name}`,
  [ActionType.Infiltrate]:  (name) => `Infiltrar-se em ${name}`,
  [ActionType.Flee]:        (name) => `Fugir de ${name} com vida`,
  [ActionType.Guard]:       (name) => `Guardar a entrada de ${name}`,
  [ActionType.Consecrate]:  (name) => `Consagrar o chão de ${name}`,
  [ActionType.Purify]:      (name) => `Purificar os arredores de ${name}`,
  [ActionType.Sabotage]:    (name) => `Sabotar as estruturas de ${name}`,
  [ActionType.Protect]:     (name) => `Defender ${name} de invasores`,
  [ActionType.Ritual]:      (name) => `Conduzir um ritual em ${name}`,
};

export const actionPrepositions: Partial<Record<ActionType, string>> = {
  [ActionType.Survive]:     'em',
  [ActionType.Investigate]: 'nos arredores de',
  [ActionType.Siege]:       'em',
  [ActionType.Infiltrate]:  'em',
  [ActionType.Flee]:        'de',
  [ActionType.Guard]:       'em',
  [ActionType.Consecrate]:  'em',
  [ActionType.Purify]:      'em',
  [ActionType.Ritual]:      'em',
  [ActionType.Sabotage]:    'em',
  [ActionType.Protect]:     'em',
};