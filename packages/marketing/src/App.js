import {Route, Router, Switch} from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

import Landing from './components/Landing'
import Pricing from './components/Pricing'
import React from 'react'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

export default ({history}) => {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
      <Switch>
        <Route exact path="/pricing"  component={Pricing}/>
        <Route exact path="/"  component={Landing}/>
      </Switch>
      </Router>
    </StylesProvider>
  </div>
}