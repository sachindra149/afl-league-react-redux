import React, { Component } from 'react';
import { BottomFooter, BottomFooterSpike } from '../style/styled.jsx';

class Footer extends Component {
	render() {
		return (
			<BottomFooter>
				<BottomFooterSpike></BottomFooterSpike>
				<p className="textCenter">Created in React &amp; Redux</p>
			</BottomFooter>
		)
	}
}

export default Footer;