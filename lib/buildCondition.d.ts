import type { DeepReadonly } from "ts-essentials";
import Condition from "./Condition";
import type { ConditionConfig } from "./Condition";
/**
 *
 */
export default function buildCondition(config: DeepReadonly<ConditionConfig>, baseObjectName: string, stripParens: boolean): Condition;
