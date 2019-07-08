import QueryElement from "./QueryElement";
import Field from "./Field";

export type SortInfoConfig = {
  field: string;
  direction?: "ASC" | "DESC";
  nullOrder?: "FIRST" | "LAST";
};

export default class SortInfo extends QueryElement {
  field: Field;
  direction: string | undefined;
  nullOrder: string | undefined;
  constructor(config: SortInfoConfig, baseObjectName: string) {
    super();
    this.field = new Field(config.field, baseObjectName);
    this.direction = config.direction;
    this.nullOrder = config.nullOrder;
  }
  toSOQL() {
    return [
      this.field.toSOQL(),
      ...(this.direction != null ? [this.direction.toUpperCase()] : []),
      ...(this.nullOrder != null ? ["NULLS", this.nullOrder.toUpperCase()] : [])
    ].join(" ");
  }
}
