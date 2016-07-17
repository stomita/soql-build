/* @flow */
import Condition from './Condition';
import SingleCondition from './SingleCondition';
import NegateCondition from './NegateCondition';
import CompositeCondition from './CompositeCondition';
import type { ConditionConfig } from './Condition';

export default function buildCondition(config: ConditionConfig, baseObjectName: string, stripParens: boolean): Condition {
  if (config.operator === 'NOT') {
    return new NegateCondition(config, baseObjectName, stripParens);
  } else if (config.operator === 'AND' || config.operator === 'OR') {
    return new CompositeCondition(config, baseObjectName, stripParens);
  } else {
    return new SingleCondition(config, baseObjectName);
  }
}
