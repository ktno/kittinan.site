import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import './index.less'
import Layout from './Layout'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const rootElement = document.getElementById('root')
const Root = () => (
  <Provider store={store}>
    <Layout>
      <Router>
        <Switch>
          <Redirect from='/' to='/about' exact />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </Layout>
  </Provider>
)

ReactDOM.render(<Root />, rootElement)
