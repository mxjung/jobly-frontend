import React, {useContext} from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";

import Home from "./Home"
import Companies from "./Companies"
import Company from "./Company"
import Jobs from "./Jobs"
import Login from "./Login"
import Profile from "./Profile"
import Logout from "./Logout"

import TokenContext from "./tokenContext";


// To figure out how to handle lack of token to redirect to login page

/** Routes: Component that performs client-side routing for Jobly
 *    - Used in App
 *    - Uses Home, Companies, Company, Jobs, Login, and Profile Components */

function Routes() {
  const { token, user } = useContext(TokenContext);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <PrivateRoute exact path="/companies">
        <Companies />
      </PrivateRoute>

      <PrivateRoute exact path="/companies/:handle">
        <Company />
      </PrivateRoute>

      <PrivateRoute exact path="/jobs">
        <Jobs />
      </PrivateRoute>

      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>

      <PrivateRoute exact path="/logout">
        <Logout />
      </PrivateRoute>

      {/* <Redirect to="/" /> */}
    </Switch>
  );
}

export default Routes;
