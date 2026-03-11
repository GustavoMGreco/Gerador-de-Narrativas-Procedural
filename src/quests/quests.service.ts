import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Actor, Quest, Objective, ActionType } from '@prisma/client';
import * as crypto from 'crypto';

@Injectable()
export class QuestsService {
  constructor(private readonly prisma: PrismaService) {}

  private async sortActor(): Promise<Actor> {
    const numActors = await this.prisma.actor.count();
    const randomNumber = Math.floor(Math.random() * numActors);
    const actor = await this.prisma.actor.findFirst({
      skip: randomNumber,
    });

    if (!actor) throw new Error("Nenhum ator encontrado no banco de dados.");
    return actor;
  }

  public generateObjectives(num: number, questId: string): Objective[] {
    const objectives: Objective[] = [];
    const listActions = Object.values(ActionType);

    for (let i = 0; i < num; i++) {
      const randomActionIndex = Math.floor(Math.random() * listActions.length);
      const objective: Objective = {
        id: crypto.randomUUID(),
        action: listActions[randomActionIndex],
        quantity: Math.floor(Math.random() * 10) + 1,
        targetId: crypto.randomUUID(),
        questId: questId
      };
      objectives.push(objective);
    }

    return objectives;
  }

  public async generateQuest(): Promise<Quest & { objectives: Objective[] }> {
    const actor = await this.sortActor();
    const questId = crypto.randomUUID();

    const gold = actor.level * 15;
    const xp = actor.level * 25;

    const quest = {
      id: questId,
      title: `Missão do ${actor.role} perdido`,
      description: `O ${actor.role} ${actor.name} precisa de sua ajuda para encontrar a saída da floresta.`,
      actorId: actor.id,
      objectives: this.generateObjectives(2, questId),
      goldReward: gold,
      xpReward: xp
    }

    return quest;
  }
}
