'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateOperand = exports.ArrayOperand = exports.BooleanOperand = exports.NumberOperand = exports.StringOperand = exports.NullOperand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createOperand = createOperand;

var _QueryElement2 = require('./QueryElement');

var _QueryElement3 = _interopRequireDefault(_QueryElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Operand = function (_QueryElement) {
  _inherits(Operand, _QueryElement);

  function Operand() {
    _classCallCheck(this, Operand);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Operand).apply(this, arguments));
  }

  return Operand;
}(_QueryElement3.default);

exports.default = Operand;
function createOperand(v) {
  if (v == null) {
    return new NullOperand();
  } else if (typeof v === 'string') {
    return new StringOperand(v);
  } else if (typeof v === 'number') {
    return new NumberOperand(v);
  } else if (typeof v === 'boolean') {
    return new BooleanOperand(v);
  } else if (Array.isArray(v)) {
    return new ArrayOperand(v);
  } else {
    return new DateOperand(v.value);
  }
}

var NullOperand = exports.NullOperand = function (_Operand) {
  _inherits(NullOperand, _Operand);

  function NullOperand() {
    _classCallCheck(this, NullOperand);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NullOperand).apply(this, arguments));
  }

  _createClass(NullOperand, [{
    key: 'toSOQL',
    value: function toSOQL() {
      return 'null';
    }
  }]);

  return NullOperand;
}(Operand);

var StringOperand = exports.StringOperand = function (_Operand2) {
  _inherits(StringOperand, _Operand2);

  function StringOperand(value) {
    _classCallCheck(this, StringOperand);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(StringOperand).call(this));

    _this3.value = value;
    return _this3;
  }

  _createClass(StringOperand, [{
    key: 'toSOQL',
    value: function toSOQL() {
      return "'" + this.value.replace(/'/g, "\\'") + "'";
    }
  }]);

  return StringOperand;
}(Operand);

var NumberOperand = exports.NumberOperand = function (_Operand3) {
  _inherits(NumberOperand, _Operand3);

  function NumberOperand(value) {
    _classCallCheck(this, NumberOperand);

    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(NumberOperand).call(this));

    _this4.value = value;
    return _this4;
  }

  _createClass(NumberOperand, [{
    key: 'toSOQL',
    value: function toSOQL() {
      return String(this.value);
    }
  }]);

  return NumberOperand;
}(Operand);

var BooleanOperand = exports.BooleanOperand = function (_Operand4) {
  _inherits(BooleanOperand, _Operand4);

  function BooleanOperand(value) {
    _classCallCheck(this, BooleanOperand);

    var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(BooleanOperand).call(this));

    _this5.value = value;
    return _this5;
  }

  _createClass(BooleanOperand, [{
    key: 'toSOQL',
    value: function toSOQL() {
      return String(this.value);
    }
  }]);

  return BooleanOperand;
}(Operand);

var ArrayOperand = exports.ArrayOperand = function (_Operand5) {
  _inherits(ArrayOperand, _Operand5);

  function ArrayOperand(values) {
    _classCallCheck(this, ArrayOperand);

    var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(ArrayOperand).call(this));

    _this6.values = values.map(function (v) {
      return createOperand(v);
    });
    return _this6;
  }

  _createClass(ArrayOperand, [{
    key: 'toSOQL',
    value: function toSOQL() {
      return '(' + this.values.map(function (o) {
        return o.toSOQL();
      }).join(', ') + ')';
    }
  }]);

  return ArrayOperand;
}(Operand);

var DATE_OPERAND_REGEXP = /^(\d{4}-\d{2}-\d{2}(T\d{2}:?\d{2}:?\d{2}(\.\d+)?([\+\-]\d{2}:?\d{2}|Z))?|YESTERDAY|TODAY|TOMORROW|(NEXT|THIS|LAST)_(WEEK|MONTH|(FISCAL_)?(QUARTER|YEAR))|(NEXT|LAST)_90_DAYS|(NEXT|LAST)_N_(DAYS|WEEKS|MONTHS|(FISCAL_)?(QUARTERS|YEARS)):\d+)$/;

var DateOperand = exports.DateOperand = function (_Operand6) {
  _inherits(DateOperand, _Operand6);

  function DateOperand(value) {
    _classCallCheck(this, DateOperand);

    var _this7 = _possibleConstructorReturn(this, Object.getPrototypeOf(DateOperand).call(this));

    _this7.value = value;
    return _this7;
  }

  _createClass(DateOperand, [{
    key: 'toSOQL',
    value: function toSOQL() {
      return this.value;
    }
  }]);

  return DateOperand;
}(Operand);