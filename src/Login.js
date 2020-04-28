import React, {useState} from 'react';
import './Login.css';

import Alert from "./Alert";

/** Login: Component renders login/signup page, with forms for each, depending on which button is clicked
 *    - Holds state of formType (i.e., login or signup)
 *    - Holds props of updateToken
 *    - Used in Routes component
 *    - Uses Alert component
 */

function Login({ updateToken }) {

  const [formType, setFormType] = useState("login");

  // check which button is being pressed and set formType based on that button

  // if formType is login, show login form and make API request to POST / login
  // otherwise, show signup form and make API request to POST / register

  // api call to submit form; 
  // if successful, pass in new token to updateToken

  return (
    <div>
      {/* To add form here based on logic above */}
      {/* To add alert if success or invalid */}
    </div>
  )
}

export default Login;