import type { DeepReadonly } from "ts-essentials";
import Field, { type FunctionFieldConfig } from "./Field";
export default class FunctionField extends Field {
    function: string;
    arguments: Field[];
    alias: string | undefined;
    constructor(config: DeepReadonly<FunctionFieldConfig>, baseObjectName: string);
    toSOQL(): string;
}
