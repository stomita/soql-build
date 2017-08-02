/* @flow */
import QueryElement from './QueryElement';
import Field from './Field';
import Condition from './Condition';
import SortInfo from './SortInfo';

import buildCondition from './buildCondition';

import type { ConditionConfig } from './Condition';
import type { SortInfoConfig } from './SortInfo';

export type QueryConfig = {
  fields: Array<string>,
  table: string,
  condition?: ConditionConfig,
  sortInfo?: Array<SortInfoConfig>,
  limit?: number,
  offset?: number,
};

export default class Query extends QueryElement {
  fields: Array<Field>;
  table: string;
  condition: ?Condition;
  sortInfo: ?Array<SortInfo>;
  limit: ?number;
  offset: ?number;

  constructor(config: QueryConfig) {
    super();
    this.table = config.table;
    this.fields = (config.fields || []).map((field) => new Field(field, this.table));
    if (config.condition) {
      this.condition = buildCondition(config.condition, this.table, true);
    }
    if (config.sortInfo) {
      this.sortInfo = config.sortInfo.map((s) => new SortInfo(s, this.table));
    }
    this.limit = config.limit;
    this.offset = config.offset;
  }

  toSOQL(): string {
    return [
      'SELECT',
      this.fields.map((field) => field.toSOQL()).join(', '),
      'FROM',
      this.table,
      ...(this.condition ? [ 'WHERE', this.condition.toSOQL() ] : []),
      ...(
        this.sortInfo && this.sortInfo.length > 0 ?
        [ 'ORDER BY', this.sortInfo.map((s) => s.toSOQL()).join(', ') ] :
        []
      ),
      ...(typeof this.limit !== 'undefined' ? [ 'LIMIT', String(this.limit) ] : []),
      ...(typeof this.offset !== 'undefined' ? [ 'OFFSET', String(this.offset) ] : []),
    ].join(' ');
  }

}
