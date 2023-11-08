"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringOperand = exports.NumberOperand = exports.NullOperand = exports.DateOperand = exports.BooleanOperand = exports.ArrayOperand = void 0;
exports.createOperand = createOperand;
exports["default"] = void 0;
var _QueryElement2 = _interopRequireDefault(require("./QueryElement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
/**
 *
 */
var Operand = exports["default"] = /*#__PURE__*/function (_QueryElement) {
  _inherits(Operand, _QueryElement);
  var _super = _createSuper(Operand);
  function Operand() {
    _classCallCheck(this, Operand);
    return _super.apply(this, arguments);
  }
  return _createClass(Operand);
}(_QueryElement2["default"]);
/**
 *
 */
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
var NullOperand = exports.NullOperand = /*#__PURE__*/function (_Operand) {
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
var StringOperand = exports.StringOperand = /*#__PURE__*/function (_Operand2) {
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
var NumberOperand = exports.NumberOperand = /*#__PURE__*/function (_Operand3) {
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
var BooleanOperand = exports.BooleanOperand = /*#__PURE__*/function (_Operand4) {
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
var ArrayOperand = exports.ArrayOperand = /*#__PURE__*/function (_Operand5) {
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
var DateOperand = exports.DateOperand = /*#__PURE__*/function (_Operand6) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfUXVlcnlFbGVtZW50MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsImFyZyIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJ1bmRlZmluZWQiLCJyZXMiLCJjYWxsIiwiVHlwZUVycm9yIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsImJpbmQiLCJfX3Byb3RvX18iLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfY3JlYXRlU3VwZXJJbnRlcm5hbCIsIlN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwicmVzdWx0IiwiTmV3VGFyZ2V0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFyZ3VtZW50cyIsImFwcGx5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJlIiwiZ2V0UHJvdG90eXBlT2YiLCJPcGVyYW5kIiwiZXhwb3J0cyIsIl9RdWVyeUVsZW1lbnQiLCJfc3VwZXIiLCJRdWVyeUVsZW1lbnQiLCJpc0FycmF5T3BlcmFuZCIsIkFycmF5IiwiaXNBcnJheSIsImNyZWF0ZU9wZXJhbmQiLCJ2IiwiTnVsbE9wZXJhbmQiLCJTdHJpbmdPcGVyYW5kIiwiTnVtYmVyT3BlcmFuZCIsIkJvb2xlYW5PcGVyYW5kIiwiQXJyYXlPcGVyYW5kIiwiRGF0ZU9wZXJhbmQiLCJfT3BlcmFuZCIsIl9zdXBlcjIiLCJ0b1NPUUwiLCJfT3BlcmFuZDIiLCJfc3VwZXIzIiwiX3RoaXMiLCJyZXBsYWNlIiwiX09wZXJhbmQzIiwiX3N1cGVyNCIsIl90aGlzMiIsIl9PcGVyYW5kNCIsIl9zdXBlcjUiLCJfdGhpczMiLCJfT3BlcmFuZDUiLCJfc3VwZXI2IiwidmFsdWVzIiwiX3RoaXM0IiwibWFwIiwiam9pbiIsIkRBVEVfT1BFUkFORF9SRUdFWFAiLCJfT3BlcmFuZDYiLCJfc3VwZXI3IiwiX3RoaXM1IiwidGVzdCIsImNvbnNvbGUiLCJ3YXJuIl0sInNvdXJjZXMiOlsiLi4vc3JjL09wZXJhbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBEZWVwUmVhZG9ubHkgfSBmcm9tIFwidHMtZXNzZW50aWFsc1wiO1xuaW1wb3J0IFF1ZXJ5RWxlbWVudCBmcm9tIFwiLi9RdWVyeUVsZW1lbnRcIjtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVyYW5kIGV4dGVuZHMgUXVlcnlFbGVtZW50IHt9XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgRGF0ZU9wZXJhbmRDb25maWcgPSB7XG4gIHR5cGU6IFwiZGF0ZVwiO1xuICB2YWx1ZTogc3RyaW5nO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgdHlwZSBEYXRldGltZU9wZXJhbmRDb25maWcgPSB7XG4gIHR5cGU6IFwiZGF0ZXRpbWVcIjtcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbi8qKlxuICpcbiAqL1xudHlwZSBPcGVyYW5kUHJpbWl0aXZlID1cbiAgfCBudWxsXG4gIHwgc3RyaW5nXG4gIHwgbnVtYmVyXG4gIHwgYm9vbGVhblxuICB8IERhdGVPcGVyYW5kQ29uZmlnXG4gIHwgRGF0ZXRpbWVPcGVyYW5kQ29uZmlnO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIE9wZXJhbmRDb25maWcgPSBPcGVyYW5kUHJpbWl0aXZlIHwgT3BlcmFuZFByaW1pdGl2ZVtdO1xuXG5mdW5jdGlvbiBpc0FycmF5T3BlcmFuZChcbiAgbzogRGVlcFJlYWRvbmx5PE9wZXJhbmRDb25maWc+LFxuKTogbyBpcyBEZWVwUmVhZG9ubHk8T3BlcmFuZFByaW1pdGl2ZVtdPiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG8pO1xufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYW5kKHY6IERlZXBSZWFkb25seTxPcGVyYW5kQ29uZmlnPik6IE9wZXJhbmQge1xuICBpZiAodiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBOdWxsT3BlcmFuZCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG5ldyBTdHJpbmdPcGVyYW5kKHYpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIG5ldyBOdW1iZXJPcGVyYW5kKHYpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiBuZXcgQm9vbGVhbk9wZXJhbmQodik7XG4gIH0gZWxzZSBpZiAoaXNBcnJheU9wZXJhbmQodikpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5T3BlcmFuZCh2KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGVPcGVyYW5kKHYudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE51bGxPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBcIm51bGxcIjtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpbmdPcGVyYW5kIGV4dGVuZHMgT3BlcmFuZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gXCInXCIgKyB0aGlzLnZhbHVlLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKSArIFwiJ1wiO1xuICB9XG59XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE51bWJlck9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWU6IG51bWJlcjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbk9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBBcnJheU9wZXJhbmQgZXh0ZW5kcyBPcGVyYW5kIHtcbiAgdmFsdWVzOiBPcGVyYW5kW107XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IERlZXBSZWFkb25seTxPcGVyYW5kUHJpbWl0aXZlW10+KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcy5tYXAoKHYpID0+IGNyZWF0ZU9wZXJhbmQodikpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIFwiKFwiICsgdGhpcy52YWx1ZXMubWFwKChvKSA9PiBvLnRvU09RTCgpKS5qb2luKFwiLCBcIikgKyBcIilcIjtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmNvbnN0IERBVEVfT1BFUkFORF9SRUdFWFAgPVxuICAvXihcXGR7NH0tXFxkezJ9LVxcZHsyfShUXFxkezJ9Oj9cXGR7Mn06P1xcZHsyfShcXC5cXGQrKT8oWystXVxcZHsyfTo/XFxkezJ9fFopKT98WUVTVEVSREFZfFRPREFZfFRPTU9SUk9XfChORVhUfFRISVN8TEFTVClfKFdFRUt8TU9OVEh8KEZJU0NBTF8pPyhRVUFSVEVSfFlFQVIpKXwoTkVYVHxMQVNUKV85MF9EQVlTfChORVhUfExBU1QpX05fKERBWVN8V0VFS1N8TU9OVEhTfChGSVNDQUxfKT8oUVVBUlRFUlN8WUVBUlMpKTpcXGQrKSQvO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRlT3BlcmFuZCBleHRlbmRzIE9wZXJhbmQge1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGlmICghREFURV9PUEVSQU5EX1JFR0VYUC50ZXN0KHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiVGhlIGdpdmVuIHZhbHVlIGRvZXMgbm90IG1hdGNoIHRvIHRoZSBwYXR0ZXJuIGZvciBkYXRlIGxpdGVyYWxcIixcbiAgICAgICAgdGhpcy52YWx1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsSUFBQUEsY0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQTBDLFNBQUFELHVCQUFBRSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxrQkFBQUMsTUFBQSxFQUFBQyxLQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxLQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxVQUFBLEdBQUFILEtBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxVQUFBLENBQUFDLFVBQUEsR0FBQUQsVUFBQSxDQUFBQyxVQUFBLFdBQUFELFVBQUEsQ0FBQUUsWUFBQSx3QkFBQUYsVUFBQSxFQUFBQSxVQUFBLENBQUFHLFFBQUEsU0FBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFULE1BQUEsRUFBQVUsY0FBQSxDQUFBTixVQUFBLENBQUFPLEdBQUEsR0FBQVAsVUFBQTtBQUFBLFNBQUFRLGFBQUFDLFdBQUEsRUFBQUMsVUFBQSxFQUFBQyxXQUFBLFFBQUFELFVBQUEsRUFBQWYsaUJBQUEsQ0FBQWMsV0FBQSxDQUFBRyxTQUFBLEVBQUFGLFVBQUEsT0FBQUMsV0FBQSxFQUFBaEIsaUJBQUEsQ0FBQWMsV0FBQSxFQUFBRSxXQUFBLEdBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSSxXQUFBLGlCQUFBTixRQUFBLG1CQUFBTSxXQUFBO0FBQUEsU0FBQUgsZUFBQU8sR0FBQSxRQUFBTixHQUFBLEdBQUFPLFlBQUEsQ0FBQUQsR0FBQSxvQkFBQUUsT0FBQSxDQUFBUixHQUFB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