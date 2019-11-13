import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import eventDetailsReducer from './index.jsx';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(
	eventDetailsReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;