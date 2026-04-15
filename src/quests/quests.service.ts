import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Actor, Hero, ActionType, QuestStatus, Target, TargetCategory, HeroClass } from '@prisma/client';
import { ObjectiveDto, QuestDto } from './dto/quest-response.dto';
import { GenerateQuestDto } from './dto/generate-quest.dto';
import { QuestsFormatter } from './quests.formatter';
import { questGraph, QuestContext, selectNextAction } from './quests-graph.engine';
import * as crypto from 'crypto';
import { QuestTemplate, questTemplates } from './data/narratives.data';

@Injectable()
export class QuestsService {
  constructor(private readonly prisma: PrismaService, private readonly formatter: QuestsFormatter) {}

  private async sortActor(heroLevel: number, heroReputation: number, regionId: string): Promise<Actor> {
    const actorFilter = {
      regionId: regionId,
      level: {
        gte: heroLevel - 5,
        lte: heroLevel + 5
      },
      hostility: heroReputation < 0
    };

    const numActors = await this.prisma.actor.count({ where: actorFilter });

    if (numActors === 0) {
      throw new NotFoundException('Não há NPCs nesta região com tarefas adequadas para o seu nível e reputação, hora de viajar.');
    };

    const randomNumber = Math.floor(Math.random() * numActors);

    const actor = await this.prisma.actor.findFirst({
      where: actorFilter,
      skip: randomNumber
    });

    if (!actor) throw new Error('Falha ao sortear o ator.');
    return actor;
  };

  private async findValidTarget(action: ActionType, heroLevel: number, currentTags: Set<string>): Promise<Target> {
  const node = questGraph[action];
  const allowedCategories = node?.allowedTargets || [TargetCategory.Monster];
  const tagsArray = Array.from(currentTags);

  const basetFilter = {
    category: { in: allowedCategories },
    level: {
      gte: Math.max(1, heroLevel - 5),
      lte: heroLevel + 5
    }
  };

  // monta o filtro combinando a base com a restrição de tags
  const targetFilter: any = { ...basetFilter };

  if (tagsArray.length > 0) {
    targetFilter.tags = {
      hasSome: tagsArray  // o prisma busca alvos que tenham pelo menos uma das tags do roteiro
    };
  };

  let count = await this.prisma.target.count({ where: targetFilter });

  if (count === 0 && tagsArray.length > 0) {
    const filterSemNivel = {
      category: { in: allowedCategories },
      tags: { hasSome: tagsArray }
    };
    
    count = await this.prisma.target.count({ where: filterSemNivel });
    
    if (count > 0) {
      delete targetFilter.level; 
    } else {
      delete targetFilter.tags;
      count = await this.prisma.target.count({ where: targetFilter });
    };
  };

  if (count === 0) {
    // fallback: se não achar um alvo perfeito, pega qualquer um da categoria
    const fallback = await this.prisma.target.findFirst({
      where: { category: { in: allowedCategories } }
    });
    if(fallback) return fallback;
     
    throw new Error(`Nenhum alvo encontrado para a ação ${action}.`);
  };

  const randomIndex = Math.floor(Math.random() * count);
  const target = await this.prisma.target.findFirst({
    where: targetFilter,
    skip: randomIndex
  });

  return target!; // o ! avisa ao TS que não é nulo
};

private getEntryAction(heroClass: HeroClass): ActionType {
    const genericEntries = [
      ActionType.Investigate, 
      ActionType.Gather, 
      ActionType.Guard, 
      ActionType.Negotiate, 
      ActionType.Escort
    ];
    
    let classEntries: ActionType[] = [];
    switch (heroClass) {
      case HeroClass.Warrior: 
        classEntries = [ActionType.Challenge, ActionType.Siege, ActionType.Rally]; 
        break;
      case HeroClass.Rogue: 
        classEntries = [ActionType.Infiltrate, ActionType.Spy, ActionType.Pickpocket]; 
        break;
      case HeroClass.Mage: 
        classEntries = [ActionType.Decipher, ActionType.Ritual]; 
        break;
      case HeroClass.Cleric: 
        classEntries = [ActionType.Exorcise, ActionType.Convert]; 
        break;
    }

    const possibleEntries = [...genericEntries, ...classEntries];
    
    return possibleEntries[Math.floor(Math.random() * possibleEntries.length)];
  }

