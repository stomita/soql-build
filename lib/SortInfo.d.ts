import { DeepReadonly } from "utility-types";
import QueryElement from "./QueryElement";
import Field, { FieldReferenceConfig } from "./Field";
/**
 *
 */
export declare type SortInfoConfig = {
    field: FieldReferenceConfig;
    direction?: "ASC" | "DESC";
    nullOrder?: "FIRST" | "LAST";
};
/**
 *
 */
export default class SortInfo extends QueryElement {
    field: Field;
    direction: string | undefined;
    nullOrder: string | undefined;
    /**
     *
     */
    constructor(config: DeepReadonly<SortInfoConfig>, baseObjectName: string);
    /**
     *
     */
    toSOQL(): string;
}
