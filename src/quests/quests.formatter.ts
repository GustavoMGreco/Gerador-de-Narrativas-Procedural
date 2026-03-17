import { Injectable } from '@nestjs/common';
import { Actor, ActionType, Target, TargetCategory } from '@prisma/client';
import { friendlyTemplates, hostileTemplates } from './data/narratives.data';
import {
  actionTranslator,
  categoryArticle,
  locationTemplates,
  actionPrepositions,
  narrativeOverrides,
  roleTranslator,
  uncountableActions,
  uncountableCategories,
  uncountableVsNonMonster,
} from './quests.dictionaries';

@Injectable()
export class QuestsFormatter {

  private pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private interpolate(template: string, actor: Actor): string {
    return template
      .replace('{name}', actor.name)
      .replace('{role}', roleTranslator[actor.role]);
  }

  generateNarrative(actor: Actor): string[] {
    const templates = actor.hostility ? hostileTemplates : friendlyTemplates;

    const rawTitle       = this.pickRandom(templates.titles);
    const rawDescription = this.pickRandom(templates.descriptions);

    const title       = this.interpolate(rawTitle, actor);
    const description = `${roleTranslator[actor.role]} ${actor.name} ${rawDescription}`;

    if (!title || !description) throw new Error('Falha ao criar narrativa.');
    return [title, description];
  }

  formatObjectiveDescription(action: ActionType, quantity: number, target: Target): string {
    const verb =
      narrativeOverrides[action]?.[target.category] ??
      actionTranslator[action];

    if (target.category === TargetCategory.Location) {
      const template = locationTemplates[action];
      if (template) return template(target.name);
      const prep = actionPrepositions[action] ?? 'em';
      return `${verb} ${prep} ${target.name}`;
    }

    const isCountableTarget =
      target.category === TargetCategory.Monster ||
      target.category === TargetCategory.Item;

    const isUncountable =
      uncountableActions.has(action) ||
      uncountableCategories.has(target.category) ||
      (uncountableVsNonMonster.has(action) && !isCountableTarget);

    if (isUncountable || quantity === 1) {
      const article = categoryArticle[target.category];
      return `${verb} ${article} ${target.name}`;
    }

    return `${verb} ${quantity}x ${target.name}`;
  }
}