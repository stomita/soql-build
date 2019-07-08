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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idWlsZEZpZWxkLnRzIl0sIm5hbWVzIjpbImJ1aWxkRmllbGQiLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsIkZpZWxkUmVmZXJlbmNlIiwidHlwZSIsIkZ1bmN0aW9uRmllbGQiLCJTdWJxdWVyeUZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7O0FBR2UsU0FBU0EsVUFBVCxDQUNiQyxNQURhLEVBRWJDLGNBRmEsRUFHTjtBQUNQLE1BQUksT0FBT0QsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixXQUFPLElBQUlFLDBCQUFKLENBQW1CRixNQUFuQixFQUEyQkMsY0FBM0IsQ0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJRCxNQUFNLENBQUNHLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDckMsV0FBTyxJQUFJQyx5QkFBSixDQUFrQkosTUFBbEIsRUFBMEJDLGNBQTFCLENBQVA7QUFDRCxHQUZNLE1BRUE7QUFDTCxXQUFPLElBQUlJLHlCQUFKLENBQWtCTCxNQUFsQixFQUEwQkMsY0FBMUIsQ0FBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmllbGQsIHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IEZpZWxkUmVmZXJlbmNlIGZyb20gXCIuL0ZpZWxkUmVmZXJlbmNlXCI7XG5pbXBvcnQgRnVuY3Rpb25GaWVsZCBmcm9tIFwiLi9GdW5jdGlvbkZpZWxkXCI7XG5pbXBvcnQgU3VicXVlcnlGaWVsZCBmcm9tIFwiLi9TdWJxdWVyeUZpZWxkXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGaWVsZChcbiAgY29uZmlnOiBGaWVsZENvbmZpZyxcbiAgYmFzZU9iamVjdE5hbWU6IHN0cmluZ1xuKTogRmllbGQge1xuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBuZXcgRmllbGRSZWZlcmVuY2UoY29uZmlnLCBiYXNlT2JqZWN0TmFtZSk7XG4gIH0gZWxzZSBpZiAoY29uZmlnLnR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb25GaWVsZChjb25maWcsIGJhc2VPYmplY3ROYW1lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IFN1YnF1ZXJ5RmllbGQoY29uZmlnLCBiYXNlT2JqZWN0TmFtZSk7XG4gIH1cbn1cbiJdfQ==