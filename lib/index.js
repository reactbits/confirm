"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = confirm;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var noop = function noop() {};

var isFunction = function isFunction(v) {
  return typeof v === 'function';
};

var Confirm =
/*#__PURE__*/
function (_Component) {
  _inherits(Confirm, _Component);

  function Confirm(props) {
    var _this;

    _classCallCheck(this, Confirm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Confirm).call(this, props));
    _this.state = {
      show: true
    };
    _this.cancel = _this.cancel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.done = _this.done.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Confirm, [{
    key: "unmount",
    value: function unmount() {
      var container = this.props.container;

      _reactDom.default.unmountComponentAtNode(container);

      container.parentNode.removeChild(container);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var _this2 = this;

      this.setState({
        show: false
      });
      setTimeout(function () {
        _this2.unmount();

        _this2.props.close();
      });
    }
  }, {
    key: "done",
    value: function done() {
      var _this3 = this;

      this.setState({
        show: false
      });
      setTimeout(function () {
        _this3.unmount();

        _this3.props.done();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var body = this.props.description ? _react.default.createElement(_reactBootstrap.Modal.Body, null, _react.default.createElement("p", null, this.props.description)) : null;

      var cancelButton = _react.default.createElement(_reactBootstrap.Button, {
        onClick: this.cancel
      }, this.props.abortLabel);

      var okButton = _react.default.createElement(_reactBootstrap.Button, {
        bsStyle: "primary",
        onClick: this.done
      }, this.props.confirmLabel);

      return _react.default.createElement(_reactBootstrap.Modal, {
        show: this.state.show
      }, _react.default.createElement(_reactBootstrap.Modal.Header, null, _react.default.createElement(_reactBootstrap.Modal.Title, null, this.props.message)), body, _react.default.createElement(_reactBootstrap.Modal.Footer, null, _react.default.createElement("div", {
        className: "text-right"
      }, okButton, "\xA0", cancelButton)));
    }
  }]);

  return Confirm;
}(_react.Component);

_defineProperty(Confirm, "defaultProps", {
  message: 'Are you sure?',
  confirmLabel: 'OK',
  abortLabel: 'Cancel',
  unmount: noop,
  close: noop,
  done: noop
});

function confirm(message) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = document.createElement('div');
  document.body.appendChild(container);
  var props = {
    message: message,
    container: container
  };

  if (isFunction(options)) {
    props.done = options;
  } else {
    Object.assign(props, options);
  }

  _reactDom.default.render(_react.default.createElement(Confirm, props), container);
}