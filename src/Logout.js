import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Logout.css';
import TokenContext from './tokenContext';


/** Logout: Component resets token to 'null' and redirects to homepage
 *    - Used in Routes component
 */

function Logout() {

  const history = useHistory();
  const {setToken} = useContext(TokenContext);

  setToken("null");
  history.push("/");

  return(null);

}

export default Logout;

