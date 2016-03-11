import React from 'react'
import { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createHistory, useBasename  } from 'history'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import makeRoutes from '../routes'
import createStore from '../configureStore'

// '/marketplace.php'
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: '/frp/marketplace'
})
const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)
const routes = makeRoutes(store)
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}

export default App
