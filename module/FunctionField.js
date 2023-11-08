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
import Field from "./Field";
import buildField from "./buildField";
var FunctionField = /*#__PURE__*/function (_Field) {
  _inherits(FunctionField, _Field);
  var _super = _createSuper(FunctionField);
  function FunctionField(config, baseObjectName) {
    var _this;
    _classCallCheck(this, FunctionField);
    _this = _super.call(this);
    _this["function"] = config["function"];
    _this.arguments = (config.arguments || []).map(function (arg) {
      return buildField(arg, baseObjectName);
    });
    _this.alias = config.alias;
    return _this;
  }
  _createClass(FunctionField, [{
    key: "toSOQL",
    value: function toSOQL() {
      return this["function"] + "(" + this.arguments.map(function (arg) {
        return arg.toSOQL();
      }).join(", ") + ")";
    }
  }]);
  return FunctionField;
}(Field);
export { FunctionField as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGaWVsZCIsImJ1aWxkRmllbGQiLCJGdW5jdGlvbkZpZWxkIiwiX0ZpZWxkIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiY29uZmlnIiwiYmFzZU9iamVjdE5hbWUiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJhcmd1bWVudHMiLCJtYXAiLCJhcmciLCJhbGlhcyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwidG9TT1FMIiwiam9pbiIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvRnVuY3Rpb25GaWVsZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ0cy1lc3NlbnRpYWxzXCI7XG5pbXBvcnQgRmllbGQsIHsgdHlwZSBGdW5jdGlvbkZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBidWlsZEZpZWxkIGZyb20gXCIuL2J1aWxkRmllbGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25GaWVsZCBleHRlbmRzIEZpZWxkIHtcbiAgZnVuY3Rpb246IHN0cmluZztcbiAgYXJndW1lbnRzOiBGaWVsZFtdO1xuICBhbGlhczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbmZpZzogRGVlcFJlYWRvbmx5PEZ1bmN0aW9uRmllbGRDb25maWc+LFxuICAgIGJhc2VPYmplY3ROYW1lOiBzdHJpbmcsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mdW5jdGlvbiA9IGNvbmZpZy5mdW5jdGlvbjtcbiAgICB0aGlzLmFyZ3VtZW50cyA9IChjb25maWcuYXJndW1lbnRzIHx8IFtdKS5tYXAoKGFyZykgPT5cbiAgICAgIGJ1aWxkRmllbGQoYXJnLCBiYXNlT2JqZWN0TmFtZSksXG4gICAgKTtcbiAgICB0aGlzLmFsaWFzID0gY29uZmlnLmFsaWFzO1xuICB9XG5cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZ1bmN0aW9uICtcbiAgICAgIFwiKFwiICtcbiAgICAgIHRoaXMuYXJndW1lbnRzLm1hcCgoYXJnKSA9PiBhcmcudG9TT1FMKCkpLmpvaW4oXCIsIFwiKSArXG4gICAgICBcIilcIlxuICAgICk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLEtBQUssTUFBb0MsU0FBUztBQUN6RCxPQUFPQyxVQUFVLE1BQU0sY0FBYztBQUFDLElBRWpCQyxhQUFhLDBCQUFBQyxNQUFBO0VBQUFDLFNBQUEsQ0FBQUYsYUFBQSxFQUFBQyxNQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLGFBQUE7RUFLaEMsU0FBQUEsY0FDRUssTUFBeUMsRUFDekNDLGNBQXNCLEVBQ3RCO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFSLGFBQUE7SUFDQU8sS0FBQSxHQUFBSixNQUFBLENBQUFNLElBQUE7SUFDQUYsS0FBQSxZQUFhLEdBQUdGLE1BQU0sWUFBUztJQUMvQkUsS0FBQSxDQUFLRyxTQUFTLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDSyxTQUFTLElBQUksRUFBRSxFQUFFQyxHQUFHLENBQUMsVUFBQ0MsR0FBRztNQUFBLE9BQ2hEYixVQUFVLENBQUNhLEdBQUcsRUFBRU4sY0FBYyxDQUFDO0lBQUEsQ0FDakMsQ0FBQztJQUNEQyxLQUFBLENBQUtNLEtBQUssR0FBR1IsTUFBTSxDQUFDUSxLQUFLO0lBQUMsT0FBQU4sS0FBQTtFQUM1QjtFQUFDTyxZQUFBLENBQUFkLGFBQUE7SUFBQWUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsT0FBQSxFQUFTO01BQ1AsT0FDRSxJQUFJLFlBQVMsR0FDYixHQUFHLEdBQ0gsSUFBSSxDQUFDUCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxHQUFHO1FBQUEsT0FBS0EsR0FBRyxDQUFDSyxNQUFNLENBQUMsQ0FBQztNQUFBLEVBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUNwRCxHQUFHO0lBRVA7RUFBQztFQUFBLE9BQUFsQixhQUFBO0FBQUEsRUF4QndDRixLQUFLO0FBQUEsU0FBM0JFLGFBQWEsSUFBQW1CLE9BQUEifQ==