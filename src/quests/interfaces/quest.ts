import { Actor } from '../../actors/interfaces/actor';
import { Objective } from './objective';

export interface Quest {
  id: string;
  title: string;
  description: string;
  actorId: Actor['id'];
  objectives: Objective[];
  goldReward: number;
  xpReward: number;
}
