import React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter, routerStateReducer, reduxReactRouter } from 'redux-router';
import createStore from '../configureStore';

const store = createStore()

class App extends Component {
	
	render() {
		return (
			<Provider store={store}>
				<ReduxRouter />
			</Provider>
		)
	}
}

export default App