import React, { Component } from 'react';
import { getGames, getTeams } from '../actions/index.jsx';
import { FullWidthSection } from '../style/styled.jsx';
import GamesComponent from './gamesItems.jsx';
import LoadingComponent from './loading.jsx';

import { connect } from 'react-redux';

class AppComponents extends Component {

	constructor(props) {
		super(props);
		this.state = {
			games: '',
			teams: ''
		}
	}

	componentDidMount() {
		this.props.getLogosOfTeams();
		this.props.getListOfGames();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		let filteredData = nextProps.details.games ? nextProps.details.games.filter((item) => item.hteam === this.props.homeTeam) : '';
		this.setState({
			games: filteredData,
			teams: nextProps.details.teams
		});
	}
	getGamesComponent() {
		let returnedValue = this.state.games && this.state.games.length > 0 ? this.state.games.map((item) => 
			<GamesComponent
				data={ item }
				teams={ this.state.teams }
				key={ item.id }
				styleObj={ this.props.styleObj }
			/>
		) : <LoadingComponent />;
		return returnedValue;
	}

	render() {
		return (
			<FullWidthSection>
				<div className="container">
					{
						this.getGamesComponent()
					}
				</div>
			</FullWidthSection>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		details: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getListOfGames: () => {
			dispatch(getGames())
		},
		getLogosOfTeams: () => {
			dispatch(getTeams())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponents);