import React, {useState, useEffect} from 'react';
import './Alert.css';


/** Alert: Mix of presentational and logical component that renders a div with the appropriate message
 *    - Holds props of msg, type (i.e., success, danger), and alertClose (to handle alert closing by resetting errMsg in parent)
 *    - Used in Login and Profile components
 */

function Alert({ msg, type, alertClose }) {

  const [visible, setVisible] = useState(true);

  // unmounts the alert component after timeout and calls alertClose to reset errMsg to ""
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      alertClose();
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

