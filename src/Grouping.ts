import type { DeepReadonly } from "ts-essentials";
import QueryElement from "./QueryElement";
import Field, { type FieldConfig } from "./Field";
import Condition, { type ConditionConfig } from "./Condition";
import buildField from "./buildField";
import buildCondition from "./buildCondition";

/**
 *
 */
export type GroupingConfig = {
  fields: FieldConfig[];
  subtotal?: string;
  having?: ConditionConfig;
};

/**
 *
 */
export default class Grouping extends QueryElement {
  fields: Field[];
  subtotal: string | undefined;
  having: Condition | undefined;

  /**
   *
   */
  constructor(config: DeepReadonly<GroupingConfig>, baseObjectName: string) {
    super();
    this.fields = config.fields.map((field) =>
      buildField(field, baseObjectName),
    );
    this.subtotal = config.subtotal;
    if (config.having) {
      this.having = buildCondition(config.having, baseObjectName, true);
    }
    if (this.subtotal && !/^(ROLLUP|CUBE)$/i.test(this.subtotal)) {
      console.warn(
        "The given value does not match to the grouping subtotal type",
        this.subtotal,
      );
    }
  }

  /**
   *
   */
  toSOQL() {
    return [
      "GROUP BY",
      ...(this.subtotal ? [this.subtotal] : []),
      (this.subtotal ? "(" : "") +
        this.fields.map((field) => field.toSOQL()).join(", ") +
        (this.subtotal ? ")" : ""),
      ...(this.having ? ["HAVING", this.having.toSOQL()] : []),
    ].join(" ");
  }
}
