import React, { Component } from 'react';
import GamesDetails from './gamesDetails.jsx';
import styled from 'styled-components';

class GamesComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showGameDetails: false
		}
	}

	showGameDetails() {
		this.setState({
			showGameDetails: true
		});
	}

	cancelDetailsPopUp() {
		this.setState({
			showGameDetails: false
		});
	}

	render() {
		let homeTeam = this.props.teams.filter((item) => item.name === this.props.data.hteam);
		let awayTeam = this.props.teams.filter((item) => item.name === this.props.data.ateam);
		const GamesMainContainer = styled.div`
			float: left;
			width: calc(100% - 30px);
			padding: 15px;
			margin: 0px 15px 15px 15px;
			background: #ffffff;
			border: 1px solid #e1e2e2;
			font-size: 0.85em;
			position: relative;
			@media only screen and (min-width: 1024px) {
				width: calc(50% - 60px);
			}
			div {
				float: left;
				width: 33.33%;
				span {
					display: block;
					text-align: center;
					white-space: nowrap;
					b {
						background: #f3f3f3;
						line-height: 30px;
						display: inline-block;
						padding: 0px 15px;
						max-width: 100%;
						margin-bottom: 7px;
					}
				}
				img {
					height: 50px;
				}
			}
			&:hover {
				> a {
					display: block;
				}
			}
		`;
		const AwayTeam = styled.div`
			text-align: right;
		`;
		const GamesDetailsBlock = styled.a`
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 1;
			background: rgba(0, 0, 0, 0.05);
			left: 0px;
			top: 0px;
			text-decoration: none;
			display: none;
		`;
		
		return (
			<GamesMainContainer>
				<div><img src={`https://squiggle.com.au/${homeTeam[0].logo}`} alt={`${homeTeam[0].name}`} title={`${homeTeam[0].name}`} /></div>
				<div>
					<span><b>{ this.props.data.date }</b></span>
					<span>{ this.props.data.venue }</span>
				</div>
				<AwayTeam><img src={`https://squiggle.com.au/${awayTeam[0].logo}`} alt={`${awayTeam[0].name}`} title={`${awayTeam[0].name}`} /></AwayTeam>
				<GamesDetailsBlock href="#" onClick={() => this.showGameDetails()}>&nbsp;</GamesDetailsBlock>
				{
					this.state.showGameDetails ? 
					<GamesDetails 
						homeTeamLogo={homeTeam[0].logo}
						homeTeamName={homeTeam[0].name}
						awayTeamLogo={awayTeam[0].logo}
						awayTeamName={awayTeam[0].name}
						homeTeamScore={this.props.data.hscore}
						awayTeamScore={this.props.data.ascore}
						styleObj={ this.props.styleObj }
						cancelPopUpFlag={() => this.cancelDetailsPopUp()}
					/> : ''
				}
			</GamesMainContainer>
		)
	}
}

export default GamesComponent;