import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./userContext";

function PrivateRoute({ exact, path, children }) {
  const { user } = useContext(UserContext);

  if (!user && (path !== "/login" && path !== "/")) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;