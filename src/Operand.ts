import type { DeepReadonly } from "utility-types";
import QueryElement from "./QueryElement";

/**
 *
 */
export default class Operand extends QueryElement {}

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
type OperandPrimitive =
  | null
  | string
  | number
  | boolean
  | DateOperandConfig
  | DatetimeOperandConfig;

/**
 *
 */
export type OperandConfig = OperandPrimitive | OperandPrimitive[];

function isArrayOperand(
  o: DeepReadonly<OperandConfig>,
): o is DeepReadonly<OperandPrimitive[]> {
  return Array.isArray(o);
}

/**
 *
 */
export function createOperand(v: DeepReadonly<OperandConfig>): Operand {
  if (v == null) {
    return new NullOperand();
  } else if (typeof v === "string") {
    return new StringOperand(v);
  } else if (typeof v === "number") {
    return new NumberOperand(v);
  } else if (typeof v === "boolean") {
    return new BooleanOperand(v);
  } else if (isArrayOperand(v)) {
    return new ArrayOperand(v);
  } else {
    return new DateOperand(v.value);
  }
}

/**
 *
 */
export class NullOperand extends Operand {
  /**
   *
   */
  toSOQL() {
    return "null";
  }
}

/**
 *
 */
export class StringOperand extends Operand {
  value: string;

  /**
   *
   */
  constructor(value: string) {
    super();
    this.value = value;
  }

  /**
   *
   */
  toSOQL() {
    return "'" + this.value.replace(/'/g, "\\'") + "'";
  }
}

/**
 *
 */
export class NumberOperand extends Operand {
  value: number;

  /**
   *
   */
  constructor(value: number) {
    super();
    this.value = value;
  }

  /**
   *
   */
  toSOQL() {
    return String(this.value);
  }
}

/**
 *
 */
export class BooleanOperand extends Operand {
  value: boolean;

  /**
   *
   */
  constructor(value: boolean) {
    super();
    this.value = value;
  }

  /**
   *
   */
  toSOQL() {
    return String(this.value);
  }
}

/**
 *
 */
export class ArrayOperand extends Operand {
  values: Operand[];

  /**
   *
   */
  constructor(values: DeepReadonly<OperandPrimitive[]>) {
    super();
    this.values = values.map((v) => createOperand(v));
  }

  /**
   *
   */
  toSOQL() {
    return "(" + this.values.map((o) => o.toSOQL()).join(", ") + ")";
  }
}

/**
 *
 */
const DATE_OPERAND_REGEXP =
  /^(\d{4}-\d{2}-\d{2}(T\d{2}:?\d{2}:?\d{2}(\.\d+)?([+-]\d{2}:?\d{2}|Z))?|YESTERDAY|TODAY|TOMORROW|(NEXT|THIS|LAST)_(WEEK|MONTH|(FISCAL_)?(QUARTER|YEAR))|(NEXT|LAST)_90_DAYS|(NEXT|LAST)_N_(DAYS|WEEKS|MONTHS|(FISCAL_)?(QUARTERS|YEARS)):\d+)$/;

/**
 *
 */
export class DateOperand extends Operand {
  value: string;

  /**
   *
   */
  constructor(value: string) {
    super();
    this.value = value;
    if (!DATE_OPERAND_REGEXP.test(this.value)) {
      console.warn(
        "The given value does not match to the pattern for date literal",
        this.value,
      );
    }
  }

  /**
   *
   */
  toSOQL() {
    return this.value;
  }
}
