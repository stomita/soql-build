import type { DeepReadonly } from "ts-essentials";
import Condition from "./Condition";
import type { CompositeConditionConfig } from "./Condition";
/**
 *
 */
export default class CompositeCondition extends Condition {
    operator: "AND" | "OR";
    conditions: Condition[];
    stripParens: boolean;
    /**
     *
     */
    constructor(config: DeepReadonly<CompositeConditionConfig>, baseObjectName: string, stripParens?: boolean);
    /**
     *
     */
    toSOQL(): string;
}
