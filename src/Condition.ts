import QueryElement from "./QueryElement";
import type { OperandConfig } from "./Operand";
import type { FieldReferenceConfig } from "./Field";

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
  field: FieldReferenceConfig;
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
