'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.deferred = deferred;
exports.default = confirm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

function wrap(fn, before) {
	return function () {
		before();

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return fn.apply(null, args);
	};
}

function deferred() {
	var d = { resolve: noop, reject: noop };
	d.promise = new Promise(function (resolve, reject) {
		d.resolve = resolve;
		d.reject = reject;
	});
	d.always = function (before) {
		d.resolve = wrap(d.resolve, before);
		d.reject = wrap(d.reject, before);
		return d;
	};
	return d;
}

var Confirm = function (_Component) {
	_inherits(Confirm, _Component);

	function Confirm() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, Confirm);

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Confirm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
			show: true
		}, _this.abort = function () {
			_this.setState({ show: false });
			setTimeout(function () {
				return _this.deferred.reject();
			});
		}, _this.confirm = function () {
			_this.setState({ show: false });
			setTimeout(function () {
				return _this.deferred.resolve(true);
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Confirm, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.deferred = deferred();
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
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ role: 'abort', onClick: this.abort },
							this.props.abortLabel
						),
						' ',
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ role: 'confirm', bsStyle: 'primary', onClick: this.confirm },
							this.props.confirmLabel
						)
					)
				)
			);
		}
	}]);

	return Confirm;
}(_react.Component);

Confirm.defaultProps = {
	confirmLabel: 'OK',
	abortLabel: 'Cancel'
};
function confirm(message) {
	var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	var wrapper = document.body.appendChild(document.createElement('div'));
	var component = (0, _reactDom.render)(_react2.default.createElement(Confirm, _extends({ message: message }, options)), wrapper);
	return component.deferred.always(function () {
		(0, _reactDom.unmountComponentAtNode)(wrapper);
		wrapper.remove();
	}).promise;
}