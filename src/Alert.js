import React, {useState, useEffect} from 'react';
import './Alert.css';


/** Alert: Presentational 'dumb' component that renders a div with the appropriate message
 *    - Holds props of msg, type (i.e., success, danger), and setErMsg (to reset to empty string after rendering)
 *    - Used in Login, Profile components
 */

function Alert({ msg, type, setErrMsg }) {

  console.log(`\n\n\n The value of msg inside Alert is `, msg, '\n\n\n');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
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

