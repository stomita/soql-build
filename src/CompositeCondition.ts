import type { DeepReadonly } from "ts-essentials";
import Condition from "./Condition";
import buildCondition from "./buildCondition";
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
  constructor(
    config: DeepReadonly<CompositeConditionConfig>,
    baseObjectName: string,
    stripParens: boolean = false,
  ) {
    super();
    this.operator = config.operator;
    this.conditions = config.conditions.map((cond) =>
      buildCondition(cond, baseObjectName, false),
    );
    this.stripParens = stripParens;
  }

  /**
   *
   */
  toSOQL() {
    const condition = this.conditions
      .map((c) => c.toSOQL())
      .join(" " + this.operator + " ");
    return condition.length > 0 && !this.stripParens
      ? "(" + condition + ")"
      : condition;
  }
}
