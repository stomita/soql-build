import Condition from "./Condition";
import { CompositeConditionConfig } from "./Condition";
/**
 *
 */
export default class CompositeCondition extends Condition {
    operator: "AND" | "OR";
    conditions: Condition[];
    stripParens: boolean;
    /**
     *
     */
    constructor(config: CompositeConditionConfig, baseObjectName: string, stripParens?: boolean);
    /**
     *
     */
    toSOQL(): string;
}
