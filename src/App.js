import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";

import Routes from "./Routes";
import Navigation from "./Navigation";
import JoblyApi from "./JoblyApi";
import TokenContext from "./tokenContext";
import UserContext from "./userContext";


/** App: Component that renders home page with description of Jobly and depending 
 *  on token status, either a Login button (if it doesn't exist), or a 'welcome back' message
 *    - Holds state of token and username
 *    - Provider of TokenContext is located here
 *    - Used in Index component
 *    - Uses Routes and Navigation components
 */

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  // const [token, setToken] = useState("null");
  const [user, setUser] = useState(null);
  const [requestCompleted, setRequestCompleted] = useState(false);

  useEffect(() => {
    console.log("effect in app ran");
    localStorage.setItem('token', token);

    if (token !== null) {
      let payload = jwt.decode(token);
      let updatedUsername = payload.username;

      async function fetchUser() {
        try {
          let resp = await JoblyApi.request(`users/${updatedUsername}`);
          setUser(resp.user);

        } catch (err) {
          console.error(err);
        }
      }
      fetchUser();
    } else {
      setUser(null);
    }

    // render our routes ONLY when user has been set (or else in PrivateRoutes our user will still be null)
    // "Hydration"
    setRequestCompleted(true);
  }, [token]);

  // ********* browserroute in index not app. 
  return (
    <div>
      <TokenContext.Provider value={{ token, setToken, user, setUser }}>
        {/* <UserContext.Provider value={{ user, setUser }}> */}
        <BrowserRouter>
          <Navigation />
          <div className="container">
            {requestCompleted ? <Routes /> : <div>Loading...</div>}
          </div>
        </BrowserRouter>
        {/* </UserContext.Provider> */}
      </TokenContext.Provider>
    </div >
  );
}

export default App;