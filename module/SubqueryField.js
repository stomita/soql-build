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

import Field from "./Field";
import SortInfo from "./SortInfo";
import buildField from "./buildField";
import buildCondition from "./buildCondition";
/**
 *
 */

var SubqueryField =
/*#__PURE__*/
function (_Field) {
  _inherits(SubqueryField, _Field);

  /**
   *
   */
  function SubqueryField(config, baseObjectName) {
    var _this;

    _classCallCheck(this, SubqueryField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubqueryField).call(this));
    _this.fields = config.fields.map(function (field) {
      return buildField(field, baseObjectName);
    });
    _this.relationship = config.relationship;

    if (config.condition) {
      _this.condition = buildCondition(config.condition, baseObjectName, true);
    }

    if (config.sortInfo) {
      _this.sortInfo = config.sortInfo.map(function (sortInfo) {
        return new SortInfo(sortInfo, baseObjectName);
      });
    }

    _this.limit = config.limit;
    _this.offset = config.offset;
    return _this;
  }
  /**
   *
   */


  _createClass(SubqueryField, [{
    key: "toSOQL",
    value: function toSOQL() {
      return "(" + ["SELECT", this.fields.map(function (field) {
        return field.toSOQL();
      }).join(", "), "FROM", this.relationship].concat(_toConsumableArray(this.condition ? ["WHERE", this.condition.toSOQL()] : []), _toConsumableArray(this.sortInfo && this.sortInfo.length > 0 ? ["ORDER BY", this.sortInfo.map(function (s) {
        return s.toSOQL();
      }).join(", ")] : []), _toConsumableArray(typeof this.limit !== "undefined" ? ["LIMIT", String(this.limit)] : []), _toConsumableArray(typeof this.offset !== "undefined" ? ["OFFSET", String(this.offset)] : [])).join(" ") + ")";
    }
  }]);

  return SubqueryField;
}(Field);

