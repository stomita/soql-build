function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import QueryElement from "./QueryElement";

/**
 *
 */
var Operand = /*#__PURE__*/function (_QueryElement) {
  _inherits(Operand, _QueryElement);
  var _super = _createSuper(Operand);
  function Operand() {
    _classCallCheck(this, Operand);
    return _super.apply(this, arguments);
  }
  return _createClass(Operand);
}(QueryElement);
/**
 *
 */
export { Operand as default };
/**
 *
 */
/**
 *
 */
/**
 *
 */
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
export var NullOperand = /*#__PURE__*/function (_Operand) {
  _inherits(NullOperand, _Operand);
  var _super2 = _createSuper(NullOperand);
  function NullOperand() {
    _classCallCheck(this, NullOperand);
    return _super2.apply(this, arguments);
  }
  _createClass(NullOperand, [{
    key: "toSOQL",
    value:
    /**
     *
     */
    function toSOQL() {
      return "null";
    }
  }]);
  return NullOperand;
}(Operand);

/**
 *
 */
export var StringOperand = /*#__PURE__*/function (_Operand2) {
  _inherits(StringOperand, _Operand2);
  var _super3 = _createSuper(StringOperand);
  /**
   *
   */
  function StringOperand(value) {
    var _this;
    _classCallCheck(this, StringOperand);
    _this = _super3.call(this);
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
export var NumberOperand = /*#__PURE__*/function (_Operand3) {
  _inherits(NumberOperand, _Operand3);
  var _super4 = _createSuper(NumberOperand);
  /**
   *
   */
  function NumberOperand(value) {
    var _this2;
    _classCallCheck(this, NumberOperand);
    _this2 = _super4.call(this);
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
export var BooleanOperand = /*#__PURE__*/function (_Operand4) {
  _inherits(BooleanOperand, _Operand4);
  var _super5 = _createSuper(BooleanOperand);
  /**
   *
   */
  function BooleanOperand(value) {
    var _this3;
    _classCallCheck(this, BooleanOperand);
    _this3 = _super5.call(this);
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
export var ArrayOperand = /*#__PURE__*/function (_Operand5) {
  _inherits(ArrayOperand, _Operand5);
  var _super6 = _createSuper(ArrayOperand);
  /**
   *
   */
  function ArrayOperand(values) {
    var _this4;
    _classCallCheck(this, ArrayOperand);
    _this4 = _super6.call(this);
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
export var DateOperand = /*#__PURE__*/function (_Operand6) {
  _inherits(DateOperand, _Operand6);
  var _super7 = _createSuper(DateOperand);
  /**
   *
   */
  function DateOperand(value) {
    var _this5;
    _classCallCheck(this, DateOperand);
    _this5 = _super7.call(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJPcGVyYW5kIiwiX1F1ZXJ5RWxlbWVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwiZGVmYXVsdCIsImlzQXJyYXlPcGVyYW5kIiwibyIsIkFycmF5IiwiaXNBcnJheSIsImNyZWF0ZU9wZXJhbmQiLCJ2IiwiTnVsbE9wZXJhbmQiLCJTdHJpbmdPcGVyYW5kIiwiTnVtYmVyT3BlcmFuZCIsIkJvb2xlYW5PcGVyYW5kIiwiQXJyYXlPcGVyYW5kIiwiRGF0ZU9wZXJhbmQiLCJ2YWx1ZSIsIl9PcGVyYW5kIiwiX3N1cGVyMiIsImtleSIsInRvU09RTCIsIl9PcGVyYW5kMiIsIl9zdXBlcjMiLCJfdGhpcyIsImNhbGwiLCJyZXBsYWNlIiwiX09wZXJhbmQzIiwiX3N1cGVyNCIsIl90aGlzMiIsIlN0cmluZyIsIl9PcGVyYW5kNCIsIl9zdXBlcjUiLCJfdGhpczMiLCJfT3BlcmFuZDUiLCJfc3VwZXI2IiwidmFsdWVzIiwiX3RoaXM0IiwibWFwIiwiam9pbiIsIkRBVEVfT1BFUkFORF9SRUdFWFAiLCJfT3BlcmFuZDYiLCJfc3VwZXI3IiwiX3RoaXM1IiwidGVzdCIsImNvbnNvbGUiLCJ3YXJuIl0sInNvdXJjZXMiOlsiLi4vc3JjL09wZXJhbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBEZWVwUmVhZG9ubHkgfSBmcm9tIFwidHMtZXNzZW50aWFsc1wiO1xuaW1wb3J0IFF1ZXJ5RWxlbWVudCBmcm9tIFwiLi9RdWVyeUVsZW1lbnRcIjtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVyYW5kIGV4dGVuZHMgUXVlcnlFbGVtZW50IHt9XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgRGF0ZU9wZXJhbmRDb25maWcgPSB7XG4gIHR5cGU6IFwiZGF0ZVwiO1xuICB2YWx1ZTogc3RyaW5nO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBEYXRldGltZU9wZXJhbmRDb25maWcgPSB7XG4gIHR5cGU6IFwiZGF0ZXRpbWVcIjtcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbi8qKlxuICpcbiAqL1xudHlwZSBPcGVyYW5kUHJpbWl0aXZlID1cbiAgfCBudWxsXG4gIHwgc3RyaW5nXG4gIHwgbnVtYmVyXG4gIHwgYm9vbGVhblxuICB8IERhdGVPcGVyYW5kQ29uZmlnXG4gIHwgRGF0ZXRpbWVPcGVyYW5kQ29uZmlnO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIE9wZXJhbmRDb25maWcgPSBPcGVyYW5kUHJpbWl0aXZlIHwgT3BlcmFuZFByaW1pdGl2ZVtdO1xuXG5mdW5jdGlvbiBpc0FycmF5T3BlcmFuZChcbiAgbzogRGVlcFJlYWRvbmx5PE9wZXJhbmRDb25maWc+LFxuKTogbyBpcyBEZWVwUmVhZG9ubHk8T3BlcmFuZFByaW1pdGl2ZVtdPiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG8pO1xufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYW5kKHY6IERlZXBSZWFkb25seTxPcGVyYW5kQ29uZmlnPik6IE9wZXJhbmQge1xuICBpZiAodiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBOdWxsT3BlcmFuZCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG5ldyBTdHJpbmdPcGVyYW5kKHYpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIG5ldyBOdW1iZXJPcGVyYW5kKHYpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiBuZXcgQm9vbGVhbk9wZXJhbmQodik7XG4gIH0gZWxzZSBpZiAoaXNBcnJheU9wZXJhbmQodikpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5T3BlcmFuZCh2KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGVPcGVyYW5kKHYudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE51bGxPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBcIm51bGxcIjtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpbmdPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gXCInXCIgKyB0aGlzLnZhbHVlLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKSArIFwiJ1wiO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE51bWJlck9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWU6IG51bWJlcjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbk9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBBcnJheU9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWVzOiBPcGVyYW5kW107XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IERlZXBSZWFkb25seTxPcGVyYW5kUHJpbWl0aXZlW10+KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcy5tYXAoKHYpID0+IGNyZWF0ZU9wZXJhbmQodikpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFwiKFwiICsgdGhpcy52YWx1ZXMubWFwKChvKSA9PiBvLnRvU09RTCgpKS5qb2luKFwiLCBcIikgKyBcIilcIjtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmNvbnN0IERBVEVfT1BFUkFORF9SRUdFWFAgPVxuICAvXihcXGR7NH0tXFxkezJ9LVxcZHsyfShUXFxkezJ9Oj9cXGR7Mn06P1xcZHsyfShcXC5cXGQrKT8oWystXVxcZHsyfTo/XFxkezJ9fFopKT98WUVTVEVSREFZfFRPREFZfFRPTU9SUk9XfChORVhUfFRISVN8TEFTVClfKFdFRUt8TU9OVEh8KEZJU0NBTF8pPyhRVUFSVEVSfFlFQVIpKXwoTkVYVHxMQVNUKV85MF9EQVlTfChORVhUfExBU1QpX05fKERBWVN8V0VFS1N8TU9OVEhTfChGSVNDQUxfKT8oUVVBUlRFUlN8WUVBUlMpKTpcXGQrKSQvO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRlT3BlcmFuZCBleHRlbmRzIE9wZXJhbmQge1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGlmICghREFURV9PUEVSQU5EX1JFR0VYUC50ZXN0KHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiVGhlIGdpdmVuIHZhbHVlIGRvZXMgbm90IG1hdGNoIHRvIHRoZSBwYXR0ZXJuIGZvciBkYXRlIGxpdGVyYWxcIixcbiAgICAgICAgdGhpcy52YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLFlBQVksTUFBTSxnQkFBZ0I7O0FBRXpDO0FBQ0E7QUFDQTtBQUZBLElBR3FCQyxPQUFPLDBCQUFBQyxhQUFBO0VBQUFDLFNBQUEsQ0FBQUYsT0FBQSxFQUFBQyxhQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLE9BQUE7RUFBQSxTQUFBQSxRQUFBO0lBQUFLLGVBQUEsT0FBQUwsT0FBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQSxPQUFBQyxZQUFBLENBQUFSLE9BQUE7QUFBQSxFQUFTRCxZQUFZO0FBRWpEO0FBQ0E7QUFDQTtBQUZBLFNBRnFCQyxPQUFPLElBQUFTLE9BQUE7QUFVNUI7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBR0EsU0FBU0MsY0FBY0EsQ0FDckJDLENBQThCLEVBQ1M7RUFDdkMsT0FBT0MsS0FBSyxDQUFDQyxPQUFPLENBQUNGLENBQUMsQ0FBQztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFNBQVNHLGFBQWFBLENBQUNDLENBQThCLEVBQVc7RUFDckUsSUFBSUEsQ0FBQyxJQUFJLElBQUksRUFBRTtJQUNiLE9BQU8sSUFBSUMsV0FBVyxDQUFDLENBQUM7RUFDMUIsQ0FBQyxNQUFNLElBQUksT0FB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