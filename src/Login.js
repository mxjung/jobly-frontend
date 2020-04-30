import React, { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import './Login.css';
import JoblyApi from './JoblyApi';
import TokenContext from "./tokenContext";

import Alert from "./Alert";

/** Login: Component renders login/signup page, with forms for each, depending on which button is clicked
 *    - Holds state of formType (i.e., login or signup)
 *    - Used in Routes component
 *    - Uses Alert component
 */

function Login() {
  const loginFields = [{ input: "username", label: "Username" },
  { input: "password", label: "Password" }];

  const signupFields = [{ input: "username", label: "Username" },
  { input: "password", label: "Password" },
  { input: "first_name", label: "First name" },
  { input: "last_name", label: "Last name" },
  { input: "email", label: "Email" }];

  const INITIAL_FIELDS = { username: "", password: "", first_name: "", last_name: "", email: "" };

  const [submitted, setSubmitted] = useState(0);
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState({ ...INITIAL_FIELDS });
  const [errMsg, setErrMsg] = useState([]);

  const { token, setToken } = useContext(TokenContext);

  // const history = useHistory();


  // if user obj is present, redirect to '/jobs' route
  // useEffect(() => {
  //   if (user !== "null") {
  //     history.push("/jobs");
  //   }
  // }, [token]);


  /** upon 'submitted' state change, make API call to login or sign up
   * the user (determined by whether 'formType' is 'login' or 'signup') */

   // one way to fix is by using a useCallback and call that callback from the click event
   // don't need to make the entire component async because we don't have to await the result
   // if we needed to, we could await inside handleSubmit

   async function loginUser() {
    let { username, password } = formData;

    try {
      let resp = await JoblyApi.request('login', { username, password }, "post");
      setToken(resp.token);
    } catch (err) {
      setErrMsg(err);
    }
  }

  useEffect(() => {
    

    async function registerUser() {
      try {
        let resp = await JoblyApi.request('users', formData, "post");
        setToken(resp.token);
      } catch (err) {
       setErrMsg(err);
      }
    }

    // place inside handleSubmit

    if (formType === "login" && submitted !== 0) {
      // can call these without await b/c we don't need to wait for the answer
      loginUser();
    } else if (formType === "signup" && submitted !== 0) {
      registerUser();
    }
  }, [submitted]);


  /** upon submission of form, prevent default behavior and update 'submitted' state
   *  so useEffect for API call with run */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmitted((submitted) => (submitted + 1));
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
          <div className="form-group" key={field.input}>
            <label htmlFor={field.input}>{field.label}</label>
            <input
              className="Login-input"
              id={field.input}
              name={field.input}
              value={formData[field.input]}
              onChange={handleChange}
            />
          </div>
        ))}

        {errMsg.length !== 0 ? <Alert msg={errMsg} type="danger" setErrMsg={setErrMsg} /> : null}

        <button className="btn btn-primary Login-submit">Submit</button>
      </form>
    )
  }

  /** render form */
  return (
    <div className="Login">
      <div className="Login-form-buttons">
        <button className={formType === "login" ? "btn btn-primary" : "btn btn-light"} onClick={() => setFormType("login")}>Login</button>
        <button className={formType === "signup" ? "btn btn-primary" : "btn btn-light"} onClick={() => setFormType("signup")}>Sign up</button>
      </div>
      {formType === "login" ? renderForms(loginFields) : renderForms(signupFields)}
    </div>
  );
}

export default Login;