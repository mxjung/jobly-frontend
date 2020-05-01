import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import TokenContext from "./tokenContext";

function PrivateRoute({ exact, path, children }) {
  const { token, user } = useContext(TokenContext);
  
  console.log("inside private route, user is: ", user);
  console.log("inside private route, token is: ", token);

  if (!user && (path !== "/login" && path !== "/")) {
    console.log('we are being redirected to login');
    return <Redirect to="/login" />;
  }

  console.log('this is the children: ', children);
  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
    // return the children directly************* use render prop
  );
}

export default PrivateRoute;
