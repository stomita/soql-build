"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Field2 = _interopRequireDefault(require("./Field"));

var _SortInfo = _interopRequireDefault(require("./SortInfo"));

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
var SubqueryField =
/*#__PURE__*/
function (_Field) {
  _inherits(SubqueryField, _Field);

  /**
   *
   */
  function SubqueryField(config, baseObjectName) {
    var _this;

    _classCallCheck(this, SubqueryField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubqueryField).call(this));
    _this.fields = config.fields.map(function (field) {
      return (0, _buildField["default"])(field, baseObjectName);
    });
    _this.relationship = config.relationship;

    if (config.condition) {
      _this.condition = (0, _buildCondition["default"])(config.condition, baseObjectName, true);
    }

    if (config.sortInfo) {
      _this.sortInfo = config.sortInfo.map(function (sortInfo) {
        return new _SortInfo["default"](sortInfo, baseObjectName);
      });
    }

    _this.limit = config.limit;
    _this.offset = config.offset;
    return _this;
  }
  /**
   *
   */


  _createClass(SubqueryField, [{
    key: "toSOQL",
    value: function toSOQL() {
      return "(" + ["SELECT", this.fields.map(function (field) {
        return field.toSOQL();
      }).join(", "), "FROM", this.relationship].concat(_toConsumableArray(this.condition ? ["WHERE", this.condition.toSOQL()] : []), _toConsumableArray(this.sortInfo && this.sortInfo.length > 0 ? ["ORDER BY", this.sortInfo.map(function (s) {
        return s.toSOQL();
      }).join(", ")] : []), _toConsumableArray(typeof this.limit !== "undefined" ? ["LIMIT", String(this.limit)] : []), _toConsumableArray(typeof this.offset !== "undefined" ? ["OFFSET", String(this.offset)] : [])).join(" ") + ")";
    }
  }]);

  return SubqueryField;
}(_Field2["default"]);

