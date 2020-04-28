import React from 'react';
import './Home.css';

/** Home: Component that renders home page with description of Jobly and depending 
 *  on token status, either a Login button (if it doesn't exist), or a 'welcome back' message
 *    - Holds props of token
 *    - Used in Routes component
 */

function Home({ token }) {

  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one convenient place.</p>
      {/* // if token is not null, show login button; otherwise show Welcome back in h3 */}
    </div>
  )
}

export default Home;