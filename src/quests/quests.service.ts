import { Injectable } from '@nestjs/common';
import { Quest } from './interfaces/quest';

@Injectable()
export class QuestsService {
  public Quest(quest: Quest) {
    return quest;
  }
}
