import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";

import Routes from "./Routes";
import Navigation from "./Navigation";
import TokenContext from "./tokenContext";


/** App: Component that renders home page with description of Jobly and depending 
 *  on token status, either a Login button (if it doesn't exist), or a 'welcome back' message
 *    - Holds state of token and username
 *    - Provider of TokenContext is located here
 *    - Used in Index component
 *    - Uses Routes and Navigation components
 */

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(null);

  useEffect(() => {
    localStorage.setItem('token', token);

    if (token !== "null") {
      let payload = jwt.decode(token);
      let updatedUsername = payload.username;
      setUsername(updatedUsername);
    }
  }, [token]);


return (
  <div>
    <TokenContext.Provider value={{ token, setToken, username }}>
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <Routes />
        </div>
      </BrowserRouter>
    </TokenContext.Provider>
    </div >
  );
}

export default App;