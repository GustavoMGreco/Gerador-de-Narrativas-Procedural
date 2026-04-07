import { Module } from '@nestjs/common';
import { QuestsController } from './quests.controller';
import { QuestsService } from './quests.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { QuestsFormatter } from './quests.formatter';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [QuestsController],
  providers: [QuestsService, QuestsFormatter, PrismaService],
})
export class QuestsModule {}
