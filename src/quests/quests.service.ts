import { Injectable } from '@nestjs/common';
import { Quest } from './interfaces/quest';
import { ActionType } from './interfaces/actionType';

@Injectable()
export class QuestsService {
  public generateQuest() {
    const quest: Quest = {
      id: '1234#$@',
      title: 'Resgatar a princesa',
      description: 'Entre no castelo, derrote o dragão e salve a princesa',
      actorId: '1',
      objectives: [{action: ActionType.Investigate, quantity: 3, targetId: '550e8400-e29b-41d4-a716-446655440000'}, {action: ActionType.Kill, quantity: 10, targetId: '123e4567-e89b-12d3-a456-426614174000'}],
      goldReward: 20,
      xpReward: 15,
    };

    return quest;
  }
}
