import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HeroesService {
  constructor(private prisma: PrismaService) {}

  async createHero(createHeroDto: CreateHeroDto) {
    return this.prisma.hero.create({
      data: {
        name: createHeroDto.name,
        class: createHeroDto.class
      },
    });
  }

  async findOne(id: string) {
    const hero = await this.prisma.hero.findUnique({ where: { id } });
    if (!hero) throw new NotFoundException('Herói não encontrado.');
    return hero;
  }
}
