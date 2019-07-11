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
Object.defineProperty(exports, "FieldConfig", {
  enumerable: true,
  get: function get() {
    return _Field.FieldConfig;
  }
});
Object.defineProperty(exports, "ConditionConfig", {
  enumerable: true,
  get: function get() {
    return _Condition.ConditionConfig;
  }
});

var _Query = _interopRequireWildcard(require("./Query"));

var _Field = require("./Field");

var _Condition = require("./Condition");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function buildSOQL(query) {
  return new _Query["default"](query).toSOQL();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJidWlsZFNPUUwiLCJxdWVyeSIsIlF1ZXJ5IiwidG9TT1FMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFTyxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUFxRDtBQUMxRCxTQUFPLElBQUlDLGlCQUFKLENBQVVELEtBQVYsRUFBaUJFLE1BQWpCLEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ1dGlsaXR5LXR5cGVzXCI7XG5pbXBvcnQgUXVlcnkgZnJvbSBcIi4vUXVlcnlcIjtcbmltcG9ydCB7IFF1ZXJ5Q29uZmlnIH0gZnJvbSBcIi4vUXVlcnlcIjtcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCB7IENvbmRpdGlvbkNvbmZpZyB9IGZyb20gXCIuL0NvbmRpdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTT1FMKHF1ZXJ5OiBEZWVwUmVhZG9ubHk8UXVlcnlDb25maWc+KSB7XG4gIHJldHVybiBuZXcgUXVlcnkocXVlcnkpLnRvU09RTCgpO1xufVxuXG5leHBvcnQgeyBRdWVyeSwgUXVlcnlDb25maWcsIEZpZWxkQ29uZmlnLCBDb25kaXRpb25Db25maWcgfTtcbiJdfQ==