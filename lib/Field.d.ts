import QueryElement from "./QueryElement";
import { ConditionConfig } from "./Condition";
import { SortInfoConfig } from "./SortInfo";
export declare type FunctionFieldConfig = {
    type: "function";
    function: string;
    alias?: string;
    arguments?: FieldConfig[];
};
export declare type SubqueryFieldConfig = {
    type: "subquery";
    fields: FieldConfig[];
    relationship: string;
    condition?: ConditionConfig;
    sortInfo?: SortInfoConfig[];
    limit?: number;
    offset?: number;
};
export declare type FieldConfig = string | FunctionFieldConfig | SubqueryFieldConfig;
export default class Field extends QueryElement {
}
