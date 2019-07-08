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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJidWlsZFNPUUwiLCJxdWVyeSIsIlF1ZXJ5IiwidG9TT1FMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFFTyxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUF1QztBQUM1QyxTQUFPLElBQUlDLGlCQUFKLENBQVVELEtBQVYsRUFBaUJFLE1BQWpCLEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBRdWVyeSBmcm9tIFwiLi9RdWVyeVwiO1xuaW1wb3J0IHsgUXVlcnlDb25maWcgfSBmcm9tIFwiLi9RdWVyeVwiO1xuaW1wb3J0IHsgQ29uZGl0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNPUUwocXVlcnk6IFF1ZXJ5Q29uZmlnKSB7XG4gIHJldHVybiBuZXcgUXVlcnkocXVlcnkpLnRvU09RTCgpO1xufVxuXG5leHBvcnQgeyBRdWVyeUNvbmZpZywgQ29uZGl0aW9uQ29uZmlnIH07XG5cbmV4cG9ydCB7IFF1ZXJ5IH07XG4iXX0=