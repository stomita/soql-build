"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = buildField;

var _FieldReference = _interopRequireDefault(require("./FieldReference"));

var _FunctionField = _interopRequireDefault(require("./FunctionField"));

var _SubqueryField = _interopRequireDefault(require("./SubqueryField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *
 */
function buildField(config, baseObjectName) {
  if (typeof config === "string") {
    return new _FieldReference["default"](config, baseObjectName);
  } else if (config.type === "function") {
    return new _FunctionField["default"](config, baseObjectName);
  } else {
    return new _SubqueryField["default"](config, baseObjectName);
  }
}