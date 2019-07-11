"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Condition2 = _interopRequireDefault(require("./Condition"));

var _buildCondition = _interopRequireDefault(require("./buildCondition"));

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

var NegateCondition =
/*#__PURE__*/
function (_Condition) {
  _inherits(NegateCondition, _Condition);

  function NegateCondition(config, baseObjectName, stripParens) {
    var _this;

    _classCallCheck(this, NegateCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NegateCondition).call(this));
    _this.condition = (0, _buildCondition["default"])(config.condition, baseObjectName, true);
    _this.stripParens = stripParens;
    return _this;
  }

  _createClass(NegateCondition, [{
    key: "toSOQL",
    value: function toSOQL() {
      var condition = "NOT " + this.condition.toSOQL();
      return !this.stripParens ? "(" + condition + ")" : condition;
    }
  }]);

  return NegateCondition;
}(_Condition2["default"]);

exports["default"] = NegateCondition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9OZWdhdGVDb25kaXRpb24udHMiXSwibmFtZXMiOlsiTmVnYXRlQ29uZGl0aW9uIiwiY29uZmlnIiwiYmFzZU9iamVjdE5hbWUiLCJzdHJpcFBhcmVucyIsImNvbmRpdGlvbiIsInRvU09RTCIsIkNvbmRpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxlOzs7OztBQUluQiwyQkFDRUMsTUFERixFQUVFQyxjQUZGLEVBR0VDLFdBSEYsRUFJRTtBQUFBOztBQUFBOztBQUNBO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixnQ0FBZUgsTUFBTSxDQUFDRyxTQUF0QixFQUFpQ0YsY0FBakMsRUFBaUQsSUFBakQsQ0FBakI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUhBO0FBSUQ7Ozs7NkJBQ1E7QUFDUCxVQUFNQyxTQUFTLEdBQUcsU0FBUyxLQUFLQSxTQUFMLENBQWVDLE1BQWYsRUFBM0I7QUFDQSxhQUFPLENBQUMsS0FBS0YsV0FBTixHQUFvQixNQUFNQyxTQUFOLEdBQWtCLEdBQXRDLEdBQTRDQSxTQUFuRDtBQUNEOzs7O0VBaEIwQ0Usc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWVwUmVhZG9ubHkgfSBmcm9tIFwidXRpbGl0eS10eXBlc1wiO1xuaW1wb3J0IENvbmRpdGlvbiBmcm9tIFwiLi9Db25kaXRpb25cIjtcbmltcG9ydCBidWlsZENvbmRpdGlvbiBmcm9tIFwiLi9idWlsZENvbmRpdGlvblwiO1xuaW1wb3J0IHsgTmVnYXRlQ29uZGl0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5lZ2F0ZUNvbmRpdGlvbiBleHRlbmRzIENvbmRpdGlvbiB7XG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uO1xuICBzdHJpcFBhcmVuczogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IERlZXBSZWFkb25seTxOZWdhdGVDb25kaXRpb25Db25maWc+LFxuICAgIGJhc2VPYmplY3ROYW1lOiBzdHJpbmcsXG4gICAgc3RyaXBQYXJlbnM6IGJvb2xlYW5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGJ1aWxkQ29uZGl0aW9uKGNvbmZpZy5jb25kaXRpb24sIGJhc2VPYmplY3ROYW1lLCB0cnVlKTtcbiAgICB0aGlzLnN0cmlwUGFyZW5zID0gc3RyaXBQYXJlbnM7XG4gIH1cbiAgdG9TT1FMKCkge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IFwiTk9UIFwiICsgdGhpcy5jb25kaXRpb24udG9TT1FMKCk7XG4gICAgcmV0dXJuICF0aGlzLnN0cmlwUGFyZW5zID8gXCIoXCIgKyBjb25kaXRpb24gKyBcIilcIiA6IGNvbmRpdGlvbjtcbiAgfVxufVxuIl19