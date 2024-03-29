import FieldPath from "./FieldPath";
import FunctionField from "./FunctionField";
import SubqueryField from "./SubqueryField";

/**
 *
 */
export default function buildField(config, baseObjectName) {
  if (typeof config === "string") {
    return new FieldPath(config, baseObjectName);
  } else if (config.type === "function") {
    return new FunctionField(config, baseObjectName);
  } else {
    return new SubqueryField(config, baseObjectName);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGaWVsZFBhdGgiLCJGdW5jdGlvbkZpZWxkIiwiU3VicXVlcnlGaWVsZCIsImJ1aWxkRmllbGQiLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsInR5cGUiXSwic291cmNlcyI6WyIuLi9zcmMvYnVpbGRGaWVsZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ0cy1lc3NlbnRpYWxzXCI7XG5pbXBvcnQgRmllbGQsIHsgdHlwZSBGaWVsZENvbmZpZyB9IGZyb20gXCIuL0ZpZWxkXCI7XG5pbXBvcnQgRmllbGRQYXRoIGZyb20gXCIuL0ZpZWxkUGF0aFwiO1xuaW1wb3J0IEZ1bmN0aW9uRmllbGQgZnJvbSBcIi4vRnVuY3Rpb25GaWVsZFwiO1xuaW1wb3J0IFN1YnF1ZXJ5RmllbGQgZnJvbSBcIi4vU3VicXVlcnlGaWVsZFwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRmllbGQoXG4gIGNvbmZpZzogRGVlcFJlYWRvbmx5PEZpZWxkQ29uZmlnPixcbiAgYmFzZU9iamVjdE5hbWU6IHN0cmluZyxcbik6IEZpZWxkIHtcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbmV3IEZpZWxkUGF0aChjb25maWcsIGJhc2VPYmplY3ROYW1lKTtcbiAgfSBlbHNlIGlmIChjb25maWcudHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbkZpZWxkKGNvbmZpZywgYmFzZU9iamVjdE5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgU3VicXVlcnlGaWVsZChjb25maWcsIGJhc2VPYmplY3ROYW1lKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFFQSxPQUFPQSxTQUFTLE1BQU0sYUFBYTtBQUNuQyxPQUFPQyxhQUFhLE1BQU0saUJBQWlCO0FBQzNDLE9BQU9DLGFBQWEsTUFBTSxpQkFBaUI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBU0MsVUFBVUEsQ0FDaENDLE1BQWlDLEVBQ2pDQyxjQUFzQixFQUNmO0VBQ1AsSUFBSSxPQUFPRCxNQUFNLEtBQUssUUFBUSxFQUFFO0lBQzlCLE9BQU8sSUFBSUosU0FBUyxDQUFDSSxNQUFNLEVBQUVDLGNBQWMsQ0FBQztFQUM5QyxDQUFDLE1BQU0sSUFBSUQsTUFBTSxDQUFDRSxJQUFJLEtBQUssVUFBVSxFQUFFO0lBQ3JDLE9BQU8sSUFBSUwsYUFBYSxDQUFDRyxNQUFNLEVBQUVDLGNBQWMsQ0FBQztFQUNsRCxDQUFDLE1BQU07SUFDTCxPQUFPLElBQUlILGFBQWEsQ0FBQ0UsTUFBTSxFQUFFQyxjQUFjLENBQUM7RUFDbEQ7QUFDRiJ9