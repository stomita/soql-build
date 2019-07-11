"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Condition2 = _interopRequireDefault(require("./Condition"));

var _Operand = require("./Operand");

var _buildField = _interopRequireDefault(require("./buildField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
    _this.field = (0, _buildField["default"])(config.field, baseObjectName);
    var value = (0, _Operand.createOperand)(config.value);

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
}(_Condition2["default"]);

exports["default"] = SingleCondition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TaW5nbGVDb25kaXRpb24udHMiXSwibmFtZXMiOlsiU2luZ2xlQ29uZGl0aW9uIiwiY29uZmlnIiwiYmFzZU9iamVjdE5hbWUiLCJvcGVyYXRvciIsImZpZWxkIiwidmFsdWUiLCJFcnJvciIsInRvU09RTCIsIkNvbmRpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQkEsZTs7Ozs7QUFLbkI7OztBQUdBLDJCQUNFQyxNQURGLEVBRUVDLGNBRkYsRUFHRTtBQUFBOztBQUFBOztBQUNBO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkYsTUFBTSxDQUFDRSxRQUF2QjtBQUNBLFVBQUtDLEtBQUwsR0FBYSw0QkFBV0gsTUFBTSxDQUFDRyxLQUFsQixFQUF5QkYsY0FBekIsQ0FBYjtBQUNBLFFBQU1HLEtBQUssR0FBRyw0QkFBY0osTUFBTSxDQUFDSSxLQUFyQixDQUFkOztBQUNBLFFBQUlBLEtBQUssSUFBSSxJQUFiLEVBQW1CO0FBQ2pCLFlBQU0sSUFBSUMsS0FBSixFQUFOO0FBQ0Q7O0FBQ0QsVUFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBUkE7QUFTRDtBQUVEOzs7Ozs7OzZCQUdTO0FBQ1AsYUFDRSxLQUFLRCxLQUFMLENBQVdHLE1BQVgsS0FBc0IsR0FBdEIsR0FBNEIsS0FBS0osUUFBakMsR0FBNEMsR0FBNUMsR0FBa0QsS0FBS0UsS0FBTCxDQUFXRSxNQUFYLEVBRHBEO0FBR0Q7Ozs7RUE3QjBDQyxzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ1dGlsaXR5LXR5cGVzXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBDb25kaXRpb24sIHsgU2luZ2xlQ29uZGl0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5pbXBvcnQgT3BlcmFuZCwgeyBjcmVhdGVPcGVyYW5kIH0gZnJvbSBcIi4vT3BlcmFuZFwiO1xuaW1wb3J0IGJ1aWxkRmllbGQgZnJvbSBcIi4vYnVpbGRGaWVsZFwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZUNvbmRpdGlvbiBleHRlbmRzIENvbmRpdGlvbiB7XG4gIG9wZXJhdG9yOiBzdHJpbmc7XG4gIGZpZWxkOiBGaWVsZDtcbiAgdmFsdWU6IE9wZXJhbmQ7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IERlZXBSZWFkb25seTxTaW5nbGVDb25kaXRpb25Db25maWc+LFxuICAgIGJhc2VPYmplY3ROYW1lOiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9wZXJhdG9yID0gY29uZmlnLm9wZXJhdG9yO1xuICAgIHRoaXMuZmllbGQgPSBidWlsZEZpZWxkKGNvbmZpZy5maWVsZCwgYmFzZU9iamVjdE5hbWUpO1xuICAgIGNvbnN0IHZhbHVlID0gY3JlYXRlT3BlcmFuZChjb25maWcudmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZmllbGQudG9TT1FMKCkgKyBcIiBcIiArIHRoaXMub3BlcmF0b3IgKyBcIiBcIiArIHRoaXMudmFsdWUudG9TT1FMKClcbiAgICApO1xuICB9XG59XG4iXX0=