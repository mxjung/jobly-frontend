import React, {useEffect} from 'react';
import './Alert.css';


/** Alert: Presentational 'dumb' component that renders a div with the appropriate message
 *    - Holds props of msg and type (i.e., success, danger)
 *    - Used in Login, Profile components
 */

function Alert({ msg, type }) {

  // useEffect to setTimeout to unmount after 1 second (here or in Profile?)

  // come back for coloring via bootstrap

  return (
    <div>
     {msg}
    </div>
  )
}

export default Alert;

