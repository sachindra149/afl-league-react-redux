import React, { Component } from 'react';
import '../scss/loading.scss';

class LoadingComponent extends Component {
	render() {
		return (
			<div className="ldsSpinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		)
	}
}

export default LoadingComponent;