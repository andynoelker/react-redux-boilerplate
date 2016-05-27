import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from './middleware/promise-middleware'
import * as reducers from './reducers'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'

const condenseReducers = (reducers) => {
  let condensed = {
    form: (state = Immutable.fromJS({}), action) => Immutable.fromJS(formReducer(state.toJS(), action)),
  }

  Object.keys(reducers).forEach(key => {
    condensed[key] = reducers[key]
  })

  return condensed
}

export default function(data) {
  const condensed = condenseReducers(reducers)
  const reducer = combineReducers(condensed)

  const store = createStore(
    reducer,
    applyMiddleware(promiseMiddleware)
  )

  return store
}
