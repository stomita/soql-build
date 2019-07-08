import Field, { FunctionFieldConfig } from "./Field";
export default class FunctionField extends Field {
    function: string;
    arguments: Field[];
    alias: string | undefined;
    constructor(config: FunctionFieldConfig, baseObjectName: string);
    toSOQL(): string;
}
