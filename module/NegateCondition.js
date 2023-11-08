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
import buildCondition from "./buildCondition";
var NegateCondition = /*#__PURE__*/function (_Condition) {
  _inherits(NegateCondition, _Condition);
  var _super = _createSuper(NegateCondition);
  function NegateCondition(config, baseObjectName, stripParens) {
    var _this;
    _classCallCheck(this, NegateCondition);
    _this = _super.call(this);
    _this.condition = buildCondition(config.condition, baseObjectName, true);
    _this.stripParens = stripParens;
    return _this;
  }
  _createClass(NegateCondition, [{
    key: "toSOQL",
    value: function toSOQL() {
      var condition = "NOT " + this.condition.toSOQL();
      return !this.stripParens ? "(" + condition + ")" : condition;
    }
  }]);
  return NegateCondition;
}(Condition);
export { NegateCondition as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb25kaXRpb24iLCJidWlsZENvbmRpdGlvbiIsIk5lZ2F0ZUNvbmRpdGlvbiIsIl9Db25kaXRpb24iLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsInN0cmlwUGFyZW5zIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiY29uZGl0aW9uIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJ0b1NPUUwiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL05lZ2F0ZUNvbmRpdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ0cy1lc3NlbnRpYWxzXCI7XG5pbXBvcnQgQ29uZGl0aW9uIGZyb20gXCIuL0NvbmRpdGlvblwiO1xuaW1wb3J0IGJ1aWxkQ29uZGl0aW9uIGZyb20gXCIuL2J1aWxkQ29uZGl0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IE5lZ2F0ZUNvbmRpdGlvbkNvbmZpZyB9IGZyb20gXCIuL0NvbmRpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZWdhdGVDb25kaXRpb24gZXh0ZW5kcyBDb25kaXRpb24ge1xuICBjb25kaXRpb246IENvbmRpdGlvbjtcbiAgc3RyaXBQYXJlbnM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29uZmlnOiBEZWVwUmVhZG9ubHk8TmVnYXRlQ29uZGl0aW9uQ29uZmlnPixcbiAgICBiYXNlT2JqZWN0TmFtZTogc3RyaW5nLFxuICAgIHN0cmlwUGFyZW5zOiBib29sZWFuLFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29uZGl0aW9uID0gYnVpbGRDb25kaXRpb24oY29uZmlnLmNvbmRpdGlvbiwgYmFzZU9iamVjdE5hbWUsIHRydWUpO1xuICAgIHRoaXMuc3RyaXBQYXJlbnMgPSBzdHJpcFBhcmVucztcbiAgfVxuICB0b1NPUUwoKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gXCJOT1QgXCIgKyB0aGlzLmNvbmRpdGlvbi50b1NPUUwoKTtcbiAgICByZXR1cm4gIXRoaXMuc3RyaXBQYXJlbnMgPyBcIihcIiArIGNvbmRpdGlvbiArIFwiKVwiIDogY29uZGl0aW9uO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxTQUFTLE1BQU0sYUFBYTtBQUNuQyxPQUFPQyxjQUFjLE1BQU0sa0JBQWtCO0FBQUMsSUFHekJDLGVBQWUsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixlQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosZUFBQTtFQUlsQyxTQUFBQSxnQkFDRUssTUFBMkMsRUFDM0NDLGNBQXNCLEVBQ3RCQyxXQUFvQixFQUNwQjtJQUFBLElBQUFDLEtBQUE7SUFBQUMsZUFBQSxPQUFBVCxlQUFBO0lBQ0FRLEtBQUEsR0FBQUwsTUFBQSxDQUFBTyxJQUFBO0lBQ0FGLEtBQUEsQ0FBS0csU0FBUyxHQUFHWixjQUFjLENBQUNNLE1BQU0sQ0FBQ00sU0FBUyxFQUFFTCxjQUFjLEVBQUUsSUFBSSxDQUFDO0lBQ3ZFRSxLQUFBLENBQUtELFdBQVcsR0FBR0EsV0FBVztJQUFDLE9BQUFDLEtBQUE7RUFDakM7RUFBQ0ksWUFBQSxDQUFBWixlQUFBO0lBQUFhLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUFDLE9BQUEsRUFBUztNQUNQLElBQU1KLFNBQVMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxTQUFTLENBQUNJLE1BQU0sQ0FBQyxDQUFDO01BQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUNSLFdBQVcsR0FBRyxHQUFHLEdBQUdJLFNBQVMsR0FBRyxHQUFHLEdBQUdBLFNBQVM7SUFDOUQ7RUFBQztFQUFBLE9BQUFYLGVBQUE7QUFBQSxFQWhCMENGLFNBQVM7QUFBQSxTQUFqQ0UsZUFBZSxJQUFBZ0IsT0FBQSJ9