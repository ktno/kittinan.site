import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import 'bootstrap/dist/css/bootstrap.css'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()
const engine = new Styletron() 

const rootElement = document.getElementById('root')
const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Redirect from='/' to='/about' exact/>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </StyletronProvider>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, rootElement)