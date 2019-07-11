import { DeepReadonly } from "utility-types";
import Condition from "./Condition";
import { ConditionConfig } from "./Condition";
/**
 *
 */
export default function buildCondition(config: DeepReadonly<ConditionConfig>, baseObjectName: string, stripParens: boolean): Condition;
