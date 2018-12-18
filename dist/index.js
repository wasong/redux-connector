"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createConnector = _interopRequireDefault(require("./createConnector"));

var _renderProps = _interopRequireDefault(require("./renderProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  createConnector: _createConnector.default,
  renderProps: _renderProps.default
};
exports.default = _default;