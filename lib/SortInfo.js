'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QueryElement2 = require('./QueryElement');

var _QueryElement3 = _interopRequireDefault(_QueryElement2);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortInfo = function (_QueryElement) {
  _inherits(SortInfo, _QueryElement);

  function SortInfo(config, baseObjectName) {
    _classCallCheck(this, SortInfo);

    var _this = _possibleConstructorReturn(this, (SortInfo.__proto__ || Object.getPrototypeOf(SortInfo)).call(this));

    _this.field = new _Field2.default(config.field, baseObjectName);
    _this.direction = config.direction;
    _this.nullOrder = config.nullOrder;
    return _this;
  }

  _createClass(SortInfo, [{
    key: 'toSOQL',
    value: function toSOQL() {
      return [this.field.toSOQL()].concat(_toConsumableArray(this.direction != null ? [this.direction.toUpperCase()] : []), _toConsumableArray(this.nullOrder != null ? ['NULLS', this.nullOrder.toUpperCase()] : [])).join(' ');
    }
  }]);

  return SortInfo;
}(_QueryElement3.default);

exports.default = SortInfo;