import QueryElement from "./QueryElement";
import Field from "./Field";
import Condition, { ConditionConfig } from "./Condition";
import SortInfo, { SortInfoConfig } from "./SortInfo";
export declare type QueryConfig = {
    fields: string[];
    table: string;
    scope?: string;
    condition?: ConditionConfig;
    sortInfo?: SortInfoConfig[];
    limit?: number;
    offset?: number;
};
export default class Query extends QueryElement {
    fields: Field[];
    table: string;
    scope: string | undefined;
    condition: Condition | undefined;
    sortInfo: SortInfo[] | undefined;
    limit: number | undefined;
    offset: number | undefined;
    constructor(config: QueryConfig);
    toSOQL(): string;
}
