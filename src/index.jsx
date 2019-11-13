import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import store from './reducers/store.jsx';

import Header from './components/header.jsx';
import AppComponents from './components/components.jsx';
import Footer from './components/footer.jsx';

import { configVariables } from './config/config.jsx';

import { BodyTopContainer } from './style/styled.jsx';
import './scss/style.scss';

class StarWars extends Component {
    render() {
        const randomNumber = Math.floor(Math.random() * 18);
        return (
            <React.Fragment>
                <BodyTopContainer>
                    <Header
                        homeTeamName={ configVariables.homeTeam[randomNumber] }
                        homeTeamLogo={ configVariables.mainLogo[randomNumber] }
                        styleObj={ configVariables.styleObj[randomNumber] }
                    />
                    <AppComponents
                        homeTeam={ configVariables.homeTeam[randomNumber] }
                        styleObj={ configVariables.styleObj[randomNumber] }
                    />
                </BodyTopContainer>
                <Footer />
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Provider store={ store }><StarWars /></Provider>, document.getElementById("react-star-wars"));