  private async createSingleObjective(action: ActionType, heroLevel: number, questId: string, currentTags: Set<string>): Promise<ObjectiveDto> {
    const target = await this.findValidTarget(action, heroLevel, currentTags);

    let quantity = 1; 

    if (target.category === TargetCategory.Monster || target.category === TargetCategory.Item) {
      quantity = Math.floor(Math.random() * 10) + 1;
    }

    return {
      id: crypto.randomUUID(),
      action,
      quantity,
      targetId: target.id,
      questId,
      description: this.formatter.formatObjectiveDescription(action, quantity, target)
    };
  };

  public async generateObjectives(questId: string, hero: Hero, actor: Actor): Promise<{ objectives: ObjectiveDto[], tags: Set<string> }> {
    const context: QuestContext = {
      heroLevel: hero.level,
      heroClass: hero.class,
      actorRole: actor.role,
      hostility: actor.hostility,
      intensity: hero.class === HeroClass.Warrior ? 8 : 2,
      tags: new Set<string>(),
      actionHistory: []
    };

    let currentAction: ActionType = this.getEntryAction(hero.class);
    let objectives: ObjectiveDto[] = [];

    for (let i = 0; i < 3; i++) {
      let node = questGraph[currentAction];
      if (!node) break;

      context.actionHistory.push(currentAction);
      node.narrativeTags.forEach(tag => context.tags.add(tag));
      
      objectives.push(await this.createSingleObjective(currentAction, hero.level, questId, context.tags));

      let next = selectNextAction(node, context);
      if (!next) break;

      currentAction = next;
    };

    return { objectives, tags: context.tags };
  };

  private async synthetizeNarrative(tags: Set<string>, actorName: string, regionName: string): Promise<{ title: string, description: string }> {
    let lista: QuestTemplate[] = [];
    let title = '';
    let description = '';
    let bestScore = 0;

    for (let template of questTemplates) {
      const score = template.requiredTags.filter(tag => tags.has(tag)).length;

      if (score > 0) {
        if (score > bestScore) {
          bestScore = score;
          lista = [template]; 
        } else if (score === bestScore) {
          lista.push(template);
        }
      }
    }

    if (lista.length === 0) {
      title = 'Uma Missão Sem sentido';
      description = 'Você sente um vazio em sua alma e não sabe o que fazer.';
    } else {
      const randomTemplate: QuestTemplate = lista[Math.floor(Math.random() * lista.length)];
      title = randomTemplate.titles[Math.floor(Math.random() * randomTemplate.titles.length)];
      description = randomTemplate.descriptions[Math.floor(Math.random() * randomTemplate.descriptions.length)];

      title = title.replace(/{Actor}/g, actorName).replace(/{Region}/g, regionName);
      description = description.replace(/{Actor}/g, actorName).replace(/{Region}/g, regionName);
    }

    return { title, description };
  };

  public async generateQuest(dto: GenerateQuestDto): Promise<QuestDto> {
    const hero = await this.prisma.hero.findUnique({
      where: {
        id: dto.heroId
      },
      include: { region: true }
    });
    if (!hero) {
      throw new NotFoundException('Herói não encontrado no banco de dados.');
    };

    const actor = await this.sortActor(hero.level, hero.reputation, hero.regionId);
    const questId = crypto.randomUUID();

    const result = await this.generateObjectives(questId, hero, actor);
    const objectives = result.objectives;

    let narrative = await this.synthetizeNarrative(result.tags, actor.name, hero.region.name);

    const gold = actor.level * 15;
    const xp = actor.level * 25;

    await this.prisma.quest.create({
      data: {
        id: questId,
        title: narrative.title,
        description: narrative.description,
        actorId: actor.id,
        objectives: {
          create: objectives.map((obj) => ({
            id: obj.id,
            action: obj.action,
            quantity: obj.quantity,
            targetId: obj.targetId
          })),
        },
        goldReward: gold,
        xpReward: xp,
        heroId: hero.id,
        regionId: hero.regionId
      },
  
    });

    const quest = {
      id: questId,
      title: narrative.title,
      description: narrative.description,
      actorId: actor.id,
      objectives: objectives,
      goldReward: gold,
      xpReward: xp
    };

    return quest;
  };

