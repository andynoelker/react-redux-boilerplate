import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import promiseMiddleware from './middleware/promise-middleware';
import { test } from './reducers';
import { reducer as formReducer } from 'redux-form';
import routes from './routes';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory, useBasename  } from 'history';

//ex: basename: '/marketplace.php'
const history = useBasename(createHistory)({
  basename: ''
});

export default function(data) {
	const reducer = combineReducers({
	  router: routerStateReducer,
	  form: formReducer,
	  test,
	});
	const store = compose(
	  applyMiddleware(promiseMiddleware),
	  reduxReactRouter({ routes, history })
	)(createStore)(reducer);

	return store;
}