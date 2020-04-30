import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Company.css';

import JobCard from "./JobCard"
import JoblyApi from "./JoblyApi"


/** Company: Component renders profile page of single company, including company name, bio, and list of its job openings
 *    - Used in Routes
 *    - Uses JobCard component */

function Company() {
  const {handle} = useParams();
  const [companyData, setCompanyData] = useState(null);

  // useEffect that will make API call for single company upon first component mount
  useEffect(() => {
    async function fetchCompanyData() {
      let resp = await JoblyApi.getCompany(handle);
      setCompanyData(resp);
    }
    fetchCompanyData();
  }, [handle]);

  return (
    <div className="Company">
      {companyData === null ? <p>Loading...</p> : (
        <div>
          <h3>{companyData.name}</h3>
          <p className="Company-description">{companyData.description}</p>
          {companyData.jobs.map(jobData => (
            <JobCard key={jobData.id} jobData={jobData}/>  
          ))}
        </div>
      )}
    </div>
    )
}

export default Company;