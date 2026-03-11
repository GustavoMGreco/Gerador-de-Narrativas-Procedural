import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ActorsModule } from './actors/actors.module';
import { QuestsModule } from './quests/quests.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ActorsModule,
    QuestsModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
