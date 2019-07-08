"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = buildCondition;

var _SingleCondition = _interopRequireDefault(require("./SingleCondition"));

var _NegateCondition = _interopRequireDefault(require("./NegateCondition"));

var _CompositeCondition = _interopRequireDefault(require("./CompositeCondition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 *
 */
function buildCondition(config, baseObjectName, stripParens) {
  if (config.operator === "NOT") {
    return new _NegateCondition["default"](config, baseObjectName, stripParens);
  } else if (config.operator === "AND" || config.operator === "OR") {
    return new _CompositeCondition["default"](config, baseObjectName, stripParens);
  } else {
    // TypeScript cannot detect it could be narrowed to SingleConditionConfig
    return new _SingleCondition["default"](config, baseObjectName);
  }
}