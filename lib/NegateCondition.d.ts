import type { DeepReadonly } from "ts-essentials";
import Condition from "./Condition";
import type { NegateConditionConfig } from "./Condition";
export default class NegateCondition extends Condition {
    condition: Condition;
    stripParens: boolean;
    constructor(config: DeepReadonly<NegateConditionConfig>, baseObjectName: string, stripParens: boolean);
    toSOQL(): string;
}
