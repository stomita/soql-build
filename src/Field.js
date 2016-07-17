/* @flow */
import QueryElement from './QueryElement';

export default class Field extends QueryElement {
  path: Array<string>;
  table: string;

  constructor(field: string, table: string) {
    super();
    this.path = field.split('.');
    this.table = table;
  }

  toSOQL(): string {
    return this.path.join('.');
  }
}
