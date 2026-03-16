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

export const actionPool: Record<string, ActionType[]> = {
  Warrior: [...genericActions.Warrior, ...specificActions.Warrior],
  Rogue:   [...genericActions.Rogue,   ...specificActions.Rogue],
  Mage:    [...genericActions.Mage,    ...specificActions.Mage],
  Cleric:  [...genericActions.Cleric,  ...specificActions.Cleric],
};

export const objectiveChains: Partial<Record<ActionType, ActionType[]>> = {
  // Genéricos
  [ActionType.Investigate]: [ActionType.Assassinate, ActionType.Steal, ActionType.Blackmail],
  [ActionType.Spy]:         [ActionType.Blackmail, ActionType.Sabotage, ActionType.Betray],
  [ActionType.Rescue]:      [ActionType.Escort, ActionType.Flee, ActionType.Protect],
  [ActionType.Gather]:      [ActionType.Deliver, ActionType.Trade, ActionType.Heal],
  [ActionType.Deliver]:     [ActionType.Trade, ActionType.Negotiate, ActionType.Betray],
  [ActionType.Negotiate]:   [ActionType.Trade, ActionType.Recruit, ActionType.Betray],
  [ActionType.Intimidate]:  [ActionType.Recruit, ActionType.Steal, ActionType.Blackmail],
  [ActionType.Betray]:      [ActionType.Flee, ActionType.Assassinate, ActionType.Sabotage],
  [ActionType.Sabotage]:    [ActionType.Flee, ActionType.Destroy, ActionType.Steal],
  [ActionType.Steal]:       [ActionType.Deliver, ActionType.Trade, ActionType.Flee],
  [ActionType.Recruit]:     [ActionType.Rally, ActionType.Protect, ActionType.Siege],
  [ActionType.Protect]:     [ActionType.Survive, ActionType.Escort, ActionType.Heal],
  [ActionType.Survive]:     [ActionType.Flee, ActionType.Rescue, ActionType.Rally],
  [ActionType.Destroy]:     [ActionType.Flee, ActionType.Kill, ActionType.Survive],
  [ActionType.Kill]:        [ActionType.Gather, ActionType.Deliver, ActionType.Investigate],
  [ActionType.Heal]:        [ActionType.Escort, ActionType.Recruit, ActionType.Protect],
  [ActionType.Flee]:        [ActionType.Survive, ActionType.Rescue, ActionType.Investigate],
  [ActionType.Escort]:      [ActionType.Protect, ActionType.Survive, ActionType.Negotiate],
  [ActionType.Trade]:       [ActionType.Gather, ActionType.Negotiate, ActionType.Steal],
  // Warrior
  [ActionType.Siege]:       [ActionType.Execute, ActionType.Rally, ActionType.Destroy],
  [ActionType.Challenge]:   [ActionType.Kill, ActionType.Execute, ActionType.Rally],
  [ActionType.Execute]:     [ActionType.Deliver, ActionType.Flee, ActionType.Investigate],
  [ActionType.Guard]:       [ActionType.Protect, ActionType.Survive, ActionType.Intimidate],
  [ActionType.Rally]:       [ActionType.Siege, ActionType.Protect, ActionType.Recruit],
  // Mage
  [ActionType.Ritual]:      [ActionType.Contain, ActionType.Banish, ActionType.Exorcise],
  [ActionType.Banish]:      [ActionType.Purify, ActionType.Flee, ActionType.Investigate],
  [ActionType.Decipher]:    [ActionType.Ritual, ActionType.Investigate, ActionType.Forge],
  [ActionType.Enchant]:     [ActionType.Deliver, ActionType.Trade, ActionType.Protect],
  [ActionType.Contain]:     [ActionType.Banish, ActionType.Purify, ActionType.Survive],
  // Rogue
  [ActionType.Infiltrate]:  [ActionType.Steal, ActionType.Forge, ActionType.Assassinate],
  [ActionType.Assassinate]: [ActionType.Flee, ActionType.Deliver, ActionType.Steal],
  [ActionType.Forge]:       [ActionType.Infiltrate, ActionType.Deliver, ActionType.Betray],
  [ActionType.Blackmail]:   [ActionType.Recruit, ActionType.Betray, ActionType.Negotiate],
  [ActionType.Pickpocket]:  [ActionType.Deliver, ActionType.Flee, ActionType.Steal],
  // Cleric
  [ActionType.Consecrate]:  [ActionType.Purify, ActionType.Exorcise, ActionType.Ritual],
  [ActionType.Purify]:      [ActionType.Consecrate, ActionType.Heal, ActionType.Protect],
  [ActionType.Exorcise]:    [ActionType.Banish, ActionType.Purify, ActionType.Survive],
  [ActionType.LastRites]:   [ActionType.Investigate, ActionType.Consecrate, ActionType.Deliver],
  [ActionType.Convert]:     [ActionType.Recruit, ActionType.Negotiate, ActionType.Blackmail],
};

