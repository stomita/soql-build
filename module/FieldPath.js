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
}(Field);

export { FieldPath as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GaWVsZFBhdGgudHMiXSwibmFtZXMiOlsiRmllbGQiLCJGaWVsZFBhdGgiLCJmaWVsZCIsIl9iYXNlT2JqZWN0TmFtZSIsInBhdGgiLCJzcGxpdCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsU0FBbEI7O0lBRXFCQyxTOzs7OztBQUduQixxQkFBWUMsS0FBWixFQUEyQkMsZUFBM0IsRUFBb0Q7QUFBQTs7QUFBQTs7QUFDbEQ7QUFDQSxVQUFLQyxJQUFMLEdBQVlGLEtBQUssQ0FBQ0csS0FBTixDQUFZLEdBQVosQ0FBWjtBQUZrRDtBQUduRDs7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS0QsSUFBTCxDQUFVRSxJQUFWLENBQWUsR0FBZixDQUFQO0FBQ0Q7Ozs7RUFWb0NOLEs7O1NBQWxCQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkUGF0aCBleHRlbmRzIEZpZWxkIHtcbiAgcGF0aDogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoZmllbGQ6IHN0cmluZywgX2Jhc2VPYmplY3ROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGF0aCA9IGZpZWxkLnNwbGl0KFwiLlwiKTtcbiAgfVxuXG4gIHRvU09RTCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLmpvaW4oXCIuXCIpO1xuICB9XG59XG4iXX0=