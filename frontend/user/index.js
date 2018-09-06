import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main'

import { applyMiddleware, compose, createStore } from 'redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const store = createStore(
	combineReducers({
		form: formReducer
	})
)

render(
	<Provider store={store}>
		<Main />
	</Provider>, 
	document.getElementById('app')
);
