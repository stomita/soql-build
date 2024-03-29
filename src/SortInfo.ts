import type { DeepReadonly } from "ts-essentials";
import QueryElement from "./QueryElement";
import Field, { type FieldReferenceConfig } from "./Field";
import buildField from "./buildField";

/**
 *
 */
export type SortInfoConfig = {
  field: FieldReferenceConfig;
  direction?: "ASC" | "DESC";
  nullOrder?: "FIRST" | "LAST";
};

/**
 *
 */
export default class SortInfo extends QueryElement {
  field: Field;
  direction: string | undefined;
  nullOrder: string | undefined;

  /**
   *
   */
  constructor(config: DeepReadonly<SortInfoConfig>, baseObjectName: string) {
    super();
    this.field = buildField(config.field, baseObjectName);
    this.direction = config.direction;
    this.nullOrder = config.nullOrder;
  }

  /**
   *
   */
  toSOQL() {
    return [
      this.field.toSOQL(),
      ...(this.direction != null ? [this.direction.toUpperCase()] : []),
      ...(this.nullOrder != null
        ? ["NULLS", this.nullOrder.toUpperCase()]
        : []),
    ].join(" ");
  }
}
