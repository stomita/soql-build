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
import { createOperand } from "./Operand";
import buildField from "./buildField";
/**
 *
 */

var SingleCondition =
/*#__PURE__*/
function (_Condition) {
  _inherits(SingleCondition, _Condition);

  /**
   *
   */
  function SingleCondition(config, baseObjectName) {
    var _this;

    _classCallCheck(this, SingleCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleCondition).call(this));
    _this.operator = config.operator;
    _this.field = buildField(config.field, baseObjectName);
    var value = createOperand(config.value);

    if (value == null) {
      throw new Error();
    }

    _this.value = value;
    return _this;
  }
  /**
   *
   */


  _createClass(SingleCondition, [{
    key: "toSOQL",
    value: function toSOQL() {
      return this.field.toSOQL() + " " + this.operator + " " + this.value.toSOQL();
    }
  }]);

  return SingleCondition;
}(Condition);

export { SingleCondition as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TaW5nbGVDb25kaXRpb24udHMiXSwibmFtZXMiOlsiQ29uZGl0aW9uIiwiY3JlYXRlT3BlcmFuZCIsImJ1aWxkRmllbGQiLCJTaW5nbGVDb25kaXRpb24iLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsIm9wZXJhdG9yIiwiZmllbGQiLCJ2YWx1ZSIsIkVycm9yIiwidG9TT1FMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxTQUFQLE1BQWlELGFBQWpEO0FBQ0EsU0FBa0JDLGFBQWxCLFFBQXVDLFdBQXZDO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixjQUF2QjtBQUVBOzs7O0lBR3FCQyxlOzs7OztBQUtuQjs7O0FBR0EsMkJBQVlDLE1BQVosRUFBMkNDLGNBQTNDLEVBQW1FO0FBQUE7O0FBQUE7O0FBQ2pFO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkYsTUFBTSxDQUFDRSxRQUF2QjtBQUNBLFVBQUtDLEtBQUwsR0FBYUwsVUFBVSxDQUFDRSxNQUFNLENBQUNHLEtBQVIsRUFBZUYsY0FBZixDQUF2QjtBQUNBLFFBQU1HLEtBQUssR0FBR1AsYUFBYSxDQUFDRyxNQUFNLENBQUNJLEtBQVIsQ0FBM0I7O0FBQ0EsUUFBSUEsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDakIsWUFBTSxJQUFJQyxLQUFKLEVBQU47QUFDRDs7QUFDRCxVQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFSaUU7QUFTbEU7QUFFRDs7Ozs7Ozs2QkFHUztBQUNQLGFBQ0UsS0FBS0QsS0FBTCxDQUFXRyxNQUFYLEtBQXNCLEdBQXRCLEdBQTRCLEtBQUtKLFFBQWpDLEdBQTRDLEdBQTVDLEdBQWtELEtBQUtFLEtBQUwsQ0FBV0UsTUFBWCxFQURwRDtBQUdEOzs7O0VBMUIwQ1YsUzs7U0FBeEJHLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBDb25kaXRpb24sIHsgU2luZ2xlQ29uZGl0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5pbXBvcnQgT3BlcmFuZCwgeyBjcmVhdGVPcGVyYW5kIH0gZnJvbSBcIi4vT3BlcmFuZFwiO1xuaW1wb3J0IGJ1aWxkRmllbGQgZnJvbSBcIi4vYnVpbGRGaWVsZFwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZUNvbmRpdGlvbiBleHRlbmRzIENvbmRpdGlvbiB7XG4gIG9wZXJhdG9yOiBzdHJpbmc7XG4gIGZpZWxkOiBGaWVsZDtcbiAgdmFsdWU6IE9wZXJhbmQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IFNpbmdsZUNvbmRpdGlvbkNvbmZpZywgYmFzZU9iamVjdE5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcGVyYXRvciA9IGNvbmZpZy5vcGVyYXRvcjtcbiAgICB0aGlzLmZpZWxkID0gYnVpbGRGaWVsZChjb25maWcuZmllbGQsIGJhc2VPYmplY3ROYW1lKTtcbiAgICBjb25zdCB2YWx1ZSA9IGNyZWF0ZU9wZXJhbmQoY29uZmlnLnZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZpZWxkLnRvU09RTCgpICsgXCIgXCIgKyB0aGlzLm9wZXJhdG9yICsgXCIgXCIgKyB0aGlzLnZhbHVlLnRvU09RTCgpXG4gICAgKTtcbiAgfVxufVxuIl19