import { DeepReadonly } from "utility-types";
import Field, { FieldConfig } from "./Field";
import FieldPath from "./FieldPath";
import FunctionField from "./FunctionField";
import SubqueryField from "./SubqueryField";

/**
 *
 */
export default function buildField(
  config: DeepReadonly<FieldConfig>,
  baseObjectName: string
): Field {
  if (typeof config === "string") {
    return new FieldPath(config, baseObjectName);
  } else if (config.type === "function") {
    return new FunctionField(config, baseObjectName);
  } else {
    return new SubqueryField(config, baseObjectName);
  }
}
