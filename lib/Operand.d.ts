import type { DeepReadonly } from "ts-essentials";
import QueryElement from "./QueryElement";
/**
 *
 */
export default class Operand extends QueryElement {
}
/**
 *
 */
export type DateOperandConfig = {
    type: "date";
    value: string;
};
/**
 *
 */
export type DatetimeOperandConfig = {
    type: "datetime";
    value: string;
};
/**
 *
 */
type OperandPrimitive = null | string | number | boolean | DateOperandConfig | DatetimeOperandConfig;
/**
 *
 */
export type OperandConfig = OperandPrimitive | OperandPrimitive[];
/**
 *
 */
export declare function createOperand(v: DeepReadonly<OperandConfig>): Operand;
/**
 *
 */
export declare class NullOperand extends Operand {
    /**
     *
     */
    toSOQL(): string;
}
/**
 *
 */
export declare class StringOperand extends Operand {
    value: string;
    /**
     *
     */
    constructor(value: string);
    /**
     *
     */
    toSOQL(): string;
}
/**
 *
 */
export declare class NumberOperand extends Operand {
    value: number;
    /**
     *
     */
    constructor(value: number);
    /**
     *
     */
    toSOQL(): string;
}
/**
 *
 */
export declare class BooleanOperand extends Operand {
    value: boolean;
    /**
     *
     */
    constructor(value: boolean);
    /**
     *
     */
    toSOQL(): string;
}
/**
 *
 */
export declare class ArrayOperand extends Operand {
    values: Operand[];
    /**
     *
     */
    constructor(values: DeepReadonly<OperandPrimitive[]>);
    /**
     *
     */
    toSOQL(): string;
}
/**
 *
 */
export declare class DateOperand extends Operand {
    value: string;
    /**
     *
     */
    constructor(value: string);
    /**
     *
     */
    toSOQL(): string;
}
export {};
