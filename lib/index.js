'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = confirm;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirm = function (_Component) {
	_inherits(Confirm, _Component);

	function Confirm(props) {
		_classCallCheck(this, Confirm);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Confirm).call(this, props));

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
			container.remove();
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
			var body = this.props.description ? _react2.default.createElement(
				_reactBootstrap.Modal.Body,
				null,
				_react2.default.createElement(
					'p',
					null,
					this.props.description
				)
			) : null;
			var cancelButton = _react2.default.createElement(
				_reactBootstrap.Button,
				{ onClick: this.cancel },
				this.props.abortLabel
			);
			var okButton = _react2.default.createElement(
				_reactBootstrap.Button,
				{ bsStyle: 'primary', onClick: this.done },
				this.props.confirmLabel
			);
			return _react2.default.createElement(
				_reactBootstrap.Modal,
				{ show: this.state.show },
				_react2.default.createElement(
					_reactBootstrap.Modal.Header,
					null,
					_react2.default.createElement(
						_reactBootstrap.Modal.Title,
						null,
						this.props.message
					)
				),
				body,
				_react2.default.createElement(
					_reactBootstrap.Modal.Footer,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'text-right' },
						okButton,
						' ',
						cancelButton
					)
				)
			);
		}
	}]);

	return Confirm;
}(_react.Component);

Confirm.defaultProps = {
	message: 'Are you sure?',
	confirmLabel: 'OK',
	abortLabel: 'Cancel',
	unmount: _lodash2.default.noop,
	close: _lodash2.default.noop,
	done: _lodash2.default.noop
};
function confirm(message) {
	var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	var container = document.createElement('div');
	document.body.appendChild(container);

	var props = { message: message, container: container };
	if (_lodash2.default.isFunction(options)) {
		props.done = options;
	} else {
		Object.assign(props, options);
	}

	_reactDom2.default.render(_react2.default.createElement(Confirm, props), container);
}