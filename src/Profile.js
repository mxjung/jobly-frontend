import React, {useEffect, useState, useContext} from 'react';
import './Profile.css';
import TokenContext from './tokenContext';

import Alert from "./Alert"

/** Profile: Component renders a form with current user's profile data
 *    - Holds state of updated, a status that tracks if the user profile has been updated via form submission
 *    - Used in Routes component
 *    - Uses Alert component
 */

function Profile() {

  const [updated, setUpdated] = useState(false)
  const {token, username} = useContext(TokenContext);

  // useEffect: API call to GET profile info and set initial values (do this upon the mounting of component)
  // API calls to PATCH / update profile
  // when we get back response, if it's not 404, set state alert to be true
  // re-render the page? or just don't clear the form
  // render alert

  let msg = "placeholder alert";
  let type = "placeholder type";

  return (
    <div>
      {username}'s Profile
      {/* form to update profile here */}
      {/* <Alert msg={msg} type={type}/> */}
    </div>
  )
}

export default Profile;