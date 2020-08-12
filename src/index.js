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
import Layout from './Layout'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './index.css'
import './index.less'

const rootElement = document.getElementById('root')
const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Layout>
          <Route path='/' exact>
            <Redirect to='/about' />
          </Route>
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Layout>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<Root />, rootElement)
