function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import QueryElement from "./QueryElement";
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
}(QueryElement);
/**
 *
 */


export { Operand as default };

/**
 *
 */
export function createOperand(v) {
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

export var NullOperand =
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

export var StringOperand =
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

export var NumberOperand =
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

export var BooleanOperand =
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

export var ArrayOperand =
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

var DATE_OPERAND_REGEXP = /^(\d{4}-\d{2}-\d{2}(T\d{2}:?\d{2}:?\d{2}(\.\d+)?([+-]\d{2}:?\d{2}|Z))?|YESTERDAY|TODAY|TOMORROW|(NEXT|THIS|LAST)_(WEEK|MONTH|(FISCAL_)?(QUARTER|YEAR))|(NEXT|LAST)_90_DAYS|(NEXT|LAST)_N_(DAYS|WEEKS|MONTHS|(FISCAL_)?(QUARTERS|YEARS)):\d+)$/;
/**
 *
 */

export var DateOperand =
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9PcGVyYW5kLnRzIl0sIm5hbWVzIjpbIlF1ZXJ5RWxlbWVudCIsIk9wZXJhbmQiLCJjcmVhdGVPcGVyYW5kIiwidiIsIk51bGxPcGVyYW5kIiwiU3RyaW5nT3BlcmFuZCIsIk51bWJlck9wZXJhbmQiLCJCb29sZWFuT3BlcmFuZCIsIkFycmF5IiwiaXNBcnJheSIsIkFycmF5T3BlcmFuZCIsIkRhdGVPcGVyYW5kIiwidmFsdWUiLCJyZXBsYWNlIiwiU3RyaW5nIiwidmFsdWVzIiwibWFwIiwibyIsInRvU09RTCIsImpvaW4iLCJEQVRFX09QRVJBTkRfUkVHRVhQIiwidGVzdCIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxZQUFQLE1BQXlCLGdCQUF6QjtBQUVBOzs7O0lBR3FCQyxPOzs7Ozs7Ozs7Ozs7RUFBZ0JELFk7QUFFckM7Ozs7O1NBRnFCQyxPOztBQWtDckI7OztBQUdBLE9BQU8sU0FBU0MsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBa0Q7QUFDdkQsTUFBSUEsQ0FBQyxJQUFJLElBQVQsRUFBZTtBQUNiLFdBQU8sSUFBSUMsV0FBSixFQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0QsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ2hDLFdBQU8sSUFBSUUsYUFBSixDQUFrQkYsQ0FBbEIsQ0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUNoQyxXQUFPLElBQUlHLGFBQUosQ0FBa0JILENBQWxCLENBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSSxPQUFPQSxDQUFQLEtBQWEsU0FBakIsRUFBNEI7QUFDakMsV0FBTyxJQUFJSSxjQUFKLENBQW1CSixDQUFuQixDQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlLLEtBQUssQ0FBQ0MsT0FBTixDQUFjTixDQUFkLENBQUosRUFBc0I7QUFDM0IsV0FBTyxJQUFJTyxZQUFKLENBQWlCUCxDQUFqQixD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XCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlcmFuZCBleHRlbmRzIFF1ZXJ5RWxlbWVudCB7fVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIERhdGVPcGVyYW5kQ29uZmlnID0ge1xuICB0eXBlOiBcImRhdGVcIjtcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgRGF0ZXRpbWVPcGVyYW5kQ29uZmlnID0ge1xuICB0eXBlOiBcImRhdGV0aW1lXCI7XG4gIHZhbHVlOiBzdHJpbmc7XG59O1xuXG4vKipcbiAqXG4gKi9cbnR5cGUgT3BlcmFuZFByaW1pdGl2ZSA9XG4gIHwgbnVsbFxuICB8IHN0cmluZ1xuICB8IG51bWJlclxuICB8IGJvb2xlYW5cbiAgfCBEYXRlT3BlcmFuZENvbmZpZ1xuICB8IERhdGV0aW1lT3BlcmFuZENvbmZpZztcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBPcGVyYW5kQ29uZmlnID0gT3BlcmFuZFByaW1pdGl2ZSB8IE9wZXJhbmRQcmltaXRpdmVbXTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3BlcmFuZCh2OiBPcGVyYW5kQ29uZmlnKTogT3BlcmFuZCB7XG4gIGlmICh2ID09IG51bGwpIHtcbiAgICByZXR1cm4gbmV3IE51bGxPcGVyYW5kKCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbmV3IFN0cmluZ09wZXJhbmQodik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHYgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gbmV3IE51bWJlck9wZXJhbmQodik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHYgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgcmV0dXJuIG5ldyBCb29sZWFuT3BlcmFuZCh2KTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheU9wZXJhbmQodik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlT3BlcmFuZCh2LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBOdWxsT3BlcmFuZCBleHRlbmRzIE9wZXJhbmQge1xuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gXCJudWxsXCI7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgU3RyaW5nT3BlcmFuZCBleHRlbmRzIE9wZXJhbmQge1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFwiJ1wiICsgdGhpcy52YWx1ZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIikgKyBcIidcIjtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBOdW1iZXJPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIHZhbHVlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gU3RyaW5nKHRoaXMudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEJvb2xlYW5PcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIHZhbHVlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgQXJyYXlPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIHZhbHVlczogT3BlcmFuZFtdO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWVzOiBhbnlbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXMubWFwKHYgPT4gY3JlYXRlT3BlcmFuZCh2KSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gXCIoXCIgKyB0aGlzLnZhbHVlcy5tYXAobyA9PiBvLnRvU09RTCgpKS5qb2luKFwiLCBcIikgKyBcIilcIjtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmNvbnN0IERBVEVfT1BFUkFORF9SRUdFWFAgPSAvXihcXGR7NH0tXFxkezJ9LVxcZHsyfShUXFxkezJ9Oj9cXGR7Mn06P1xcZHsyfShcXC5cXGQrKT8oWystXVxcZHsyfTo/XFxkezJ9fFopKT98WUVTVEVSREFZfFRPREFZfFRPTU9SUk9XfChORVhUfFRISVN8TEFTVClfKFdFRUt8TU9OVEh8KEZJU0NBTF8pPyhRVUFSVEVSfFlFQVIpKXwoTkVYVHxMQVNUKV85MF9EQVlTfChORVhUfExBU1QpX05fKERBWVN8V0VFS1N8TU9OVEhTfChGSVNDQUxfKT8oUVVBUlRFUlN8WUVBUlMpKTpcXGQrKSQvO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRlT3BlcmFuZCBleHRlbmRzIE9wZXJhbmQge1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGlmICghREFURV9PUEVSQU5EX1JFR0VYUC50ZXN0KHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiVGhlIGdpdmVuIHZhbHVlIGRvZXMgbm90IG1hdGNoIHRvIHRoZSBwYXR0ZXJuIGZvciBkYXRlIGxpdGVyYWxcIixcbiAgICAgICAgdGhpcy52YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxufVxuIl19