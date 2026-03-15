import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Actor, ActionType, ActorRole, QuestStatus } from '@prisma/client';
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
  Kill: 'Matar',
  Gather: 'Coletar',
  Escort: 'Escoltar',
  Investigate: 'Investigar',
  Betray: 'Trair',
  Negotiate: 'Negociar',
  Intimidate: 'Intimidar',
  Trade: 'Trocar',
  Heal: 'Curar'
};

const actionPool: Record<string, ActionType[]> = {
  Warrior: [ActionType.Kill, ActionType.Escort, ActionType.Intimidate],
  Rogue: [ActionType.Betray, ActionType.Investigate, ActionType.Intimidate],
  Mage: [ActionType.Investigate, ActionType.Gather, ActionType.Kill],
  Cleric: [ActionType.Heal, ActionType.Escort, ActionType.Negotiate]
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

  public generateObjectives(num: number, questId: string, heroClass: string): ObjectiveDto[] {
    const objectives: ObjectiveDto[] = [];

    const listActions = actionPool[heroClass] || [
      // ações padrão caso a classe inserida não seja nenhuma das actionPool
      ActionType.Gather,
      ActionType.Trade,
      ActionType.Investigate
    ];

    for (let i = 0; i < num; i++) {
      const randomActionIndex = Math.floor(Math.random() * listActions.length);
      const rawAction = listActions[randomActionIndex];
      const generatedQuantity = Math.floor(Math.random() * 10) + 1;

      const objective = {
        id: crypto.randomUUID(),
        action: rawAction,
        quantity: generatedQuantity,
        targetId: crypto.randomUUID(),
        questId: questId,
        description: `${actionTranslator[rawAction]} ${generatedQuantity} alvo(s)`
      };
      objectives.push(objective);
    }

    return objectives;
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
    const objectives = this.generateObjectives(2, questId, hero.class);

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
