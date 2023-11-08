import type { DeepReadonly } from "ts-essentials";
import Query from "./Query";
import type { QueryConfig } from "./Query";
import type { FieldConfig } from "./Field";
import type { ConditionConfig } from "./Condition";
export declare function buildSOQL(query: DeepReadonly<QueryConfig>): string;
export { Query, type QueryConfig, type FieldConfig, type ConditionConfig };
