import React, { Component } from 'react';
import styled from 'styled-components';
import { LogoImage } from '../style/styled.jsx';
import '../scss/header.scss';

class Header extends Component {
	render() {
		const TopHeader = styled.header`
			border-top: 10px solid ${this.props.styleObj[0].secondaryColor};
			background: ${this.props.styleObj[0].primaryColor};
		`;

		return (
			<TopHeader className="fullWidth">
				<div className="container textCenter">
					<LogoImage src={`../logos/${this.props.homeTeamLogo}.png`} alt={`${this.props.homeTeamName}`} title={`${this.props.homeTeamName}`} />
				</div>
			</TopHeader>
		)
	}
}

export default Header;