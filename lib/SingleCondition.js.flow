/* @flow */
import Condition from './Condition';
import Field from './Field';
import Operand, { createOperand } from './Operand';
import type { SingleConditionConfig } from './Condition';

export default class SingleCondition extends Condition {
  operator: string;
  field: Field;
  value: Operand;
  constructor(config: SingleConditionConfig, baseObjectName: string) {
    super();
    this.operator = config.operator;
    this.field = new Field(config.field, baseObjectName);
    const value = createOperand(config.value);
    if (value == null) { throw new Error(); }
    this.value = value;
  }
  toSOQL() {
    return this.field.toSOQL() + ' ' + this.operator + ' ' + this.value.toSOQL();
  }
}
