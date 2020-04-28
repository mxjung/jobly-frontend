import React, {useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";

import Routes from "./Routes";
import Navigation from "./Navigation";


/** App: Component that renders home page with description of Jobly and depending 
 *  on token status, either a Login button (if it doesn't exist), or a 'welcome back' message
 *    - Holds state of token and username
 *    - Used in Index component
 *    - Uses Routes and Navigation components
 */


function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  const updateToken = (newToken) => {
    setToken(newToken);
  }
  
  // useEffect(() => {
  //   let payload = jwt.decode(token);
  //   let updatedUsername = payload.username;

  //   setUsername(updatedUsername);
  // }, [token]);
  

  return (
    <div>
      <BrowserRouter>
        <Navigation token={token} />
        <div className="container">
          <Routes token={token} username={username} updateToken={updateToken}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;