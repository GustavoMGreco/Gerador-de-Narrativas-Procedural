import { Injectable } from '@nestjs/common';
import { Actor, ActionType, Target, TargetCategory } from '@prisma/client';
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