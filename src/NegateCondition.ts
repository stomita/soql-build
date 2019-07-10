import { DeepReadonly } from "utility-types";
import Condition from "./Condition";
import buildCondition from "./buildCondition";
import { NegateConditionConfig } from "./Condition";

export default class NegateCondition extends Condition {
  condition: Condition;
  stripParens: boolean;

  constructor(
    config: DeepReadonly<NegateConditionConfig>,
    baseObjectName: string,
    stripParens: boolean
  ) {
    super();
    this.condition = buildCondition(config.condition, baseObjectName, true);
    this.stripParens = stripParens;
  }
  toSOQL() {
    const condition = "NOT " + this.condition.toSOQL();
    return !this.stripParens ? "(" + condition + ")" : condition;
  }
}
