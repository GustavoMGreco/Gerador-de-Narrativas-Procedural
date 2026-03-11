import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestsService {
  constructor(private readonly prisma: PrismaService) {};
  
  public async generateQuest() {
    const actor = await this.prisma.actor.findFirst();
    console.log(actor)
    return actor
  }
}