export const actionToTargetCategory: Partial<Record<ActionType, TargetCategory[]>> = {
  // Genéricos
  [ActionType.Kill]:        [TargetCategory.Monster, TargetCategory.Person],
  [ActionType.Gather]:      [TargetCategory.Item],
  [ActionType.Escort]:      [TargetCategory.Person],
  [ActionType.Investigate]: [TargetCategory.Location, TargetCategory.Item],
  [ActionType.Betray]:      [TargetCategory.Person],
  [ActionType.Negotiate]:   [TargetCategory.Person],
  [ActionType.Intimidate]:  [TargetCategory.Person, TargetCategory.Monster],
  [ActionType.Trade]:       [TargetCategory.Item, TargetCategory.Person],
  [ActionType.Heal]:        [TargetCategory.Person],
  [ActionType.Deliver]:     [TargetCategory.Item, TargetCategory.Person],
  [ActionType.Survive]:     [TargetCategory.Location, TargetCategory.Monster],
  [ActionType.Destroy]:     [TargetCategory.Location, TargetCategory.Item],
  [ActionType.Steal]:       [TargetCategory.Item],
  [ActionType.Rescue]:      [TargetCategory.Person],
  [ActionType.Protect]:     [TargetCategory.Person, TargetCategory.Location],
  [ActionType.Spy]:         [TargetCategory.Person, TargetCategory.Location],
  [ActionType.Flee]:        [TargetCategory.Location],
  [ActionType.Recruit]:     [TargetCategory.Person],
  [ActionType.Sabotage]:    [TargetCategory.Location, TargetCategory.Item],
  // Warrior
  [ActionType.Challenge]:   [TargetCategory.Person, TargetCategory.Warrior],
  [ActionType.Siege]:       [TargetCategory.Location],
  [ActionType.Guard]:       [TargetCategory.Location, TargetCategory.Person],
  [ActionType.Execute]:     [TargetCategory.Person, TargetCategory.Warrior],
  [ActionType.Rally]:       [TargetCategory.Person, TargetCategory.Location],
  // Mage
  [ActionType.Ritual]:      [TargetCategory.Mage, TargetCategory.Location],
  [ActionType.Banish]:      [TargetCategory.Monster, TargetCategory.Mage],
  [ActionType.Decipher]:    [TargetCategory.Item, TargetCategory.Mage],
  [ActionType.Enchant]:     [TargetCategory.Item, TargetCategory.Mage],
  [ActionType.Contain]:     [TargetCategory.Monster, TargetCategory.Mage, TargetCategory.Location],
  // Rogue
  [ActionType.Infiltrate]:  [TargetCategory.Location, TargetCategory.Rogue],
  [ActionType.Assassinate]: [TargetCategory.Person, TargetCategory.Rogue],
  [ActionType.Forge]:       [TargetCategory.Item, TargetCategory.Rogue],
  [ActionType.Blackmail]:   [TargetCategory.Person, TargetCategory.Rogue],
  [ActionType.Pickpocket]:  [TargetCategory.Person],
  // Cleric
  [ActionType.Purify]:      [TargetCategory.Location, TargetCategory.Cleric],
  [ActionType.Consecrate]:  [TargetCategory.Location, TargetCategory.Cleric],
  [ActionType.Exorcise]:    [TargetCategory.Person, TargetCategory.Monster, TargetCategory.Cleric],
  [ActionType.LastRites]:   [TargetCategory.Person, TargetCategory.Cleric],
  [ActionType.Convert]:     [TargetCategory.Person, TargetCategory.Cleric],
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
    [TargetCategory.Monster]: 'Expulsar o espírito de',
  },
  [ActionType.Recruit]: {
    [TargetCategory.Person]:  'Convencer',
    [TargetCategory.Warrior]: 'Aliar-se a',
  },
};

export const uncountableActions = new Set<ActionType>([
  ActionType.Survive,
  ActionType.Flee,
  ActionType.Investigate,
  ActionType.Spy,
  ActionType.Infiltrate,
  ActionType.Ritual,
  ActionType.Consecrate,
  ActionType.Purify,
  ActionType.Exorcise,
  ActionType.Banish,
  ActionType.Contain,
  ActionType.Decipher,
  ActionType.LastRites,
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