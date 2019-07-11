import { DeepReadonly } from "utility-types";
import Field, { SubqueryFieldConfig } from "./Field";
import Condition from "./Condition";
import SortInfo from "./SortInfo";
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
    constructor(config: DeepReadonly<SubqueryFieldConfig>, baseObjectName: string);
    /**
     *
     */
    toSOQL(): string;
}
