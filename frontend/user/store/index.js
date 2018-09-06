import { applyMiddleware, compose, createStore } from 'redux';
//import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';
import * as registry 			from '../reducer/registry';

export default function configureStore(initialState) {
	initialState = initialState || {};
	return createStore(
			combineReducers(registry),
			initialState,
			//compose(applyMiddleware(thunk, logger()))
			compose(applyMiddleware(thunk))
	);
}
