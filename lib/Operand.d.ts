import QueryElement from "./QueryElement";
/**
 *
 */
export default class Operand extends QueryElement {
}
/**
 *
 */
export declare type DateOperandConfig = {
    type: "date";
    value: string;
};
/**
 *
 */
export declare type DatetimeOperandConfig = {
    type: "datetime";
    value: string;
};
/**
 *
 */
declare type OperandPrimitive = null | string | number | boolean | DateOperandConfig | DatetimeOperandConfig;
/**
 *
 */
export declare type OperandConfig = OperandPrimitive | OperandPrimitive[];
/**
 *
 */
export declare function createOperand(v: OperandConfig): Operand;
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
    constructor(values: any[]);
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
