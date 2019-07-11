import QueryElement from "./QueryElement";
import { ConditionConfig } from "./Condition";
import { SortInfoConfig } from "./SortInfo";
export declare type FieldPathConfig = string;
export declare type FunctionFieldConfig = {
    type: "function";
    function: string;
    alias?: string;
    arguments?: FieldConfig[];
};
export declare type SubqueryFieldConfig = {
    type: "subquery";
    fields: FieldReferenceConfig[];
    relationship: string;
    condition?: ConditionConfig;
    sortInfo?: SortInfoConfig[];
    limit?: number;
    offset?: number;
};
export declare type FieldReferenceConfig = FieldPathConfig | FunctionFieldConfig;
export declare type FieldConfig = FieldReferenceConfig | SubqueryFieldConfig;
export default class Field extends QueryElement {
}
