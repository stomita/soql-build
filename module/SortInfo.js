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

/**
 *
 */
/**
 *
 */
var SortInfo = /*#__PURE__*/function (_QueryElement) {
  _inherits(SortInfo, _QueryElement);
  var _super = _createSuper(SortInfo);
  /**
   *
   */
  function SortInfo(config, baseObjectName) {
    var _this;
    _classCallCheck(this, SortInfo);
    _this = _super.call(this);
    _this.field = buildField(config.field, baseObjectName);
    _this.direction = config.direction;
    _this.nullOrder = config.nullOrder;
    return _this;
  }

  /**
   *
   */
  _createClass(SortInfo, [{
    key: "toSOQL",
    value: function toSOQL() {
      return [this.field.toSOQL()].concat(_toConsumableArray(this.direction != null ? [this.direction.toUpperCase()] : []), _toConsumableArray(this.nullOrder != null ? ["NULLS", this.nullOrder.toUpperCase()] : [])).join(" ");
    }
  }]);
  return SortInfo;
}(QueryElement);
export { SortInfo as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJidWlsZEZpZWxkIiwiU29ydEluZm8iLCJfUXVlcnlFbGVtZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiY29uZmlnIiwiYmFzZU9iamVjdE5hbWUiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJmaWVsZCIsImRpcmVjdGlvbiIsIm51bGxPcmRlciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwidG9TT1FMIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidG9VcHBlckNhc2UiLCJqb2luIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9Tb3J0SW5mby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ0cy1lc3NlbnRpYWxzXCI7XG5pbXBvcnQgUXVlcnlFbGVtZW50IGZyb20gXCIuL1F1ZXJ5RWxlbWVudFwiO1xuaW1wb3J0IEZpZWxkLCB7IHR5cGUgRmllbGRSZWZlcmVuY2VDb25maWcgfSBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IGJ1aWxkRmllbGQgZnJvbSBcIi4vYnVpbGRGaWVsZFwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIFNvcnRJbmZvQ29uZmlnID0ge1xuICBmaWVsZDogRmllbGRSZWZlcmVuY2VDb25maWc7XG4gIGRpcmVjdGlvbj86IFwiQVNDXCIgfCBcIkRFU0NcIjtcbiAgbnVsbE9yZGVyPzogXCJGSVJTVFwiIHwgXCJMQVNUXCI7XG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRJbmZvIGV4dGVuZHMgUXVlcnlFbGVtZW50IHtcbiAgZmllbGQ6IEZpZWxkO1xuICBkaXJlY3Rpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbnVsbE9yZGVyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IERlZXBSZWFkb25seTxTb3J0SW5mb0NvbmZpZz4sIGJhc2VPYmplY3ROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZmllbGQgPSBidWlsZEZpZWxkKGNvbmZpZy5maWVsZCwgYmFzZU9iamVjdE5hbWUpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gY29uZmlnLmRpcmVjdGlvbjtcbiAgICB0aGlzLm51bGxPcmRlciA9IGNvbmZpZy5udWxsT3JkZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgdGhpcy5maWVsZC50b1NPUUwoKSxcbiAgICAgIC4uLih0aGlzLmRpcmVjdGlvbiAhPSBudWxsID8gW3RoaXMuZGlyZWN0aW9uLnRvVXBwZXJDYXNlKCldIDogW10pLFxuICAgICAgLi4uKHRoaXMubnVsbE9yZGVyICE9IG51bGxcbiAgICAgICAgPyBbXCJOVUxMU1wiLCB0aGlzLm51bGxPcmRlci50b1VwcGVyQ2FzZSgpXVxuICAgICAgICA6IFtdKSxcbiAgICBdLmpvaW4oXCIgXCIpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxZQUFZLE1BQU0sZ0JBQWdCO0FBRXpDLE9BQU9DLFVBQVUsTUFBTSxjQUFjOztBQUVyQztBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFGQSxJQUdxQkMsUUFBUSwwQkFBQUMsYUFBQTtFQUFBQyxTQUFBLENBQUFGLFFBQUEsRUFBQUMsYUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBSzNCO0FBQ0Y7QUFDQTtFQUNFLFNBQUFBLFNBQVlLLE1BQW9DLEVBQUVDLGNBQXNCLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQVIsUUFBQTtJQUN4RU8sS0FBQSxHQUFBSixNQUFBLENBQUFNLElBQUE7SUFDQUYsS0FBQSxDQUFLRyxLQUFLLEdBQUdYLFVBQVUsQ0FBQ00sTUFBTSxDQUFDSyxLQUFLLEVBQUVKLGNBQWMsQ0FBQztJQUNyREMsS0FBQSxDQUFLSSxTQUFTLEdBQUdOLE1BQU0sQ0FBQ00sU0FBUztJQUNqQ0osS0FBQSxDQUFLSyxTQUFTLEdBQUdQLE1BQU0sQ0FBQ08sU0FBUztJQUFDLE9BQUFMLEtBQUE7RUFDcEM7O0VBRUE7QUFDRjtBQUNBO0VBRkVNLFlBQUEsQ0FBQWIsUUFBQTtJQUFBYyxHQUFBO0lBQUFDLEtBQUEsRUFHQSxTQUFBQyxPQUFBLEVBQVM7TUFDUCxPQUFPLENBQ0wsSUFBSSxDQUFDTixLQUFLLENBQUNNLE1BQU0sQ0FBQyxDQUFDLEVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FDZixJQUFJLENBQUNQLFNBQVMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUNBLFNBQVMsQ0FBQ1EsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBQUQsa0JBQUEsQ0FDNUQsSUFBSSxDQUFDTixTQUFTLElBQUksSUFBSSxHQUN0QixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNBLFNBQVMsQ0FBQ08sV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUN2QyxFQUFFLEdBQ05DLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDYjtFQUFDO0VBQUEsT0FBQXBCLFFBQUE7QUFBQSxFQTFCbUNGLFlBQVk7QUFBQSxTQUE3QkUsUUFBUSxJQUFBcUIsT0FBQSJ9