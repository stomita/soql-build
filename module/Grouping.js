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
import buildCondition from "./buildCondition";
/**
 *
 */

/**
 *
 */
var Grouping =
/*#__PURE__*/
function (_QueryElement) {
  _inherits(Grouping, _QueryElement);

  /**
   *
   */
  function Grouping(config, baseObjectName) {
    var _this;

    _classCallCheck(this, Grouping);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Grouping).call(this));
    _this.fields = config.fields.map(function (field) {
      return buildField(field, baseObjectName);
    });
    _this.subtotal = config.subtotal;

    if (config.having) {
      _this.having = buildCondition(config.having, baseObjectName, true);
    }

    if (_this.subtotal && !/^(ROLLUP|CUBE)$/i.test(_this.subtotal)) {
      console.warn("The given value does not match to the grouping subtotal type", _this.subtotal);
    }

    return _this;
  }
  /**
   *
   */


  _createClass(Grouping, [{
    key: "toSOQL",
    value: function toSOQL() {
      return ["GROUP BY"].concat(_toConsumableArray(this.subtotal ? [this.subtotal] : []), [(this.subtotal ? "(" : "") + this.fields.map(function (field) {
        return field.toSOQL();
      }).join(", ") + (this.subtotal ? ")" : "")], _toConsumableArray(this.having ? ["HAVING", this.having.toSOQL()] : [])).join(" ");
    }
  }]);

  return Grouping;
}(QueryElement);

