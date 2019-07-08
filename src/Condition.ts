/* @flow */
import QueryElement from './QueryElement';

import type { OperandConfig } from './Operand';

export type CompositeConditionConfig = {
  operator: "AND" | "OR",
  conditions: Array<ConditionConfig>,
};

export type NegateConditionConfig = {
  operator: "NOT",
  condition: ConditionConfig,
};

export type SingleConditionConfig = {
  operator: "=" | "!=" | "<" | "<=" | ">=" | ">" | "LIKE" | "IN" | "NOT IN" | "EXCLUDES" | "INCLUDES",
  field: string,
  value: OperandConfig,
};

export type ConditionConfig = CompositeConditionConfig | NegateConditionConfig | SingleConditionConfig;

export default class Condition extends QueryElement {
}