"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Field2 = _interopRequireDefault(require("./Field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FieldReference =
/*#__PURE__*/
function (_Field) {
  _inherits(FieldReference, _Field);

  function FieldReference(field, _baseObjectName) {
    var _this;

    _classCallCheck(this, FieldReference);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FieldReference).call(this));
    _this.path = field.split(".");
    return _this;
  }

  _createClass(FieldReference, [{
    key: "toSOQL",
    value: function toSOQL() {
      return this.path.join(".");
    }
  }]);

  return FieldReference;
}(_Field2["default"]);

exports["default"] = FieldReference;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GaWVsZFJlZmVyZW5jZS50cyJdLCJuYW1lcyI6WyJGaWVsZFJlZmVyZW5jZSIsImZpZWxkIiwiX2Jhc2VPYmplY3ROYW1lIiwicGF0aCIsInNwbGl0Iiwiam9pbiIsIkZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7O0FBR25CLDBCQUFZQyxLQUFaLEVBQTJCQyxlQUEzQixFQUFvRDtBQUFBOztBQUFBOztBQUNsRDtBQUNBLFVBQUtDLElBQUwsR0FBWUYsS0FBSyxDQUFDRyxLQUFOLENBQVksR0FBWixDQUFaO0FBRmtEO0FBR25EOzs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLRCxJQUFMLENBQVVFLElBQVYsQ0FBZSxHQUFmLENBQVA7QUFDRDs7OztFQVZ5Q0Msa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRSZWZlcmVuY2UgZXh0ZW5kcyBGaWVsZCB7XG4gIHBhdGg6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKGZpZWxkOiBzdHJpbmcsIF9iYXNlT2JqZWN0TmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhdGggPSBmaWVsZC5zcGxpdChcIi5cIik7XG4gIH1cblxuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5qb2luKFwiLlwiKTtcbiAgfVxufVxuIl19