import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";



/** Navigation: Component that renders one of two navigation bars based on if a token exists
 *    - Holds props of token
 *    - Used in App
 * */

function Navigation({ token }) {

  // function that returns correct navbar based on value of token
  function returnCorrectNav() {
    if (token !== null) {
      console.log("made into not null token")
      return (
        <nav className="Navigation">
          <NavLink exact to="/">
            Jobly
          </NavLink>
          <NavLink exact to="/companies">
            Companies
          </NavLink>
          <NavLink exact to="/jobs">
            Jobs
          </NavLink>
          <NavLink exact to="/profile">
            Profile
          </NavLink>
          <NavLink exact to="/logout">
            Log out
          </NavLink>
        </nav>
      )
    } else {
      return (
        <nav className="Navigation">
          <NavLink exact to="/">
            Jobly
          </NavLink>
          <NavLink exact to="/login">
            Login
          </NavLink>
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
