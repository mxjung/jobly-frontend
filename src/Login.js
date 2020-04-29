import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import JoblyApi from './JoblyApi';
import TokenContext from "./tokenContext";

import Alert from "./Alert";

/** Login: Component renders login/signup page, with forms for each, depending on which button is clicked
 *    - Holds state of formType (i.e., login or signup)
 *    - Holds props of updateToken
 *    - Used in Routes component
 *    - Uses Alert component
 */

function Login({ updateToken }) {
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

  const history = useHistory();

  useEffect(() => {
    if (token !== "null") {
      history.push("/jobs");
    }
  }, [token]);

  useEffect(() => {
    async function loginUser() {
      let { username, password } = formData;

      try {
        let resp = await JoblyApi.request('login', { username, password }, "post");
        setToken(resp.token);
      } catch (err) {
        setErrMsg(err);
      }
    }
    
    async function registerUser() {
      try {
        let resp = await JoblyApi.request('users', formData, "post");
        setToken(resp.token);
      } catch (err) {
        setErrMsg(err);
      }
    }

    if (formType === "login" && submitted !== 0) {
      loginUser();
    } else if (formType === "signup" && submitted !== 0) {
      registerUser();
    }
  }, [submitted]);


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

        {errMsg.length !== 0 ? <Alert msg={errMsg} type="danger" setErrMsg={setErrMsg} /> : null}

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