import testData from '../data/eventsList.jsx';

const eventDetailsReducer = (state = [], action) => {
	switch(action.type) {

		case 'GET_GAMES_LIST':
			return {
				...state,
				games: action.payload.data.games
			}

		case 'GET_TEAM_LOGO':
			return {
				...state,
				teams: action.payload.data.teams
			}

		default:
			return state

	}
}

export default eventDetailsReducer;