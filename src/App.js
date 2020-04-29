import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";

import Routes from "./Routes";
import Navigation from "./Navigation";
import TokenContext from "./tokenContext";


/** App: Component that renders home page with description of Jobly and depending 
 *  on token status, either a Login button (if it doesn't exist), or a 'welcome back' message
 *    - Holds state of token and username
 *    - Used in Index component
 *    - Uses Routes and Navigation components
 */

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (token !== "null") {
      localStorage.setItem('token', token)
  
      let payload = jwt.decode(token);
      let updatedUsername = payload.username;
      setUsername(updatedUsername);
    }
  }, [token]);


return (
  <div>
    <TokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <Routes username={username} />
        </div>
      </BrowserRouter>
    </TokenContext.Provider>
    </div >
  );
}

export default App;