export { SubqueryField as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TdWJxdWVyeUZpZWxkLnRzIl0sIm5hbWVzIjpbIkZpZWxkIiwiU29ydEluZm8iLCJidWlsZEZpZWxkIiwiYnVpbGRDb25kaXRpb24iLCJTdWJxdWVyeUZpZWxkIiwiY29uZmlnIiwiYmFzZU9iamVjdE5hbWUiLCJmaWVsZHMiLCJtYXAiLCJmaWVsZCIsInJlbGF0aW9uc2hpcCIsImNvbmRpdGlvbiIsInNvcnRJbmZvIiwibGltaXQiLCJvZmZzZXQiLCJ0b1NPUUwiLCJqb2luIiwibGVuZ3RoIiwicyIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxLQUFQLE1BQTJDLFNBQTNDO0FBRUEsT0FBT0MsUUFBUCxNQUFxQixZQUFyQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsY0FBdkI7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLGtCQUEzQjtBQUVBOzs7O0lBR3FCQyxhOzs7OztBQVFuQjs7O0FBR0EseUJBQ0VDLE1BREYsRUFFRUMsY0FGRixFQUdFO0FBQUE7O0FBQUE7O0FBQ0E7QUFDQSxVQUFLQyxNQUFMLEdBQWNGLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQyxHQUFkLENBQWtCLFVBQUFDLEtBQUs7QUFBQSxhQUFJUCxVQUFVLENBQUNPLEtBQUQsRUFBUUgsY0FBUixDQUFkO0FBQUEsS0FBdkIsQ0FBZDtBQUNBLFVBQUtJLFlBQUwsR0FBb0JMLE1BQU0sQ0FBQ0ssWUFBM0I7O0FBQ0EsUUFBSUwsTUFBTSxDQUFDTSxTQUFYLEVBQXNCO0FBQ3BCLFlBQUtBLFNBQUwsR0FBaUJSLGNBQWMsQ0FBQ0UsTUFBTSxDQUFDTSxTQUFSLEVBQW1CTCxjQUFuQixFQUFtQyxJQUFuQyxDQUEvQjtBQUNEOztBQUNELFFBQUlELE1BQU0sQ0FBQ08sUUFBWCxFQUFxQjtBQUNuQixZQUFLQSxRQUFMLEdBQWdCUCxNQUFNLENBQUNPLFFBQVAsQ0FBZ0JKLEdBQWhCLENBQ2QsVUFBQUksUUFBUTtBQUFBLGVBQUksSUFBSVgsUUFBSixDQUFhVyxRQUFiLEVBQXVCTixjQUF2QixDQUFKO0FBQUEsT0FETSxDQUFoQjtBQUdEOztBQUNELFVBQUtPLEtBQUwsR0FBYVIsTUFBTSxDQUFDUSxLQUFwQjtBQUNBLFVBQUtDLE1BQUwsR0FBY1QsTUFBTSxDQUFDUyxNQUFyQjtBQWJBO0FBY0Q7QUFFRDs7Ozs7Ozs2QkFHUztBQUNQLGFBQ0UsTUFDQSxDQUNFLFFBREYsRUFFRSxLQUFLUCxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ00sTUFBTixFQUFKO0FBQUEsT0FBckIsRUFBeUNDLElBQXpDLENBQThDLElBQTlDLENBRkYsRUFHRSxNQUhGLEVBSUUsS0FBS04sWUFKUCw0QkFLTSxLQUFLQyxTQUFMLEdBQWlCLENBQUMsT0FBRCxFQUFVLEtBQUtBLFNBQUwsQ0FBZUksTUFBZixFQUFWLENBQWpCLEdBQXNELEVBTDVELHNCQU1NLEtBQUtILFFBQUwsSUFBaUIsS0FBS0EsUUFBTCxDQUFjSyxNQUFkLEdBQXVCLENBQXhDLEdBQ0EsQ0FBQyxVQUFELEVBQWEsS0FBS0wsUUFBTCxDQUFjSixHQUFkLENBQWtCLFVBQUFVLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNILE1BQUYsRUFBSjtBQUFBLE9BQW5CLEVBQW1DQyxJQUFuQyxDQUF3QyxJQUF4QyxDQUFiLENBREEsR0FFQSxFQVJOLHNCQVNNLE9BQU8sS0FBS0gsS0FBWixLQUFzQixXQUF0QixHQUNBLENBQUMsT0FBRCxFQUFVTSxNQUFNLENBQUMsS0FBS04sS0FBTixDQUFoQixDQURBLEdBRUEsRUFYTixzQkFZTSxPQUFPLEtBQUtDLE1BQVosS0FBdUIsV0FBdkIsR0FDQSxDQUFDLFFBQUQsRUFBV0ssTUFBTSxDQUFDLEtBQUtMLE1BQU4sQ0FBakIsQ0FEQSxHQUVBLEVBZE4sR0FlRUUsSUFmRixDQWVPLEdBZlAsQ0FEQSxHQWlCQSxHQWxCRjtBQW9CRDs7OztFQXREd0NoQixLOztTQUF0QkksYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ1dGlsaXR5LXR5cGVzXCI7XG5pbXBvcnQgRmllbGQsIHsgU3VicXVlcnlGaWVsZENvbmZpZyB9IGZyb20gXCIuL0ZpZWxkXCI7XG5pbXBvcnQgQ29uZGl0aW9uIGZyb20gXCIuL0NvbmRpdGlvblwiO1xuaW1wb3J0IFNvcnRJbmZvIGZyb20gXCIuL1NvcnRJbmZvXCI7XG5pbXBvcnQgYnVpbGRGaWVsZCBmcm9tIFwiLi9idWlsZEZpZWxkXCI7XG5pbXBvcnQgYnVpbGRDb25kaXRpb24gZnJvbSBcIi4vYnVpbGRDb25kaXRpb25cIjtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJxdWVyeUZpZWxkIGV4dGVuZHMgRmllbGQge1xuICBmaWVsZHM6IEZpZWxkW107XG4gIHJlbGF0aW9uc2hpcDogc3RyaW5nO1xuICBjb25kaXRpb246IENvbmRpdGlvbiB8IHVuZGVmaW5lZDtcbiAgc29ydEluZm86IFNvcnRJbmZvW10gfCB1bmRlZmluZWQ7XG4gIGxpbWl0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG9mZnNldDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY29uZmlnOiBEZWVwUmVhZG9ubHk8U3VicXVlcnlGaWVsZENvbmZpZz4sXG4gICAgYmFzZU9iamVjdE5hbWU6IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZmllbGRzID0gY29uZmlnLmZpZWxkcy5tYXAoZmllbGQgPT4gYnVpbGRGaWVsZChmaWVsZCwgYmFzZU9iamVjdE5hbWUpKTtcbiAgICB0aGlzLnJlbGF0aW9uc2hpcCA9IGNvbmZpZy5yZWxhdGlvbnNoaXA7XG4gICAgaWYgKGNvbmZpZy5jb25kaXRpb24pIHtcbiAgICAgIHRoaXMuY29uZGl0aW9uID0gYnVpbGRDb25kaXRpb24oY29uZmlnLmNvbmRpdGlvbiwgYmFzZU9iamVjdE5hbWUsIHRydWUpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLnNvcnRJbmZvKSB7XG4gICAgICB0aGlzLnNvcnRJbmZvID0gY29uZmlnLnNvcnRJbmZvLm1hcChcbiAgICAgICAgc29ydEluZm8gPT4gbmV3IFNvcnRJbmZvKHNvcnRJbmZvLCBiYXNlT2JqZWN0TmFtZSlcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMubGltaXQgPSBjb25maWcubGltaXQ7XG4gICAgdGhpcy5vZmZzZXQgPSBjb25maWcub2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFwiKFwiICtcbiAgICAgIFtcbiAgICAgICAgXCJTRUxFQ1RcIixcbiAgICAgICAgdGhpcy5maWVsZHMubWFwKGZpZWxkID0+IGZpZWxkLnRvU09RTCgpKS5qb2luKFwiLCBcIiksXG4gICAgICAgIFwiRlJPTVwiLFxuICAgICAgICB0aGlzLnJlbGF0aW9uc2hpcCxcbiAgICAgICAgLi4uKHRoaXMuY29uZGl0aW9uID8gW1wiV0hFUkVcIiwgdGhpcy5jb25kaXRpb24udG9TT1FMKCldIDogW10pLFxuICAgICAgICAuLi4odGhpcy5zb3J0SW5mbyAmJiB0aGlzLnNvcnRJbmZvLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IFtcIk9SREVSIEJZXCIsIHRoaXMuc29ydEluZm8ubWFwKHMgPT4gcy50b1NPUUwoKSkuam9pbihcIiwgXCIpXVxuICAgICAgICAgIDogW10pLFxuICAgICAgICAuLi4odHlwZW9mIHRoaXMubGltaXQgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICA/IFtcIkxJTUlUXCIsIFN0cmluZyh0aGlzLmxpbWl0KV1cbiAgICAgICAgICA6IFtdKSxcbiAgICAgICAgLi4uKHR5cGVvZiB0aGlzLm9mZnNldCAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgID8gW1wiT0ZGU0VUXCIsIFN0cmluZyh0aGlzLm9mZnNldCldXG4gICAgICAgICAgOiBbXSlcbiAgICAgIF0uam9pbihcIiBcIikgK1xuICAgICAgXCIpXCJcbiAgICApO1xuICB9XG59XG4iXX0=