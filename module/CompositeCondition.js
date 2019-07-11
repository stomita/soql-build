function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import Condition from "./Condition";
import buildCondition from "./buildCondition";

/**
 *
 */
var CompositeCondition =
/*#__PURE__*/
function (_Condition) {
  _inherits(CompositeCondition, _Condition);

  /**
   *
   */
  function CompositeCondition(config, baseObjectName) {
    var _this;

    var stripParens = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, CompositeCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CompositeCondition).call(this));
    _this.operator = config.operator;
    _this.conditions = config.conditions.map(function (cond) {
      return buildCondition(cond, baseObjectName, false);
    });
    _this.stripParens = stripParens;
    return _this;
  }
  /**
   *
   */


  _createClass(CompositeCondition, [{
    key: "toSOQL",
    value: function toSOQL() {
      var condition = this.conditions.map(function (c) {
        return c.toSOQL();
      }).join(" " + this.operator + " ");
      return condition.length > 0 && !this.stripParens ? "(" + condition + ")" : condition;
    }
  }]);

  return CompositeCondition;
}(Condition);

export { CompositeCondition as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb3NpdGVDb25kaXRpb24udHMiXSwibmFtZXMiOlsiQ29uZGl0aW9uIiwiYnVpbGRDb25kaXRpb24iLCJDb21wb3NpdGVDb25kaXRpb24iLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsInN0cmlwUGFyZW5zIiwib3BlcmF0b3IiLCJjb25kaXRpb25zIiwibWFwIiwiY29uZCIsImNvbmRpdGlvbiIsImMiLCJ0b1NPUUwiLCJqb2luIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixrQkFBM0I7O0FBR0E7OztJQUdxQkMsa0I7Ozs7O0FBS25COzs7QUFHQSw4QkFDRUMsTUFERixFQUVFQyxjQUZGLEVBSUU7QUFBQTs7QUFBQSxRQURBQyxXQUNBLHVFQUR1QixLQUN2Qjs7QUFBQTs7QUFDQTtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JILE1BQU0sQ0FBQ0csUUFBdkI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCSixNQUFNLENBQUNJLFVBQVAsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUFDLElBQUk7QUFBQSxhQUMxQ1IsY0FBYyxDQUFDUSxJQUFELEVBQU9MLGNBQVAsRUFBdUIsS0FBdkIsQ0FENEI7QUFBQSxLQUExQixDQUFsQjtBQUdBLFVBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBTkE7QUFPRDtBQUVEOzs7Ozs7OzZCQUdTO0FBQ1AsVUFBTUssU0FBUyxHQUFHLEtBQUtILFVBQUwsQ0FDZkMsR0FEZSxDQUNYLFVBQUFHLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLE1BQUYsRUFBSjtBQUFBLE9BRFUsRUFFZkMsSUFGZSxDQUVWLE1BQU0sS0FBS1AsUUFBWCxHQUFzQixHQUZaLENBQWxCO0FBR0EsYUFBT0ksU0FBUyxDQUFDSSxNQUFWLEdBQW1CLENBQW5CLElBQXdCLENBQUMsS0FBS1QsV0FBOUIsR0FDSCxNQUFNSyxTQUFOLEdBQWtCLEdBRGYsR0FFSEEsU0FGSjtBQUdEOzs7O0VBL0I2Q1YsUzs7U0FBM0JFLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVlcFJlYWRvbmx5IH0gZnJvbSBcInV0aWxpdHktdHlwZXNcIjtcbmltcG9ydCBDb25kaXRpb24gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5pbXBvcnQgYnVpbGRDb25kaXRpb24gZnJvbSBcIi4vYnVpbGRDb25kaXRpb25cIjtcbmltcG9ydCB7IENvbXBvc2l0ZUNvbmRpdGlvbkNvbmZpZyB9IGZyb20gXCIuL0NvbmRpdGlvblwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZUNvbmRpdGlvbiBleHRlbmRzIENvbmRpdGlvbiB7XG4gIG9wZXJhdG9yOiBcIkFORFwiIHwgXCJPUlwiO1xuICBjb25kaXRpb25zOiBDb25kaXRpb25bXTtcbiAgc3RyaXBQYXJlbnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IERlZXBSZWFkb25seTxDb21wb3NpdGVDb25kaXRpb25Db25maWc+LFxuICAgIGJhc2VPYmplY3ROYW1lOiBzdHJpbmcsXG4gICAgc3RyaXBQYXJlbnM6IGJvb2xlYW4gPSBmYWxzZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3BlcmF0b3IgPSBjb25maWcub3BlcmF0b3I7XG4gICAgdGhpcy5jb25kaXRpb25zID0gY29uZmlnLmNvbmRpdGlvbnMubWFwKGNvbmQgPT5cbiAgICAgIGJ1aWxkQ29uZGl0aW9uKGNvbmQsIGJhc2VPYmplY3ROYW1lLCBmYWxzZSlcbiAgICApO1xuICAgIHRoaXMuc3RyaXBQYXJlbnMgPSBzdHJpcFBhcmVucztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uc1xuICAgICAgLm1hcChjID0+IGMudG9TT1FMKCkpXG4gICAgICAuam9pbihcIiBcIiArIHRoaXMub3BlcmF0b3IgKyBcIiBcIik7XG4gICAgcmV0dXJuIGNvbmRpdGlvbi5sZW5ndGggPiAwICYmICF0aGlzLnN0cmlwUGFyZW5zXG4gICAgICA/IFwiKFwiICsgY29uZGl0aW9uICsgXCIpXCJcbiAgICAgIDogY29uZGl0aW9uO1xuICB9XG59XG4iXX0=