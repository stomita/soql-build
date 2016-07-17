/* @flow */
import Query from './Query';
import buildCondition from './buildCondition';
import type { QueryConfig } from './Query';
import type { ConditionConfig } from './Condition';

export function buildSOQL(query: QueryConfig) {
  return new Query(query).toSOQL();
}
