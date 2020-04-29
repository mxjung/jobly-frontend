import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Company.css';

import JobCard from "./JobCard"
import JoblyApi from "./JoblyApi"


/** Company: Component renders profile page of single company, including company name, bio, and list of its job openings
 *    - Holds props of token
 *    - Used in Routes
 *    - Uses JobCard component */

function Company({ token }) {
  const {handle} = useParams();
  const [companyData, setCompanyData] = useState({});
  const [jobsData, setJobData] = useState([]);

  useEffect(() => {
    async function fetchCompanyData() {
      let resp = await JoblyApi.getCompany(handle);
      setCompanyData(resp);
      setJobData(companyData.jobs);
    }
    fetchCompanyData();
  }, []);

  function updateJobsList() {
    return "hello world";
  }
  
  // if job is not there, loading

  return (
    <div>
      <p>
        {JSON.stringify(companyData)}
      </p>
      {/* To map through jobsList (returned from getData useEffect) to render each job object via JobCard */}
      {/* <JobCard updateJobsList={updateJobsList} jobData={jobData}/> */}
    </div>
  )
}

export default Company;