import type { DeepReadonly } from "ts-essentials";
import QueryElement from "./QueryElement";
import Field, { type FieldConfig } from "./Field";
import Condition, { type ConditionConfig } from "./Condition";
import SortInfo, { type SortInfoConfig } from "./SortInfo";
import Grouping, { type GroupingConfig } from "./Grouping";
/**
 *
 */
export type QueryConfig = {
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
    constructor(config: DeepReadonly<QueryConfig>);
    /**
     *
     */
    toSOQL(): string;
}
