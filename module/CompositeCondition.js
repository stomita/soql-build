function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import Condition from "./Condition";
import buildCondition from "./buildCondition";
/**
 *
 */
var CompositeCondition = /*#__PURE__*/function (_Condition) {
  _inherits(CompositeCondition, _Condition);
  var _super = _createSuper(CompositeCondition);
  /**
   *
   */
  function CompositeCondition(config, baseObjectName) {
    var _this;
    var stripParens = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    _classCallCheck(this, CompositeCondition);
    _this = _super.call(this);
    _this.operator = config.operator;
    _this.conditions = config.conditions.map(function (cond) {
      return buildCondition(cond, baseObjectName, false);
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
}(Condition);
export { CompositeCondition as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb25kaXRpb24iLCJidWlsZENvbmRpdGlvbiIsIkNvbXBvc2l0ZUNvbmRpdGlvbiIsIl9Db25kaXRpb24iLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsIl90aGlzIiwic3RyaXBQYXJlbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwib3BlcmF0b3IiLCJjb25kaXRpb25zIiwibWFwIiwiY29uZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwidG9TT1FMIiwiY29uZGl0aW9uIiwiYyIsImpvaW4iLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL0NvbXBvc2l0ZUNvbmRpdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERlZXBSZWFkb25seSB9IGZyb20gXCJ0cy1lc3NlbnRpYWxzXCI7XG5pbXBvcnQgQ29uZGl0aW9uIGZyb20gXCIuL0NvbmRpdGlvblwiO1xuaW1wb3J0IGJ1aWxkQ29uZGl0aW9uIGZyb20gXCIuL2J1aWxkQ29uZGl0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IENvbXBvc2l0ZUNvbmRpdGlvbkNvbmZpZyB9IGZyb20gXCIuL0NvbmRpdGlvblwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZUNvbmRpdGlvbiBleHRlbmRzIENvbmRpdGlvbiB7XG4gIG9wZXJhdG9yOiBcIkFORFwiIHwgXCJPUlwiO1xuICBjb25kaXRpb25zOiBDb25kaXRpb25bXTtcbiAgc3RyaXBQYXJlbnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IERlZXBSZWFkb25seTxDb21wb3NpdGVDb25kaXRpb25Db25maWc+LFxuICAgIGJhc2VPYmplY3ROYW1lOiBzdHJpbmcsXG4gICAgc3RyaXBQYXJlbnM6IGJvb2xlYW4gPSBmYWxzZSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9wZXJhdG9yID0gY29uZmlnLm9wZXJhdG9yO1xuICAgIHRoaXMuY29uZGl0aW9ucyA9IGNvbmZpZy5jb25kaXRpb25zLm1hcCgoY29uZCkgPT5cbiAgICAgIGJ1aWxkQ29uZGl0aW9uKGNvbmQsIGJhc2VPYmplY3ROYW1lLCBmYWxzZSksXG4gICAgKTtcbiAgICB0aGlzLnN0cmlwUGFyZW5zID0gc3RyaXBQYXJlbnM7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbnNcbiAgICAgIC5tYXAoKGMpID0+IGMudG9TT1FMKCkpXG4gICAgICAuam9pbihcIiBcIiArIHRoaXMub3BlcmF0b3IgKyBcIiBcIik7XG4gICAgcmV0dXJuIGNvbmRpdGlvbi5sZW5ndGggPiAwICYmICF0aGlzLnN0cmlwUGFyZW5zXG4gICAgICA/IFwiKFwiICsgY29uZGl0aW9uICsgXCIpXCJcbiAgICAgIDogY29uZGl0aW9uO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxTQUFTLE1BQU0sYUFBYTtBQUNuQyxPQUFPQyxjQUFjLE1BQU0sa0JBQWtCO0FBRzdDO0FBQ0E7QUFDQTtBQUZBLElBR3FCQyxrQkFBa0IsMEJBQUFDLFVBQUE7RUFBQUMsU0FBQSxDQUFBRixrQkFBQSxFQUFBQyxVQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLGtCQUFBO0VBS3JDO0FBQ0Y7QUFDQTtFQUNFLFNBQUFBLG1CQUNFSyxNQUE4QyxFQUM5Q0MsY0FBc0IsRUFFdEI7SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFEQUMsV0FBb0IsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsS0FBSztJQUFBRyxlQUFBLE9BQUFaLGtCQUFBO0lBRTVCTyxLQUFBLEdBQUFKLE1BQUEsQ0FBQVUsSUFBQTtJQUNBTixLQUFBLENBQUtPLFFBQVEsR0FBR1QsTUFBTSxDQUFDUyxRQUFRO0lBQy9CUCxLQUFBLENBQUtRLFVBQVUsR0FBR1YsTUFBTSxDQUFDVSxVQUFVLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxJQUFJO01BQUEsT0FDM0NsQixjQUFjLENBQUNrQixJQUFJLEVBQUVYLGNBQWMsRUFBRSxLQUFLLENBQUM7SUFBQSxDQUM3QyxDQUFDO0lBQ0RDLEtBQUEsQ0FBS0MsV0FBVyxHQUFHQSxXQUFXO0lBQUMsT0FBQUQsS0FBQTtFQUNqQzs7RUFFQTtBQUNGO0FBQ0E7RUFGRVcsWUFBQSxDQUFBbEIsa0JBQUE7SUFBQW1CLEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUFDLE9BQUEsRUFBUztNQUNQLElBQU1DLFNBQVMsR0FBRyxJQUFJLENBQUNQLFVBQVUsQ0FDOUJDLEdBQUcsQ0FBQyxVQUFDTyxDQUFDO1FBQUEsT0FBS0EsQ0FBQyxDQUFDRixNQUFNLENBQUMsQ0FBQztNQUFBLEVBQUMsQ0FDdEJHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDVixRQUFRLEdBQUcsR0FBRyxDQUFDO01BQ2xDLE9BQU9RLFNBQVMsQ0FBQ1osTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ0YsV0FBVyxHQUM1QyxHQUFHLEdBQUdjLFNBQVMsR0FBRyxHQUFHLEdBQ3JCQSxTQUFTO0lBQ2Y7RUFBQztFQUFBLE9BQUF0QixrQkFBQTtBQUFBLEVBL0I2Q0YsU0FBUztBQUFBLFNBQXBDRSxrQkFBa0IsSUFBQXlCLE9BQUEifQ==