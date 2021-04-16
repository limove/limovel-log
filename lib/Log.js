"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./log.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Log = function Log(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "limove-log"
  }, "log: ", props.children);
};

var _default = Log;
exports.default = _default;