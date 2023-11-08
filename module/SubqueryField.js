function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import Field from "./Field";
import SortInfo from "./SortInfo";
import buildField from "./buildField";
import buildCondition from "./buildCondition";

/**
 *
 */
var SubqueryField = /*#__PURE__*/function (_Field) {
  _inherits(SubqueryField, _Field);
  var _super = _createSuper(SubqueryField);
  /**
   *
   */
  function SubqueryField(config, baseObjectName) {
    var _this;
    _classCallCheck(this, SubqueryField);
    _this = _super.call(this);
    _this.fields = config.fields.map(function (field) {
      return buildField(field, baseObjectName);
    });
    _this.relationship = config.relationship;
    if (config.condition) {
      _this.condition = buildCondition(config.condition, baseObjectName, true);
    }
    if (config.sortInfo) {
      _this.sortInfo = config.sortInfo.map(function (sortInfo) {
        return new SortInfo(sortInfo, baseObjectName);
      });
    }
    _this.limit = config.limit;
    _this.offset = config.offset;
    return _this;
  }

  /**
   *
   */
  _createClass(SubqueryField, [{
    key: "toSOQL",
    value: function toSOQL() {
      return "(" + ["SELECT", this.fields.map(function (field) {
        return field.toSOQL();
      }).join(", "), "FROM", this.relationship].concat(_toConsumableArray(this.condition ? ["WHERE", this.condition.toSOQL()] : []), _toConsumableArray(this.sortInfo && this.sortInfo.length > 0 ? ["ORDER BY", this.sortInfo.map(function (s) {
        return s.toSOQL();
      }).join(", ")] : []), _toConsumableArray(typeof this.limit !== "undefined" ? ["LIMIT", String(this.limit)] : []), _toConsumableArray(typeof this.offset !== "undefined" ? ["OFFSET", String(this.offset)] : [])).join(" ") + ")";
    }
  }]);
  return SubqueryField;
}(Field);
export { SubqueryField as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGaWVsZCIsIlNvcnRJbmZvIiwiYnVpbGRGaWVsZCIsImJ1aWxkQ29uZGl0aW9uIiwiU3VicXVlcnlGaWVsZCIsIl9GaWVsZCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImNvbmZpZyIsImJhc2VPYmplY3ROYW1lIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiZmllbGRzIiwibWFwIiwiZmllbGQiLCJyZWxhdGlvbnNoaXAiLCJjb25kaXRpb24iLCJzb3J0SW5mbyIsImxpbWl0Iiwib2Zmc2V0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJ0b1NPUUwiLCJqb2luIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwibGVuZ3RoIiwicyIsIlN0cmluZyIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvU3VicXVlcnlGaWVsZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ0cy1lc3NlbnRpYWxzXCI7XG5pbXBvcnQgRmllbGQsIHsgdHlwZSBTdWJxdWVyeUZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBDb25kaXRpb24gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5pbXBvcnQgU29ydEluZm8gZnJvbSBcIi4vU29ydEluZm9cIjtcbmltcG9ydCBidWlsZEZpZWxkIGZyb20gXCIuL2J1aWxkRmllbGRcIjtcbmltcG9ydCBidWlsZENvbmRpdGlvbiBmcm9tIFwiLi9idWlsZENvbmRpdGlvblwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnF1ZXJ5RmllbGQgZXh0ZW5kcyBGaWVsZCB7XG4gIGZpZWxkczogRmllbGRbXTtcbiAgcmVsYXRpb25zaGlwOiBzdHJpbmc7XG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uIHwgdW5kZWZpbmVkO1xuICBzb3J0SW5mbzogU29ydEluZm9bXSB8IHVuZGVmaW5lZDtcbiAgbGltaXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgb2Zmc2V0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IERlZXBSZWFkb25seTxTdWJxdWVyeUZpZWxkQ29uZmlnPixcbiAgICBiYXNlT2JqZWN0TmFtZTogc3RyaW5nLFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZmllbGRzID0gY29uZmlnLmZpZWxkcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgYnVpbGRGaWVsZChmaWVsZCwgYmFzZU9iamVjdE5hbWUpLFxuICAgICk7XG4gICAgdGhpcy5yZWxhdGlvbnNoaXAgPSBjb25maWcucmVsYXRpb25zaGlwO1xuICAgIGlmIChjb25maWcuY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmNvbmRpdGlvbiA9IGJ1aWxkQ29uZGl0aW9uKGNvbmZpZy5jb25kaXRpb24sIGJhc2VPYmplY3ROYW1lLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5zb3J0SW5mbykge1xuICAgICAgdGhpcy5zb3J0SW5mbyA9IGNvbmZpZy5zb3J0SW5mby5tYXAoXG4gICAgICAgIChzb3J0SW5mbykgPT4gbmV3IFNvcnRJbmZvKHNvcnRJbmZvLCBiYXNlT2JqZWN0TmFtZSksXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmxpbWl0ID0gY29uZmlnLmxpbWl0O1xuICAgIHRoaXMub2Zmc2V0ID0gY29uZmlnLm9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiAoXG4gICAgICBcIihcIiArXG4gICAgICBbXG4gICAgICAgIFwiU0VMRUNUXCIsXG4gICAgICAgIHRoaXMuZmllbGRzLm1hcCgoZmllbGQpID0+IGZpZWxkLnRvU09RTCgpKS5qb2luKFwiLCBcIiksXG4gICAgICAgIFwiRlJPTVwiLFxuICAgICAgICB0aGlzLnJlbGF0aW9uc2hpcCxcbiAgICAgICAgLi4uKHRoaXMuY29uZGl0aW9uID8gW1wiV0hFUkVcIiwgdGhpcy5jb25kaXRpb24udG9TT1FMKCldIDogW10pLFxuICAgICAgICAuLi4odGhpcy5zb3J0SW5mbyAmJiB0aGlzLnNvcnRJbmZvLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IFtcIk9SREVSIEJZXCIsIHRoaXMuc29ydEluZm8ubWFwKChzKSA9PiBzLnRvU09RTCgpKS5qb2luKFwiLCBcIildXG4gICAgICAgICAgOiBbXSksXG4gICAgICAgIC4uLih0eXBlb2YgdGhpcy5saW1pdCAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgID8gW1wiTElNSVRcIiwgU3RyaW5nKHRoaXMubGltaXQpXVxuICAgICAgICAgIDogW10pLFxuICAgICAgICAuLi4odHlwZW9mIHRoaXMub2Zmc2V0ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgPyBbXCJPRkZTRVRcIiwgU3RyaW5nKHRoaXMub2Zmc2V0KV1cbiAgICAgICAgICA6IFtdKSxcbiAgICAgIF0uam9pbihcIiBcIikgK1xuICAgICAgXCIpXCJcbiAgICApO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxLQUFLLE1BQW9DLFNBQVM7QUFFekQsT0FBT0MsUUFBUSxNQUFNLFlBQVk7QUFDakMsT0FBT0MsVUFBVSxNQUFNLGNBQWM7QUFDckMsT0FBT0MsY0FBYyxNQUFNLGtCQUFrQjs7QUFFN0M7QUFDQTtBQUNBO0FBRkEsSUFHcUJDLGFBQWEsMEJBQUFDLE1BQUE7RUFBQUMsU0FBQSxDQUFBRixhQUFBLEVBQUFDLE1BQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosYUFBQTtFQVFoQztBQUNGO0FBQ0E7RUFDRSxTQUFBQSxjQUNFSyxNQUF5QyxFQUN6Q0MsY0FBc0IsRUFDdEI7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQVIsYUFBQTtJQUNBTyxLQUFBLEdBQUFKLE1BQUEsQ0FBQU0sSUFBQTtJQUNBRixLQUFB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