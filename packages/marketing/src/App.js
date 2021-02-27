import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Landing from './components/Landing'
import Pricing from './components/Pricing'
import React from 'react'
import { StylesProvider } from '@material-ui/core'

export default () => {
  return <div>
    <StylesProvider>
      add
      <BrowserRouter>
      <Switch>
        <Route exact path="/pricing"  component={Pricing}/>
        <Route exact path="/"  component={Landing}/>
      </Switch>
      </BrowserRouter>
    </StylesProvider>
  </div>
}