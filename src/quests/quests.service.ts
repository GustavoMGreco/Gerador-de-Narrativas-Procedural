import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Actor, ActionType, ActorRole } from '@prisma/client';
import { ObjectiveDto, QuestDto } from './dto/quest-response.dto';
import { HeroDto } from './dto/generate-quest-request.dto';
import * as crypto from 'crypto';

const roleTranslator: Record<ActorRole, string> = {
  Blacksmith: 'Ferreiro',
  Guard: 'Guarda',
  Alchemist: 'Alquimista',
  Innkeeper: 'Taverneiro',
  Adventurer: 'Aventureiro',
  Merchant: 'Mercador',
  Mayor: 'Prefeito',
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
  Heal: 'Curar',
};

const actionPool: Record<string, ActionType[]> = {
  Warrior: [ActionType.Kill, ActionType.Escort, ActionType.Intimidate],
  Rogue: [ActionType.Betray, ActionType.Investigate, ActionType.Intimidate],
  Mage: [ActionType.Investigate, ActionType.Gather, ActionType.Kill],
  Cleric: [ActionType.Heal, ActionType.Escort, ActionType.Negotiate],
};

@Injectable()
export class QuestsService {
  constructor(private readonly prisma: PrismaService) {}

  private async sortActor(
    heroLevel: number,
    heroReputation: number,
  ): Promise<Actor> {
    const actorFilter = {
      level: {
        gte: heroLevel - 5,
        lte: heroLevel + 5,
      },
      hostility: heroReputation < 0,
    };

    const numActors = await this.prisma.actor.count({ where: actorFilter });

    if (numActors === 0) {
      throw new Error(`Nenhum ator encontrado para o nível ${heroLevel}.`);
    }

    const randomNumber = Math.floor(Math.random() * numActors);

    const actor = await this.prisma.actor.findFirst({
      where: actorFilter,
      skip: randomNumber,
    });

    if (!actor) throw new Error('Falha ao sortear o ator.');
    return actor;
  }

  public generateObjectives(
    num: number,
    questId: string,
    heroClass: string,
  ): ObjectiveDto[] {
    const objectives: ObjectiveDto[] = [];

    const listActions = actionPool[heroClass] || [
      // ações padrão caso a classe inserida não seja nenhuma das actionPool
      ActionType.Gather,
      ActionType.Trade,
      ActionType.Investigate,
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
        description: `${actionTranslator[rawAction]} ${generatedQuantity} alvo(s)`,
      };
      objectives.push(objective);
    }

    return objectives;
  }

  public async generateQuest(hero: HeroDto): Promise<QuestDto> {
    const actor = await this.sortActor(hero.heroLevel, hero.heroReputation);
    const questId = crypto.randomUUID();

    const title = `Missão do ${roleTranslator[actor.role]} perdido`;
    const description = `O ${roleTranslator[actor.role]} ${actor.name} precisa de sua ajuda para encontrar a saída da floresta.`;
    const objectives = this.generateObjectives(2, questId, hero.heroClass);

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
            targetId: obj.targetId,
          })),
        },
        goldReward: gold,
        xpReward: xp,
      },
    });

    const quest = {
      id: questId,
      title: title,
      description: description,
      actorId: actor.id,
      objectives: objectives,
      goldReward: gold,
      xpReward: xp,
    };

    return quest;
  }

  async findAll(): Promise<QuestDto[]> {
    const rawQuests = await this.prisma.quest.findMany({
      include: {
        actor: true,
        objectives: true,
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
        description: `${actionTranslator[obj.action]} ${obj.quantity} alvo(s)`,
      })),
      goldReward: quest.goldReward,
      xpReward: quest.xpReward,
    }));

    return completeQuests;
  }
}
