import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ActorsModule } from './actors/actors.module';
import { QuestsModule } from './quests/quests.module';
import { PrismaModule } from './prisma/prisma.module';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ActorsModule,
    QuestsModule,
    PrismaModule,
    HeroesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
