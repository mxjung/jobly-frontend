import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Companies.css';
import JoblyApi from "./JoblyApi";

import CompanyCard from "./CompanyCard"
import Search from "./Search"

/** Companies: Component that renders a search bar and list of companies
 *    - Holds state of searchTerm and companiesList
 *    - Used in Routes
 *    - Uses Search and CompanyCard components */

function Companies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [companiesList, setCompaniesList] = useState(null);
  const history = useHistory();
  
  // useEffect that will make API call for filtered companies upon change in searchTerm
  useEffect(() => {
    async function fetchCompanies () {
      try {
        let resp = await JoblyApi.request(`companies?search=${searchTerm}`);
        setCompaniesList(resp.companies);
      } catch(err) {
        if (err.error.status === 401) {
          history.push('/login');
        } else {
          console.error(err);
        }
      }
    }
    fetchCompanies();
  }, [searchTerm]);

  return (
    <div className="Companies">
      {companiesList === null ? <p>Loading...</p> : (
      <div>
        <Search setSearchTerm={setSearchTerm}/>
        {companiesList.map(companyData => (
          <CompanyCard key={companyData.handle} companyData={companyData}/>
        ))}
      </div>
      )}
    </div>
    )
}

export default Companies;