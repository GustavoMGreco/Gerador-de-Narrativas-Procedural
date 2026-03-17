import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Actor, ActionType, QuestStatus, Target, TargetCategory } from '@prisma/client';
import { ObjectiveDto, QuestDto } from './dto/quest-response.dto';
import { GenerateQuestDto } from './dto/generate-quest.dto';
import { QuestsFormatter } from './quests.formatter';
import { actionPool, actionToTargetCategory, objectiveChains, actionTranslator } from './quests.dictionaries';
import * as crypto from 'crypto';

@Injectable()
export class QuestsService {
  constructor(private readonly prisma: PrismaService, private readonly formatter: QuestsFormatter) {}

  private async sortActor(heroLevel: number, heroReputation: number, regionId: string): Promise<Actor> {
    const actorFilter = {
      regionId: regionId,
      level: {
        gte: heroLevel - 5,
        lte: heroLevel + 5
      },
      hostility: heroReputation < 0
    };

    const numActors = await this.prisma.actor.count({ where: actorFilter });

    if (numActors === 0) {
      throw new NotFoundException('Não há NPCs nesta região com tarefas adequadas para o seu nível e reputação, hora de viajar.');
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

  private async createSingleObjective(action: ActionType, heroLevel: number, questId: string): Promise<ObjectiveDto> {
    const target = await this.findValidTarget(action, heroLevel);

    let quantity = 1; 

    if (target.category === TargetCategory.Monster || target.category === TargetCategory.Item) {
      quantity = Math.floor(Math.random() * 10) + 1;
    }

    return {
      id: crypto.randomUUID(),
      action,
      quantity,
      targetId: target.id,
      questId,
      description: this.formatter.formatObjectiveDescription(action, quantity, target)
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

    const actor = await this.sortActor(hero.level, hero.reputation, hero.regionId);
    const questId = crypto.randomUUID();

    const [title, description] = this.formatter.generateNarrative(actor)
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
        heroId: hero.id,
        regionId: hero.regionId
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
        objectives: {
          include: { target: true }
        }
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
        description: this.formatter.formatObjectiveDescription(obj.action, obj.quantity, obj.target)
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
    if (!quest.hero) {
      throw new BadRequestException('Esta quest não está vinculada a um herói válido.');
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
    if (!quest.hero || !quest.heroId) {
      throw new BadRequestException('Esta quest não está vinculada a um herói válido.');
    }

    const validHeroId = quest.heroId;

    return this.prisma.$transaction(async (tx) => {  // transaction: garante que ou tudo acontece, ou nada acontece
      await tx.quest.update({
        where: { id },
        data: { status: QuestStatus.Completed }
      });

      return tx.hero.update({
        where: { id: validHeroId },
        data: {
          gold: { increment: quest.goldReward },
          experience: { increment: quest.xpReward },
          reputation: { increment: 5 }
        }
      });
    });
  }

  async cancelQuest(id: string) {
    const quest = await this.prisma.quest.findUnique({
      where: { id },
      include: { hero: true }
    });

    if (!quest || quest.status !== QuestStatus.Accepted) {
      throw new BadRequestException('Apenas quests aceitas podem ser canceladas.')
    }
    if (!quest.hero || !quest.heroId) {
      throw new BadRequestException('Esta quest não está vinculada a um herói válido.');
    }

    const validHeroId = quest.heroId;

    return this.prisma.$transaction(async (tx) => {
      await tx.hero.update({
        where: { id: validHeroId },
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
