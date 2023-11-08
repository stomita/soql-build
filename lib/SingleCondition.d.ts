import type { DeepReadonly } from "ts-essentials";
import Field from "./Field";
import Condition, { type SingleConditionConfig } from "./Condition";
import Operand from "./Operand";
/**
 *
 */
export default class SingleCondition extends Condition {
    operator: string;
    field: Field;
    value: Operand;
    /**
     *
     */
    constructor(config: DeepReadonly<SingleConditionConfig>, baseObjectName: string);
    /**
     *
     */
    toSOQL(): string;
}
