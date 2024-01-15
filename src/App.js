import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'

import Login from './components/Login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
)

export default App
