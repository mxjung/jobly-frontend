import React, { useContext } from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";
import TokenContext from "./tokenContext";


/** Navigation: Component that renders one of two navigation bars based on if a token exists
 *    - Used in App
 * */

function Navigation() {

  const { user } = useContext(TokenContext);

  // function that returns correct navbar based on value of token
  function returnCorrectNav() {
    if (user !== null) {
      return (
        <nav className="Navigation navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" exact to="/">
            Jobly
          </NavLink>
          <ul className="navbar-nav ml-auto">
            <li className="Navigation nav-item">
              <NavLink exact to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="Navigation nav-item">
              <NavLink exact to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="Navigation nav-item">
              <NavLink exact to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="Navigation nav-item">
              <NavLink to="#" onClick={}>
                Log out
                {/* write logic to logout (pass in from app as prop to navigation) *********** */}
              </NavLink>
            </li>
            </ul>
        </nav>
      )
    } else {
      return (
        <nav className="Navigation navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" exact to="/">
          Jobly
        </NavLink>
        <ul className="navbar-nav ml-auto">
          <li className="Navigation nav-item">
            <NavLink exact to="/login">
              Login
            </NavLink>
            </li>
            </ul>
          </nav>
        )
      }
    }

  return (
          <div>
            {returnCorrectNav()}
          </div>
  );
}

export default Navigation;