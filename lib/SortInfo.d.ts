import QueryElement from "./QueryElement";
import Field from "./Field";
export declare type SortInfoConfig = {
    field: string;
    direction?: "ASC" | "DESC";
    nullOrder?: "FIRST" | "LAST";
};
export default class SortInfo extends QueryElement {
    field: Field;
    direction: string | undefined;
    nullOrder: string | undefined;
    constructor(config: SortInfoConfig, baseObjectName: string);
    toSOQL(): string;
}