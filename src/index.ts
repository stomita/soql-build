import Query from "./Query";
import { QueryConfig } from "./Query";
import { ConditionConfig } from "./Condition";

export function buildSOQL(query: QueryConfig) {
  return new Query(query).toSOQL();
}

export { QueryConfig, ConditionConfig };

export { Query };
