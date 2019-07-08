function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import QueryElement from "./QueryElement";

var Field =
/*#__PURE__*/
function (_QueryElement) {
  _inherits(Field, _QueryElement);

  function Field() {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, _getPrototypeOf(Field).apply(this, arguments));
  }

  return Field;
}(QueryElement);

export { Field as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GaWVsZC50cyJdLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxZQUFQLE1BQXlCLGdCQUF6Qjs7SUF1QnFCQyxLOzs7Ozs7Ozs7Ozs7RUFBY0QsWTs7U0FBZEMsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBRdWVyeUVsZW1lbnQgZnJvbSBcIi4vUXVlcnlFbGVtZW50XCI7XG5pbXBvcnQgeyBDb25kaXRpb25Db25maWcgfSBmcm9tIFwiLi9Db25kaXRpb25cIjtcbmltcG9ydCB7IFNvcnRJbmZvQ29uZmlnIH0gZnJvbSBcIi4vU29ydEluZm9cIjtcblxuZXhwb3J0IHR5cGUgRnVuY3Rpb25GaWVsZENvbmZpZyA9IHtcbiAgdHlwZTogXCJmdW5jdGlvblwiO1xuICBmdW5jdGlvbjogc3RyaW5nO1xuICBhbGlhcz86IHN0cmluZztcbiAgYXJndW1lbnRzPzogRmllbGRDb25maWdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFN1YnF1ZXJ5RmllbGRDb25maWcgPSB7XG4gIHR5cGU6IFwic3VicXVlcnlcIjtcbiAgZmllbGRzOiBGaWVsZENvbmZpZ1tdO1xuICByZWxhdGlvbnNoaXA6IHN0cmluZztcbiAgY29uZGl0aW9uPzogQ29uZGl0aW9uQ29uZmlnO1xuICBzb3J0SW5mbz86IFNvcnRJbmZvQ29uZmlnW107XG4gIGxpbWl0PzogbnVtYmVyO1xuICBvZmZzZXQ/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBGaWVsZENvbmZpZyA9IHN0cmluZyB8IEZ1bmN0aW9uRmllbGRDb25maWcgfCBTdWJxdWVyeUZpZWxkQ29uZmlnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCBleHRlbmRzIFF1ZXJ5RWxlbWVudCB7fVxuIl19