function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import Condition from "./Condition";
import buildCondition from "./buildCondition";

var NegateCondition =
/*#__PURE__*/
function (_Condition) {
  _inherits(NegateCondition, _Condition);

  function NegateCondition(config, baseObjectName, stripParens) {
    var _this;

    _classCallCheck(this, NegateCondition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NegateCondition).call(this));
    _this.condition = buildCondition(config.condition, baseObjectName, true);
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
}(Condition);

export { NegateCondition as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9OZWdhdGVDb25kaXRpb24udHMiXSwibmFtZXMiOlsiQ29uZGl0aW9uIiwiYnVpbGRDb25kaXRpb24iLCJOZWdhdGVDb25kaXRpb24iLCJjb25maWciLCJiYXNlT2JqZWN0TmFtZSIsInN0cmlwUGFyZW5zIiwiY29uZGl0aW9uIiwidG9TT1FMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixrQkFBM0I7O0lBR3FCQyxlOzs7OztBQUluQiwyQkFDRUMsTUFERixFQUVFQyxjQUZGLEVBR0VDLFdBSEYsRUFJRTtBQUFBOztBQUFBOztBQUNBO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkwsY0FBYyxDQUFDRSxNQUFNLENBQUNHLFNBQVIsRUFBbUJGLGNBQW5CLEVBQW1DLElBQW5DLENBQS9CO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFIQTtBQUlEOzs7OzZCQUNRO0FBQ1AsVUFBTUMsU0FBUyxHQUFHLFNBQVMsS0FBS0EsU0FBTCxDQUFlQyxNQUFmLEVBQTNCO0FBQ0EsYUFBTyxDQUFDLEtBQUtGLFdBQU4sR0FBb0IsTUFBTUMsU0FBTixHQUFrQixHQUF0QyxHQUE0Q0EsU0FBbkQ7QUFDRDs7OztFQWhCMENOLFM7O1NBQXhCRSxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmRpdGlvbiBmcm9tIFwiLi9Db25kaXRpb25cIjtcbmltcG9ydCBidWlsZENvbmRpdGlvbiBmcm9tIFwiLi9idWlsZENvbmRpdGlvblwiO1xuaW1wb3J0IHsgTmVnYXRlQ29uZGl0aW9uQ29uZmlnIH0gZnJvbSBcIi4vQ29uZGl0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5lZ2F0ZUNvbmRpdGlvbiBleHRlbmRzIENvbmRpdGlvbiB7XG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uO1xuICBzdHJpcFBhcmVuczogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IE5lZ2F0ZUNvbmRpdGlvbkNvbmZpZyxcbiAgICBiYXNlT2JqZWN0TmFtZTogc3RyaW5nLFxuICAgIHN0cmlwUGFyZW5zOiBib29sZWFuXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb25kaXRpb24gPSBidWlsZENvbmRpdGlvbihjb25maWcuY29uZGl0aW9uLCBiYXNlT2JqZWN0TmFtZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdHJpcFBhcmVucyA9IHN0cmlwUGFyZW5zO1xuICB9XG4gIHRvU09RTCgpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSBcIk5PVCBcIiArIHRoaXMuY29uZGl0aW9uLnRvU09RTCgpO1xuICAgIHJldHVybiAhdGhpcy5zdHJpcFBhcmVucyA/IFwiKFwiICsgY29uZGl0aW9uICsgXCIpXCIgOiBjb25kaXRpb247XG4gIH1cbn1cbiJdfQ==