import { Module } from '@nestjs/common';
import { ActorsModule } from './actors/actors.module';
import { QuestsModule } from './quests/quests.module';

@Module({
  imports: [ActorsModule, QuestsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
