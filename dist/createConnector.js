"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {React Node} Component React Component that will accept state
 * @param {function} queryState receives redux state and returns desired state
 * @param {object} actions actions to be passed to bindActionCreators
 */
var createConnector = function createConnector(Component) {
  var queryState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
    return {};
  };
  var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var mapStateToProps = function mapStateToProps(state) {
    return queryState(state);
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Component);
};

var _default = createConnector;
exports.default = _default;