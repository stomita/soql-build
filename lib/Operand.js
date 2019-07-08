"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOperand = createOperand;
exports.DateOperand = exports.ArrayOperand = exports.BooleanOperand = exports.NumberOperand = exports.StringOperand = exports.NullOperand = exports["default"] = void 0;

var _QueryElement2 = _interopRequireDefault(require("./QueryElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Operand =
/*#__PURE__*/
function (_QueryElement) {
  _inherits(Operand, _QueryElement);

  function Operand() {
    _classCallCheck(this, Operand);

    return _possibleConstructorReturn(this, _getPrototypeOf(Operand).apply(this, arguments));
  }

  return Operand;
}(_QueryElement2["default"]);
/**
 *
 */


exports["default"] = Operand;

/**
 *
 */
function createOperand(v) {
  if (v == null) {
    return new NullOperand();
  } else if (typeof v === "string") {
    return new StringOperand(v);
  } else if (typeof v === "number") {
    return new NumberOperand(v);
  } else if (typeof v === "boolean") {
    return new BooleanOperand(v);
  } else if (Array.isArray(v)) {
    return new ArrayOperand(v);
  } else {
    return new DateOperand(v.value);
  }
}
/**
 *
 */


var NullOperand =
/*#__PURE__*/
function (_Operand) {
  _inherits(NullOperand, _Operand);

  function NullOperand() {
    _classCallCheck(this, NullOperand);

    return _possibleConstructorReturn(this, _getPrototypeOf(NullOperand).apply(this, arguments));
  }

  _createClass(NullOperand, [{
    key: "toSOQL",

    /**
     *
     */
    value: function toSOQL() {
      return "null";
    }
  }]);

  return NullOperand;
}(Operand);
/**
 *
 */


exports.NullOperand = NullOperand;

var StringOperand =
/*#__PURE__*/
function (_Operand2) {
  _inherits(StringOperand, _Operand2);

  /**
   *
   */
  function StringOperand(value) {
    var _this;

    _classCallCheck(this, StringOperand);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StringOperand).call(this));
    _this.value = value;
    return _this;
  }
  /**
   *
   */


  _createClass(StringOperand, [{
    key: "toSOQL",
    value: function toSOQL() {
      return "'" + this.value.replace(/'/g, "\\'") + "'";
    }
  }]);

  return StringOperand;
}(Operand);
/**
 *
 */


exports.StringOperand = StringOperand;

var NumberOperand =
/*#__PURE__*/
function (_Operand3) {
  _inherits(NumberOperand, _Operand3);

  /**
   *
   */
  function NumberOperand(value) {
    var _this2;

    _classCallCheck(this, NumberOperand);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NumberOperand).call(this));
    _this2.value = value;
    return _this2;
  }
  /**
   *
   */


  _createClass(NumberOperand, [{
    key: "toSOQL",
    value: function toSOQL() {
      return String(this.value);
    }
  }]);

  return NumberOperand;
}(Operand);
/**
 *
 */


exports.NumberOperand = NumberOperand;

var BooleanOperand =
/*#__PURE__*/
function (_Operand4) {
  _inherits(BooleanOperand, _Operand4);

  /**
   *
   */
  function BooleanOperand(value) {
    var _this3;

    _classCallCheck(this, BooleanOperand);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(BooleanOperand).call(this));
    _this3.value = value;
    return _this3;
  }
  /**
   *
   */


  _createClass(BooleanOperand, [{
    key: "toSOQL",
    value: function toSOQL() {
      return String(this.value);
    }
  }]);

  return BooleanOperand;
}(Operand);
/**
 *
 */


exports.BooleanOperand = BooleanOperand;

var ArrayOperand =
/*#__PURE__*/
function (_Operand5) {
  _inherits(ArrayOperand, _Operand5);

  /**
   *
   */
  function ArrayOperand(values) {
    var _this4;

    _classCallCheck(this, ArrayOperand);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ArrayOperand).call(this));
    _this4.values = values.map(function (v) {
      return createOperand(v);
    });
    return _this4;
  }
  /**
   *
   */


  _createClass(ArrayOperand, [{
    key: "toSOQL",
    value: function toSOQL() {
      return "(" + this.values.map(function (o) {
        return o.toSOQL();
      }).join(", ") + ")";
    }
  }]);

  return ArrayOperand;
}(Operand);
/**
 *
 */


exports.ArrayOperand = ArrayOperand;
var DATE_OPERAND_REGEXP = /^(\d{4}-\d{2}-\d{2}(T\d{2}:?\d{2}:?\d{2}(\.\d+)?([+-]\d{2}:?\d{2}|Z))?|YESTERDAY|TODAY|TOMORROW|(NEXT|THIS|LAST)_(WEEK|MONTH|(FISCAL_)?(QUARTER|YEAR))|(NEXT|LAST)_90_DAYS|(NEXT|LAST)_N_(DAYS|WEEKS|MONTHS|(FISCAL_)?(QUARTERS|YEARS)):\d+)$/;
/**
 *
 */

