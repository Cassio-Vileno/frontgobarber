import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignIUp';


export function AuthRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  );
}
