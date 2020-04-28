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


function Routes({ token, username, updateToken }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home token={token}/>
      </Route>
      <Route path="/companies">
        <Companies token={token} />
      </Route>
      <Route path="/companies/:name">
        <Company token={token} />
      </Route>
      <Route path="/jobs">
        <Jobs token={token} />
      </Route>
      <Route path="/login">
        <Login updateToken={updateToken}/>
      </Route>
      <Route path="/profile">
        <Profile token={token} username={username}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
