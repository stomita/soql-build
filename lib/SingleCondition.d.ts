import Condition from "./Condition";
import Field from "./Field";
import Operand from "./Operand";
import { SingleConditionConfig } from "./Condition";
export default class SingleCondition extends Condition {
    operator: string;
    field: Field;
    value: Operand;
    constructor(config: SingleConditionConfig, baseObjectName: string);
    toSOQL(): string;
}
