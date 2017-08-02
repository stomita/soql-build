'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Condition2 = require('./Condition');

var _Condition3 = _interopRequireDefault(_Condition2);

var _buildCondition = require('./buildCondition');

var _buildCondition2 = _interopRequireDefault(_buildCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompositeCondition = function (_Condition) {
  _inherits(CompositeCondition, _Condition);

  function CompositeCondition(config, baseObjectName) {
    var stripParens = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, CompositeCondition);

    var _this = _possibleConstructorReturn(this, (CompositeCondition.__proto__ || Object.getPrototypeOf(CompositeCondition)).call(this));

    _this.operator = config.operator;
    _this.conditions = config.conditions.map(function (cond) {
      return (0, _buildCondition2.default)(cond, baseObjectName, false);
    });
    _this.stripParens = stripParens;
    return _this;
  }

  _createClass(CompositeCondition, [{
    key: 'toSOQL',
    value: function toSOQL() {
      var condition = this.conditions.map(function (c) {
        return c.toSOQL();
      }).join(' ' + this.operator + ' ');
      return condition.length > 0 && !this.stripParens ? '(' + condition + ')' : condition;
    }
  }]);

  return CompositeCondition;
}(_Condition3.default);

exports.default = CompositeCondition;