import React, {useParams, useEffect} from 'react';
import './Company.css';

import JobCard from "./JobCard"
import JoblyApi from "./JoblyApi"


/** Company: Component renders profile page of single company, including company name, bio, and list of its job openings
 *    - Holds props of token
 *    - Used in Routes
 *    - Uses JobCard component */

function Company({ token }) {

  const {name} = useParams();

  let companyData;

  // useEffect(() => {
  //   async function getData() {
  //     let resp = await JoblyApi.request()
  //   }
  // }, []);

  function updateJobsList() {
    return "hello world";
  }

  let jobData = {job: "hello world"};

  // if job is not there, loading

  return (
    <div>
      <p>
        {companyData}
      </p>
      {/* To map through jobsList (returned from getData useEffect) to render each job object via JobCard */}
      <JobCard updateJobsList={updateJobsList} jobData={jobData}/>
    </div>
  )
}

export default Company;