  async findAll(page: string, limit: string, status?: QuestStatus, regionId?: string): Promise<QuestDto[]> {
    const rawQuests = await this.prisma.quest.findMany({
      take: Number(limit),
      skip: (Number(page) - 1) * Number(limit),
      where: {
        ...(status && { status }),    // só adiciona o filtro se a variável existir
        ...(regionId && { regionId })
      },
      orderBy: { id: 'desc' },   // retorna os mais recentes primeiro
      include: {
        actor: true,
        objectives: {
          include: { target: true }
        },
      }
    });

    const completeQuests: QuestDto[] = rawQuests.map((quest) => ({
      id: quest.id,
      title: quest.title,
      description: quest.description,
      actorId: quest.actorId,
      objectives: quest.objectives.map((obj) => ({
        id: obj.id,
        action: obj.action,
        quantity: obj.quantity,
        targetId: obj.targetId,
        questId: obj.questId,
        description: this.formatter.formatObjectiveDescription(obj.action, obj.quantity, obj.target)
      })),
      goldReward: quest.goldReward,
      xpReward: quest.xpReward
    }));

    return completeQuests;
  };

  async acceptQuest(id: string) {
    const quest = await this.prisma.quest.findUnique({
      where: { id },
      include: { hero: true }
    });

    if (!quest) throw new NotFoundException('Quest não encontrada.');

    if (quest.status !== QuestStatus.Available) {
      throw new BadRequestException('Esta quest não pode mais ser aceita.');
    };
    if (!quest.hero) {
      throw new BadRequestException('Esta quest não está vinculada a um herói válido.');
    };

    const limite = 1 + Math.floor(quest.hero.level / 5);

    const numAcceptedQuests = await this.prisma.quest.count({
      where: {
        heroId: quest.heroId,
        status: 'Accepted'
      }
    });

    if (numAcceptedQuests >= limite) {
      throw new BadRequestException('O herói já atingiu o limite de missões ativas.');
    };

    return this.prisma.quest.update({
      where: { id },
      data: { status: QuestStatus.Accepted }
    });
  };

  async completeQuest(id: string) {
    const quest = await this.prisma.quest.findUnique({
      where: { id },
      include: { hero: true }
    });

    if (!quest || quest.status !== QuestStatus.Accepted) {
      throw new BadRequestException('Apenas quests aceitas podem ser concluídas.');
    };
    if (!quest.hero || !quest.heroId) {
      throw new BadRequestException('Esta quest não está vinculada a um herói válido.');
    };

    const validHeroId = quest.heroId;

    return this.prisma.$transaction(async (tx) => {  // transaction: garante que ou tudo acontece, ou nada acontece
      await tx.quest.update({
        where: { id },
        data: { status: QuestStatus.Completed }
      });

      return tx.hero.update({
        where: { id: validHeroId },
        data: {
          gold: { increment: quest.goldReward },
          experience: { increment: quest.xpReward },
          reputation: { increment: 5 }
        }
      });
    });
  };

  async cancelQuest(id: string) {
    const quest = await this.prisma.quest.findUnique({
      where: { id },
      include: { hero: true }
    });

    if (!quest || quest.status !== QuestStatus.Accepted) {
      throw new BadRequestException('Apenas quests aceitas podem ser canceladas.')
    };
    if (!quest.hero || !quest.heroId) {
      throw new BadRequestException('Esta quest não está vinculada a um herói válido.');
    };

    const validHeroId = quest.heroId;

    return this.prisma.$transaction(async (tx) => {
      await tx.hero.update({
        where: { id: validHeroId },
        data: { reputation: { increment: -10 } }
      });

      return tx.quest.update({
        where: { id },
        data: {
          status: QuestStatus.Available,
          goldReward: { increment: Math.floor(-(quest.goldReward * 0.3)) },
          xpReward: { increment: Math.floor(-(quest.xpReward * 0.3)) }
        }
      });
    });
  };
}
