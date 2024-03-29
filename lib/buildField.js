"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = buildField;
var _FieldPath = _interopRequireDefault(require("./FieldPath"));
var _FunctionField = _interopRequireDefault(require("./FunctionField"));
var _SubqueryField = _interopRequireDefault(require("./SubqueryField"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 *
 */
function buildField(config, baseObjectName) {
  if (typeof config === "string") {
    return new _FieldPath["default"](config, baseObjectName);
  } else if (config.type === "function") {
    return new _FunctionField["default"](config, baseObjectName);
  } else {
    return new _SubqueryField["default"](config, baseObjectName);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfRmllbGRQYXRoIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfRnVuY3Rpb25GaWVsZCIsIl9TdWJxdWVyeUZpZWxkIiwib2JqIiwiX19lc01vZHVsZSIsImJ1aWxkRmllbGQiLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsIkZpZWxkUGF0aCIsInR5cGUiLCJGdW5jdGlvbkZpZWxkIiwiU3VicXVlcnlGaWVsZCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9idWlsZEZpZWxkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRGVlcFJlYWRvbmx5IH0gZnJvbSBcInRzLWVzc2VudGlhbHNcIjtcbmltcG9ydCBGaWVsZCwgeyB0eXBlIEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBGaWVsZFBhdGggZnJvbSBcIi4vRmllbGRQYXRoXCI7XG5pbXBvcnQgRnVuY3Rpb25GaWVsZCBmcm9tIFwiLi9GdW5jdGlvbkZpZWxkXCI7XG5pbXBvcnQgU3VicXVlcnlGaWVsZCBmcm9tIFwiLi9TdWJxdWVyeUZpZWxkXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGaWVsZChcbiAgY29uZmlnOiBEZWVwUmVhZG9ubHk8RmllbGRDb25maWc+LFxuICBiYXNlT2JqZWN0TmFtZTogc3RyaW5nLFxuKTogRmllbGQge1xuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBuZXcgRmllbGRQYXRoKGNvbmZpZywgYmFzZU9iamVjdE5hbWUpO1xuICB9IGVsc2UgaWYgKGNvbmZpZy50eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uRmllbGQoY29uZmlnLCBiYXNlT2JqZWN0TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBTdWJxdWVyeUZpZWxkKGNvbmZpZywgYmFzZU9iamVjdE5hbWUpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQUFBLFVBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGNBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLGNBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUE0QyxTQUFBRCx1QkFBQUksR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBRTVDO0FBQ0E7QUFDQTtBQUNlLFNBQVNFLFVBQVVBLENBQ2hDQyxNQUFpQyxFQUNqQ0MsY0FBc0IsRUFDZjtFQUNQLElBQUksT0FBT0QsTUFBTSxLQUFLLFFBQVEsRUFBRTtJQUM5QixPQUFPLElBQUlFLHFCQUFTLENBQUNGLE1BQU0sRUFBRUMsY0FBYyxDQUFDO0VBQzlDLENBQUMsTUFBTSxJQUFJRCxNQUFNLENBQUNHLElBQUksS0FBSyxVQUFVLEVBQUU7SUFDckMsT0FBTyxJQUFJQyx5QkFBYSxDQUFDSixNQUFNLEVBQUVDLGNBQWMsQ0FBQztFQUNsRCxDQUFDLE1BQU07SUFDTCxPQUFPLElBQUlJLHlCQUFhLENBQUNMLE1BQU0sRUFBRUMsY0FBYyxDQUFDO0VBQ2xEO0FBQ0YifQ==