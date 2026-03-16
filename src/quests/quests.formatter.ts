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
} from './quests.dictionaries';

@Injectable()
export class QuestsFormatter {
  generateNarrative(actor: Actor): string[] {
    const randFTitles       = Math.floor(Math.random() * friendlyTemplates.titles.length);
    const randFDescriptions = Math.floor(Math.random() * friendlyTemplates.descriptions.length);
    const randHTitles       = Math.floor(Math.random() * hostileTemplates.titles.length);
    const randHDescriptions = Math.floor(Math.random() * hostileTemplates.descriptions.length);

    if (actor.hostility) {
      const title       = `${hostileTemplates.titles[randHTitles]} ${roleTranslator[actor.role]}`;
      const description = `${roleTranslator[actor.role]} ${actor.name} ${hostileTemplates.descriptions[randHDescriptions]}`;
      if (!title || !description) throw new Error('Falha ao criar narrativa.');
      return [title, description];
    }

    const title       = `${friendlyTemplates.titles[randFTitles]} ${roleTranslator[actor.role]}`;
    const description = `${roleTranslator[actor.role]} ${actor.name} ${friendlyTemplates.descriptions[randFDescriptions]}`;
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

    const isUncountable =
      uncountableActions.has(action) ||
      uncountableCategories.has(target.category);

    if (isUncountable || quantity === 1) {
      const article = categoryArticle[target.category];
      return `${verb} ${article} ${target.name}`;
    }

    return `${verb} ${quantity}x ${target.name}`;
  }
}