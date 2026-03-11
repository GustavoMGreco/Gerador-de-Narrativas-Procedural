import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Actor, Quest, Objective, ActionType, ActorRole } from '@prisma/client';
import * as crypto from 'crypto';

const roleTranslator: Record<ActorRole, string> = {
  Blacksmith: 'Ferreiro',
  Guard: 'Guarda',
  Alchemist: 'Alquimista',
  Innkeeper: 'Taverneiro',
  Adventurer: 'Aventureiro',
  Merchant: 'Mercador',
  Mayor: 'Prefeito',
}

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
}

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

  public generateObjectives(num: number, questId: string): (Objective & { description: string })[] {
    const objectives: (Objective & { description: string })[] = [];
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
        description: `${actionTranslator[rawAction]} ${generatedQuantity} alvo(s)` 
      };
      objectives.push(objective);
    }

    return objectives;
  }

  public async generateQuest(): Promise<Quest & { objectives: (Objective & { description: string })[] }> {
    const actor = await this.sortActor();
    const questId = crypto.randomUUID();

    const gold = actor.level * 15;
    const xp = actor.level * 25;

    const quest = {
      id: questId,
      title: `Missão do ${roleTranslator[actor.role]} perdido`,
      description: `O ${roleTranslator[actor.role]} ${actor.name} precisa de sua ajuda para encontrar a saída da floresta.`,
      actorId: actor.id,
      objectives: this.generateObjectives(2, questId),
      goldReward: gold,
      xpReward: xp
    }

    return quest;
  }
}
