function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import QueryElement from "./QueryElement";

/**
 *
 */

/**
 *
 */

/**
 *
 */

/**
 *
 */
/**
 *
 */
var Condition = /*#__PURE__*/function (_QueryElement) {
  _inherits(Condition, _QueryElement);
  var _super = _createSuper(Condition);
  function Condition() {
    _classCallCheck(this, Condition);
    return _super.apply(this, arguments);
  }
  return _createClass(Condition);
}(QueryElement);
export { Condition as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJDb25kaXRpb24iLCJfUXVlcnlFbGVtZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL0NvbmRpdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUXVlcnlFbGVtZW50IGZyb20gXCIuL1F1ZXJ5RWxlbWVudFwiO1xuaW1wb3J0IHR5cGUgeyBPcGVyYW5kQ29uZmlnIH0gZnJvbSBcIi4vT3BlcmFuZFwiO1xuaW1wb3J0IHR5cGUgeyBGaWVsZFJlZmVyZW5jZUNvbmZpZyB9IGZyb20gXCIuL0ZpZWxkXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQ29tcG9zaXRlQ29uZGl0aW9uQ29uZmlnID0ge1xuICBvcGVyYXRvcjogXCJBTkRcIiB8IFwiT1JcIjtcbiAgY29uZGl0aW9uczogQ29uZGl0aW9uQ29uZmlnW107XG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIE5lZ2F0ZUNvbmRpdGlvbkNvbmZpZyA9IHtcbiAgb3BlcmF0b3I6IFwiTk9UXCI7XG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uQ29uZmlnO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBTaW5nbGVDb25kaXRpb25Db25maWcgPSB7XG4gIG9wZXJhdG9yOlxuICAgIHwgXCI9XCJcbiAgICB8IFwiIT1cIlxuICAgIHwgXCI8XCJcbiAgICB8IFwiPD1cIlxuICAgIHwgXCI+PVwiXG4gICAgfCBcIj5cIlxuICAgIHwgXCJMSUtFXCJcbiAgICB8IFwiSU5cIlxuICAgIHwgXCJOT1QgSU5cIlxuICAgIHwgXCJFWENMVURFU1wiXG4gICAgfCBcIklOQ0xVREVTXCI7XG4gIGZpZWxkOiBGaWVsZFJlZmVyZW5jZUNvbmZpZztcbiAgdmFsdWU6IE9wZXJhbmRDb25maWc7XG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIENvbmRpdGlvbkNvbmZpZyA9XG4gIHwgQ29tcG9zaXRlQ29uZGl0aW9uQ29uZmlnXG4gIHwgTmVnYXRlQ29uZGl0aW9uQ29uZmlnXG4gIHwgU2luZ2xlQ29uZGl0aW9uQ29uZmlnO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbiBleHRlbmRzIFF1ZXJ5RWxlbWVudCB7fVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsWUFBWSxNQUFNLGdCQUFnQjs7QUFJekM7QUFDQTtBQUNBOztBQU1BO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQ0E7O0FBa0JBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBLElBR3FCQyxTQUFTLDBCQUFBQyxhQUFBO0VBQUFDLFNBQUEsQ0FBQUYsU0FBQSxFQUFBQyxhQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLFNBQUE7RUFBQSxTQUFBQSxVQUFBO0lBQUFLLGVBQUEsT0FBQUwsU0FBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQSxPQUFBQyxZQUFBLENBQUFSLFNBQUE7QUFBQSxFQUFTRCxZQUFZO0FBQUEsU0FBOUJDLFNBQVMsSUFBQVMsT0FBQSJ9