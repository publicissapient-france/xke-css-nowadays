import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

export default function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path='/' to='/sign-in'/>
        <Route path='/sign-in' component={()=>"sign in"}/>
        <Route path='/sign-up' component={()=>"sign up"}/>
      </Switch>
    </BrowserRouter>
  )
}
