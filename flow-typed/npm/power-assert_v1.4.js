// @flow

declare module 'power-assert' {
  declare var exports : {
    (test: boolean): void;
    ok(test: boolean): void;
    deepEquals(a: any, b: any): void;
  }
}
