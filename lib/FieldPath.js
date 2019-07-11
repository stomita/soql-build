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

var FieldPath =
/*#__PURE__*/
function (_Field) {
  _inherits(FieldPath, _Field);

  function FieldPath(field, _baseObjectName) {
    var _this;

    _classCallCheck(this, FieldPath);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FieldPath).call(this));
    _this.path = field.split(".");
    return _this;
  }

  _createClass(FieldPath, [{
    key: "toSOQL",
    value: function toSOQL() {
      return this.path.join(".");
    }
  }]);

  return FieldPath;
}(_Field2["default"]);

exports["default"] = FieldPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GaWVsZFBhdGgudHMiXSwibmFtZXMiOlsiRmllbGRQYXRoIiwiZmllbGQiLCJfYmFzZU9iamVjdE5hbWUiLCJwYXRoIiwic3BsaXQiLCJqb2luIiwiRmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7QUFHbkIscUJBQVlDLEtBQVosRUFBMkJDLGVBQTNCLEVBQW9EO0FBQUE7O0FBQUE7O0FBQ2xEO0FBQ0EsVUFBS0MsSUFBTCxHQUFZRixLQUFLLENBQUNHLEtBQU4sQ0FBWSxHQUFaLENBQVo7QUFGa0Q7QUFHbkQ7Ozs7NkJBRVE7QUFDUCxhQUFPLEtBQUtELElBQUwsQ0FBVUUsSUFBVixDQUFlLEdBQWYsQ0FBUDtBQUNEOzs7O0VBVm9DQyxrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZFBhdGggZXh0ZW5kcyBGaWVsZCB7XG4gIHBhdGg6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKGZpZWxkOiBzdHJpbmcsIF9iYXNlT2JqZWN0TmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhdGggPSBmaWVsZC5zcGxpdChcIi5cIik7XG4gIH1cblxuICB0b1NPUUwoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5qb2luKFwiLlwiKTtcbiAgfVxufVxuIl19