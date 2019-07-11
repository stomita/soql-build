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

function isArrayOperand(o) {
  return Array.isArray(o);
}
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
  } else if (isArrayOperand(v)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9PcGVyYW5kLnRzIl0sIm5hbWVzIjpbIk9wZXJhbmQiLCJRdWVyeUVsZW1lbnQiLCJpc0FycmF5T3BlcmFuZCIsIm8iLCJBcnJheSIsImlzQXJyYXkiLCJjcmVhdGVPcGVyYW5kIiwidiIsIk51bGxPcGVyYW5kIiwiU3RyaW5nT3BlcmFuZCIsIk51bWJlck9wZXJhbmQiLCJCb29sZWFuT3BlcmFuZCIsIkFycmF5T3BlcmFuZCIsIkRhdGVPcGVyYW5kIiwidmFsdWUiLCJyZXBsYWNlIiwiU3RyaW5nIiwidmFsdWVzIiwibWFwIiwidG9TT1FMIiwiam9pbiIsIkRBVEVfT1BFUkFORF9SRUdFWFAiLCJ0ZXN0IiwiY29uc29sZSIsIndhcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxPOzs7Ozs7Ozs7Ozs7RUFBZ0JDLHlCO0FBRXJDOzs7Ozs7O0FBZ0NBLFNBQVNDLGNBQVQsQ0FDRUMsQ0FERixFQUV5QztBQUN2QyxTQUFPQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsQ0FBZCxDQUFQO0FBQ0Q7QUFFRDs7Ozs7QUFHTyxTQUFTRyxhQUFULENBQXVCQyxDQUF2QixFQUFnRTtBQUNyRSxNQUFJQSxDQUFDLElBQUksSUFBVCxFQUFlO0FBQ2IsV0FBTyxJQUFJQyxXQUFKLEVBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPRCxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDaEMsV0FBTyxJQUFJRSxhQUFKLENBQWtCRixDQUFsQixDQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ2hDLFdBQU8sSUFBSUcsYUFBSixDQUFrQkgsQ0FBbEIsQ0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJLE9BQU9BLENBQVAsS0FBYSxTQUFqQixFQUE0QjtBQUNqQyxXQUFPLElBQUlJLGNBQUosQ0FBbUJKLENBQW5CLENBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUwsY0FBYyxDQUFDSyxDQUFELENBQWxCLEVBQXVCO0FBQzVCLFdBQU8sSUFBSUssWUFBSixDQUFpQkwsQ0FBakIsQ0FBUDtBQUNELEdBRk0sTUFFQTtBQUNMLFdBQU8sSUFBSU0sV0FBSixDQUFnQk4sQ0FBQyxDQUFDTyxLQUFsQixDQUFQO0FBQ0Q7QUFDRjtBQUVEOzs7OztJQUdhTixXOzs7Ozs7Ozs7Ozs7OztBQUNYOzs7NkJBR1M7QUFDUCxhQUFPLE1BQVA7QUFDRDs7OztFQU44QlIsTztBQVNqQzs7Ozs7OztJQUdhUyxhOzs7OztBQUdYOzs7QUFHQSx5QkFBWUssS0FBWixFQUEyQjtBQUFBOztBQUFBOztBQUN6QjtBQUNBLFVBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUZ5QjtBQUcxQjtBQUVEOzs7Ozs7OzZCQUdTO0FBQ1AsYUFBTyxNQUFNLEtBQUtBLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixJQUFuQixFQUF5QixLQUF6QixDQUFOLEdBQXdDLEdBQS9DO0FBQ0Q7Ozs7RUFoQmdDZixPO0FBbUJuQzs7Ozs7OztJQUdhVSxhOzs7OztBQUdYOzs7QUFHQSx5QkFBWUksS0FBWixFQUEyQjtBQUFBOztBQUFBOztBQUN6QjtBQUNBLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUZ5QjtBQUcxQjtBQUVEOzs7Ozs7OzZCQUdTO0FBQ1AsYUFBT0UsTUFBTSxDQUFDLEtBQUtGLEtBQU4sQ0FBYjtBQUNEOzs7O0VBaEJnQ2QsTztBQW1CbkM7Ozs7Ozs7SUFHYVcsYzs7Ozs7QUFHWDs7O0FBR0EsMEJBQVlHLEtBQVosRUFBNEI7QUFBQTs7QUFBQTs7QUFDMUI7QUFDQSxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFGMEI7QUFHM0I7QUFFRDs7Ozs7Ozs2QkFHUztBQUNQLGFBQU9FLE1BQU0sQ0FBQyxLQUFLRixLQUFOLENBQWI7QUFDRDs7OztFQWhCaUNkLE87QUFtQnBDOzs7Ozs7O0lBR2FZLFk7Ozs7O0FBR1g7OztBQUdBLHdCQUFZSyxNQUFaLEVBQXNEO0FBQUE7O0FBQUE7O0FBQ3BEO0FBQ0EsV0FBS0EsTUFBTCxHQUFjQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFBWCxDQUFDO0FBQUEsYUFBSUQsYUFBYSxDQUFDQyxDQUFELENBQWpCO0FBQUEsS0FBWixDQUFkO0FBRm9EO0FBR3JEO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUCxhQUFPLE1BQU0sS0FBS1UsTUFBTCxDQUFZQyxHQUFaLENBQWdCLFVBQUFmLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNnQixNQUFGLEVBQUo7QUFBQSxPQUFqQixFQUFpQ0MsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBTixHQUFvRCxHQUEzRDtBQUNEOzs7O0VBaEIrQnBCLE87QUFtQmxDOzs7Ozs7QUFHQSxJQUFNcUIsbUJBQW1CLEdBQUcsK09BQTVCO0FBRUE7Ozs7SUFHYVIsVzs7Ozs7QUFHWDs7O0FBR0EsdUJBQVlDLEtBQVosRUFBMkI7QUFBQTs7QUFBQTs7QUFDekI7QUFDQSxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7O0FBQ0EsUUFBSSxDQUFDTyxtQkFBbUIsQ0FBQ0MsSUFBcEIsQ0FBeUIsT0FBS1IsS0FBOUIsQ0FBTCxFQUEyQztBQUN6Q1MsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQ0UsZ0VBREYsRUFFRSxPQUFLVixLQUZQO0FBSUQ7O0FBUndCO0FBUzFCO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OztFQXRCOEJkLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWVwUmVhZG9ubHkgfSBmcm9tIFwidXRpbGl0eS10eXBlc1wiO1xuaW1wb3J0IFF1ZXJ5RWxlbWVudCBmcm9tIFwiLi9RdWVyeUVsZW1lbnRcIjtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVyYW5kIGV4dGVuZHMgUXVlcnlFbGVtZW50IHt9XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgRGF0ZU9wZXJhbmRDb25maWcgPSB7XG4gIHR5cGU6IFwiZGF0ZVwiO1xuICB2YWx1ZTogc3RyaW5nO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBEYXRldGltZU9wZXJhbmRDb25maWcgPSB7XG4gIHR5cGU6IFwiZGF0ZXRpbWVcIjtcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbi8qKlxuICpcbiAqL1xudHlwZSBPcGVyYW5kUHJpbWl0aXZlID1cbiAgfCBudWxsXG4gIHwgc3RyaW5nXG4gIHwgbnVtYmVyXG4gIHwgYm9vbGVhblxuICB8IERhdGVPcGVyYW5kQ29uZmlnXG4gIHwgRGF0ZXRpbWVPcGVyYW5kQ29uZmlnO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIE9wZXJhbmRDb25maWcgPSBPcGVyYW5kUHJpbWl0aXZlIHwgT3BlcmFuZFByaW1pdGl2ZVtdO1xuXG5mdW5jdGlvbiBpc0FycmF5T3BlcmFuZChcbiAgbzogRGVlcFJlYWRvbmx5PE9wZXJhbmRDb25maWc+XG4pOiBvIGlzIERlZXBSZWFkb25seTxPcGVyYW5kUHJpbWl0aXZlW10+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobyk7XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wZXJhbmQodjogRGVlcFJlYWRvbmx5PE9wZXJhbmRDb25maWc+KTogT3BlcmFuZCB7XG4gIGlmICh2ID09IG51bGwpIHtcbiAgICByZXR1cm4gbmV3IE51bGxPcGVyYW5kKCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbmV3IFN0cmluZ09wZXJhbmQodik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHYgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gbmV3IE51bWJlck9wZXJhbmQodik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHYgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgcmV0dXJuIG5ldyBCb29sZWFuT3BlcmFuZCh2KTtcbiAgfSBlbHNlIGlmIChpc0FycmF5T3BlcmFuZCh2KSkge1xuICAgIHJldHVybiBuZXcgQXJyYXlPcGVyYW5kKHYpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZU9wZXJhbmQodi52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTnVsbE9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFwibnVsbFwiO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmluZ09wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBcIidcIiArIHRoaXMudmFsdWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpICsgXCInXCI7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTnVtYmVyT3BlcmFuZCBleHRlbmRzIE9wZXJhbmQge1xuICB2YWx1ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IG51bWJlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuT3BlcmFuZCBleHRlbmRzIE9wZXJhbmQge1xuICB2YWx1ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBib29sZWFuKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gU3RyaW5nKHRoaXMudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5T3BlcmFuZCBleHRlbmRzIE9wZXJhbmQge1xuICB2YWx1ZXM6IE9wZXJhbmRbXTtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlczogRGVlcFJlYWRvbmx5PE9wZXJhbmRQcmltaXRpdmVbXT4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzLm1hcCh2ID0+IGNyZWF0ZU9wZXJhbmQodikpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFwiKFwiICsgdGhpcy52YWx1ZXMubWFwKG8gPT4gby50b1NPUUwoKSkuam9pbihcIiwgXCIpICsgXCIpXCI7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5jb25zdCBEQVRFX09QRVJBTkRfUkVHRVhQID0gL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0oVFxcZHsyfTo/XFxkezJ9Oj9cXGR7Mn0oXFwuXFxkKyk/KFsrLV1cXGR7Mn06P1xcZHsyfXxaKSk/fFlFU1RFUkRBWXxUT0RBWXxUT01PUlJPV3woTkVYVHxUSElTfExBU1QpXyhXRUVLfE1PTlRIfChGSVNDQUxfKT8oUVVBUlRFUnxZRUFSKSl8KE5FWFR8TEFTVClfOTBfREFZU3woTkVYVHxMQVNUKV9OXyhEQVlTfFdFRUtTfE1PTlRIU3woRklTQ0FMXyk/KFFVQVJURVJTfFlFQVJTKSk6XFxkKykkLztcblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRGF0ZU9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWU6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAoIURBVEVfT1BFUkFORF9SRUdFWFAudGVzdCh0aGlzLnZhbHVlKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIlRoZSBnaXZlbiB2YWx1ZSBkb2VzIG5vdCBtYXRjaCB0byB0aGUgcGF0dGVybiBmb3IgZGF0ZSBsaXRlcmFsXCIsXG4gICAgICAgIHRoaXMudmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cbiJdfQ==