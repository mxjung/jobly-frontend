import React, {useState, useEffect} from 'react';
import './Alert.css';


/** Alert: Presentational 'dumb' component that renders a div with the appropriate message
 *    - Holds props of msg and type (i.e., success, danger)
 *    - Used in Login, Profile components
 */

function Alert({ msg, type, setErrMsg }) {

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
        <div className={`alert alert-${type}`}>
          {msg.map((m,idx) => <p key={idx}>{m}</p>)}
        </div>
      ) : null}
    </div>
  )
}

export default Alert;

