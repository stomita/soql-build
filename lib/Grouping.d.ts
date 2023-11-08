import type { DeepReadonly } from "ts-essentials";
import QueryElement from "./QueryElement";
import Field, { type FieldConfig } from "./Field";
import Condition, { type ConditionConfig } from "./Condition";
/**
 *
 */
export type GroupingConfig = {
    fields: FieldConfig[];
    subtotal?: string;
    having?: ConditionConfig;
};
/**
 *
 */
export default class Grouping extends QueryElement {
    fields: Field[];
    subtotal: string | undefined;
    having: Condition | undefined;
    /**
     *
     */
    constructor(config: DeepReadonly<GroupingConfig>, baseObjectName: string);
    /**
     *
     */
    toSOQL(): string;
}
