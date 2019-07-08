import Condition from "./Condition";
import { NegateConditionConfig } from "./Condition";
export default class NegateCondition extends Condition {
    condition: Condition;
    stripParens: boolean;
    constructor(config: NegateConditionConfig, baseObjectName: string, stripParens: boolean);
    toSOQL(): string;
}
