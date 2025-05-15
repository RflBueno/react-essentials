"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var rootElement = document.getElementById("root");
var root = (0, _client.createRoot)(rootElement);
root.render(/*#__PURE__*/_react["default"].createElement("h1", {
  id: "title"
}, /*#__PURE__*/_react["default"].createElement("span", null, "HOLA LASCADO")));