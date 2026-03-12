import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Actor, ActionType, ActorRole } from '@prisma/client';
import { ObjectiveDto, QuestDto } from './dto/quest-response.dto';
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

@Injectable()
export class QuestsService {
  constructor(private readonly prisma: PrismaService) {}

  private async sortActor(): Promise<Actor> {
    const numActors = await this.prisma.actor.count();
    const randomNumber = Math.floor(Math.random() * numActors);
    const actor = await this.prisma.actor.findFirst({
      skip: randomNumber,
    });

    if (!actor) throw new Error('Nenhum ator encontrado no banco de dados.');
    return actor;
  }

  public generateObjectives(num: number, questId: string): ObjectiveDto[] {
    const objectives: ObjectiveDto[] = [];
    const listActions = Object.values(ActionType);

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

  public async generateQuest(): Promise<QuestDto> {
    const actor = await this.sortActor();
    const questId = crypto.randomUUID();

    const title = `Missão do ${roleTranslator[actor.role]} perdido`;
    const description = `O ${roleTranslator[actor.role]} ${actor.name} precisa de sua ajuda para encontrar a saída da floresta.`;
    const objectives = this.generateObjectives(2, questId);

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
