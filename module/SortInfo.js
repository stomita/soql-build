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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Tb3J0SW5mby50cyJdLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJidWlsZEZpZWxkIiwiU29ydEluZm8iLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsImZpZWxkIiwiZGlyZWN0aW9uIiwibnVsbE9yZGVyIiwidG9TT1FMIiwidG9VcHBlckNhc2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLFlBQVAsTUFBeUIsZ0JBQXpCO0FBRUEsT0FBT0MsVUFBUCxNQUF1QixjQUF2QjtBQUVBOzs7O0FBU0E7OztJQUdxQkMsUTs7Ozs7QUFLbkI7OztBQUdBLG9CQUFZQyxNQUFaLEVBQWtEQyxjQUFsRCxFQUEwRTtBQUFBOztBQUFBOztBQUN4RTtBQUNBLFVBQUtDLEtBQUwsR0FBYUosVUFBVSxDQUFDRSxNQUFNLENBQUNFLEtBQVIsRUFBZUQsY0FBZixDQUF2QjtBQUNBLFVBQUtFLFNBQUwsR0FBaUJILE1BQU0sQ0FBQ0csU0FBeEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCSixNQUFNLENBQUNJLFNBQXhCO0FBSndFO0FBS3pFO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUCxhQUFPLENBQ0wsS0FBS0YsS0FBTCxDQUFXRyxNQUFYLEVBREssNEJBRUQsS0FBS0YsU0FBTCxJQUFrQixJQUFsQixHQUF5QixDQUFDLEtBQUtBLFNBQUwsQ0FBZUcsV0FBZixFQUFELENBQXpCLEdBQTBELEVBRnpELHNCQUdELEtBQUtGLFNBQUwsSUFBa0IsSUFBbEIsR0FBeUIsQ0FBQyxPQUFELEVBQVUsS0FBS0EsU0FBTCxDQUFlRSxXQUFmLEVBQVYsQ0FBekIsR0FBbUUsRUFIbEUsR0FJTEMsSUFKSyxDQUlBLEdBSkEsQ0FBUDtBQUtEOzs7O0VBeEJtQ1YsWTs7U0FBakJFLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWVwUmVhZG9ubHkgfSBmcm9tIFwidXRpbGl0eS10eXBlc1wiO1xuaW1wb3J0IFF1ZXJ5RWxlbWVudCBmcm9tIFwiLi9RdWVyeUVsZW1lbnRcIjtcbmltcG9ydCBGaWVsZCwgeyBGaWVsZFJlZmVyZW5jZUNvbmZpZyB9IGZyb20gXCIuL0ZpZWxkXCI7XG5pbXBvcnQgYnVpbGRGaWVsZCBmcm9tIFwiLi9idWlsZEZpZWxkXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgU29ydEluZm9Db25maWcgPSB7XG4gIGZpZWxkOiBGaWVsZFJlZmVyZW5jZUNvbmZpZztcbiAgZGlyZWN0aW9uPzogXCJBU0NcIiB8IFwiREVTQ1wiO1xuICBudWxsT3JkZXI/OiBcIkZJUlNUXCIgfCBcIkxBU1RcIjtcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydEluZm8gZXh0ZW5kcyBRdWVyeUVsZW1lbnQge1xuICBmaWVsZDogRmllbGQ7XG4gIGRpcmVjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBudWxsT3JkZXI6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogRGVlcFJlYWRvbmx5PFNvcnRJbmZvQ29uZmlnPiwgYmFzZU9iamVjdE5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5maWVsZCA9IGJ1aWxkRmllbGQoY29uZmlnLmZpZWxkLCBiYXNlT2JqZWN0TmFtZSk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBjb25maWcuZGlyZWN0aW9uO1xuICAgIHRoaXMubnVsbE9yZGVyID0gY29uZmlnLm51bGxPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBbXG4gICAgICB0aGlzLmZpZWxkLnRvU09RTCgpLFxuICAgICAgLi4uKHRoaXMuZGlyZWN0aW9uICE9IG51bGwgPyBbdGhpcy5kaXJlY3Rpb24udG9VcHBlckNhc2UoKV0gOiBbXSksXG4gICAgICAuLi4odGhpcy5udWxsT3JkZXIgIT0gbnVsbCA/IFtcIk5VTExTXCIsIHRoaXMubnVsbE9yZGVyLnRvVXBwZXJDYXNlKCldIDogW10pXG4gICAgXS5qb2luKFwiIFwiKTtcbiAgfVxufVxuIl19