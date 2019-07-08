import QueryElement from "./QueryElement";
export default class Field extends QueryElement {
    path: string[];
    table: string;
    constructor(field: string, table: string);
    toSOQL(): string;
}
