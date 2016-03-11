import React from 'react'
import { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from '../configureStore'
import Test from '../components/Test'

const store = createStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Test />
      </Provider>
    )
  }
}

export default App
