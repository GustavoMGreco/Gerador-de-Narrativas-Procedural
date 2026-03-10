import { ActorRole } from './actorRole';

export interface Actor {
  id: string;
  name: string;
  role: ActorRole;
  level: number;
  hostility: boolean;
}
