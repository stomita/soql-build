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
import SortInfo from "./SortInfo";
import Grouping from "./Grouping";
import buildCondition from "./buildCondition";
import buildField from "./buildField";
/**
 *
 */

/**
 *
 */
var Query =
/*#__PURE__*/
function (_QueryElement) {
  _inherits(Query, _QueryElement);

  /**
   *
   */
  function Query(config) {
    var _this;

    _classCallCheck(this, Query);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Query).call(this));
    _this.table = config.table;
    _this.scope = config.scope;
    _this.fields = (config.fields || []).map(function (field) {
      return buildField(field, _this.table);
    });

    if (config.condition) {
      _this.condition = buildCondition(config.condition, _this.table, true);
    }

    if (config.sortInfo) {
      _this.sortInfo = config.sortInfo.map(function (s) {
        return new SortInfo(s, _this.table);
      });
    }

    if (config.grouping) {
      _this.grouping = new Grouping(config.grouping, _this.table);
    }

    _this.limit = config.limit;
    _this.offset = config.offset;
    return _this;
  }
  /**
   *
   */


  _createClass(Query, [{
    key: "toSOQL",
    value: function toSOQL() {
      return ["SELECT", this.fields.map(function (field) {
        return field.toSOQL();
      }).join(", "), "FROM", this.table].concat(_toConsumableArray(this.scope ? ["USING SCOPE", this.scope] : []), _toConsumableArray(this.condition ? ["WHERE", this.condition.toSOQL()] : []), _toConsumableArray(this.sortInfo && this.sortInfo.length > 0 ? ["ORDER BY", this.sortInfo.map(function (s) {
        return s.toSOQL();
      }).join(", ")] : []), _toConsumableArray(this.grouping ? [this.grouping.toSOQL()] : []), _toConsumableArray(typeof this.limit !== "undefined" ? ["LIMIT", String(this.limit)] : []), _toConsumableArray(typeof this.offset !== "undefined" ? ["OFFSET", String(this.offset)] : [])).join(" ");
    }
  }]);

  return Query;
}(QueryElement);

