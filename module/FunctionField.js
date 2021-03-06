function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import Field from "./Field";
import buildField from "./buildField";

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
      return buildField(arg, baseObjectName);
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
}(Field);

export { FunctionField as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GdW5jdGlvbkZpZWxkLnRzIl0sIm5hbWVzIjpbIkZpZWxkIiwiYnVpbGRGaWVsZCIsIkZ1bmN0aW9uRmllbGQiLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsImFyZ3VtZW50cyIsIm1hcCIsImFyZyIsImFsaWFzIiwidG9TT1FMIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0EsS0FBUCxNQUEyQyxTQUEzQztBQUNBLE9BQU9DLFVBQVAsTUFBdUIsY0FBdkI7O0lBRXFCQyxhOzs7OztBQUtuQix5QkFDRUMsTUFERixFQUVFQyxjQUZGLEVBR0U7QUFBQTs7QUFBQTs7QUFDQTtBQUNBLHdCQUFnQkQsTUFBTSxZQUF0QjtBQUNBLFVBQUtFLFNBQUwsR0FBaUIsQ0FBQ0YsTUFBTSxDQUFDRSxTQUFQLElBQW9CLEVBQXJCLEVBQXlCQyxHQUF6QixDQUE2QixVQUFBQyxHQUFHO0FBQUEsYUFDL0NOLFVBQVUsQ0FBQ00sR0FBRCxFQUFNSCxjQUFOLENBRHFDO0FBQUEsS0FBaEMsQ0FBakI7QUFHQSxVQUFLSSxLQUFMLEdBQWFMLE1BQU0sQ0FBQ0ssS0FBcEI7QUFOQTtBQU9EOzs7OzZCQUVRO0FBQ1AsYUFDRSxtQkFDQSxHQURBLEdBRUEsS0FBS0gsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNFLE1BQUosRUFBSjtBQUFBLE9BQXRCLEVBQXdDQyxJQUF4QyxDQUE2QyxJQUE3QyxDQUZBLEdBR0EsR0FKRjtBQU1EOzs7O0VBeEJ3Q1YsSzs7U0FBdEJFLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWVwUmVhZG9ubHkgfSBmcm9tIFwidXRpbGl0eS10eXBlc1wiO1xuaW1wb3J0IEZpZWxkLCB7IEZ1bmN0aW9uRmllbGRDb25maWcgfSBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IGJ1aWxkRmllbGQgZnJvbSBcIi4vYnVpbGRGaWVsZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbkZpZWxkIGV4dGVuZHMgRmllbGQge1xuICBmdW5jdGlvbjogc3RyaW5nO1xuICBhcmd1bWVudHM6IEZpZWxkW107XG4gIGFsaWFzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29uZmlnOiBEZWVwUmVhZG9ubHk8RnVuY3Rpb25GaWVsZENvbmZpZz4sXG4gICAgYmFzZU9iamVjdE5hbWU6IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZnVuY3Rpb24gPSBjb25maWcuZnVuY3Rpb247XG4gICAgdGhpcy5hcmd1bWVudHMgPSAoY29uZmlnLmFyZ3VtZW50cyB8fCBbXSkubWFwKGFyZyA9PlxuICAgICAgYnVpbGRGaWVsZChhcmcsIGJhc2VPYmplY3ROYW1lKVxuICAgICk7XG4gICAgdGhpcy5hbGlhcyA9IGNvbmZpZy5hbGlhcztcbiAgfVxuXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mdW5jdGlvbiArXG4gICAgICBcIihcIiArXG4gICAgICB0aGlzLmFyZ3VtZW50cy5tYXAoYXJnID0+IGFyZy50b1NPUUwoKSkuam9pbihcIiwgXCIpICtcbiAgICAgIFwiKVwiXG4gICAgKTtcbiAgfVxufVxuIl19