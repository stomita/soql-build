"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSOQL = buildSOQL;
Object.defineProperty(exports, "Query", {
  enumerable: true,
  get: function get() {
    return _Query["default"];
  }
});
Object.defineProperty(exports, "QueryConfig", {
  enumerable: true,
  get: function get() {
    return _Query.QueryConfig;
  }
});
Object.defineProperty(exports, "ConditionConfig", {
  enumerable: true,
  get: function get() {
    return _Condition.ConditionConfig;
  }
});

var _Query = _interopRequireWildcard(require("./Query"));

var _Condition = require("./Condition");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function buildSOQL(query) {
  return new _Query["default"](query).toSOQL();
}