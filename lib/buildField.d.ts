import type { DeepReadonly } from "ts-essentials";
import Field, { type FieldConfig } from "./Field";
/**
 *
 */
export default function buildField(config: DeepReadonly<FieldConfig>, baseObjectName: string): Field;
