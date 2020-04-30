import React from 'react';
import './CompanyCard.css';
import { Link } from "react-router-dom";

/** CompanyCard: Presentational 'dumb' component that renders a linked div with company info
 *    - Holds props of a single companyData object to render
 *    - Used in Companies component */

function CompanyCard({ companyData }) {
  return (
    <div className="company-card">
      <Link to={`/companies/${companyData.handle}`}>
        <span className="company-card-link"></span>
      </Link>
      <h5>{companyData.name}</h5>
      <p>{companyData.description}</p>
      <img src={companyData.logo_url} alt="company_pic"></img>
    </div>
  )
}

export default CompanyCard;