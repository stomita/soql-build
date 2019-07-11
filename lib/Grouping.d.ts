import { DeepReadonly } from "utility-types";
import QueryElement from "./QueryElement";
import Field, { FieldConfig } from "./Field";
import Condition, { ConditionConfig } from "./Condition";
/**
 *
 */
export declare type GroupingConfig = {
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
