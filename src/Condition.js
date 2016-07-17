/* @flow */
import QueryElement from './QueryElement';

export type AndConditionConfig = {
  operator: "AND",
  conditions: Array<ConditionConfig>,
};

export type OrConditionConfig = {
  operator: "AND",
  conditions: Array<ConditionConfig>,
};

export type NegateConditionConfig = {
  operator: "NOT",
  condition: ConditionConfig,
};

export type SingleConditionConfig = {
  operator: "=" | "!=" | "<" | "<=" | ">=" | ">" | "LIKE" | "IN" | "NOT IN",
  field: string,
  value: any,
};

export type CompositeConditionConfig = AndConditionConfig | OrConditionConfig;

export type ConditionConfig = CompositeConditionConfig | NegateConditionConfig | SingleConditionConfig;

export default class Condition extends QueryElement {
}
