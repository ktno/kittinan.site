import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import './index.css'
import Layout from './Layout'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()
const engine = new Styletron() 

const rootElement = document.getElementById('root')
const Root = () => (
  <Provider store={store}>
    <Layout>
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
    </Layout>
  </Provider>
)

ReactDOM.render(<Root />, rootElement)