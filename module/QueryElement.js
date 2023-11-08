function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 *
 */
var QueryElement = /*#__PURE__*/function () {
  function QueryElement() {
    _classCallCheck(this, QueryElement);
  }
  _createClass(QueryElement, [{
    key: "toSOQL",
    value:
    /**
     *
     */
    function toSOQL() {
      return "";
    }
  }]);
  return QueryElement;
}();
export { QueryElement as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJRdWVyeUVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInRvU09RTCIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvUXVlcnlFbGVtZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnlFbGVtZW50IHtcbiAgLyoqXG4gICAqXG4gICAqL1xuICB0b1NPUUwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFGQSxJQUdxQkEsWUFBWTtFQUFBLFNBQUFBLGFBQUE7SUFBQUMsZUFBQSxPQUFBRCxZQUFBO0VBQUE7RUFBQUUsWUFBQSxDQUFBRixZQUFBO0lBQUFHLEdBQUE7SUFBQUMsS0FBQTtJQUMvQjtBQUNGO0FBQ0E7SUFDRSxTQUFBQyxPQUFBLEVBQWlCO01BQ2YsT0FBTyxFQUFFO0lBQ1g7RUFBQztFQUFBLE9BQUFMLFlBQUE7QUFBQTtBQUFBLFNBTmtCQSxZQUFZLElBQUFNLE9BQUEifQ==