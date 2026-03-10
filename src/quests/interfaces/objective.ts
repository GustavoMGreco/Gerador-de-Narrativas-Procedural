import { ActionType } from './actionType';

export interface Objective {
  action: ActionType;
  quantity: number;
  targetId: string;
}
