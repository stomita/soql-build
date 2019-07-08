"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _QueryElement2 = _interopRequireDefault(require("./QueryElement"));

var _buildField = _interopRequireDefault(require("./buildField"));

var _buildCondition = _interopRequireDefault(require("./buildCondition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 *
 */
var Grouping =
/*#__PURE__*/
function (_QueryElement) {
  _inherits(Grouping, _QueryElement);

  /**
   *
   */
  function Grouping(config, baseObjectName) {
    var _this;

    _classCallCheck(this, Grouping);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Grouping).call(this));
    _this.fields = config.fields.map(function (field) {
      return (0, _buildField["default"])(field, baseObjectName);
    });
    _this.subtotal = config.subtotal;

    if (config.having) {
      _this.having = (0, _buildCondition["default"])(config.having, baseObjectName, true);
    }

    if (_this.subtotal && !/^(ROLLUP|CUBE)$/i.test(_this.subtotal)) {
      console.warn("The given value does not match to the grouping subtotal type", _this.subtotal);
    }

    return _this;
  }
  /**
   *
   */


  _createClass(Grouping, [{
    key: "toSOQL",
    value: function toSOQL() {
      return ["GROUP BY"].concat(_toConsumableArray(this.subtotal ? [this.subtotal] : []), [(this.subtotal ? "(" : "") + this.fields.map(function (field) {
        return field.toSOQL();
      }).join(", ") + (this.subtotal ? ")" : "")], _toConsumableArray(this.having ? ["HAVING", this.having.toSOQL()] : [])).join(" ");
    }
  }]);

  return Grouping;
}(_QueryElement2["default"]);

exports["default"] = Grouping;