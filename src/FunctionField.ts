import { DeepReadonly } from "utility-types";
import Field, { FunctionFieldConfig } from "./Field";
import buildField from "./buildField";

export default class FunctionField extends Field {
  function: string;
  arguments: Field[];
  alias: string | undefined;

  constructor(
    config: DeepReadonly<FunctionFieldConfig>,
    baseObjectName: string,
  ) {
    super();
    this.function = config.function;
    this.arguments = (config.arguments || []).map((arg) =>
      buildField(arg, baseObjectName),
    );
    this.alias = config.alias;
  }

  toSOQL() {
    return (
      this.function +
      "(" +
      this.arguments.map((arg) => arg.toSOQL()).join(", ") +
      ")"
    );
  }
}
