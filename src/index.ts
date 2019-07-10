import { DeepReadonly } from "utility-types";
import Query from "./Query";
import { QueryConfig } from "./Query";
import { FieldConfig } from "./Field";
import { ConditionConfig } from "./Condition";

export function buildSOQL(query: DeepReadonly<QueryConfig>) {
  return new Query(query).toSOQL();
}

export { Query, QueryConfig, FieldConfig, ConditionConfig };
