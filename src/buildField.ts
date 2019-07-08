import Field, { FieldConfig } from "./Field";
import FieldReference from "./FieldReference";
import FunctionField from "./FunctionField";
import SubqueryField from "./SubqueryField";

/**
 *
 */
export default function buildField(
  config: FieldConfig,
  baseObjectName: string
): Field {
  if (typeof config === "string") {
    return new FieldReference(config, baseObjectName);
  } else if (config.type === "function") {
    return new FunctionField(config, baseObjectName);
  } else {
    return new SubqueryField(config, baseObjectName);
  }
}
