import React, { useState } from 'react';
import './Login.css';

import Alert from "./Alert";

/** Login: Component renders login/signup page, with forms for each, depending on which button is clicked
 *    - Holds state of formType (i.e., login or signup)
 *    - Holds props of updateToken
 *    - Used in Routes component
 *    - Uses Alert component
 */

function Login({ updateToken }) {
  const loginFields = [{input: "username", label:"Username"}, 
                      {input: "password", label:"Password"}];
  const signupFields = [{input: "username", label:"Username"}, 
                        {input: "password", label:"Password"},
                        {input: "first_name", label:"First name"},
                        {input: "last_name", label:"Last name"},
                        {input: "email", label:"Email"}];
  const INITIAL_FIELDS = {username: "", password: "", first_name: "", last_name:"", email: ""};
                  

  const [formType, setFormType] = useState("login");

  const [formData, setFormData] = useState({...INITIAL_FIELDS});

  // check which button is being pressed and set formType based on that button

  // if formType is login, show login form and make API request to POST / login
  // otherwise, show signup form and make API request to POST / register

  // api call to submit form; 
  // if successful, pass in new token to updateToken
  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if (formType === "login") {
    //   setSearchTerm(formData);
    // } else {
    //   setSearchTerm(formData);
    // }
    // setFormData("");
    console.log("you submitted");
  };



  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setFormData(oldForm => ({
      ...oldForm,
      [name]: value
    }));
  };

  function renderForms(formTypeFields) {
    return (
      <form onSubmit={handleSubmit}>
        {formTypeFields.map(field => (
          <div key={field.input}>
            <label htmlFor={field.input}>{field.label}:</label>
            <input
            id={field.input}
            name={field.input}
            value={formData[field.input]}
            onChange={handleChange}
            />
          </div>
        ))}

        <button>Submit</button>
      </form>
    )
  }

  /** render form */
  return (
    <div>
      <button onClick={() => setFormType("login")}>Login</button>
      <button onClick={() => setFormType("signup")}>Sign up</button>

      {formType === "login" ? renderForms(loginFields) : renderForms(signupFields)}
    </div>
  );
}

export default Login;