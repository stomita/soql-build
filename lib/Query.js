'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QueryElement2 = require('./QueryElement');

var _QueryElement3 = _interopRequireDefault(_QueryElement2);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _Condition = require('./Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _SortInfo = require('./SortInfo');

var _SortInfo2 = _interopRequireDefault(_SortInfo);

var _buildCondition = require('./buildCondition');

var _buildCondition2 = _interopRequireDefault(_buildCondition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Query = function (_QueryElement) {
  _inherits(Query, _QueryElement);

  function Query(config) {
    _classCallCheck(this, Query);

    var _this = _possibleConstructorReturn(this, (Query.__proto__ || Object.getPrototypeOf(Query)).call(this));

    _this.table = config.table;
    _this.scope = config.scope;
    _this.fields = (config.fields || []).map(function (field) {
      return new _Field2.default(field, _this.table);
    });
    if (config.condition) {
      _this.condition = (0, _buildCondition2.default)(config.condition, _this.table, true);
    }
    if (config.sortInfo) {
      _this.sortInfo = config.sortInfo.map(function (s) {
        return new _SortInfo2.default(s, _this.table);
      });
    }
    _this.limit = config.limit;
    _this.offset = config.offset;
    return _this;
  }

  _createClass(Query, [{
    key: 'toSOQL',
    value: function toSOQL() {
      return ['SELECT', this.fields.map(function (field) {
        return field.toSOQL();
      }).join(', '), 'FROM', this.table].concat(_toConsumableArray(this.scope ? ['USING SCOPE', this.scope] : []), _toConsumableArray(this.condition ? ['WHERE', this.condition.toSOQL()] : []), _toConsumableArray(this.sortInfo && this.sortInfo.length > 0 ? ['ORDER BY', this.sortInfo.map(function (s) {
        return s.toSOQL();
      }).join(', ')] : []), _toConsumableArray(typeof this.limit !== 'undefined' ? ['LIMIT', String(this.limit)] : []), _toConsumableArray(typeof this.offset !== 'undefined' ? ['OFFSET', String(this.offset)] : [])).join(' ');
    }
  }]);

  return Query;
}(_QueryElement3.default);

exports.default = Query;