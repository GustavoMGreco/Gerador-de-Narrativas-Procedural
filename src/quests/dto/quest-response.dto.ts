import { ActionType } from '@prisma/client';

export interface ObjectiveDto {
  id: string;
  action: ActionType;
  quantity: number;
  targetId: string;
  questId: string;
  description: string;
}

export interface QuestDto {
  id: string;
  title: string;
  description: string;
  actorId: string;
  objectives: ObjectiveDto[];
  goldReward: number;
  xpReward: number;
}
