'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/Users/stahlman/Desktop/confirm2/confirm/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/stahlman/Desktop/confirm2/confirm/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/stahlman/Desktop/confirm2/confirm/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

exports.default = confirm;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Confirm: {
    displayName: 'Confirm'
  }
};

var _UsersStahlmanDesktopConfirm2ConfirmNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/index.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersStahlmanDesktopConfirm2ConfirmNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/index.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersStahlmanDesktopConfirm2ConfirmNode_modulesReactTransformHmrLibIndexJs2(_UsersStahlmanDesktopConfirm2ConfirmNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Confirm = _wrapComponent('Confirm')((_temp = _class = function (_Component) {
  _inherits(Confirm, _Component);

  function Confirm(props) {
    _classCallCheck(this, Confirm);

    var _this = _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call(this, props));

    _this.state = { show: true };
    _this.cancel = _this.cancel.bind(_this);
    _this.done = _this.done.bind(_this);
    return _this;
  }

  _createClass(Confirm, [{
    key: 'unmount',
    value: function unmount() {
      var container = this.props.container;
      _reactDom2.default.unmountComponentAtNode(container);
      container.parentNode.removeChild(container); // was previously container.remove(); which doesn't work in IE11
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      var _this2 = this;

      this.setState({ show: false });
      setTimeout(function () {
        _this2.unmount();
        _this2.props.close();
      });
    }
  }, {
    key: 'done',
    value: function done() {
      var _this3 = this;

      this.setState({ show: false });
      setTimeout(function () {
        _this3.unmount();
        _this3.props.done();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var body = this.props.description ? _react3.default.createElement(
        _reactBootstrap.Modal.Body,
        null,
        _react3.default.createElement(
          'p',
          null,
          this.props.description
        )
      ) : null;
      var cancelButton = _react3.default.createElement(
        _reactBootstrap.Button,
        { onClick: this.cancel },
        this.props.abortLabel
      );
      var okButton = _react3.default.createElement(
        _reactBootstrap.Button,
        { bsStyle: 'primary', onClick: this.done },
        this.props.confirmLabel
      );
      return _react3.default.createElement(
        _reactBootstrap.Modal,
        { show: this.state.show },
        _react3.default.createElement(
          _reactBootstrap.Modal.Header,
          null,
          _react3.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            this.props.message
          )
        ),
        body,
        _react3.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react3.default.createElement(
            'div',
            { className: 'text-right' },
            okButton,
            '\xA0',
            cancelButton
          )
        )
      );
    }
  }]);

  return Confirm;
}(_react2.Component), _class.defaultProps = {
  message: 'Are you sure?',
  confirmLabel: 'OK',
  abortLabel: 'Cancel',
  unmount: _lodash2.default.noop,
  close: _lodash2.default.noop,
  done: _lodash2.default.noop
}, _temp));

function confirm(message) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var container = document.createElement('div');
  document.body.appendChild(container);

  var props = { message: message, container: container };
  if (_lodash2.default.isFunction(options)) {
    props.done = options;
  } else {
    Object.assign(props, options);
  }

  _reactDom2.default.render(_react3.default.createElement(Confirm, props), container);
}