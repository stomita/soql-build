function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
import Condition from "./Condition";
import { createOperand } from "./Operand";
import buildField from "./buildField";

/**
 *
 */
var SingleCondition = /*#__PURE__*/function (_Condition) {
  _inherits(SingleCondition, _Condition);
  var _super = _createSuper(SingleCondition);
  /**
   *
   */
  function SingleCondition(config, baseObjectName) {
    var _this;
    _classCallCheck(this, SingleCondition);
    _this = _super.call(this);
    _this.operator = config.operator;
    _this.field = buildField(config.field, baseObjectName);
    var value = createOperand(config.value);
    if (value == null) {
      throw new Error();
    }
    _this.value = value;
    return _this;
  }

  /**
   *
   */
  _createClass(SingleCondition, [{
    key: "toSOQL",
    value: function toSOQL() {
      return this.field.toSOQL() + " " + this.operator + " " + this.value.toSOQL();
    }
  }]);
  return SingleCondition;
}(Condition);
export { SingleCondition as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb25kaXRpb24iLCJjcmVhdGVPcGVyYW5kIiwiYnVpbGRGaWVsZCIsIlNpbmdsZUNvbmRpdGlvbiIsIl9Db25kaXRpb24iLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsIm9wZXJhdG9yIiwiZmllbGQiLCJ2YWx1ZSIsIkVycm9yIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidG9TT1FMIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9TaW5nbGVDb25kaXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBEZWVwUmVhZG9ubHkgfSBmcm9tIFwidHMtZXNzZW50aWFsc1wiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG5pbXBvcnQgQ29uZGl0aW9uLCB7IHR5cGUgU2luZ2xlQ29uZGl0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5pbXBvcnQgT3BlcmFuZCwgeyBjcmVhdGVPcGVyYW5kIH0gZnJvbSBcIi4vT3BlcmFuZFwiO1xuaW1wb3J0IGJ1aWxkRmllbGQgZnJvbSBcIi4vYnVpbGRGaWVsZFwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZUNvbmRpdGlvbiBleHRlbmRzIENvbmRpdGlvbiB7XG4gIG9wZXJhdG9yOiBzdHJpbmc7XG4gIGZpZWxkOiBGaWVsZDtcbiAgdmFsdWU6IE9wZXJhbmQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IERlZXBSZWFkb25seTxTaW5nbGVDb25kaXRpb25Db25maWc+LFxuICAgIGJhc2VPYmplY3ROYW1lOiBzdHJpbmcsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcGVyYXRvciA9IGNvbmZpZy5vcGVyYXRvcjtcbiAgICB0aGlzLmZpZWxkID0gYnVpbGRGaWVsZChjb25maWcuZmllbGQsIGJhc2VPYmplY3ROYW1lKTtcbiAgICBjb25zdCB2YWx1ZSA9IGNyZWF0ZU9wZXJhbmQoY29uZmlnLnZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZpZWxkLnRvU09RTCgpICsgXCIgXCIgKyB0aGlzLm9wZXJhdG9yICsgXCIgXCIgKyB0aGlzLnZhbHVlLnRvU09RTCgpXG4gICAgKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUEsT0FBT0EsU0FBUyxNQUFzQyxhQUFhO0FBQ25FLFNBQWtCQyxhQUFhLFFBQVEsV0FBVztBQUNsRCxPQUFPQyxVQUFVLE1BQU0sY0FBYzs7QUFFckM7QUFDQTtBQUNBO0FBRkEsSUFHcUJDLGVBQWUsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixlQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosZUFBQTtFQUtsQztBQUNGO0FBQ0E7RUFDRSxTQUFBQSxnQkFDRUssTUFBMkMsRUFDM0NDLGNBQXNCLEVBQ3RCO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFSLGVBQUE7SUFDQU8sS0FBQSxHQUFBSixNQUFBLENBQUFNLElBQUE7SUFDQUYsS0FBQSxDQUFLRyxRQUFRLEdBQUdMLE1BQU0sQ0FBQ0ssUUFBUTtJQUMvQkgsS0FBQSxDQUFLSSxLQUFLLEdBQUdaLFVBQVUsQ0FBQ00sTUFBTSxDQUFDTSxLQUFLLEVBQUVMLGNBQWMsQ0FBQztJQUNyRCxJQUFNTSxLQUFLLEdBQUdkLGFBQWEsQ0FBQ08sTUFBTSxDQUFDTyxLQUFLLENBQUM7SUFDekMsSUFBSUEsS0FBSyxJQUFJLElBQUksRUFBRTtNQUNqQixNQUFNLElBQUlDLEtBQUssQ0FBQyxDQUFDO0lBQ25CO0lBQ0FOLEtBQUEsQ0FBS0ssS0FBSyxHQUFHQSxLQUFLO0lBQUMsT0FBQUwsS0FBQTtFQUNyQjs7RUFFQTtBQUNGO0FBQ0E7RUFGRU8sWUFBQSxDQUFBZCxlQUFBO0lBQUFlLEdBQUE7SUFBQUgsS0FBQSxFQUdBLFNBQUFJLE9BQUEsRUFBUztNQUNQLE9BQ0UsSUFBSSxDQUFDTCxLQUFLLENBQUNLLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ04sUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUNFLEtBQUssQ0FBQ0ksTUFBTSxDQUFDLENBQUM7SUFFekU7RUFBQztFQUFBLE9BQUFoQixlQUFBO0FBQUEsRUE3QjBDSCxTQUFTO0FBQUEsU0FBakNHLGVBQWUsSUFBQWlCLE9BQUEifQ==