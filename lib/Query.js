"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _QueryElement2 = _interopRequireDefault(require("./QueryElement"));

var _SortInfo = _interopRequireDefault(require("./SortInfo"));

var _Grouping = _interopRequireDefault(require("./Grouping"));

var _buildCondition = _interopRequireDefault(require("./buildCondition"));

var _buildField = _interopRequireDefault(require("./buildField"));

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
var Query =
/*#__PURE__*/
function (_QueryElement) {
  _inherits(Query, _QueryElement);

  /**
   *
   */
  function Query(config) {
    var _this;

    _classCallCheck(this, Query);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Query).call(this));
    _this.table = config.table;
    _this.scope = config.scope;
    _this.fields = (config.fields || []).map(function (field) {
      return (0, _buildField["default"])(field, _this.table);
    });

    if (config.condition) {
      _this.condition = (0, _buildCondition["default"])(config.condition, _this.table, true);
    }

    if (config.sortInfo) {
      _this.sortInfo = config.sortInfo.map(function (s) {
        return new _SortInfo["default"](s, _this.table);
      });
    }

    if (config.grouping) {
      _this.grouping = new _Grouping["default"](config.grouping, _this.table);
    }

    _this.limit = config.limit;
    _this.offset = config.offset;
    return _this;
  }
  /**
   *
   */


  _createClass(Query, [{
    key: "toSOQL",
    value: function toSOQL() {
      return ["SELECT", this.fields.map(function (field) {
        return field.toSOQL();
      }).join(", "), "FROM", this.table].concat(_toConsumableArray(this.scope ? ["USING SCOPE", this.scope] : []), _toConsumableArray(this.condition ? ["WHERE", this.condition.toSOQL()] : []), _toConsumableArray(this.sortInfo && this.sortInfo.length > 0 ? ["ORDER BY", this.sortInfo.map(function (s) {
        return s.toSOQL();
      }).join(", ")] : []), _toConsumableArray(this.grouping ? [this.grouping.toSOQL()] : []), _toConsumableArray(typeof this.limit !== "undefined" ? ["LIMIT", String(this.limit)] : []), _toConsumableArray(typeof this.offset !== "undefined" ? ["OFFSET", String(this.offset)] : [])).join(" ");
    }
  }]);

  return Query;
}(_QueryElement2["default"]);

