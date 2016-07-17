'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildCondition;

var _Condition = require('./Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _SingleCondition = require('./SingleCondition');

var _SingleCondition2 = _interopRequireDefault(_SingleCondition);

var _NegateCondition = require('./NegateCondition');

var _NegateCondition2 = _interopRequireDefault(_NegateCondition);

var _CompositeCondition = require('./CompositeCondition');

var _CompositeCondition2 = _interopRequireDefault(_CompositeCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildCondition(config, baseObjectName, stripParens) {
  if (config.operator === 'NOT') {
    return new _NegateCondition2.default(config, baseObjectName, stripParens);
  } else if (config.operator === 'AND' || config.operator === 'OR') {
    return new _CompositeCondition2.default(config, baseObjectName, stripParens);
  } else {
    return new _SingleCondition2.default(config, baseObjectName);
  }
}