import React, {useState, useEffect} from 'react';
import './Alert.css';


/** Alert: Presentational 'dumb' component that renders a div with the appropriate message
 *    - Holds props of msg, type (i.e., success, danger), and setErMsg (to reset to empty string after rendering)
 *    - Used in Login, Profile components
 */

function Alert({ msg, type, setErrMsg }) {

  const [visible, setVisible] = useState(true);

  // to make it more reusable, name the function alertClose and then we pass in the function that determines what we should do when the error closes
  // don't need to hardcode the behavior upon closing alert
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      // create that function inside login js, pass it in as a callback and alert invokes alertClose
      setErrMsg("");
    }, 3000);
  }, []);

  return (
    <div>
      {visible ? (
        <div className={`Alert alert alert-${type}`}>
          {msg.map((m,idx) => <p key={idx}>{m}</p>)}
        </div>
      ) : null}
    </div>
  )
}

export default Alert;

