import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Modal, Button } from 'react-bootstrap';

function noop() { }

function wrap(fn, before) {
	return function (...args) {
		before();
		return fn.apply(null, args);
	};
}

export function deferred() {
	const d = { resolve: noop, reject: noop };
	d.promise = new Promise((resolve, reject) => {
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

class Confirm extends Component {
	static defaultProps = {
		confirmLabel: 'OK',
		abortLabel: 'Cancel',
	};

	state = {
		show: true,
	};

	componentDidMount() {
		this.deferred = deferred();
	}

	abort = () => {
		this.setState({ show: false });
		setTimeout(() => this.deferred.reject());
	};

	confirm = () => {
		this.setState({ show: false });
		setTimeout(() => this.deferred.resolve(true));
	};

	render() {
		const body = this.props.description
			? <Modal.Body><p>{this.props.description}</p></Modal.Body>
			: null;
		return (
			<Modal show={this.state.show}>
				<Modal.Header>
					<Modal.Title>{this.props.message}</Modal.Title>
				</Modal.Header>
        {body}
				<Modal.Footer>
					<div className="text-right">
						<Button onClick={this.abort}>
							{this.props.abortLabel}
						</Button>
						{' '}
						<Button bsStyle="primary" onClick={this.confirm}>
							{this.props.confirmLabel}
						</Button>
					</div>
				</Modal.Footer>
			</Modal>
    );
	}
}

export default function confirm(message, options = {}) {
	const wrapper = document.body.appendChild(document.createElement('div'));
	const component = render(<Confirm message={message} {...options} />, wrapper);
	return component.deferred.always(() => {
		unmountComponentAtNode(wrapper);
		wrapper.remove();
	}).promise;
}
