import { DeepReadonly } from "utility-types";
import Field from "./Field";
import Condition, { SingleConditionConfig } from "./Condition";
import Operand, { createOperand } from "./Operand";
import buildField from "./buildField";

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
  constructor(
    config: DeepReadonly<SingleConditionConfig>,
    baseObjectName: string
  ) {
    super();
    this.operator = config.operator;
    this.field = buildField(config.field, baseObjectName);
    const value = createOperand(config.value);
    if (value == null) {
      throw new Error();
    }
    this.value = value;
  }

  /**
   *
   */
  toSOQL() {
    return (
      this.field.toSOQL() + " " + this.operator + " " + this.value.toSOQL()
    );
  }
}
