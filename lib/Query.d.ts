import QueryElement from "./QueryElement";
import Field, { FieldConfig } from "./Field";
import Condition, { ConditionConfig } from "./Condition";
import SortInfo, { SortInfoConfig } from "./SortInfo";
import Grouping, { GroupingConfig } from "./Grouping";
/**
 *
 */
export declare type QueryConfig = {
    fields: FieldConfig[];
    table: string;
    scope?: string;
    condition?: ConditionConfig;
    sortInfo?: SortInfoConfig[];
    grouping?: GroupingConfig;
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
    grouping: Grouping | undefined;
    limit: number | undefined;
    offset: number | undefined;
    /**
     *
     */
    constructor(config: QueryConfig);
    /**
     *
     */
    toSOQL(): string;
}
