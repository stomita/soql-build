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

function isArrayOperand(o) {
  return Array.isArray(o);
}
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
  } else if (isArrayOperand(v)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9PcGVyYW5kLnRzIl0sIm5hbWVzIjpbIlF1ZXJ5RWxlbWVudCIsIk9wZXJhbmQiLCJpc0FycmF5T3BlcmFuZCIsIm8iLCJBcnJheSIsImlzQXJyYXkiLCJjcmVhdGVPcGVyYW5kIiwidiIsIk51bGxPcGVyYW5kIiwiU3RyaW5nT3BlcmFuZCIsIk51bWJlck9wZXJhbmQiLCJCb29sZWFuT3BlcmFuZCIsIkFycmF5T3BlcmFuZCIsIkRhdGVPcGVyYW5kIiwidmFsdWUiLCJyZXBsYWNlIiwiU3RyaW5nIiwidmFsdWVzIiwibWFwIiwidG9TT1FMIiwiam9pbiIsIkRBVEVfT1BFUkFORF9SRUdFWFAiLCJ0ZXN0IiwiY29uc29sZSIsIndhcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLFlBQVAsTUFBeUIsZ0JBQXpCO0FBRUE7Ozs7SUFHcUJDLE87Ozs7Ozs7Ozs7OztFQUFnQkQsWTtBQUVyQzs7Ozs7U0FGcUJDLE87O0FBa0NyQixTQUFTQyxjQUFULENBQ0VDLENBREYsRUFFeUM7QUFDdkMsU0FBT0MsS0FBSyxDQUFDQyxPQUFOLENBQWNGLENBQWQsQ0FBUDtBQUNEO0FBRUQ7Ozs7O0FBR0EsT0FBTyxTQUFTRyxhQUFULENBQXVCQyxDQUF2QixFQUFnRTtBQUNyRSxNQUFJQSxDQUFDLElBQUksSUFBVCxFQUFlO0FBQ2IsV0FBTyxJQUFJQyxXQUFKLEVBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPRCxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDaEMsV0FBTyxJQUFJRSxhQUFKLENBQWtCRixDQUFsQixDQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ2hDLFdBQU8sSUFBSUcsYUFBSixDQUFrQkgsQ0FBbEIsQ0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJLE9BQU9BLENBQVAsS0FBYSxTQUFqQixFQUE0QjtBQUNqQyxXQUFPLElBQUlJLGNBQUosQ0FBbUJKLENBQW5C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O0FBdEJIOztBQUFBO0FBQUEsRUFBaUNiLE9BQWpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVlcFJlYWRvbmx5IH0gZnJvbSBcInV0aWxpdHktdHlwZXNcIjtcbmltcG9ydCBRdWVyeUVsZW1lbnQgZnJvbSBcIi4vUXVlcnlFbGVtZW50XCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlcmFuZCBleHRlbmRzIFF1ZXJ5RWxlbWVudCB7fVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIERhdGVPcGVyYW5kQ29uZmlnID0ge1xuICB0eXBlOiBcImRhdGVcIjtcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgRGF0ZXRpbWVPcGVyYW5kQ29uZmlnID0ge1xuICB0eXBlOiBcImRhdGV0aW1lXCI7XG4gIHZhbHVlOiBzdHJpbmc7XG59O1xuXG4vKipcbiAqXG4gKi9cbnR5cGUgT3BlcmFuZFByaW1pdGl2ZSA9XG4gIHwgbnVsbFxuICB8IHN0cmluZ1xuICB8IG51bWJlclxuICB8IGJvb2xlYW5cbiAgfCBEYXRlT3BlcmFuZENvbmZpZ1xuICB8IERhdGV0aW1lT3BlcmFuZENvbmZpZztcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBPcGVyYW5kQ29uZmlnID0gT3BlcmFuZFByaW1pdGl2ZSB8IE9wZXJhbmRQcmltaXRpdmVbXTtcblxuZnVuY3Rpb24gaXNBcnJheU9wZXJhbmQoXG4gIG86IERlZXBSZWFkb25seTxPcGVyYW5kQ29uZmlnPlxuKTogbyBpcyBEZWVwUmVhZG9ubHk8T3BlcmFuZFByaW1pdGl2ZVtdPiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG8pO1xufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYW5kKHY6IERlZXBSZWFkb25seTxPcGVyYW5kQ29uZmlnPik6IE9wZXJhbmQge1xuICBpZiAodiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBOdWxsT3BlcmFuZCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG5ldyBTdHJpbmdPcGVyYW5kKHYpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIG5ldyBOdW1iZXJPcGVyYW5kKHYpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiBuZXcgQm9vbGVhbk9wZXJhbmQodik7XG4gIH0gZWxzZSBpZiAoaXNBcnJheU9wZXJhbmQodikpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5T3BlcmFuZCh2KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGVPcGVyYW5kKHYudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE51bGxPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBcIm51bGxcIjtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpbmdPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gXCInXCIgKyB0aGlzLnZhbHVlLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKSArIFwiJ1wiO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE51bWJlck9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWU6IG51bWJlcjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbk9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBBcnJheU9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWVzOiBPcGVyYW5kW107XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IERlZXBSZWFkb25seTxPcGVyYW5kUHJpbWl0aXZlW10+KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcy5tYXAodiA9PiBjcmVhdGVPcGVyYW5kKHYpKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBcIihcIiArIHRoaXMudmFsdWVzLm1hcChvID0+IG8udG9TT1FMKCkpLmpvaW4oXCIsIFwiKSArIFwiKVwiO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgREFURV9PUEVSQU5EX1JFR0VYUCA9IC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KFRcXGR7Mn06P1xcZHsyfTo/XFxkezJ9KFxcLlxcZCspPyhbKy1dXFxkezJ9Oj9cXGR7Mn18WikpP3xZRVNURVJEQVl8VE9EQVl8VE9NT1JST1d8KE5FWFR8VEhJU3xMQVNUKV8oV0VFS3xNT05USHwoRklTQ0FMXyk/KFFVQVJURVJ8WUVBUikpfChORVhUfExBU1QpXzkwX0RBWVN8KE5FWFR8TEFTVClfTl8oREFZU3xXRUVLU3xNT05USFN8KEZJU0NBTF8pPyhRVUFSVEVSU3xZRUFSUykpOlxcZCspJC87XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIERhdGVPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKCFEQVRFX09QRVJBTkRfUkVHRVhQLnRlc3QodGhpcy52YWx1ZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJUaGUgZ2l2ZW4gdmFsdWUgZG9lcyBub3QgbWF0Y2ggdG8gdGhlIHBhdHRlcm4gZm9yIGRhdGUgbGl0ZXJhbFwiLFxuICAgICAgICB0aGlzLnZhbHVlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG59XG4iXX0=