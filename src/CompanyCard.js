import React from 'react';
import './CompanyCard.css';

/** CompanyCard: Presentational 'dumb' component that renders a linked div with company info
 *    - Holds props of a single companyData object to render
 *    - Used in Companies component */

function CompanyCard({ companyData }) {
  return (
    <div>
      Company
      <p>Some company data here</p>
    </div>
  )
}

export default CompanyCard;