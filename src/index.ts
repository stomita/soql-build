import type { DeepReadonly } from "utility-types";
import Query from "./Query";
import type { QueryConfig } from "./Query";
import type { FieldConfig } from "./Field";
import type { ConditionConfig } from "./Condition";

export function buildSOQL(query: DeepReadonly<QueryConfig>) {
  return new Query(query).toSOQL();
}

export { Query, type QueryConfig, type FieldConfig, type ConditionConfig };
