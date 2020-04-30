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
  const [user, setUser] = useState(null);
  console.log('user state has been updated in App: ', user);
  useEffect(() => {
    localStorage.setItem('token', token);

    if (String(token) !== "null") {
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
  }, [token]);
  
  return (
    <div>
      <TokenContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user }}>
          <BrowserRouter>
            <Navigation />
            <div className="container">
              <Routes />
            </div>
          </BrowserRouter>
        </UserContext.Provider>
      </TokenContext.Provider>
    </div >
  );
}

export default App;