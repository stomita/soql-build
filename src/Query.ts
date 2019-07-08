import QueryElement from "./QueryElement";
import Field, { FieldConfig } from "./Field";
import Condition, { ConditionConfig } from "./Condition";
import SortInfo, { SortInfoConfig } from "./SortInfo";
import buildCondition from "./buildCondition";
import buildField from "./buildField";

/**
 *
 */
export type QueryConfig = {
  fields: FieldConfig[];
  table: string;
  scope?: string;
  condition?: ConditionConfig;
  sortInfo?: SortInfoConfig[];
  limit?: number;
  offset?: number;
};

/**
 *
 */
export default class Query extends QueryElement {
  fields: Field[];
  table: string;
  scope: string | undefined;
  condition: Condition | undefined;
  sortInfo: SortInfo[] | undefined;
  limit: number | undefined;
  offset: number | undefined;

  /**
   *
   */
  constructor(config: QueryConfig) {
    super();
    this.table = config.table;
    this.scope = config.scope;
    this.fields = (config.fields || []).map(field =>
      buildField(field, this.table)
    );
    if (config.condition) {
      this.condition = buildCondition(config.condition, this.table, true);
    }
    if (config.sortInfo) {
      this.sortInfo = config.sortInfo.map(s => new SortInfo(s, this.table));
    }
    this.limit = config.limit;
    this.offset = config.offset;
  }

  /**
   *
   */
  toSOQL() {
    return [
      "SELECT",
      this.fields.map(field => field.toSOQL()).join(", "),
      "FROM",
      this.table,
      ...(this.scope ? ["USING SCOPE", this.scope] : []),
      ...(this.condition ? ["WHERE", this.condition.toSOQL()] : []),
      ...(this.sortInfo && this.sortInfo.length > 0
        ? ["ORDER BY", this.sortInfo.map(s => s.toSOQL()).join(", ")]
        : []),
      ...(typeof this.limit !== "undefined"
        ? ["LIMIT", String(this.limit)]
        : []),
      ...(typeof this.offset !== "undefined"
        ? ["OFFSET", String(this.offset)]
        : [])
    ].join(" ");
  }
}
