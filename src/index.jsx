import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';

class Confirm extends Component {
	static defaultProps = {
		message: 'Are you sure?',
		confirmLabel: 'OK',
		abortLabel: 'Cancel',
		unmount: _.noop,
		close: _.noop,
		done: _.noop,
	};

	constructor(props) {
		super(props);
		this.state = { show: true };
		this.cancel = this.cancel.bind(this);
		this.done = this.done.bind(this);
	}

	unmount() {
		const container = this.props.container;
		ReactDOM.unmountComponentAtNode(container);
		container.remove();
	}

	cancel() {
		this.setState({ show: false });
		setTimeout(() => {
			this.unmount();
			this.props.close();
		});
	}

	done() {
		this.setState({ show: false });
		setTimeout(() => {
			this.unmount();
			this.props.done();
		});
	}

	render() {
		const body = this.props.description
			? <Modal.Body><p>{this.props.description}</p></Modal.Body>
			: null;
		const cancelButton = (
			<Button onClick={this.cancel}>{this.props.abortLabel}</Button>
		);
		const okButton = (
			<Button bsStyle="primary" onClick={this.done}>
				{this.props.confirmLabel}
			</Button>
		);
		return (
			<Modal show={this.state.show}>
				<Modal.Header>
					<Modal.Title>{this.props.message}</Modal.Title>
				</Modal.Header>
        {body}
				<Modal.Footer>
					<div className="text-right">
						{okButton}&nbsp;{cancelButton}
					</div>
				</Modal.Footer>
			</Modal>
    );
	}
}

export default function confirm(message, options = {}) {
	const container = document.createElement('div');
	document.body.appendChild(container);

	const props = { message, container };
	if (_.isFunction(options)) {
		props.done = options;
	} else {
		Object.assign(props, options);
	}

	ReactDOM.render(<Confirm {...props} />, container);
}
