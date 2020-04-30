import React from 'react';
import './CompanyCard.css';
import { Link } from "react-router-dom";

/** CompanyCard: Presentational 'dumb' component that renders a linked div with company info
 *    - Holds props of a single companyData object to render
 *    - Used in Companies component */

function CompanyCard({ companyData }) {
  return (
    <Link to={`/companies/${companyData.handle}`}>
      <div className="company-card">
        <h3>{companyData.name}</h3>
        <p>{companyData.description}</p>
        <img src={companyData.logo_url} alt="company_pic"></img>
      </div>
    </Link>
  )
}

export default CompanyCard;