var DateOperand =
/*#__PURE__*/
function (_Operand6) {
  _inherits(DateOperand, _Operand6);

  /**
   *
   */
  function DateOperand(value) {
    var _this5;

    _classCallCheck(this, DateOperand);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(DateOperand).call(this));
    _this5.value = value;

    if (!DATE_OPERAND_REGEXP.test(_this5.value)) {
      console.warn("The given value does not match to the pattern for date literal", _this5.value);
    }

    return _this5;
  }
  /**
   *
   */


  _createClass(DateOperand, [{
    key: "toSOQL",
    value: function toSOQL() {
      return this.value;
    }
  }]);

  return DateOperand;
}(Operand);

exports.DateOperand = DateOperand;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9PcGVyYW5kLnRzIl0sIm5hbWVzIjpbIk9wZXJhbmQiLCJRdWVyeUVsZW1lbnQiLCJjcmVhdGVPcGVyYW5kIiwidiIsIk51bGxPcGVyYW5kIiwiU3RyaW5nT3BlcmFuZCIsIk51bWJlck9wZXJhbmQiLCJCb29sZWFuT3BlcmFuZCIsIkFycmF5IiwiaXNBcnJheSIsIkFycmF5T3BlcmFuZCIsIkRhdGVPcGVyYW5kIiwidmFsdWUiLCJyZXBsYWNlIiwiU3RyaW5nIiwidmFsdWVzIiwibWFwIiwibyIsInRvU09RTCIsImpvaW4iLCJEQVRFX09QRVJBTkRfUkVHRVhQIiwidGVzdCIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdxQkEsTzs7Ozs7Ozs7Ozs7O0VBQWdCQyx5QjtBQUVyQzs7Ozs7OztBQWdDQTs7O0FBR08sU0FBU0MsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBa0Q7QUFDdkQsTUFBSUEsQ0FBQyxJQUFJLElBQVQsRUFBZTtBQUNiLFdBQU8sSUFBSUMsV0FBSixFQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0QsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ2hDLFdBQU8sSUFBSUUsYUFBSixDQUFrQkYsQ0FBbEIsQ0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUNoQyxXQUFPLElBQUlHLGFBQUosQ0FBa0JILENBQWxCLENBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSSxPQUFPQSxDQUFQLEtBQWEsU0FBakIsRUFBNEI7QUFDakMsV0FBTyxJQUFJSSxjQUFKLENBQW1CSixDQUFuQixDQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlLLEtBQUssQ0FBQ0MsT0FBTixDQUFjTixDQUFkLENBQUosRUFBc0I7QUFDM0IsV0FBTyxJQUFJTyxZQUFKLENBQWlCUCxDQUFqQixDQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBTyxJQUFJUSxXQUFKLENBQWdCUixDQUFDLENBQUNTLEtBQWxCLENBQVA7QUFDRDtBQUNGO0FBRUQ7Ozs7O0lBR2FSLFc7Ozs7Ozs7Ozs7Ozs7O0FBQ1g7Ozs2QkFHUztBQUNQLGFBQU8sTUFBUDtBQUNEOzs7O0VBTjhCSixPO0FBU2pDOzs7Ozs7O0lBR2FLLGE7Ozs7O0FBR1g7OztBQUdBLHlCQUFZTyxLQUFaLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3pCO0FBQ0EsVUFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBRnlCO0FBRzFCO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUCxhQUFPLE1BQU0sS0FBS0EsS0FBTCxDQUFXQyxPQUFYLENBQW1CLElBQW5CLEVBQXlCLEtBQXpCLENBQU4sR0FBd0MsR0FBL0M7QUFDRDs7OztFQWhCZ0NiLE87QUFtQm5DOzs7Ozs7O0lBR2FNLGE7Ozs7O0FBR1g7OztBQUdBLHlCQUFZTSxLQUFaLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3pCO0FBQ0EsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBRnlCO0FBRzFCO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUCxhQUFPRSxNQUFNLENBQUMsS0FBS0YsS0FBTixDQUFiO0FBQ0Q7Ozs7RUFoQmdDWixPO0FBbUJuQzs7Ozs7OztJQUdhTyxjOzs7OztBQUdYOzs7QUFHQSwwQkFBWUssS0FBWixFQUE0QjtBQUFBOztBQUFBOztBQUMxQjtBQUNBLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUYwQjtBQUczQjtBQUVEOzs7Ozs7OzZCQUdTO0FBQ1AsYUFBT0UsTUFBTSxDQUFDLEtBQUtGLEtBQU4sQ0FBYjtBQUNEOzs7O0VBaEJpQ1osTztBQW1CcEM7Ozs7Ozs7SUFHYVUsWTs7Ozs7QUFHWDs7O0FBR0Esd0JBQVlLLE1BQVosRUFBMkI7QUFBQTs7QUFBQTs7QUFDekI7QUFDQSxXQUFLQSxNQUFMLEdBQWNBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUFiLENBQUM7QUFBQSxhQUFJRCxhQUFhLENBQUNDLENBQUQsQ0FBakI7QUFBQSxLQUFaLENBQWQ7QUFGeUI7QUFHMUI7QUFFRDs7Ozs7Ozs2QkFHUztBQUNQLGFBQU8sTUFBTSxLQUFLWSxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsTUFBRixFQUFKO0FBQUEsT0FBakIsRUFBaUNDLElBQWpDLENBQXNDLElBQXRDLENBQU4sR0FBb0QsR0FBM0Q7QUFDRDs7OztFQWhCK0JuQixPO0FBbUJsQzs7Ozs7O0FBR0EsSUFBTW9CLG1CQUFtQixHQUFHLCtPQUE1QjtBQUVBOzs7O0lBR2FULFc7Ozs7O0FBR1g7OztBQUdBLHVCQUFZQyxLQUFaLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3pCO0FBQ0EsV0FBS0EsS0FBTCxHQUFhQSxLQUFiOztBQUNBLFFBQUksQ0FBQ1EsbUJBQW1CLENBQUNDLElBQXBCLENBQXlCLE9BQUtULEtBQTlCLENBQUwsRUFBMkM7QUFDekNVLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUNFLGdFQURGLEVBRUUsT0FBS1gsS0FGUDtBQUlEOztBQVJ3QjtBQVMxQjtBQUVEOzs7Ozs7OzZCQUdTO0FBQ1AsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs7RUF0QjhCWixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1ZXJ5RWxlbWVudCBmcm9tIFwiLi9RdWVyeUVsZW1lbnRcIjtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVyYW5kIGV4dGVuZHMgUXVlcnlFbGVtZW50IHt9XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgRGF0ZU9wZXJhbmRDb25maWcgPSB7XG4gIHR5cGU6IFwiZGF0ZVwiO1xuICB2YWx1ZTogc3RyaW5nO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBEYXRldGltZU9wZXJhbmRDb25maWcgPSB7XG4gIHR5cGU6IFwiZGF0ZXRpbWVcIjtcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbi8qKlxuICpcbiAqL1xudHlwZSBPcGVyYW5kUHJpbWl0aXZlID1cbiAgfCBudWxsXG4gIHwgc3RyaW5nXG4gIHwgbnVtYmVyXG4gIHwgYm9vbGVhblxuICB8IERhdGVPcGVyYW5kQ29uZmlnXG4gIHwgRGF0ZXRpbWVPcGVyYW5kQ29uZmlnO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIE9wZXJhbmRDb25maWcgPSBPcGVyYW5kUHJpbWl0aXZlIHwgT3BlcmFuZFByaW1pdGl2ZVtdO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYW5kKHY6IE9wZXJhbmRDb25maWcpOiBPcGVyYW5kIHtcbiAgaWYgKHYgPT0gbnVsbCkge1xuICAgIHJldHVybiBuZXcgTnVsbE9wZXJhbmQoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBuZXcgU3RyaW5nT3BlcmFuZCh2KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBuZXcgTnVtYmVyT3BlcmFuZCh2KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZXR1cm4gbmV3IEJvb2xlYW5PcGVyYW5kKHYpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodikpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5T3BlcmFuZCh2KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGVPcGVyYW5kKHYudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE51bGxPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBcIm51bGxcIjtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpbmdPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gXCInXCIgKyB0aGlzLnZhbHVlLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKSArIFwiJ1wiO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE51bWJlck9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWU6IG51bWJlcjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbk9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBBcnJheU9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWVzOiBPcGVyYW5kW107XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IGFueVtdKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcy5tYXAodiA9PiBjcmVhdGVPcGVyYW5kKHYpKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBcIihcIiArIHRoaXMudmFsdWVzLm1hcChvID0+IG8udG9TT1FMKCkpLmpvaW4oXCIsIFwiKSArIFwiKVwiO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgREFURV9PUEVSQU5EX1JFR0VYUCA9IC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KFRcXGR7Mn06P1xcZHsyfTo/XFxkezJ9KFxcLlxcZCspPyhbKy1dXFxkezJ9Oj9cXGR7Mn18WikpP3xZRVNURVJEQVl8VE9EQVl8VE9NT1JST1d8KE5FWFR8VEhJU3xMQVNUKV8oV0VFS3xNT05USHwoRklTQ0FMXyk/KFFVQVJURVJ8WUVBUikpfChORVhUfExBU1QpXzkwX0RBWVN8KE5FWFR8TEFTVClfTl8oREFZU3xXRUVLU3xNT05USFN8KEZJU0NBTF8pPyhRVUFSVEVSU3xZRUFSUykpOlxcZCspJC87XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIERhdGVPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKCFEQVRFX09QRVJBTkRfUkVHRVhQLnRlc3QodGhpcy52YWx1ZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJUaGUgZ2l2ZW4gdmFsdWUgZG9lcyBub3QgbWF0Y2ggdG8gdGhlIHBhdHRlcm4gZm9yIGRhdGUgbGl0ZXJhbFwiLFxuICAgICAgICB0aGlzLnZhbHVlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG59XG4iXX0=