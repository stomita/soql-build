function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import QueryElement from "./QueryElement";
import buildField from "./buildField";
/**
 *
 */

/**
 *
 */
var SortInfo =
/*#__PURE__*/
function (_QueryElement) {
  _inherits(SortInfo, _QueryElement);

  /**
   *
   */
  function SortInfo(config, baseObjectName) {
    var _this;

    _classCallCheck(this, SortInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SortInfo).call(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Tb3J0SW5mby50cyJdLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJidWlsZEZpZWxkIiwiU29ydEluZm8iLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsImZpZWxkIiwiZGlyZWN0aW9uIiwibnVsbE9yZGVyIiwidG9TT1FMIiwidG9VcHBlckNhc2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFlBQVAsTUFBeUIsZ0JBQXpCO0FBRUEsT0FBT0MsVUFBUCxNQUF1QixjQUF2QjtBQUVBOzs7O0FBU0E7OztJQUdxQkMsUTs7Ozs7QUFLbkI7OztBQUdBLG9CQUFZQyxNQUFaLEVBQW9DQyxjQUFwQyxFQUE0RDtBQUFBOztBQUFBOztBQUMxRDtBQUNBLFVBQUtDLEtBQUwsR0FBYUosVUFBVSxDQUFDRSxNQUFNLENBQUNFLEtBQVIsRUFBZUQsY0FBZixDQUF2QjtBQUNBLFVBQUtFLFNBQUwsR0FBaUJILE1BQU0sQ0FBQ0csU0FBeEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCSixNQUFNLENBQUNJLFNBQXhCO0FBSjBEO0FBSzNEO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUCxhQUFPLENBQ0wsS0FBS0YsS0FBTCxDQUFXRyxNQUFYLEVBREssNEJBRUQsS0FBS0YsU0FBTCxJQUFrQixJQUFsQixHQUF5QixDQUFDLEtBQUtBLFNBQUwsQ0FBZUcsV0FBZixFQUFELENBQXpCLEdBQTBELEVBRnpELHNCQUdELEtBQUtGLFNBQUwsSUFBa0IsSUFBbEIsR0FBeUIsQ0FBQyxPQUFELEVBQVUsS0FBS0EsU0FBTCxDQUFlRSxXQUFmLEVBQVYsQ0FBekIsR0FBbUUsRUFIbEUsR0FJTEMsSUFKSyxDQUlBLEdBSkEsQ0FBUDtBQUtEOzs7O0VBeEJtQ1YsWTs7U0FBakJFLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUXVlcnlFbGVtZW50IGZyb20gXCIuL1F1ZXJ5RWxlbWVudFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG5pbXBvcnQgYnVpbGRGaWVsZCBmcm9tIFwiLi9idWlsZEZpZWxkXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgU29ydEluZm9Db25maWcgPSB7XG4gIGZpZWxkOiBzdHJpbmc7XG4gIGRpcmVjdGlvbj86IFwiQVNDXCIgfCBcIkRFU0NcIjtcbiAgbnVsbE9yZGVyPzogXCJGSVJTVFwiIHwgXCJMQVNUXCI7XG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRJbmZvIGV4dGVuZHMgUXVlcnlFbGVtZW50IHtcbiAgZmllbGQ6IEZpZWxkO1xuICBkaXJlY3Rpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbnVsbE9yZGVyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IFNvcnRJbmZvQ29uZmlnLCBiYXNlT2JqZWN0TmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZpZWxkID0gYnVpbGRGaWVsZChjb25maWcuZmllbGQsIGJhc2VPYmplY3ROYW1lKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGNvbmZpZy5kaXJlY3Rpb247XG4gICAgdGhpcy5udWxsT3JkZXIgPSBjb25maWcubnVsbE9yZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuZmllbGQudG9TT1FMKCksXG4gICAgICAuLi4odGhpcy5kaXJlY3Rpb24gIT0gbnVsbCA/IFt0aGlzLmRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpXSA6IFtdKSxcbiAgICAgIC4uLih0aGlzLm51bGxPcmRlciAhPSBudWxsID8gW1wiTlVMTFNcIiwgdGhpcy5udWxsT3JkZXIudG9VcHBlckNhc2UoKV0gOiBbXSlcbiAgICBdLmpvaW4oXCIgXCIpO1xuICB9XG59XG4iXX0=