import React, {useEffect, useState, useContext, useCallback} from 'react';
import './Profile.css';
import JoblyApi from './JoblyApi';
import TokenContext from "./tokenContext";
import Alert from "./Alert"

/** Profile: Component renders a form with current user's profile data
 *    - Holds state of updated, a status that tracks if the user profile has been updated via form submission
 *    - Used in Routes component
 *    - Uses Alert component
 */

function Profile() {
  const updateFields = [
    { input: "first_name", label: "First name" },
    { input: "last_name", label: "Last name" },
    { input: "email", label: "Email" },
    { input: "photo_url", label: "Photo Url" },
    { input: "password", label: "Re-enter Password" }
  ];
  
  const {user, setUser} = useContext(TokenContext);
  
  const INITIAL_FIELDS = {first_name: user.first_name, 
                          last_name: user.last_name, 
                          email: user.email, 
                          password: "", 
                          photo_url: user.photo_url};

  const [formData, setFormData] = useState({ ...INITIAL_FIELDS });

  const INITIAL_ALERT = {type: "", msgs: []};
  const [alertObj, setAlertObj] = useState({...INITIAL_ALERT});


  /** updateUser: makes API call to update user */

  const updateUser = useCallback(async () => {
    try {
      let resp = await JoblyApi.request(`users/${user.username}`, formData, "patch");
      setUser(resp.user);
      setAlertObj({type: "success", msgs: ["User Profile Updated"]})
    } catch (err) {
      setAlertObj({type: "danger", msgs: err})

      // setErrMsg(err);
    }
  }, [formData]);

  /** upon submission of form, prevent default behavior and make API call to update User */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateUser();
  }

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setFormData(oldForm => ({
      ...oldForm,
      [name]: value
    }));
  }

  /** render form */
  return (
    <div className="Login">
      <h2>Profile</h2>
      <div>
        <h4>Username</h4>
        <p>{user.username}</p>
      </div>
      <form onSubmit={handleSubmit}>
        {updateFields.map(field => (
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

        {alertObj.msgs.length !== 0 ? <Alert msg={alertObj.msgs} type={alertObj.type} alertClose={() => setAlertObj({...INITIAL_ALERT})} /> : null}

        <button className="btn btn-primary Login-submit">Submit</button>
      </form>
    </div>
  );
}

export default Profile;