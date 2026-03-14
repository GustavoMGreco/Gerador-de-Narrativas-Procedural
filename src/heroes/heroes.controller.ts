import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  createHero(@Body() createHeroDto: CreateHeroDto) {
    return this.heroesService.createHero(createHeroDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heroesService.findOne(id);
  }
}