export { Grouping as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Hcm91cGluZy50cyJdLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJidWlsZEZpZWxkIiwiYnVpbGRDb25kaXRpb24iLCJHcm91cGluZyIsImNvbmZpZyIsImJhc2VPYmplY3ROYW1lIiwiZmllbGRzIiwibWFwIiwiZmllbGQiLCJzdWJ0b3RhbCIsImhhdmluZyIsInRlc3QiLCJjb25zb2xlIiwid2FybiIsInRvU09RTCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0EsWUFBUCxNQUF5QixnQkFBekI7QUFHQSxPQUFPQyxVQUFQLE1BQXVCLGNBQXZCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixrQkFBM0I7QUFFQTs7OztBQVNBOzs7SUFHcUJDLFE7Ozs7O0FBS25COzs7QUFHQSxvQkFBWUMsTUFBWixFQUFrREMsY0FBbEQsRUFBMEU7QUFBQTs7QUFBQTs7QUFDeEU7QUFDQSxVQUFLQyxNQUFMLEdBQWNGLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQyxHQUFkLENBQWtCLFVBQUFDLEtBQUs7QUFBQSxhQUFJUCxVQUFVLENBQUNPLEtBQUQsRUFBUUgsY0FBUixDQUFkO0FBQUEsS0FBdkIsQ0FBZDtBQUNBLFVBQUtJLFFBQUwsR0FBZ0JMLE1BQU0sQ0FBQ0ssUUFBdkI7O0FBQ0EsUUFBSUwsTUFBTSxDQUFDTSxNQUFYLEVBQW1CO0FBQ2pCLFlBQUtBLE1BQUwsR0FBY1IsY0FBYyxDQUFDRSxNQUFNLENBQUNNLE1BQVIsRUFBZ0JMLGNBQWhCLEVBQWdDLElBQWhDLENBQTVCO0FBQ0Q7O0FBQ0QsUUFBSSxNQUFLSSxRQUFMLElBQWlCLENBQUMsbUJBQW1CRSxJQUFuQixDQUF3QixNQUFLRixRQUE3QixDQUF0QixFQUE4RDtBQUM1REcsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQ0UsOERBREYsRUFFRSxNQUFLSixRQUZQO0FBSUQ7O0FBWnVFO0FBYXpFO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUCxhQUFPLENBQ0wsVUFESyw0QkFFRCxLQUFLQSxRQUFMLEdBQWdCLENBQUMsS0FBS0EsUUFBTixDQUFoQixHQUFrQyxFQUZqQyxJQUdMLENBQUMsS0FBS0EsUUFBTCxHQUFnQixHQUFoQixHQUFzQixFQUF2QixJQUNFLEtBQUtILE1BQUwsQ0FBWUMsR0FBWixDQUFnQixVQUFBQyxLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDTSxNQUFOLEVBQUo7QUFBQSxPQUFyQixFQUF5Q0MsSUFBekMsQ0FBOEMsSUFBOUMsQ0FERixJQUVHLEtBQUtOLFFBQUwsR0FBZ0IsR0FBaEIsR0FBc0IsRUFGekIsQ0FISyxzQkFNRCxLQUFLQyxNQUFMLEdBQWMsQ0FBQyxRQUFELEVBQVcsS0FBS0EsTUFBTCxDQUFZSSxNQUFaLEVBQVgsQ0FBZCxHQUFpRCxFQU5oRCxHQU9MQyxJQVBLLENBT0EsR0FQQSxDQUFQO0FBUUQ7Ozs7RUFuQ21DZixZOztTQUFqQkcsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ1dGlsaXR5LXR5cGVzXCI7XG5pbXBvcnQgUXVlcnlFbGVtZW50IGZyb20gXCIuL1F1ZXJ5RWxlbWVudFwiO1xuaW1wb3J0IEZpZWxkLCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBDb25kaXRpb24sIHsgQ29uZGl0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5pbXBvcnQgYnVpbGRGaWVsZCBmcm9tIFwiLi9idWlsZEZpZWxkXCI7XG5pbXBvcnQgYnVpbGRDb25kaXRpb24gZnJvbSBcIi4vYnVpbGRDb25kaXRpb25cIjtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBHcm91cGluZ0NvbmZpZyA9IHtcbiAgZmllbGRzOiBGaWVsZENvbmZpZ1tdO1xuICBzdWJ0b3RhbD86IHN0cmluZztcbiAgaGF2aW5nPzogQ29uZGl0aW9uQ29uZmlnO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cGluZyBleHRlbmRzIFF1ZXJ5RWxlbWVudCB7XG4gIGZpZWxkczogRmllbGRbXTtcbiAgc3VidG90YWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgaGF2aW5nOiBDb25kaXRpb24gfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IERlZXBSZWFkb25seTxHcm91cGluZ0NvbmZpZz4sIGJhc2VPYmplY3ROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZmllbGRzID0gY29uZmlnLmZpZWxkcy5tYXAoZmllbGQgPT4gYnVpbGRGaWVsZChmaWVsZCwgYmFzZU9iamVjdE5hbWUpKTtcbiAgICB0aGlzLnN1YnRvdGFsID0gY29uZmlnLnN1YnRvdGFsO1xuICAgIGlmIChjb25maWcuaGF2aW5nKSB7XG4gICAgICB0aGlzLmhhdmluZyA9IGJ1aWxkQ29uZGl0aW9uKGNvbmZpZy5oYXZpbmcsIGJhc2VPYmplY3ROYW1lLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3VidG90YWwgJiYgIS9eKFJPTExVUHxDVUJFKSQvaS50ZXN0KHRoaXMuc3VidG90YWwpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiVGhlIGdpdmVuIHZhbHVlIGRvZXMgbm90IG1hdGNoIHRvIHRoZSBncm91cGluZyBzdWJ0b3RhbCB0eXBlXCIsXG4gICAgICAgIHRoaXMuc3VidG90YWxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFwiR1JPVVAgQllcIixcbiAgICAgIC4uLih0aGlzLnN1YnRvdGFsID8gW3RoaXMuc3VidG90YWxdIDogW10pLFxuICAgICAgKHRoaXMuc3VidG90YWwgPyBcIihcIiA6IFwiXCIpICtcbiAgICAgICAgdGhpcy5maWVsZHMubWFwKGZpZWxkID0+IGZpZWxkLnRvU09RTCgpKS5qb2luKFwiLCBcIikgK1xuICAgICAgICAodGhpcy5zdWJ0b3RhbCA/IFwiKVwiIDogXCJcIiksXG4gICAgICAuLi4odGhpcy5oYXZpbmcgPyBbXCJIQVZJTkdcIiwgdGhpcy5oYXZpbmcudG9TT1FMKCldIDogW10pXG4gICAgXS5qb2luKFwiIFwiKTtcbiAgfVxufVxuIl19