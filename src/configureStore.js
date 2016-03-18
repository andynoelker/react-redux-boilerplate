import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from './middleware/promise-middleware'
import { test } from './reducers'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'

export default function(data) {
  const reducer = combineReducers({
    form: (state = Immutable.fromJS({}), action) => Immutable.fromJS(formReducer(state.toJS(), action)),
    test,
  })

  const store = createStore(
    reducer,
    applyMiddleware(promiseMiddleware)
  )

  return store
}
