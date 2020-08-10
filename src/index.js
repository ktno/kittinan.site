import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()
const engine = new Styletron() 

const rootElement = document.getElementById('root')
const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          <Route path='/' exact component={App} />
        </StyletronProvider>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, rootElement)