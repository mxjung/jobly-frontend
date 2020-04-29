import React, {useEffect, useState} from 'react';
import './Companies.css';
import JoblyApi from "./JoblyApi";

import CompanyCard from "./CompanyCard"
import Search from "./Search"

/** Companies: Component that renders a search bar and list of companies
 *    - Holds state of searchTerm and companiesList
 *    - Holds props of token
 *    - Used in Routes
 *    - Uses Search and CompanyCard components */

function Companies({ token }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [companiesList, setCompaniesList] = useState([]);
  
  // Function passed into Search Component to update searchTerm
  function updateSearchTerm(formData) {
    setSearchTerm(formData);
  }

  // useEffect that will make API call for filtered companies upon change in searchTerm
  useEffect(() => {
    async function fetchCompanies () {
      let resp = await JoblyApi.request(`companies?search=${searchTerm}`);
      setCompaniesList(resp.companies);
    }
    fetchCompanies();
  }, [searchTerm]);

  return (
    <div>
      Companies
      <Search updateSearchTerm={updateSearchTerm}/>
      {companiesList.map(companyData => (
        <CompanyCard key={companyData.handle} companyData={companyData}/>
      ))}
    </div>
  )
}

export default Companies;