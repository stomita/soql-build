/* @flow */
import Condition from './Condition';
import SingleCondition from './SingleCondition';
import NegateCondition from './NegateCondition';
import CompositeCondition from './CompositeCondition';
import type { ConditionConfig, SingleConditionConfig } from './Condition';

export default function buildCondition(config: ConditionConfig, baseObjectName: string, stripParens: boolean): Condition {
  if (config.operator === 'NOT') {
    return new NegateCondition(config, baseObjectName, stripParens);
  } else if (config.operator === 'AND' || config.operator === 'OR') {
    return new CompositeCondition(config, baseObjectName, stripParens);
  } else {
    // flowtype ver 63 still cannot find it could be narrowed to SingleConditionConfig
    return new SingleCondition(((config: any): SingleConditionConfig), baseObjectName);
  }
}
