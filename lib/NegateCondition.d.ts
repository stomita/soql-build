import { DeepReadonly } from "utility-types";
import Condition from "./Condition";
import { NegateConditionConfig } from "./Condition";
export default class NegateCondition extends Condition {
    condition: Condition;
    stripParens: boolean;
    constructor(config: DeepReadonly<NegateConditionConfig>, baseObjectName: string, stripParens: boolean);
    toSOQL(): string;
}
