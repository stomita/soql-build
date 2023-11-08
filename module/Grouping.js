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
import buildField from "./buildField";
import buildCondition from "./buildCondition";

/**
 *
 */
/**
 *
 */
var Grouping = /*#__PURE__*/function (_QueryElement) {
  _inherits(Grouping, _QueryElement);
  var _super = _createSuper(Grouping);
  /**
   *
   */
  function Grouping(config, baseObjectName) {
    var _this;
    _classCallCheck(this, Grouping);
    _this = _super.call(this);
    _this.fields = config.fields.map(function (field) {
      return buildField(field, baseObjectName);
    });
    _this.subtotal = config.subtotal;
    if (config.having) {
      _this.having = buildCondition(config.having, baseObjectName, true);
    }
    if (_this.subtotal && !/^(ROLLUP|CUBE)$/i.test(_this.subtotal)) {
      console.warn("The given value does not match to the grouping subtotal type", _this.subtotal);
    }
    return _this;
  }

  /**
   *
   */
  _createClass(Grouping, [{
    key: "toSOQL",
    value: function toSOQL() {
      return ["GROUP BY"].concat(_toConsumableArray(this.subtotal ? [this.subtotal] : []), [(this.subtotal ? "(" : "") + this.fields.map(function (field) {
        return field.toSOQL();
      }).join(", ") + (this.subtotal ? ")" : "")], _toConsumableArray(this.having ? ["HAVING", this.having.toSOQL()] : [])).join(" ");
    }
  }]);
  return Grouping;
}(QueryElement);
export { Grouping as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJidWlsZEZpZWxkIiwiYnVpbGRDb25kaXRpb24iLCJHcm91cGluZyIsIl9RdWVyeUVsZW1lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsImZpZWxkcyIsIm1hcCIsImZpZWxkIiwic3VidG90YWwiLCJoYXZpbmciLCJ0ZXN0IiwiY29uc29sZSIsIndhcm4iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInRvU09RTCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImpvaW4iLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL0dyb3VwaW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRGVlcFJlYWRvbmx5IH0gZnJvbSBcInRzLWVzc2VudGlhbHNcIjtcbmltcG9ydCBRdWVyeUVsZW1lbnQgZnJvbSBcIi4vUXVlcnlFbGVtZW50XCI7XG5pbXBvcnQgRmllbGQsIHsgdHlwZSBGaWVsZENvbmZpZyB9IGZyb20gXCIuL0ZpZWxkXCI7XG5pbXBvcnQgQ29uZGl0aW9uLCB7IHR5cGUgQ29uZGl0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5pbXBvcnQgYnVpbGRGaWVsZCBmcm9tIFwiLi9idWlsZEZpZWxkXCI7XG5pbXBvcnQgYnVpbGRDb25kaXRpb24gZnJvbSBcIi4vYnVpbGRDb25kaXRpb25cIjtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBHcm91cGluZ0NvbmZpZyA9IHtcbiAgZmllbGRzOiBGaWVsZENvbmZpZ1tdO1xuICBzdWJ0b3RhbD86IHN0cmluZztcbiAgaGF2aW5nPzogQ29uZGl0aW9uQ29uZmlnO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cGluZyBleHRlbmRzIFF1ZXJ5RWxlbWVudCB7XG4gIGZpZWxkczogRmllbGRbXTtcbiAgc3VidG90YWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaGF2aW5nOiBDb25kaXRpb24gfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IERlZXBSZWFkb25seTxHcm91cGluZ0NvbmZpZz4sIGJhc2VPYmplY3ROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZmllbGRzID0gY29uZmlnLmZpZWxkcy5tYXAoKGZpZWxkKSA9PlxuICAgICAgYnVpbGRGaWVsZChmaWVsZCwgYmFzZU9iamVjdE5hbWUpLFxuICAgICk7XG4gICAgdGhpcy5zdWJ0b3RhbCA9IGNvbmZpZy5zdWJ0b3RhbDtcbiAgICBpZiAoY29uZmlnLmhhdmluZykge1xuICAgICAgdGhpcy5oYXZpbmcgPSBidWlsZENvbmRpdGlvbihjb25maWcuaGF2aW5nLCBiYXNlT2JqZWN0TmFtZSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN1YnRvdGFsICYmICEvXihST0xMVVB8Q1VCRSkkL2kudGVzdCh0aGlzLnN1YnRvdGFsKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIlRoZSBnaXZlbiB2YWx1ZSBkb2VzIG5vdCBtYXRjaCB0byB0aGUgZ3JvdXBpbmcgc3VidG90YWwgdHlwZVwiLFxuICAgICAgICB0aGlzLnN1YnRvdGFsLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJHUk9VUCBCWVwiLFxuICAgICAgLi4uKHRoaXMuc3VidG90YWwgPyBbdGhpcy5zdWJ0b3RhbF0gOiBbXSksXG4gICAgICAodGhpcy5zdWJ0b3RhbCA/IFwiKFwiIDogXCJcIikgK1xuICAgICAgICB0aGlzLmZpZWxkcy5tYXAoKGZpZWxkKSA9PiBmaWVsZC50b1NPUUwoKSkuam9pbihcIiwgXCIpICtcbiAgICAgICAgKHRoaXMuc3VidG90YWwgPyBcIilcIiA6IFwiXCIpLFxuICAgICAgLi4uKHRoaXMuaGF2aW5nID8gW1wiSEFWSU5HXCIsIHRoaXMuaGF2aW5nLnRvU09RTCgpXSA6IFtdKSxcbiAgICBdLmpvaW4oXCIgXCIpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxZQUFZLE1BQU0sZ0JBQWdCO0FBR3pDLE9BQU9DLFVBQVUsTUFBTSxjQUFjO0FBQ3JDLE9BQU9DLGNBQWMsTUFBTSxrQkFBa0I7O0FBRTdDO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUZBLElBR3FCQyxRQUFRLDBCQUFBQyxhQUFBO0VBQUFDLFNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxhQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLFFBQUE7RUFLM0I7QUFDRjtBQUNBO0VBQ0UsU0FBQUEsU0FBWUssTUFBb0MsRUFBRUMsY0FBc0IsRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBUixRQUFBO0lBQ3hFTyxLQUFBLEdBQUFKLE1BQUEsQ0FBQU0sSUFBQTtJQUNBRixLQUFBLENBQUtHLE1BQU0sR0FBR0wsTUFBTSxDQUFDSyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FDcENkLFVBQVUsQ0FBQ2MsS0FBSyxFQUFFTixjQUFjLENBQUM7SUFBQSxDQUNuQyxDQUFDO0lBQ0RDLEtBQUEsQ0FBS00sUUFBUSxHQUFHUixNQUFNLENBQUNRLFFBQVE7SUFDL0IsSUFBSVIsTUFBTSxDQUFDUyxNQUFNLEVBQUU7TUFDakJQLEtBQUEsQ0FBS08sTUFBTSxHQUFHZixjQUFjLENBQUNNLE1BQU0sQ0FBQ1MsTUFBTSxFQUFFUixjQUFjLEVBQUUsSUFBSSxDQUFDO0lBQ25FO0lBQ0EsSUFBSUMsS0FBQSxDQUFLTSxRQUFRLElBQUksQ0FBQyxrQkFBa0IsQ0FBQ0UsSUFBSSxDQUFDUixLQUFBLENBQUtNLFFBQVEsQ0FBQyxFQUFFO01BQzVERyxPQUFPLENBQUNDLElBQUksQ0FDViw4REFBOEQsRUFDOURWLEtBQUEsQ0FBS00sUUFDUCxDQUFDO0lBQ0g7SUFBQyxPQUFBTixLQUFBO0VBQ0g7O0VBRUE7QUFDRjtBQUNBO0VBRkVXLFlBQUEsQ0FBQWxCLFFBQUE7SUFBQW1CLEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUFDLE9BQUEsRUFBUztNQUNQLE9BQU8sQ0FDTCxVQUFVLEVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FDTixJQUFJLENBQUNWLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQ0EsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUN4QyxDQUFDLElBQUksQ0FBQ0EsUUFBUSxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQ3ZCLElBQUksQ0FBQ0gsTUFBTSxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsS0FBSztRQUFBLE9BQUtBLEtBQUssQ0FBQ1MsTUFBTSxDQUFDLENBQUM7TUFBQSxFQUFDLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFDcEQsSUFBSSxDQUFDWCxRQUFRLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFBVSxrQkFBQSxDQUN4QixJQUFJLENBQUNULE1BQU0sR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNBLE1BQU0sQ0FBQ08sTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FDdkRHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDYjtFQUFDO0VBQUEsT0FBQXhCLFFBQUE7QUFBQSxFQXJDbUNILFlBQVk7QUFBQSxTQUE3QkcsUUFBUSxJQUFBeUIsT0FBQSJ9