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
import QueryElement from "./QueryElement";
import SortInfo from "./SortInfo";
import Grouping from "./Grouping";
import buildCondition from "./buildCondition";
import buildField from "./buildField";

/**
 *
 */
/**
 *
 */
var Query = /*#__PURE__*/function (_QueryElement) {
  _inherits(Query, _QueryElement);
  var _super = _createSuper(Query);
  /**
   *
   */
  function Query(config) {
    var _this;
    _classCallCheck(this, Query);
    _this = _super.call(this);
    _this.table = config.table;
    _this.scope = config.scope;
    _this.fields = (config.fields || []).map(function (field) {
      return buildField(field, _this.table);
    });
    if (config.condition) {
      _this.condition = buildCondition(config.condition, _this.table, true);
    }
    if (config.sortInfo) {
      _this.sortInfo = config.sortInfo.map(function (s) {
        return new SortInfo(s, _this.table);
      });
    }
    if (config.grouping) {
      _this.grouping = new Grouping(config.grouping, _this.table);
    }
    _this.limit = config.limit;
    _this.offset = config.offset;
    return _this;
  }

  /**
   *
   */
  _createClass(Query, [{
    key: "toSOQL",
    value: function toSOQL() {
      return ["SELECT", this.fields.map(function (field) {
        return field.toSOQL();
      }).join(", "), "FROM", this.table].concat(_toConsumableArray(this.scope ? ["USING SCOPE", this.scope] : []), _toConsumableArray(this.condition ? ["WHERE", this.condition.toSOQL()] : []), _toConsumableArray(this.sortInfo && this.sortInfo.length > 0 ? ["ORDER BY", this.sortInfo.map(function (s) {
        return s.toSOQL();
      }).join(", ")] : []), _toConsumableArray(this.grouping ? [this.grouping.toSOQL()] : []), _toConsumableArray(typeof this.limit !== "undefined" ? ["LIMIT", String(this.limit)] : []), _toConsumableArray(typeof this.offset !== "undefined" ? ["OFFSET", String(this.offset)] : [])).join(" ");
    }
  }]);
  return Query;
}(QueryElement);
export { Query as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJTb3J0SW5mbyIsIkdyb3VwaW5nIiwiYnVpbGRDb25kaXRpb24iLCJidWlsZEZpZWxkIiwiUXVlcnkiLCJfUXVlcnlFbGVtZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiY29uZmlnIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwidGFibGUiLCJzY29wZSIsImZpZWxkcyIsIm1hcCIsImZpZWxkIiwiY29uZGl0aW9uIiwic29ydEluZm8iLCJzIiwiZ3JvdXBpbmciLCJsaW1pdCIsIm9mZnNldCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwidG9TT1FMIiwiam9pbiIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImxlbmd0aCIsIlN0cmluZyIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvUXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBEZWVwUmVhZG9ubHkgfSBmcm9tIFwidHMtZXNzZW50aWFsc1wiO1xuaW1wb3J0IFF1ZXJ5RWxlbWVudCBmcm9tIFwiLi9RdWVyeUVsZW1lbnRcIjtcbmltcG9ydCBGaWVsZCwgeyB0eXBlIEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBDb25kaXRpb24sIHsgdHlwZSBDb25kaXRpb25Db25maWcgfSBmcm9tIFwiLi9Db25kaXRpb25cIjtcbmltcG9ydCBTb3J0SW5mbywgeyB0eXBlIFNvcnRJbmZvQ29uZmlnIH0gZnJvbSBcIi4vU29ydEluZm9cIjtcbmltcG9ydCBHcm91cGluZywgeyB0eXBlIEdyb3VwaW5nQ29uZmlnIH0gZnJvbSBcIi4vR3JvdXBpbmdcIjtcbmltcG9ydCBidWlsZENvbmRpdGlvbiBmcm9tIFwiLi9idWlsZENvbmRpdGlvblwiO1xuaW1wb3J0IGJ1aWxkRmllbGQgZnJvbSBcIi4vYnVpbGRGaWVsZFwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIFF1ZXJ5Q29uZmlnID0ge1xuICBmaWVsZHM6IEZpZWxkQ29uZmlnW107XG4gIHRhYmxlOiBzdHJpbmc7XG4gIHNjb3BlPzogc3RyaW5nO1xuICBjb25kaXRpb24/OiBDb25kaXRpb25Db25maWc7XG4gIHNvcnRJbmZvPzogU29ydEluZm9Db25maWdbXTtcbiAgZ3JvdXBpbmc/OiBHcm91cGluZ0NvbmZpZztcbiAgbGltaXQ/OiBudW1iZXI7XG4gIG9mZnNldD86IG51bWJlcjtcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnkgZXh0ZW5kcyBRdWVyeUVsZW1lbnQge1xuICBmaWVsZHM6IEZpZWxkW107XG4gIHRhYmxlOiBzdHJpbmc7XG4gIHNjb3BlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uIHwgdW5kZWZpbmVkO1xuICBzb3J0SW5mbzogU29ydEluZm9bXSB8IHVuZGVmaW5lZDtcbiAgZ3JvdXBpbmc6IEdyb3VwaW5nIHwgdW5kZWZpbmVkO1xuICBsaW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBvZmZzZXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogRGVlcFJlYWRvbmx5PFF1ZXJ5Q29uZmlnPikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50YWJsZSA9IGNvbmZpZy50YWJsZTtcbiAgICB0aGlzLnNjb3BlID0gY29uZmlnLnNjb3BlO1xuICAgIHRoaXMuZmllbGRzID0gKGNvbmZpZy5maWVsZHMgfHwgW10pLm1hcCgoZmllbGQpID0+XG4gICAgICBidWlsZEZpZWxkKGZpZWxkLCB0aGlzLnRhYmxlKSxcbiAgICApO1xuICAgIGlmIChjb25maWcuY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmNvbmRpdGlvbiA9IGJ1aWxkQ29uZGl0aW9uKGNvbmZpZy5jb25kaXRpb24sIHRoaXMudGFibGUsIHRydWUpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLnNvcnRJbmZvKSB7XG4gICAgICB0aGlzLnNvcnRJbmZvID0gY29uZmlnLnNvcnRJbmZvLm1hcCgocykgPT4gbmV3IFNvcnRJbmZvKHMsIHRoaXMudGFibGUpKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5ncm91cGluZykge1xuICAgICAgdGhpcy5ncm91cGluZyA9IG5ldyBHcm91cGluZyhjb25maWcuZ3JvdXBpbmcsIHRoaXMudGFibGUpO1xuICAgIH1cbiAgICB0aGlzLmxpbWl0ID0gY29uZmlnLmxpbWl0O1xuICAgIHRoaXMub2Zmc2V0ID0gY29uZmlnLm9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBbXG4gICAgICBcIlNFTEVDVFwiLFxuICAgICAgdGhpcy5maWVsZHMubWFwKChmaWVsZCkgPT4gZmllbGQudG9TT1FMKCkpLmpvaW4oXCIsIFwiKSxcbiAgICAgIFwiRlJPTVwiLFxuICAgICAgdGhpcy50YWJsZSxcbiAgICAgIC4uLih0aGlzLnNjb3BlID8gW1wiVVNJTkcgU0NPUEVcIiwgdGhpcy5zY29wZV0gOiBbXSksXG4gICAgICAuLi4odGhpcy5jb25kaXRpb24gPyBbXCJXSEVSRVwiLCB0aGlzLmNvbmRpdGlvbi50b1NPUUwoKV0gOiBbXSksXG4gICAgICAuLi4odGhpcy5zb3J0SW5mbyAmJiB0aGlzLnNvcnRJbmZvLmxlbmd0aCA+IDBcbiAgICAgICAgPyBbXCJPUkRFUiBCWVwiLCB0aGlzLnNvcnRJbmZvLm1hcCgocykgPT4gcy50b1NPUUwoKSkuam9pbihcIiwgXCIpXVxuICAgICAgICA6IFtdKSxcbiAgICAgIC4uLih0aGlzLmdyb3VwaW5nID8gW3RoaXMuZ3JvdXBpbmcudG9TT1FMKCldIDogW10pLFxuICAgICAgLi4uKHR5cGVvZiB0aGlzLmxpbWl0ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgID8gW1wiTElNSVRcIiwgU3RyaW5nKHRoaXMubGltaXQpXVxuICAgICAgICA6IFtdKSxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5vZmZzZXQgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgPyBbXCJPRkZTRVRcIiwgU3RyaW5nKHRoaXMub2Zmc2V0KV1cbiAgICAgICAgOiBbXSksXG4gICAgXS5qb2luKFwiIFwiKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0EsWUFBWSxNQUFNLGdCQUFnQjtBQUd6QyxPQUFPQyxRQUFRLE1BQStCLFlBQVk7QUFDMUQsT0FBT0MsUUFBUSxNQUErQixZQUFZO0FBQzFELE9BQU9DLGNBQWMsTUFBTSxrQkFBa0I7QUFDN0MsT0FBT0MsVUFBVSxNQUFNLGNBQWM7O0FBRXJDO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUZBLElBR3FCQyxLQUFLLDBCQUFBQyxhQUFBO0VBQUFDLFNBQUEsQ0FBQUYsS0FBQSxFQUFBQyxhQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLEtBQUE7RUFVeEI7QUFDRjtBQUNBO0VBQ0UsU0FBQUEsTUFBWUssTUFBaUMsRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBUCxLQUFBO0lBQzdDTSxLQUFBLEdBQUFILE1BQUEsQ0FBQUssSUFBQTtJQUNBRixLQUFBLENBQUtHLEtBQUssR0FBR0osTUFBTSxDQUFDSSxLQUFLO0lBQ3pCSCxLQUFBLENBQUtJLEtBQUssR0FBR0wsTUFBTSxDQUFDSyxLQUFLO0lBQ3pCSixLQUFBLENBQUtLLE1BQU0sR0FBRyxDQUFDTixNQUFNLENBQUNNLE1BQU0sSUFBSSxFQUFFLEVBQUVDLEdBQUcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FDNUNkLFVBQVUsQ0FBQ2MsS0FBSyxFQUFFUCxLQUFBLENBQUtHLEtBQUssQ0FBQztJQUFBLENBQy9CLENBQUM7SUFDRCxJQUFJSixNQUFNLENBQUNTLFNBQVMsRUFBRTtNQUNwQlIsS0FBQSxDQUFLUSxTQUFTLEdBQUdoQixjQUFjLENBQUNPLE1BQU0sQ0FBQ1MsU0FBUyxFQUFFUixLQUFBLENB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