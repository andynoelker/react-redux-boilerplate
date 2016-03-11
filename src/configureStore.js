import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from './middleware/promise-middleware';
import { test } from './reducers';
import { reducer as formReducer } from 'redux-form';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default function(data) {
  const reducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    test,
  })

  const store = createStore(
    reducer,
    applyMiddleware(promiseMiddleware)
  )

  return store
}
