import { DeepReadonly } from "utility-types";
import Query from "./Query";
import { QueryConfig } from "./Query";
import { FieldConfig } from "./Field";
import { ConditionConfig } from "./Condition";
export declare function buildSOQL(query: DeepReadonly<QueryConfig>): string;
export { Query, QueryConfig, FieldConfig, ConditionConfig };
