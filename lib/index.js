'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSOQL = buildSOQL;

var _Query = require('./Query');

var _Query2 = _interopRequireDefault(_Query);

var _buildCondition = require('./buildCondition');

var _buildCondition2 = _interopRequireDefault(_buildCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildSOQL(query) {
  return new _Query2.default(query).toSOQL();
}