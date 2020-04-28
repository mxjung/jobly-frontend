import React, {useEffect, useState} from 'react';
import './Profile.css';

import Alert from "./Alert"

/** Profile: Component renders a form with current user's profile data
 *    - Holds state of updated, a status that tracks if the user profile has been updated via form submission
 *    - Holds props of token and username
 *    - Used in Routes component
 *    - Uses Alert component
 */

function Profile({ token, username }) {

  const [updated, setUpdated] = useState(false)

  // useEffect: API call to GET profile info and set initial values (do this upon the mounting of component)
  // API calls to PATCH / update profile
  // when we get back response, if it's not 404, set state alert to be true
  // re-render the page? or just don't clear the form
  // render alert

  return (
    <div>
      Profile
      {/* form to update profile here */}
      <Alert msg={msg} type={type}/>
    </div>
  )
}

export default Profile;