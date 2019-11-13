import React, { Component } from 'react';
import styled from 'styled-components';

class GamesDetails extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const GamesDetailsContainer = styled.div`
			position: fixed;
			width: 100vw !important;
			height: 100vh;
			background: rgba(0,0,0,0.5);
			z-index: 2;
			left: 0px;
			top: 0px;
			display: flex;
			justify-content: center;
			align-items: center;
		`;

		const GamesDetails = styled.div`
			width: 90% !important;
			background: #ffffff;
			border-radius: 4px;
			max-width: 700px;
			margin: 0 auto;
		`;

		const GamesDetailsHeader = styled.div`
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			width: 100% !important;
			padding: 10px;
			font-size: 3.25em;
			font-weight: 500;
			position: relative;
			img {
				height: 40px;
			}
		`;

		const GamesDetailsSeparator = styled.span`
			display: flex !important;
			width: 20%;
			overflow: hidden;
			b {
				width: 50%;
				background: ${this.props.styleObj[0].secondaryColor} !important;
				height: 15px;
				min-width: auto !important;
				margin: 0px !important;
				border-radius: 0px 3px 3px 0px;

				&:first-child {
					background: ${this.props.styleObj[0].primaryColor} !important;
					border-radius: 3px 0px 0px 3px;
				}
			}
		`;

		const CancelDetails = styled.a`
			position: absolute;
			width: 25px;
			height: 25px;
			background: #ffffff;
			border-radius: 50%;
			right: -8px;
			top: -8px;
			&:after, &:before {
				content: "";
				background: #000000;
				width: 10px;
				height: 1px;
				position: absolute;
				left: 8px;
				top: 12px;
			}
			&:before {
				transform: rotate(45deg);
			}
			&:after {
				transform: rotate(-45deg);
			}
		`;

		let winningTeamLogo = this.props.homeTeamScore > this.props.awayTeamScore ? this.props.homeTeamLogo : this.props.awayTeamLogo;
		let losingTeamLogo = this.props.homeTeamScore < this.props.awayTeamScore ? this.props.homeTeamLogo : this.props.awayTeamLogo;

		let winningTeamName = this.props.homeTeamScore > this.props.awayTeamScore ? this.props.homeTeamName : this.props.awayTeamName;
		let losingTeamName = this.props.homeTeamScore < this.props.awayTeamScore ? this.props.homeTeamName : this.props.awayTeamName;

		let winningTeamScorePercentage = this.props.homeTeamScore > this.props.awayTeamScore ? this.props.homeTeamScore/ (this.props.awayTeamScore + this.props.homeTeamScore) * 100 : this.props.awayTeamScore/ (this.props.awayTeamScore + this.props.homeTeamScore) * 100;

		let winningPercentage = {
			width: `${winningTeamScorePercentage}%`
		}

		return (
			<GamesDetailsContainer>
				<GamesDetails>
					<GamesDetailsHeader>
						<img src={`https://squiggle.com.au/${winningTeamLogo}`} alt={`${winningTeamName}`} title={`${winningTeamName}`} />
						<span>{ this.props.homeTeamScore > this.props.awayTeamScore ? this.props.homeTeamScore : this.props.awayTeamScore }</span>
						<GamesDetailsSeparator>
							<b style={winningPercentage}></b>
							<b></b>
						</GamesDetailsSeparator>
						<span>{ this.props.homeTeamScore < this.props.awayTeamScore ? this.props.homeTeamScore : this.props.awayTeamScore }</span>
						<img src={`https://squiggle.com.au/${losingTeamLogo}`} alt={`${losingTeamName}`} title={`${losingTeamName}`} />
						<CancelDetails href="#" onClick={() => this.props.cancelPopUpFlag()} />
					</GamesDetailsHeader>
				</GamesDetails>
			</GamesDetailsContainer>
		)
	}
}

export default GamesDetails;