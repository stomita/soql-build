import { DeepReadonly } from "utility-types";
import Field, { FunctionFieldConfig } from "./Field";
export default class FunctionField extends Field {
    function: string;
    arguments: Field[];
    alias: string | undefined;
    constructor(config: DeepReadonly<FunctionFieldConfig>, baseObjectName: string);
    toSOQL(): string;
}
