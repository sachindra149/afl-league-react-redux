
const GET_GAMES_LIST = 'GET_GAMES_LIST';
const GET_TEAM_LOGO = 'GET_TEAM_LOGO';

import store from '../reducers/store.jsx';
import axios from 'axios';

let axiosConfig = {
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		"Access-Control-Allow-Origin": "*",
	}
};

export function getGames() {
	return axios.get('https://api.squiggle.com.au/?q=games', axiosConfig)
		.then((response) => {
			store.dispatch(getGamesList(response))
		})
}

export function getGamesList(data) {
	return {
		type: 'GET_GAMES_LIST',
		payload: data
	}
}

export function getTeams() {
	return axios.get('https://api.squiggle.com.au/?q=teams', axiosConfig)
		.then((response) => {
			store.dispatch(getTeamLogo(response))
		})
}

export function getTeamLogo(data) {
	return {
		type: 'GET_TEAM_LOGO',
		payload: data
	}
}