exports["default"] = Query;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9RdWVyeS50cyJdLCJuYW1lcyI6WyJRdWVyeSIsImNvbmZpZyIsInRhYmxlIiwic2NvcGUiLCJmaWVsZHMiLCJtYXAiLCJmaWVsZCIsImNvbmRpdGlvbiIsInNvcnRJbmZvIiwicyIsIlNvcnRJbmZvIiwiZ3JvdXBpbmciLCJHcm91cGluZyIsImxpbWl0Iiwib2Zmc2V0IiwidG9TT1FMIiwiam9pbiIsImxlbmd0aCIsIlN0cmluZyIsIlF1ZXJ5RWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7OztJQUdxQkEsSzs7Ozs7QUFVbkI7OztBQUdBLGlCQUFZQyxNQUFaLEVBQStDO0FBQUE7O0FBQUE7O0FBQzdDO0FBQ0EsVUFBS0MsS0FBTCxHQUFhRCxNQUFNLENBQUNDLEtBQXBCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhRixNQUFNLENBQUNFLEtBQXBCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLENBQUNILE1BQU0sQ0FBQ0csTUFBUCxJQUFpQixFQUFsQixFQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQUMsS0FBSztBQUFBLGFBQzNDLDRCQUFXQSxLQUFYLEVBQWtCLE1BQUtKLEtBQXZCLENBRDJDO0FBQUEsS0FBL0IsQ0FBZDs7QUFHQSxRQUFJRCxNQUFNLENBQUNNLFNBQVgsRUFBc0I7QUFDcEIsWUFBS0EsU0FBTCxHQUFpQixnQ0FBZU4sTUFBTSxDQUFDTSxTQUF0QixFQUFpQyxNQUFLTCxLQUF0QyxFQUE2QyxJQUE3QyxDQUFqQjtBQUNEOztBQUNELFFBQUlELE1BQU0sQ0FBQ08sUUFBWCxFQUFxQjtBQUNuQixZQUFLQSxRQUFMLEdBQWdCUCxNQUFNLENBQUNPLFFBQVAsQ0FBZ0JILEdBQWhCLENBQW9CLFVBQUFJLENBQUM7QUFBQSxlQUFJLElBQUlDLG9CQUFKLENBQWFELENBQWIsRUFBZ0IsTUFBS1AsS0FBckIsQ0FBSjtBQUFBLE9BQXJCLENBQWhCO0FBQ0Q7O0FBQ0QsUUFBSUQsTUFBTSxDQUFDVSxRQUFYLEVBQXFCO0FBQ25CLFlBQUtBLFFBQUwsR0FBZ0IsSUFBSUMsb0JBQUosQ0FBYVgsTUFBTSxDQUFDVSxRQUFwQixFQUE4QixNQUFLVCxLQUFuQyxDQUFoQjtBQUNEOztBQUNELFVBQUtXLEtBQUwsR0FBYVosTUFBTSxDQUFDWSxLQUFwQjtBQUNBLFVBQUtDLE1BQUwsR0FBY2IsTUFBTSxDQUFDYSxNQUFyQjtBQWpCNkM7QUFrQjlDO0FBRUQ7Ozs7Ozs7NkJBR1M7QUFDUCxhQUFPLENBQ0wsUUFESyxFQUVMLEtBQUtWLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixVQUFBQyxLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDUyxNQUFOLEVBQUo7QUFBQSxPQUFyQixFQUF5Q0MsSUFBekMsQ0FBOEMsSUFBOUMsQ0FGSyxFQUdMLE1BSEssRUFJTCxLQUFLZCxLQUpBLDRCQUtELEtBQUtDLEtBQUwsR0FBYSxDQUFDLGFBQUQsRUFBZ0IsS0FBS0EsS0FBckIsQ0FBYixHQUEyQyxFQUwxQyxzQkFNRCxLQUFLSSxTQUFMLEdBQWlCLENBQUMsT0FBRCxFQUFVLEtBQUtBLFNBQUwsQ0FBZVEsTUFBZixFQUFWLENBQWpCLEdBQXNELEVBTnJELHNCQU9ELEtBQUtQLFFBQUwsSUFBaUIsS0FBS0EsUUFBTCxDQUFjUyxNQUFkLEdBQXVCLENBQXhDLEdBQ0EsQ0FBQyxVQUFELEVBQWEsS0FBS1QsUUFBTCxDQUFjSCxHQUFkLENBQWtCLFVBQUFJLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNNLE1BQUYsRUFBSjtBQUFBLE9BQW5CLEVBQW1DQyxJQUFuQyxDQUF3QyxJQUF4QyxDQUFiLENBREEsR0FFQSxFQVRDLHNCQVVELEtBQUtMLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUFMLENBQWNJLE1BQWQsRUFBRCxDQUFoQixHQUEyQyxFQVYxQyxzQkFXRCxPQUFPLEtBQUtGLEtBQVosS0FBc0IsV0FBdEIsR0FDQSxDQUFDLE9BQUQsRUFBVUssTUFBTSxDQUFDLEtBQUtMLEtBQU4sQ0FBaEIsQ0FEQSxHQUVBLEVBYkMsc0JBY0QsT0FBTyxLQUFLQyxNQUFaLEtBQXVCLFdBQXZCLEdBQ0EsQ0FBQyxRQUFELEVBQVdJLE1BQU0sQ0FBQyxLQUFLSixNQUFOLENBQWpCLENBREEsR0FFQSxFQWhCQyxHQWlCTEUsSUFqQkssQ0FpQkEsR0FqQkEsQ0FBUDtBQWtCRDs7OztFQXZEZ0NHLHlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVlcFJlYWRvbmx5IH0gZnJvbSBcInV0aWxpdHktdHlwZXNcIjtcbmltcG9ydCBRdWVyeUVsZW1lbnQgZnJvbSBcIi4vUXVlcnlFbGVtZW50XCI7XG5pbXBvcnQgRmllbGQsIHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IENvbmRpdGlvbiwgeyBDb25kaXRpb25Db25maWcgfSBmcm9tIFwiLi9Db25kaXRpb25cIjtcbmltcG9ydCBTb3J0SW5mbywgeyBTb3J0SW5mb0NvbmZpZyB9IGZyb20gXCIuL1NvcnRJbmZvXCI7XG5pbXBvcnQgR3JvdXBpbmcsIHsgR3JvdXBpbmdDb25maWcgfSBmcm9tIFwiLi9Hcm91cGluZ1wiO1xuaW1wb3J0IGJ1aWxkQ29uZGl0aW9uIGZyb20gXCIuL2J1aWxkQ29uZGl0aW9uXCI7XG5pbXBvcnQgYnVpbGRGaWVsZCBmcm9tIFwiLi9idWlsZEZpZWxkXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgUXVlcnlDb25maWcgPSB7XG4gIGZpZWxkczogRmllbGRDb25maWdbXTtcbiAgdGFibGU6IHN0cmluZztcbiAgc2NvcGU/OiBzdHJpbmc7XG4gIGNvbmRpdGlvbj86IENvbmRpdGlvbkNvbmZpZztcbiAgc29ydEluZm8/OiBTb3J0SW5mb0NvbmZpZ1tdO1xuICBncm91cGluZz86IEdyb3VwaW5nQ29uZmlnO1xuICBsaW1pdD86IG51bWJlcjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeSBleHRlbmRzIFF1ZXJ5RWxlbWVudCB7XG4gIGZpZWxkczogRmllbGRbXTtcbiAgdGFibGU6IHN0cmluZztcbiAgc2NvcGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgY29uZGl0aW9uOiBDb25kaXRpb24gfCB1bmRlZmluZWQ7XG4gIHNvcnRJbmZvOiBTb3J0SW5mb1tdIHwgdW5kZWZpbmVkO1xuICBncm91cGluZzogR3JvdXBpbmcgfCB1bmRlZmluZWQ7XG4gIGxpbWl0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIG9mZnNldDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBEZWVwUmVhZG9ubHk8UXVlcnlDb25maWc+KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRhYmxlID0gY29uZmlnLnRhYmxlO1xuICAgIHRoaXMuc2NvcGUgPSBjb25maWcuc2NvcGU7XG4gICAgdGhpcy5maWVsZHMgPSAoY29uZmlnLmZpZWxkcyB8fCBbXSkubWFwKGZpZWxkID0+XG4gICAgICBidWlsZEZpZWxkKGZpZWxkLCB0aGlzLnRhYmxlKVxuICAgICk7XG4gICAgaWYgKGNvbmZpZy5jb25kaXRpb24pIHtcbiAgICAgIHRoaXMuY29uZGl0aW9uID0gYnVpbGRDb25kaXRpb24oY29uZmlnLmNvbmRpdGlvbiwgdGhpcy50YWJsZSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChjb25maWcuc29ydEluZm8pIHtcbiAgICAgIHRoaXMuc29ydEluZm8gPSBjb25maWcuc29ydEluZm8ubWFwKHMgPT4gbmV3IFNvcnRJbmZvKHMsIHRoaXMudGFibGUpKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5ncm91cGluZykge1xuICAgICAgdGhpcy5ncm91cGluZyA9IG5ldyBHcm91cGluZyhjb25maWcuZ3JvdXBpbmcsIHRoaXMudGFibGUpO1xuICAgIH1cbiAgICB0aGlzLmxpbWl0ID0gY29uZmlnLmxpbWl0O1xuICAgIHRoaXMub2Zmc2V0ID0gY29uZmlnLm9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgdG9TT1FMKCkge1xuICAgIHJldHVybiBbXG4gICAgICBcIlNFTEVDVFwiLFxuICAgICAgdGhpcy5maWVsZHMubWFwKGZpZWxkID0+IGZpZWxkLnRvU09RTCgpKS5qb2luKFwiLCBcIiksXG4gICAgICBcIkZST01cIixcbiAgICAgIHRoaXMudGFibGUsXG4gICAgICAuLi4odGhpcy5zY29wZSA/IFtcIlVTSU5HIFNDT1BFXCIsIHRoaXMuc2NvcGVdIDogW10pLFxuICAgICAgLi4uKHRoaXMuY29uZGl0aW9uID8gW1wiV0hFUkVcIiwgdGhpcy5jb25kaXRpb24udG9TT1FMKCldIDogW10pLFxuICAgICAgLi4uKHRoaXMuc29ydEluZm8gJiYgdGhpcy5zb3J0SW5mby5sZW5ndGggPiAwXG4gICAgICAgID8gW1wiT1JERVIgQllcIiwgdGhpcy5zb3J0SW5mby5tYXAocyA9PiBzLnRvU09RTCgpKS5qb2luKFwiLCBcIildXG4gICAgICAgIDogW10pLFxuICAgICAgLi4uKHRoaXMuZ3JvdXBpbmcgPyBbdGhpcy5ncm91cGluZy50b1NPUUwoKV0gOiBbXSksXG4gICAgICAuLi4odHlwZW9mIHRoaXMubGltaXQgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgPyBbXCJMSU1JVFwiLCBTdHJpbmcodGhpcy5saW1pdCldXG4gICAgICAgIDogW10pLFxuICAgICAgLi4uKHR5cGVvZiB0aGlzLm9mZnNldCAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICA/IFtcIk9GRlNFVFwiLCBTdHJpbmcodGhpcy5vZmZzZXQpXVxuICAgICAgICA6IFtdKVxuICAgIF0uam9pbihcIiBcIik7XG4gIH1cbn1cbiJdfQ==