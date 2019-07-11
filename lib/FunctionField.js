"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Field2 = _interopRequireDefault(require("./Field"));

var _buildField = _interopRequireDefault(require("./buildField"));

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

var FunctionField =
/*#__PURE__*/
function (_Field) {
  _inherits(FunctionField, _Field);

  function FunctionField(config, baseObjectName) {
    var _this;

    _classCallCheck(this, FunctionField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FunctionField).call(this));
    _this["function"] = config["function"];
    _this.arguments = (config.arguments || []).map(function (arg) {
      return (0, _buildField["default"])(arg, baseObjectName);
    });
    _this.alias = config.alias;
    return _this;
  }

  _createClass(FunctionField, [{
    key: "toSOQL",
    value: function toSOQL() {
      return this["function"] + "(" + this.arguments.map(function (arg) {
        return arg.toSOQL();
      }).join(", ") + ")";
    }
  }]);

  return FunctionField;
}(_Field2["default"]);

exports["default"] = FunctionField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GdW5jdGlvbkZpZWxkLnRzIl0sIm5hbWVzIjpbIkZ1bmN0aW9uRmllbGQiLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsImFyZ3VtZW50cyIsIm1hcCIsImFyZyIsImFsaWFzIiwidG9TT1FMIiwiam9pbiIsIkZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7O0FBS25CLHlCQUNFQyxNQURGLEVBRUVDLGNBRkYsRUFHRTtBQUFBOztBQUFBOztBQUNBO0FBQ0Esd0JBQWdCRCxNQUFNLFlBQXRCO0FBQ0EsVUFBS0UsU0FBTCxHQUFpQixDQUFDRixNQUFNLENBQUNFLFNBQVAsSUFBb0IsRUFBckIsRUFBeUJDLEdBQXpCLENBQTZCLFVBQUFDLEdBQUc7QUFBQSxhQUMvQyw0QkFBV0EsR0FBWCxFQUFnQkgsY0FBaEIsQ0FEK0M7QUFBQSxLQUFoQyxDQUFqQjtBQUdBLFVBQUtJLEtBQUwsR0FBYUwsTUFBTSxDQUFDSyxLQUFwQjtBQU5BO0FBT0Q7Ozs7NkJBRVE7QUFDUCxhQUNFLG1CQUNBLEdBREEsR0FFQSxLQUFLSCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ0UsTUFBSixFQUFKO0FBQUEsT0FBdEIsRUFBd0NDLElBQXhDLENBQTZDLElBQTdDLENBRkEsR0FHQSxHQUpGO0FBTUQ7Ozs7RUF4QndDQyxrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ1dGlsaXR5LXR5cGVzXCI7XG5pbXBvcnQgRmllbGQsIHsgRnVuY3Rpb25GaWVsZENvbmZpZyB9IGZyb20gXCIuL0ZpZWxkXCI7XG5pbXBvcnQgYnVpbGRGaWVsZCBmcm9tIFwiLi9idWlsZEZpZWxkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uRmllbGQgZXh0ZW5kcyBGaWVsZCB7XG4gIGZ1bmN0aW9uOiBzdHJpbmc7XG4gIGFyZ3VtZW50czogRmllbGRbXTtcbiAgYWxpYXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IERlZXBSZWFkb25seTxGdW5jdGlvbkZpZWxkQ29uZmlnPixcbiAgICBiYXNlT2JqZWN0TmFtZTogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mdW5jdGlvbiA9IGNvbmZpZy5mdW5jdGlvbjtcbiAgICB0aGlzLmFyZ3VtZW50cyA9IChjb25maWcuYXJndW1lbnRzIHx8IFtdKS5tYXAoYXJnID0+XG4gICAgICBidWlsZEZpZWxkKGFyZywgYmFzZU9iamVjdE5hbWUpXG4gICAgKTtcbiAgICB0aGlzLmFsaWFzID0gY29uZmlnLmFsaWFzO1xuICB9XG5cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZ1bmN0aW9uICtcbiAgICAgIFwiKFwiICtcbiAgICAgIHRoaXMuYXJndW1lbnRzLm1hcChhcmcgPT4gYXJnLnRvU09RTCgpKS5qb2luKFwiLCBcIikgK1xuICAgICAgXCIpXCJcbiAgICApO1xuICB9XG59XG4iXX0=