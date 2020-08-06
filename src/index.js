import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
