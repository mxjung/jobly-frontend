import React, { useState, useCallback, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import './Login.css';
import JoblyApi from './JoblyApi';
import TokenContext from "./tokenContext";

import Alert from "./Alert";

/** Login: Component renders login/signup page, with forms for each, depending on which button is clicked
 *    - Holds state of formType (i.e., login or signup), formData, and errMsg
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

  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState({ ...INITIAL_FIELDS });
  const [errMsg, setErrMsg] = useState([]);

  const { user, setToken } = useContext(TokenContext);

  const history = useHistory();

  if (user !== null) {
    // history.push("/jobs");

    // redirect instead***********
  }

  /** loginUser: makes API call to login user */

  const loginUser = useCallback(async () => {
    let { username, password } = formData;
    try {
      let resp = await JoblyApi.request('login', { username, password }, "post");
      setToken(resp.token);
    } catch (err) {
      setErrMsg(err);
    }
  }, [formData]);


  /** registerUser: makes API call to register user */

  const registerUser = useCallback(async () => {
    try {
      let resp = await JoblyApi.request('users', formData, "post");
      setToken(resp.token);
    } catch (err) {
      setErrMsg(err);
    }
  }, [formData]);


  /** upon submission of form, prevent default behavior and make API call based on formType (login vs. signup) */

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (formType === "login") {
      loginUser();
    } else {
      registerUser();
    }
  }

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setFormData(oldForm => ({
      ...oldForm,
      [name]: value
    }));
  };

  /** renderForms: creates a login or singup form based array of input objects passed in */

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
              type={field.input === "password" ? "password" : "text"}
              value={formData[field.input]}
              onChange={handleChange}
            />
          </div>
        ))}

        {errMsg.length !== 0 ? <Alert msg={errMsg} type="danger" alertClose={() => setErrMsg("")} /> : null}

        <button className="btn btn-primary Login-submit">Submit</button>
      </form>
    )
  }

  if (user !== null) {
    return <Redirect to="/jobs"/>
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