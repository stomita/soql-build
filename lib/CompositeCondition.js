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

/**
 *
 */
var CompositeCondition =
/*#__PURE__*/
function (_Condition) {
  _inherits(CompositeCondition, _Condition);

  /**
   *
   */
  function CompositeCondition(config, baseObjectName) {
    var _this;

    var stripParens = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, CompositeCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CompositeCondition).call(this));
    _this.operator = config.operator;
    _this.conditions = config.conditions.map(function (cond) {
      return (0, _buildCondition["default"])(cond, baseObjectName, false);
    });
    _this.stripParens = stripParens;
    return _this;
  }
  /**
   *
   */


  _createClass(CompositeCondition, [{
    key: "toSOQL",
    value: function toSOQL() {
      var condition = this.conditions.map(function (c) {
        return c.toSOQL();
      }).join(" " + this.operator + " ");
      return condition.length > 0 && !this.stripParens ? "(" + condition + ")" : condition;
    }
  }]);

  return CompositeCondition;
}(_Condition2["default"]);

exports["default"] = CompositeCondition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb3NpdGVDb25kaXRpb24udHMiXSwibmFtZXMiOlsiQ29tcG9zaXRlQ29uZGl0aW9uIiwiY29uZmlnIiwiYmFzZU9iamVjdE5hbWUiLCJzdHJpcFBhcmVucyIsIm9wZXJhdG9yIiwiY29uZGl0aW9ucyIsIm1hcCIsImNvbmQiLCJjb25kaXRpb24iLCJjIiwidG9TT1FMIiwiam9pbiIsImxlbmd0aCIsIkNvbmRpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7OztJQUdxQkEsa0I7Ozs7O0FBS25COzs7QUFHQSw4QkFDRUMsTUFERixFQUVFQyxjQUZGLEVBSUU7QUFBQTs7QUFBQSxRQURBQyxXQUNBLHVFQUR1QixLQUN2Qjs7QUFBQTs7QUFDQTtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JILE1BQU0sQ0FBQ0csUUFBdkI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCSixNQUFNLENBQUNJLFVBQVAsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUFDLElBQUk7QUFBQSxhQUMxQyxnQ0FBZUEsSUFBZixFQUFxQkwsY0FBckIsRUFBcUMsS0FBckMsQ0FEMEM7QUFBQSxLQUExQixDQUFsQjtBQUdBLFVBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBTkE7QUFPRDtBQUVEOzs7Ozs7OzZCQUdTO0FBQ1AsVUFBTUssU0FBUyxHQUFHLEtBQUtILFVBQUwsQ0FDZkMsR0FEZSxDQUNYLFVBQUFHLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLE1BQUYsRUFBSjtBQUFBLE9BRFUsRUFFZkMsSUFGZSxDQUVWLE1BQU0sS0FBS1AsUUFBWCxHQUFzQixHQUZaLENBQWxCO0FBR0EsYUFBT0ksU0FBUyxDQUFDSSxNQUFWLEdBQW1CLENBQW5CLElBQXdCLENBQUMsS0FBS1QsV0FBOUIsR0FDSCxNQUFNSyxTQUFOLEdBQWtCLEdBRGYsR0FFSEEsU0FGSjtBQUdEOzs7O0VBL0I2Q0ssc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWVwUmVhZG9ubHkgfSBmcm9tIFwidXRpbGl0eS10eXBlc1wiO1xuaW1wb3J0IENvbmRpdGlvbiBmcm9tIFwiLi9Db25kaXRpb25cIjtcbmltcG9ydCBidWlsZENvbmRpdGlvbiBmcm9tIFwiLi9idWlsZENvbmRpdGlvblwiO1xuaW1wb3J0IHsgQ29tcG9zaXRlQ29uZGl0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlQ29uZGl0aW9uIGV4dGVuZHMgQ29uZGl0aW9uIHtcbiAgb3BlcmF0b3I6IFwiQU5EXCIgfCBcIk9SXCI7XG4gIGNvbmRpdGlvbnM6IENvbmRpdGlvbltdO1xuICBzdHJpcFBhcmVuczogYm9vbGVhbjtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbmZpZzogRGVlcFJlYWRvbmx5PENvbXBvc2l0ZUNvbmRpdGlvbkNvbmZpZz4sXG4gICAgYmFzZU9iamVjdE5hbWU6IHN0cmluZyxcbiAgICBzdHJpcFBhcmVuczogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcGVyYXRvciA9IGNvbmZpZy5vcGVyYXRvcjtcbiAgICB0aGlzLmNvbmRpdGlvbnMgPSBjb25maWcuY29uZGl0aW9ucy5tYXAoY29uZCA9PlxuICAgICAgYnVpbGRDb25kaXRpb24oY29uZCwgYmFzZU9iamVjdE5hbWUsIGZhbHNlKVxuICAgICk7XG4gICAgdGhpcy5zdHJpcFBhcmVucyA9IHN0cmlwUGFyZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25zXG4gICAgICAubWFwKGMgPT4gYy50b1NPUUwoKSlcbiAgICAgIC5qb2luKFwiIFwiICsgdGhpcy5vcGVyYXRvciArIFwiIFwiKTtcbiAgICByZXR1cm4gY29uZGl0aW9uLmxlbmd0aCA+IDAgJiYgIXRoaXMuc3RyaXBQYXJlbnNcbiAgICAgID8gXCIoXCIgKyBjb25kaXRpb24gKyBcIilcIlxuICAgICAgOiBjb25kaXRpb247XG4gIH1cbn1cbiJdfQ==