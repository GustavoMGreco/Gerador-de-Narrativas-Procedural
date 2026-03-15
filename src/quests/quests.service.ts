import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Actor, ActionType, ActorRole, QuestStatus, Target, TargetCategory } from '@prisma/client';
import { ObjectiveDto, QuestDto } from './dto/quest-response.dto';
import { friendlyTemplates, hostileTemplates } from './data/narratives.data';
import * as crypto from 'crypto';
import { GenerateQuestDto } from './dto/generate-quest.dto';

const roleTranslator: Record<ActorRole, string> = {
  Blacksmith: 'Ferreiro',
  Guard: 'Guarda',
  Alchemist: 'Alquimista',
  Innkeeper: 'Taverneiro',
  Adventurer: 'Aventureiro',
  Merchant: 'Mercador',
  Mayor: 'Prefeito'
};

const actionTranslator: Record<ActionType, string> = {
  // Genéricos
  Kill: 'Matar',
  Gather: 'Coletar',
  Escort: 'Escoltar',
  Investigate: 'Investigar',
  Betray: 'Trair',
  Negotiate: 'Negociar',
  Intimidate: 'Intimidar',
  Trade: 'Trocar',
  Heal: 'Curar',
  Deliver: 'Entregar',
  Survive: 'Sobreviver',
  Destroy: 'Destruir',
  Steal: 'Roubar',
  Rescue: 'Resgatar',
  Protect: 'Proteger',
  Spy: 'Espionar',
  Flee: 'Fugir',
  Recruit: 'Recrutar',
  Sabotage: 'Sabotar',
  // Warrior
  Challenge: 'Desafiar',
  Siege: 'Sitiar',
  Guard: 'Guardar',
  Execute: 'Executar',
  Rally: 'Reagrupar',
  // Mage
  Ritual: 'Ritualizar',
  Banish: 'Banir',
  Decipher: 'Decifrar',
  Enchant: 'Encantar',
  Contain: 'Conter',
  // Rogue
  Infiltrate: 'Infiltrar',
  Assassinate: 'Assassinar',
  Forge: 'Falsificar',
  Blackmail: 'Chantagear',
  Pickpocket: 'Bater Carteira',
  // Cleric
  Purify: 'Purificar',
  Consecrate: 'Consagrar',
  Exorcise: 'Exorcizar',
  LastRites: 'Últimos Ritos',
  Convert: 'Converter',
};

const specificActions: Record<string, ActionType[]> = {
  Warrior: [ActionType.Challenge, ActionType.Siege, ActionType.Guard, ActionType.Execute, ActionType.Rally],
  Rogue:   [ActionType.Infiltrate, ActionType.Assassinate, ActionType.Forge, ActionType.Blackmail, ActionType.Pickpocket],
  Mage:    [ActionType.Ritual, ActionType.Banish, ActionType.Decipher, ActionType.Enchant, ActionType.Contain],
  Cleric:  [ActionType.Purify, ActionType.Consecrate, ActionType.Exorcise, ActionType.LastRites, ActionType.Convert],
};

const genericActions: Record<string, ActionType[]> = {
  Warrior: [ActionType.Kill, ActionType.Escort, ActionType.Intimidate, ActionType.Protect, ActionType.Survive, ActionType.Destroy, ActionType.Rescue, ActionType.Recruit, ActionType.Negotiate],
  Rogue:   [ActionType.Betray, ActionType.Investigate, ActionType.Intimidate, ActionType.Spy, ActionType.Steal, ActionType.Deliver, ActionType.Flee, ActionType.Sabotage, ActionType.Trade],
  Mage:    [ActionType.Investigate, ActionType.Gather, ActionType.Kill, ActionType.Survive, ActionType.Destroy, ActionType.Protect, ActionType.Negotiate, ActionType.Recruit],
  Cleric:  [ActionType.Heal, ActionType.Escort, ActionType.Negotiate, ActionType.Protect, ActionType.Rescue, ActionType.Investigate, ActionType.Recruit, ActionType.Deliver, ActionType.Betray],
};

const actionPool: Record<string, ActionType[]> = {
  Warrior: [...genericActions.Warrior, ...specificActions.Warrior],
  Rogue:   [...genericActions.Rogue,   ...specificActions.Rogue],
  Mage:    [...genericActions.Mage,    ...specificActions.Mage],
  Cleric:  [...genericActions.Cleric,  ...specificActions.Cleric],
};

