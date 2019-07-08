import Field from "./Field";
import Condition, { SingleConditionConfig } from "./Condition";
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
    constructor(config: SingleConditionConfig, baseObjectName: string);
    /**
     *
     */
    toSOQL(): string;
}
