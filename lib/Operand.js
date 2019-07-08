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