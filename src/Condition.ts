import QueryElement from "./QueryElement";
import { OperandConfig } from "./Operand";
import { FieldConfig } from "./Field";

/**
 *
 */
export type CompositeConditionConfig = {
  operator: "AND" | "OR";
  conditions: ConditionConfig[];
};

/**
 *
 */
export type NegateConditionConfig = {
  operator: "NOT";
  condition: ConditionConfig;
};

/**
 *
 */
export type SingleConditionConfig = {
  operator:
    | "="
    | "!="
    | "<"
    | "<="
    | ">="
    | ">"
    | "LIKE"
    | "IN"
    | "NOT IN"
    | "EXCLUDES"
    | "INCLUDES";
  field: FieldConfig;
  value: OperandConfig;
};

/**
 *
 */
export type ConditionConfig =
  | CompositeConditionConfig
  | NegateConditionConfig
  | SingleConditionConfig;

/**
 *
 */
export default class Condition extends QueryElement {}
