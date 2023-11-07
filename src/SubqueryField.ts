import type { DeepReadonly } from "utility-types";
import Field, { type SubqueryFieldConfig } from "./Field";
import Condition from "./Condition";
import SortInfo from "./SortInfo";
import buildField from "./buildField";
import buildCondition from "./buildCondition";

/**
 *
 */
export default class SubqueryField extends Field {
  fields: Field[];
  relationship: string;
  condition: Condition | undefined;
  sortInfo: SortInfo[] | undefined;
  limit: number | undefined;
  offset: number | undefined;

  /**
   *
   */
  constructor(
    config: DeepReadonly<SubqueryFieldConfig>,
    baseObjectName: string,
  ) {
    super();
    this.fields = config.fields.map((field) =>
      buildField(field, baseObjectName),
    );
    this.relationship = config.relationship;
    if (config.condition) {
      this.condition = buildCondition(config.condition, baseObjectName, true);
    }
    if (config.sortInfo) {
      this.sortInfo = config.sortInfo.map(
        (sortInfo) => new SortInfo(sortInfo, baseObjectName),
      );
    }
    this.limit = config.limit;
    this.offset = config.offset;
  }

  /**
   *
   */
  toSOQL() {
    return (
      "(" +
      [
        "SELECT",
        this.fields.map((field) => field.toSOQL()).join(", "),
        "FROM",
        this.relationship,
        ...(this.condition ? ["WHERE", this.condition.toSOQL()] : []),
        ...(this.sortInfo && this.sortInfo.length > 0
          ? ["ORDER BY", this.sortInfo.map((s) => s.toSOQL()).join(", ")]
          : []),
        ...(typeof this.limit !== "undefined"
          ? ["LIMIT", String(this.limit)]
          : []),
        ...(typeof this.offset !== "undefined"
          ? ["OFFSET", String(this.offset)]
          : []),
      ].join(" ") +
      ")"
    );
  }
}
