import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from "./Home"
import Companies from "./Companies"
import Company from "./Company"
import Jobs from "./Jobs"
import Login from "./Login"
import Profile from "./Profile"
import Logout from "./Logout"


// To figure out how to handle lack of token to redirect to login page

/** Routes: Component that performs client-side routing for Jobly
 *    - Used in App
 *    - Uses Home, Companies, Company, Jobs, Login, and Profile Components */

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        <Companies />
      </Route>
      <Route exact path="/companies/:handle">
        <Company />
      </Route>
      <Route exact path="/jobs">
        <Jobs />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
