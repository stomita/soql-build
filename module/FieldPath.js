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
var FieldPath = /*#__PURE__*/function (_Field) {
  _inherits(FieldPath, _Field);
  var _super = _createSuper(FieldPath);
  function FieldPath(field, _baseObjectName) {
    var _this;
    _classCallCheck(this, FieldPath);
    _this = _super.call(this);
    _this.path = field.split(".");
    return _this;
  }
  _createClass(FieldPath, [{
    key: "toSOQL",
    value: function toSOQL() {
      return this.path.join(".");
    }
  }]);
  return FieldPath;
}(Field);
export { FieldPath as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGaWVsZCIsIkZpZWxkUGF0aCIsIl9GaWVsZCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImZpZWxkIiwiX2Jhc2VPYmplY3ROYW1lIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwicGF0aCIsInNwbGl0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJ0b1NPUUwiLCJqb2luIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uL3NyYy9GaWVsZFBhdGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkUGF0aCBleHRlbmRzIEZpZWxkIHtcbiAgcGF0aDogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoZmllbGQ6IHN0cmluZywgX2Jhc2VPYmplY3ROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGF0aCA9IGZpZWxkLnNwbGl0KFwiLlwiKTtcbiAgfVxuXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLmpvaW4oXCIuXCIpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFLLE1BQU0sU0FBUztBQUFDLElBRVBDLFNBQVMsMEJBQUFDLE1BQUE7RUFBQUMsU0FBQSxDQUFBRixTQUFBLEVBQUFDLE1BQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosU0FBQTtFQUc1QixTQUFBQSxVQUFZSyxLQUFhLEVBQUVDLGVBQXVCLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQUFDLGVBQUEsT0FBQVIsU0FBQTtJQUNsRE8sS0FBQSxHQUFBSixNQUFBLENBQUFNLElBQUE7SUFDQUYsS0FBQSxDQUFLRyxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUFDLE9BQUFKLEtBQUE7RUFDL0I7RUFBQ0ssWUFBQSxDQUFBWixTQUFBO0lBQUFhLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE9BQUEsRUFBUztNQUNQLE9BQU8sSUFBSSxDQUFDTCxJQUFJLENBQUNNLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDNUI7RUFBQztFQUFBLE9BQUFoQixTQUFBO0FBQUEsRUFWb0NELEtBQUs7QUFBQSxTQUF2QkMsU0FBUyxJQUFBaUIsT0FBQSJ9