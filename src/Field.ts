import QueryElement from "./QueryElement";
import type { ConditionConfig } from "./Condition";
import type { SortInfoConfig } from "./SortInfo";

export type FieldPathConfig = string;

export type FunctionFieldConfig = {
  type: "function";
  function: string;
  alias?: string;
  arguments?: FieldConfig[];
};

export type SubqueryFieldConfig = {
  type: "subquery";
  fields: FieldReferenceConfig[];
  relationship: string;
  condition?: ConditionConfig;
  sortInfo?: SortInfoConfig[];
  limit?: number;
  offset?: number;
};

export type FieldReferenceConfig = FieldPathConfig | FunctionFieldConfig;

export type FieldConfig = FieldReferenceConfig | SubqueryFieldConfig;

export default class Field extends QueryElement {}
