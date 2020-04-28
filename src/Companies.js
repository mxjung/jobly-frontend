import React from 'react';
import './Companies.css';

import CompanyCard from "./CompanyCard"
import Search from "./Search"

/** Companies: Component that renders a search bar and list of companies
 *    - Holds props of token
 *    - Used in Routes
 *    - Uses Search and CompanyCard components */

function Companies({ token }) {
  return (
    <div>
      Companies
      <Search />
      <CompanyCard />
      <CompanyCard />
    </div>
  )
}

export default Companies;