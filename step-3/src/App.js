import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

export default function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path='/' to='/sign-in'/>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
    </BrowserRouter>
  )
}
