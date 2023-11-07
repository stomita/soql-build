import { DeepReadonly } from "utility-types";
import Condition from "./Condition";
import SingleCondition from "./SingleCondition";
import NegateCondition from "./NegateCondition";
import CompositeCondition from "./CompositeCondition";
import { ConditionConfig, SingleConditionConfig } from "./Condition";

/**
 *
 */
export default function buildCondition(
  config: DeepReadonly<ConditionConfig>,
  baseObjectName: string,
  stripParens: boolean,
): Condition {
  if (config.operator === "NOT") {
    return new NegateCondition(config, baseObjectName, stripParens);
  } else if (config.operator === "AND" || config.operator === "OR") {
    return new CompositeCondition(config, baseObjectName, stripParens);
  } else {
    // TypeScript cannot detect it could be narrowed to SingleConditionConfig
    return new SingleCondition(config as SingleConditionConfig, baseObjectName);
  }
}
