import QueryElement from "./QueryElement";
import { OperandConfig } from "./Operand";
import { FieldReferenceConfig } from "./Field";
/**
 *
 */
export declare type CompositeConditionConfig = {
    operator: "AND" | "OR";
    conditions: ConditionConfig[];
};
/**
 *
 */
export declare type NegateConditionConfig = {
    operator: "NOT";
    condition: ConditionConfig;
};
/**
 *
 */
export declare type SingleConditionConfig = {
    operator: "=" | "!=" | "<" | "<=" | ">=" | ">" | "LIKE" | "IN" | "NOT IN" | "EXCLUDES" | "INCLUDES";
    field: FieldReferenceConfig;
    value: OperandConfig;
};
/**
 *
 */
export declare type ConditionConfig = CompositeConditionConfig | NegateConditionConfig | SingleConditionConfig;
/**
 *
 */
export default class Condition extends QueryElement {
}