exports["default"] = SubqueryField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TdWJxdWVyeUZpZWxkLnRzIl0sIm5hbWVzIjpbIlN1YnF1ZXJ5RmllbGQiLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsImZpZWxkcyIsIm1hcCIsImZpZWxkIiwicmVsYXRpb25zaGlwIiwiY29uZGl0aW9uIiwic29ydEluZm8iLCJTb3J0SW5mbyIsImxpbWl0Iiwib2Zmc2V0IiwidG9TT1FMIiwiam9pbiIsImxlbmd0aCIsInMiLCJTdHJpbmciLCJGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxhOzs7OztBQVFuQjs7O0FBR0EseUJBQVlDLE1BQVosRUFBeUNDLGNBQXpDLEVBQWlFO0FBQUE7O0FBQUE7O0FBQy9EO0FBQ0EsVUFBS0MsTUFBTCxHQUFjRixNQUFNLENBQUNFLE1BQVAsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxLQUFLO0FBQUEsYUFBSSw0QkFBV0EsS0FBWCxFQUFrQkgsY0FBbEIsQ0FBSjtBQUFBLEtBQXZCLENBQWQ7QUFDQSxVQUFLSSxZQUFMLEdBQW9CTCxNQUFNLENBQUNLLFlBQTNCOztBQUNBLFFBQUlMLE1BQU0sQ0FBQ00sU0FBWCxFQUFzQjtBQUNwQixZQUFLQSxTQUFMLEdBQWlCLGdDQUFlTixNQUFNLENBQUNNLFNBQXRCLEVBQWlDTCxjQUFqQyxFQUFpRCxJQUFqRCxDQUFqQjtBQUNEOztBQUNELFFBQUlELE1BQU0sQ0FBQ08sUUFBWCxFQUFxQjtBQUNuQixZQUFLQSxRQUFMLEdBQWdCUCxNQUFNLENBQUNPLFFBQVAsQ0FBZ0JKLEdBQWhCLENBQ2QsVUFBQUksUUFBUTtBQUFBLGVBQUksSUFBSUMsb0JBQUosQ0FBYUQsUUFBYixFQUF1Qk4sY0FBdkIsQ0FBSjtBQUFBLE9BRE0sQ0FBaEI7QUFHRDs7QUFDRCxVQUFLUSxLQUFMLEdBQWFULE1BQU0sQ0FBQ1MsS0FBcEI7QUFDQSxVQUFLQyxNQUFMLEdBQWNWLE1BQU0sQ0FBQ1UsTUFBckI7QUFiK0Q7QUFjaEU7QUFFRDs7Ozs7Ozs2QkFHUztBQUNQLGFBQ0UsTUFDQSxDQUNFLFFBREYsRUFFRSxLQUFLUixNQUFMLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ08sTUFBTixFQUFKO0FBQUEsT0FBckIsRUFBeUNDLElBQXpDLENBQThDLElBQTlDLENBRkYsRUFHRSxNQUhGLEVBSUUsS0FBS1AsWUFKUCw0QkFLTSxLQUFLQyxTQUFMLEdBQWlCLENBQUMsT0FBRCxFQUFVLEtBQUtBLFNBQUwsQ0FBZUssTUFBZixFQUFWLENBQWpCLEdBQXNELEVBTDVELHNCQU1NLEtBQUtKLFFBQUwsSUFBaUIsS0FBS0EsUUFBTCxDQUFjTSxNQUFkLEdBQXVCLENBQXhDLEdBQ0EsQ0FBQyxVQUFELEVBQWEsS0FBS04sUUFBTCxDQUFjSixHQUFkLENBQWtCLFVBQUFXLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNILE1BQUYsRUFBSjtBQUFBLE9BQW5CLEVBQW1DQyxJQUFuQyxDQUF3QyxJQUF4QyxDQUFiLENBREEsR0FFQSxFQVJOLHNCQVNNLE9BQU8sS0FBS0gsS0FBWixLQUFzQixXQUF0QixHQUNBLENBQUMsT0FBRCxFQUFVTSxNQUFNLENBQUMsS0FBS04sS0FBTixDQUFoQixDQURBLEdBRUEsRUFYTixzQkFZTSxPQUFPLEtBQUtDLE1BQVosS0FBdUIsV0FBdkIsR0FDQSxDQUFDLFFBQUQsRUFBV0ssTUFBTSxDQUFDLEtBQUtMLE1BQU4sQ0FBakIsQ0FEQSxHQUVBLEVBZE4sR0FlRUUsSUFmRixDQWVPLEdBZlAsQ0FEQSxHQWlCQSxHQWxCRjtBQW9CRDs7OztFQW5Ed0NJLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpZWxkLCB7IFN1YnF1ZXJ5RmllbGRDb25maWcgfSBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IENvbmRpdGlvbiBmcm9tIFwiLi9Db25kaXRpb25cIjtcbmltcG9ydCBTb3J0SW5mbyBmcm9tIFwiLi9Tb3J0SW5mb1wiO1xuaW1wb3J0IGJ1aWxkRmllbGQgZnJvbSBcIi4vYnVpbGRGaWVsZFwiO1xuaW1wb3J0IGJ1aWxkQ29uZGl0aW9uIGZyb20gXCIuL2J1aWxkQ29uZGl0aW9uXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VicXVlcnlGaWVsZCBleHRlbmRzIEZpZWxkIHtcbiAgZmllbGRzOiBGaWVsZFtdO1xuICByZWxhdGlvbnNoaXA6IHN0cmluZztcbiAgY29uZGl0aW9uOiBDb25kaXRpb24gfCB1bmRlZmluZWQ7XG4gIHNvcnRJbmZvOiBTb3J0SW5mb1tdIHwgdW5kZWZpbmVkO1xuICBsaW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBvZmZzZXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogU3VicXVlcnlGaWVsZENvbmZpZywgYmFzZU9iamVjdE5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5maWVsZHMgPSBjb25maWcuZmllbGRzLm1hcChmaWVsZCA9PiBidWlsZEZpZWxkKGZpZWxkLCBiYXNlT2JqZWN0TmFtZSkpO1xuICAgIHRoaXMucmVsYXRpb25zaGlwID0gY29uZmlnLnJlbGF0aW9uc2hpcDtcbiAgICBpZiAoY29uZmlnLmNvbmRpdGlvbikge1xuICAgICAgdGhpcy5jb25kaXRpb24gPSBidWlsZENvbmRpdGlvbihjb25maWcuY29uZGl0aW9uLCBiYXNlT2JqZWN0TmFtZSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChjb25maWcuc29ydEluZm8pIHtcbiAgICAgIHRoaXMuc29ydEluZm8gPSBjb25maWcuc29ydEluZm8ubWFwKFxuICAgICAgICBzb3J0SW5mbyA9PiBuZXcgU29ydEluZm8oc29ydEluZm8sIGJhc2VPYmplY3ROYW1lKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5saW1pdCA9IGNvbmZpZy5saW1pdDtcbiAgICB0aGlzLm9mZnNldCA9IGNvbmZpZy5vZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgXCIoXCIgK1xuICAgICAgW1xuICAgICAgICBcIlNFTEVDVFwiLFxuICAgICAgICB0aGlzLmZpZWxkcy5tYXAoZmllbGQgPT4gZmllbGQudG9TT1FMKCkpLmpvaW4oXCIsIFwiKSxcbiAgICAgICAgXCJGUk9NXCIsXG4gICAgICAgIHRoaXMucmVsYXRpb25zaGlwLFxuICAgICAgICAuLi4odGhpcy5jb25kaXRpb24gPyBbXCJXSEVSRVwiLCB0aGlzLmNvbmRpdGlvbi50b1NPUUwoKV0gOiBbXSksXG4gICAgICAgIC4uLih0aGlzLnNvcnRJbmZvICYmIHRoaXMuc29ydEluZm8ubGVuZ3RoID4gMFxuICAgICAgICAgID8gW1wiT1JERVIgQllcIiwgdGhpcy5zb3J0SW5mby5tYXAocyA9PiBzLnRvU09RTCgpKS5qb2luKFwiLCBcIildXG4gICAgICAgICAgOiBbXSksXG4gICAgICAgIC4uLih0eXBlb2YgdGhpcy5saW1pdCAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgID8gW1wiTElNSVRcIiwgU3RyaW5nKHRoaXMubGltaXQpXVxuICAgICAgICAgIDogW10pLFxuICAgICAgICAuLi4odHlwZW9mIHRoaXMub2Zmc2V0ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgPyBbXCJPRkZTRVRcIiwgU3RyaW5nKHRoaXMub2Zmc2V0KV1cbiAgICAgICAgICA6IFtdKVxuICAgICAgXS5qb2luKFwiIFwiKSArXG4gICAgICBcIilcIlxuICAgICk7XG4gIH1cbn1cbiJdfQ==