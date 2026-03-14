import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestsService } from './quests.service';
import { GenerateQuestDto } from './dto/generate-quest.dto';

@Controller('quests')
export class QuestsController {
  constructor(private readonly questsService: QuestsService) {} // private readonly já declara a variável e atribui a instância a ela na mesma linha
  // agora eu posso usar this.questsService em qualquer lugar aqui dentro

  @Get()
  public getQuest() {
    return this.questsService.findAll();
  }

  @Post('generate')
  public PostQuest(@Body() heroId: GenerateQuestDto) {
    return this.questsService.generateQuest(heroId);
  }
}
