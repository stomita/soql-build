import Field from "./Field";
export default class FieldReference extends Field {
    path: string[];
    constructor(field: string, _baseObjectName: string);
    toSOQL(): string;
}