export { Query as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9RdWVyeS50cyJdLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJTb3J0SW5mbyIsIkdyb3VwaW5nIiwiYnVpbGRDb25kaXRpb24iLCJidWlsZEZpZWxkIiwiUXVlcnkiLCJjb25maWciLCJ0YWJsZSIsInNjb3BlIiwiZmllbGRzIiwibWFwIiwiZmllbGQiLCJjb25kaXRpb24iLCJzb3J0SW5mbyIsInMiLCJncm91cGluZyIsImxpbWl0Iiwib2Zmc2V0IiwidG9TT1FMIiwiam9pbiIsImxlbmd0aCIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxZQUFQLE1BQXlCLGdCQUF6QjtBQUdBLE9BQU9DLFFBQVAsTUFBeUMsWUFBekM7QUFDQSxPQUFPQyxRQUFQLE1BQXlDLFlBQXpDO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixrQkFBM0I7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGNBQXZCO0FBRUE7Ozs7QUFjQTs7O0lBR3FCQyxLOzs7OztBQVVuQjs7O0FBR0EsaUJBQVlDLE1BQVosRUFBK0M7QUFBQTs7QUFBQTs7QUFDN0M7QUFDQSxVQUFLQyxLQUFMLEdBQWFELE1BQU0sQ0FBQ0MsS0FBcEI7QUFDQSxVQUFLQyxLQUFMLEdBQWFGLE1BQU0sQ0FBQ0UsS0FBcEI7QUFDQSxVQUFLQyxNQUFMLEdBQWMsQ0FBQ0gsTUFBTSxDQUFDRyxNQUFQLElBQWlCLEVBQWxCLEVBQXNCQyxHQUF0QixDQUEwQixVQUFBQyxLQUFLO0FBQUEsYUFDM0NQLFVBQVUsQ0FBQ08sS0FBRCxFQUFRLE1BQUtKLEtBQWIsQ0FEaUM7QUFBQSxLQUEvQixDQUFkOztBQUdBLFFBQUlELE1BQU0sQ0FBQ00sU0FBWCxFQUFzQjtBQUNwQixZQUFLQSxTQUFMLEdBQWlCVCxjQUFjLENBQUNHLE1BQU0sQ0FBQ00sU0FBUixFQUFtQixNQUFLTCxLQUF4QixFQUErQixJQUEvQixDQUEvQjtBQUNEOztBQUNELFFBQUlELE1BQU0sQ0FBQ08sUUFBWCxFQUFxQjtBQUNuQixZQUFLQSxRQUFMLEdBQWdCUCxNQUFNLENBQUNPLFFBQVAsQ0FBZ0JILEdBQWhCLENBQW9CLFVBQUFJLENBQUM7QUFBQSxlQUFJLElBQUliLFFBQUosQ0FBYWEsQ0FBYixFQUFnQixNQUFLUCxLQUFyQixDQUFKO0FBQUEsT0FBckIsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJRCxNQUFNLENBQUNTLFFBQVgsRUFBcUI7QUFDbkIsWUFBS0EsUUFBTCxHQUFnQixJQUFJYixRQUFKLENBQWFJLE1BQU0sQ0FBQ1MsUUFBcEIsRUFBOEIsTUFBS1IsS0FBbkMsQ0FBaEI7QUFDRDs7QUFDRCxVQUFLUyxLQUFMLEdBQWFWLE1BQU0sQ0FBQ1UsS0FBcEI7QUFDQSxVQUFLQyxNQUFMLEdBQWNYLE1BQU0sQ0FBQ1csTUFBckI7QUFqQjZDO0FBa0I5QztBQUVEOzs7Ozs7OzZCQUdTO0FBQ1AsYUFBTyxDQUNMLFFBREssRUFFTCxLQUFLUixNQUFMLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ08sTUFBTixFQUFKO0FBQUEsT0FBckIsRUFBeUNDLElBQXpDLENBQThDLElBQTlDLENBRkssRUFHTCxNQUhLLEVBSUwsS0FBS1osS0FKQSw0QkFLRCxLQUFLQyxLQUFMLEdBQWEsQ0FBQyxhQUFELEVBQWdCLEtBQUtBLEtBQXJCLENBQWIsR0FBMkMsRUFMMUMsc0JBTUQsS0FBS0ksU0FBTCxHQUFpQixDQUFDLE9BQUQsRUFBVSxLQUFLQSxTQUFMLENBQWVNLE1BQWYsRUFBVixDQUFqQixHQUFzRCxFQU5yRCxzQkFPRCxLQUFLTCxRQUFMLElBQWlCLEtBQUtBLFFBQUwsQ0FBY08sTUFBZCxHQUF1QixDQUF4QyxHQUNBLENBQUMsVUFBRCxFQUFhLEtBQUtQLFFBQUwsQ0FBY0gsR0FBZCxDQUFrQixVQUFBSSxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDSSxNQUFGLEVBQUo7QUFBQSxPQUFuQixFQUFtQ0MsSUFBbkMsQ0FBd0MsSUFBeEMsQ0FBYixDQURBLEdBRUEsRUFUQyxzQkFVRCxLQUFLSixRQUFMLEdBQWdCLENBQUMsS0FBS0EsUUFBTCxDQUFjRyxNQUFkLEVBQUQsQ0FBaEIsR0FBMkMsRUFWMUMsc0JBV0QsT0FBTyxLQUFLRixLQUFaLEtBQXNCLFdBQXRCLEdBQ0EsQ0FBQyxPQUFELEVBQVVLLE1BQU0sQ0FBQyxLQUFLTCxLQUFOLENBQWhCLENBREEsR0FFQSxFQWJDLHNCQWNELE9BQU8sS0FBS0MsTUFBWixLQUF1QixXQUF2QixHQUNBLENBQUMsUUFBRCxFQUFXSSxNQUFNLENBQUMsS0FBS0osTUFBTixDQUFqQixDQURBLEdBRUEsRUFoQkMsR0FpQkxFLElBakJLLENBaUJBLEdBakJBLENBQVA7QUFrQkQ7Ozs7RUF2RGdDbkIsWTs7U0FBZEssSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ1dGlsaXR5LXR5cGVzXCI7XG5pbXBvcnQgUXVlcnlFbGVtZW50IGZyb20gXCIuL1F1ZXJ5RWxlbWVudFwiO1xuaW1wb3J0IEZpZWxkLCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBDb25kaXRpb24sIHsgQ29uZGl0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5pbXBvcnQgU29ydEluZm8sIHsgU29ydEluZm9Db25maWcgfSBmcm9tIFwiLi9Tb3J0SW5mb1wiO1xuaW1wb3J0IEdyb3VwaW5nLCB7IEdyb3VwaW5nQ29uZmlnIH0gZnJvbSBcIi4vR3JvdXBpbmdcIjtcbmltcG9ydCBidWlsZENvbmRpdGlvbiBmcm9tIFwiLi9idWlsZENvbmRpdGlvblwiO1xuaW1wb3J0IGJ1aWxkRmllbGQgZnJvbSBcIi4vYnVpbGRGaWVsZFwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIFF1ZXJ5Q29uZmlnID0ge1xuICBmaWVsZHM6IEZpZWxkQ29uZmlnW107XG4gIHRhYmxlOiBzdHJpbmc7XG4gIHNjb3BlPzogc3RyaW5nO1xuICBjb25kaXRpb24/OiBDb25kaXRpb25Db25maWc7XG4gIHNvcnRJbmZvPzogU29ydEluZm9Db25maWdbXTtcbiAgZ3JvdXBpbmc/OiBHcm91cGluZ0NvbmZpZztcbiAgbGltaXQ/OiBudW1iZXI7XG4gIG9mZnNldD86IG51bWJlcjtcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnkgZXh0ZW5kcyBRdWVyeUVsZW1lbnQge1xuICBmaWVsZHM6IEZpZWxkW107XG4gIHRhYmxlOiBzdHJpbmc7XG4gIHNjb3BlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uIHwgdW5kZWZpbmVkO1xuICBzb3J0SW5mbzogU29ydEluZm9bXSB8IHVuZGVmaW5lZDtcbiAgZ3JvdXBpbmc6IEdyb3VwaW5nIHwgdW5kZWZpbmVkO1xuICBsaW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBvZmZzZXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogRGVlcFJlYWRvbmx5PFF1ZXJ5Q29uZmlnPikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50YWJsZSA9IGNvbmZpZy50YWJsZTtcbiAgICB0aGlzLnNjb3BlID0gY29uZmlnLnNjb3BlO1xuICAgIHRoaXMuZmllbGRzID0gKGNvbmZpZy5maWVsZHMgfHwgW10pLm1hcChmaWVsZCA9PlxuICAgICAgYnVpbGRGaWVsZChmaWVsZCwgdGhpcy50YWJsZSlcbiAgICApO1xuICAgIGlmIChjb25maWcuY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLmNvbmRpdGlvbiA9IGJ1aWxkQ29uZGl0aW9uKGNvbmZpZy5jb25kaXRpb24sIHRoaXMudGFibGUsIHRydWUpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLnNvcnRJbmZvKSB7XG4gICAgICB0aGlzLnNvcnRJbmZvID0gY29uZmlnLnNvcnRJbmZvLm1hcChzID0+IG5ldyBTb3J0SW5mbyhzLCB0aGlzLnRhYmxlKSk7XG4gICAgfVxuICAgIGlmIChjb25maWcuZ3JvdXBpbmcpIHtcbiAgICAgIHRoaXMuZ3JvdXBpbmcgPSBuZXcgR3JvdXBpbmcoY29uZmlnLmdyb3VwaW5nLCB0aGlzLnRhYmxlKTtcbiAgICB9XG4gICAgdGhpcy5saW1pdCA9IGNvbmZpZy5saW1pdDtcbiAgICB0aGlzLm9mZnNldCA9IGNvbmZpZy5vZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgXCJTRUxFQ1RcIixcbiAgICAgIHRoaXMuZmllbGRzLm1hcChmaWVsZCA9PiBmaWVsZC50b1NPUUwoKSkuam9pbihcIiwgXCIpLFxuICAgICAgXCJGUk9NXCIsXG4gICAgICB0aGlzLnRhYmxlLFxuICAgICAgLi4uKHRoaXMuc2NvcGUgPyBbXCJVU0lORyBTQ09QRVwiLCB0aGlzLnNjb3BlXSA6IFtdKSxcbiAgICAgIC4uLih0aGlzLmNvbmRpdGlvbiA/IFtcIldIRVJFXCIsIHRoaXMuY29uZGl0aW9uLnRvU09RTCgpXSA6IFtdKSxcbiAgICAgIC4uLih0aGlzLnNvcnRJbmZvICYmIHRoaXMuc29ydEluZm8ubGVuZ3RoID4gMFxuICAgICAgICA/IFtcIk9SREVSIEJZXCIsIHRoaXMuc29ydEluZm8ubWFwKHMgPT4gcy50b1NPUUwoKSkuam9pbihcIiwgXCIpXVxuICAgICAgICA6IFtdKSxcbiAgICAgIC4uLih0aGlzLmdyb3VwaW5nID8gW3RoaXMuZ3JvdXBpbmcudG9TT1FMKCldIDogW10pLFxuICAgICAgLi4uKHR5cGVvZiB0aGlzLmxpbWl0ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgID8gW1wiTElNSVRcIiwgU3RyaW5nKHRoaXMubGltaXQpXVxuICAgICAgICA6IFtdKSxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5vZmZzZXQgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgPyBbXCJPRkZTRVRcIiwgU3RyaW5nKHRoaXMub2Zmc2V0KV1cbiAgICAgICAgOiBbXSlcbiAgICBdLmpvaW4oXCIgXCIpO1xuICB9XG59XG4iXX0=