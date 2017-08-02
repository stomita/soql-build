'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Condition2 = require('./Condition');

var _Condition3 = _interopRequireDefault(_Condition2);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _Operand = require('./Operand');

var _Operand2 = _interopRequireDefault(_Operand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleCondition = function (_Condition) {
  _inherits(SingleCondition, _Condition);

  function SingleCondition(config, baseObjectName) {
    _classCallCheck(this, SingleCondition);

    var _this = _possibleConstructorReturn(this, (SingleCondition.__proto__ || Object.getPrototypeOf(SingleCondition)).call(this));

    _this.operator = config.operator;
    _this.field = new _Field2.default(config.field, baseObjectName);
    var value = (0, _Operand.createOperand)(config.value);
    if (value == null) {
      throw new Error();
    }
    _this.value = value;
    return _this;
  }

  _createClass(SingleCondition, [{
    key: 'toSOQL',
    value: function toSOQL() {
      return this.field.toSOQL() + ' ' + this.operator + ' ' + this.value.toSOQL();
    }
  }]);

  return SingleCondition;
}(_Condition3.default);

exports.default = SingleCondition;