// determina uma segunda ação que faça sentido com a primeira
const objectiveChains: Partial<Record<ActionType, ActionType[]>> = {
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

// determina os tipos de alvo que cada ação pode buscar
const actionToTargetCategory: Partial<Record<ActionType, TargetCategory[]>> = {
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

@Injectable()
export class QuestsService {
  constructor(private readonly prisma: PrismaService) {}

  private async sortActor(heroLevel: number, heroReputation: number): Promise<Actor> {
    const actorFilter = {
      level: {
        gte: heroLevel - 5,
        lte: heroLevel + 5
      },
      hostility: heroReputation < 0
    };

    const numActors = await this.prisma.actor.count({ where: actorFilter });

    if (numActors === 0) {
      throw new Error(`Nenhum ator encontrado para o nível ${heroLevel}.`);
    }

    const randomNumber = Math.floor(Math.random() * numActors);

    const actor = await this.prisma.actor.findFirst({
      where: actorFilter,
      skip: randomNumber
    });

    if (!actor) throw new Error('Falha ao sortear o ator.');
    return actor;
  }

  private async findValidTarget(action: ActionType, heroLevel: number): Promise<Target> {
  const allowedCategories = actionToTargetCategory[action] || [TargetCategory.Monster];

  const targetFilter = {
    category: { in: allowedCategories },
    level: {
      gte: Math.max(1, heroLevel - 5),
      lte: heroLevel + 5
    }
  };

  const count = await this.prisma.target.count({ where: targetFilter });

  if (count === 0) {
     // fallback de segurança: se não achar um alvo perfeito, pega qualquer um da categoria
     const fallback = await this.prisma.target.findFirst({
        where: { category: { in: allowedCategories } }
     });
     if(fallback) return fallback;
     
     throw new Error(`Nenhum alvo encontrado para a ação ${action}.`);
  }

  const randomIndex = Math.floor(Math.random() * count);
  const target = await this.prisma.target.findFirst({
    where: targetFilter,
    skip: randomIndex
  });

  return target!; // o ! avisa ao TS que não é nulo
}

  private generateNarrative(actor: Actor): string[] {
    const randFTitles = Math.floor(
      Math.random() * friendlyTemplates.titles.length
    );
    const randFDescritions = Math.floor(
      Math.random() * friendlyTemplates.descriptions.length
    );
    const randHTitles = Math.floor(
      Math.random() * hostileTemplates.titles.length
    );
    const randHDescriptions = Math.floor(
      Math.random() * hostileTemplates.descriptions.length
    );

    if (actor.hostility) {
      const title = hostileTemplates.titles[randHTitles] + ' ' + roleTranslator[actor.role];

      const description = roleTranslator[actor.role] + ' ' + actor.name + ' ' + hostileTemplates.descriptions[randHDescriptions];

      if (!title && !description) throw new Error('Falha ao criar narrativa.');
      return [title, description];
    }
    if (!actor.hostility) {
      const title = friendlyTemplates.titles[randFTitles] + ' ' + roleTranslator[actor.role];

      const description = roleTranslator[actor.role] + ' ' + actor.name + ' ' + friendlyTemplates.descriptions[randFDescritions];

      if (!title && !description) throw new Error('Falha ao criar narrativa.');
      return [title, description];
    }

    return ['erro ao encontrar ator'];
  }

  private async createSingleObjective(action: ActionType, heroLevel: number, questId: string): Promise<ObjectiveDto> {
    const quantity = Math.floor(Math.random() * 10) + 1;
    const target = await this.findValidTarget(action, heroLevel);
    return {
      id: crypto.randomUUID(),
      action,
      quantity,
      targetId: target.id,
      questId,
      description: `${actionTranslator[action]} ${quantity} ${target.name}(s)`
    };
  }

  public async generateObjectives(questId: string, heroClass: string, heroLevel: number): Promise<ObjectiveDto[]> {
    const listActions = actionPool[heroClass] || [ActionType.Gather, ActionType.Trade, ActionType.Investigate];
    const action1 = listActions[Math.floor(Math.random() * listActions.length)];
  
    const objective1 = await this.createSingleObjective(action1, heroLevel, questId);

    const listAction2 = objectiveChains[action1] || [ActionType.Gather, ActionType.Trade, ActionType.Investigate];
    const action2 = listAction2[Math.floor(Math.random() * listAction2.length)];
  
    const objective2 = await this.createSingleObjective(action2, heroLevel, questId);

    return [objective1, objective2];
}

  public async generateQuest(dto: GenerateQuestDto): Promise<QuestDto> {
    const hero = await this.prisma.hero.findUnique({
      where: {
        id: dto.heroId
      }
    })
    if (!hero) {
      throw new NotFoundException('Herói não encontrado no banco de dados.');
    }

    const actor = await this.sortActor(hero.level, hero.reputation);
    const questId = crypto.randomUUID();

    const [title, description] = this.generateNarrative(actor)
    const objectives = await this.generateObjectives(questId, hero.class, hero.level);

    const gold = actor.level * 15;
    const xp = actor.level * 25;

    await this.prisma.quest.create({
      data: {
        id: questId,
        title: title,
        description: description,
        actorId: actor.id,
        objectives: {
          create: objectives.map((obj) => ({
            id: obj.id,
            action: obj.action,
            quantity: obj.quantity,
            targetId: obj.targetId
          })),
        },
        goldReward: gold,
        xpReward: xp,
        heroId: hero.id
      },
  
    });

    const quest = {
      id: questId,
      title: title,
      description: description,
      actorId: actor.id,
      objectives: objectives,
      goldReward: gold,
      xpReward: xp
    };

    return quest;
  }

  async findAll(): Promise<QuestDto[]> {
    const rawQuests = await this.prisma.quest.findMany({
      include: {
        actor: true,
        objectives: true
      },
    });

    const completeQuests: QuestDto[] = rawQuests.map((quest) => ({
      id: quest.id,
      title: quest.title,
      description: quest.description,
      actorId: quest.actorId,
      objectives: quest.objectives.map((obj) => ({
        id: obj.id,
        action: obj.action,
        quantity: obj.quantity,
        targetId: obj.targetId,
        questId: obj.questId,
        description: `${actionTranslator[obj.action]} ${obj.quantity} alvo(s)`
      })),
      goldReward: quest.goldReward,
      xpReward: quest.xpReward
    }));

    return completeQuests;
  };

  async acceptQuest(id: string) {
    const quest = await this.prisma.quest.findUnique({
      where: { id },
      include: { hero: true }
    });

    if (!quest) throw new NotFoundException('Quest não encontrada.');

    if (quest.status !== QuestStatus.Available) {
      throw new BadRequestException('Esta quest não pode mais ser aceita.');
    }

    const limite = 1 + Math.floor(quest.hero.level / 5);

    const numAcceptedQuests = await this.prisma.quest.count({
      where: {
        heroId: quest.heroId,
        status: 'Accepted'
      }
    });

    if (numAcceptedQuests >= limite) {
      throw new BadRequestException('O herói já atingiu o limite de missões ativas.');
    };

    return this.prisma.quest.update({
      where: { id },
      data: { status: QuestStatus.Accepted }
    });
  };

  async completeQuest(id: string) {
    const quest = await this.prisma.quest.findUnique({
      where: { id },
      include: { hero: true }
    });

    if (!quest || quest.status !== QuestStatus.Accepted) {
      throw new BadRequestException('Apenas quests aceitas podem ser concluídas.');
    }

    return this.prisma.$transaction(async (tx) => {  // transaction: garante que ou tudo acontece, ou nada acontece
      await tx.quest.update({
        where: { id },
        data: { status: QuestStatus.Completed }
      });

      return tx.hero.update({
        where: { id: quest.heroId },
        data: {
          gold: { increment: quest.goldReward },
          experience: { increment: quest.xpReward },
          reputation: { increment: 5 }
        }
      });
    });
  }

  async cancelQuest(id: string) {
    const quest = await this.prisma.quest.findUnique({ where: { id } });

    if (!quest || quest.status !== QuestStatus.Accepted) {
      throw new BadRequestException('Apenas quests aceitas podem ser canceladas.')
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.hero.update({
        where: { id: quest.heroId },
        data: { reputation: { increment: -10 } }
      });

      return tx.quest.update({
        where: { id },
        data: {
          status: QuestStatus.Available,
          goldReward: { increment: Math.floor(-(quest.goldReward * 0.3)) },
          xpReward: { increment: Math.floor(-(quest.xpReward * 0.3)) }
        }
      })
    })
  }
}
