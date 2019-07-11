"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _QueryElement2 = _interopRequireDefault(require("./QueryElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 *
 */
var Condition =
/*#__PURE__*/
function (_QueryElement) {
  _inherits(Condition, _QueryElement);

  function Condition() {
    _classCallCheck(this, Condition);

    return _possibleConstructorReturn(this, _getPrototypeOf(Condition).apply(this, arguments));
  }

  return Condition;
}(_QueryElement2["default"]);

exports["default"] = Condition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25kaXRpb24udHMiXSwibmFtZXMiOlsiQ29uZGl0aW9uIiwiUXVlcnlFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTs7O0lBR3FCQSxTOzs7Ozs7Ozs7Ozs7RUFBa0JDLHlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1ZXJ5RWxlbWVudCBmcm9tIFwiLi9RdWVyeUVsZW1lbnRcIjtcbmltcG9ydCB7IE9wZXJhbmRDb25maWcgfSBmcm9tIFwiLi9PcGVyYW5kXCI7XG5pbXBvcnQgeyBGaWVsZFJlZmVyZW5jZUNvbmZpZyB9IGZyb20gXCIuL0ZpZWxkXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQ29tcG9zaXRlQ29uZGl0aW9uQ29uZmlnID0ge1xuICBvcGVyYXRvcjogXCJBTkRcIiB8IFwiT1JcIjtcbiAgY29uZGl0aW9uczogQ29uZGl0aW9uQ29uZmlnW107XG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIE5lZ2F0ZUNvbmRpdGlvbkNvbmZpZyA9IHtcbiAgb3BlcmF0b3I6IFwiTk9UXCI7XG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uQ29uZmlnO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBTaW5nbGVDb25kaXRpb25Db25maWcgPSB7XG4gIG9wZXJhdG9yOlxuICAgIHwgXCI9XCJcbiAgICB8IFwiIT1cIlxuICAgIHwgXCI8XCJcbiAgICB8IFwiPD1cIlxuICAgIHwgXCI+PVwiXG4gICAgfCBcIj5cIlxuICAgIHwgXCJMSUtFXCJcbiAgICB8IFwiSU5cIlxuICAgIHwgXCJOT1QgSU5cIlxuICAgIHwgXCJFWENMVURFU1wiXG4gICAgfCBcIklOQ0xVREVTXCI7XG4gIGZpZWxkOiBGaWVsZFJlZmVyZW5jZUNvbmZpZztcbiAgdmFsdWU6IE9wZXJhbmRDb25maWc7XG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIENvbmRpdGlvbkNvbmZpZyA9XG4gIHwgQ29tcG9zaXRlQ29uZGl0aW9uQ29uZmlnXG4gIHwgTmVnYXRlQ29uZGl0aW9uQ29uZmlnXG4gIHwgU2luZ2xlQ29uZGl0aW9uQ29uZmlnO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbiBleHRlbmRzIFF1ZXJ5RWxlbWVudCB7fVxuIl19