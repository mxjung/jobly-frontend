import React, {useState, useEffect} from 'react';
import './Jobs.css';
import JoblyApi from "./JoblyApi";

import Search from "./Search"
import JobCard from "./JobCard"


/** Jobs: Component renders a list of all jobs that match search term
 *    - Holds state of searchTerm, a string of the query search term from the search 
 *      bar form, and jobsList, an array of job objects
 *    - Holds props of token
 *    - Used in Routes component
 *    - Uses Search and JobCard components
 */

function Jobs({ token }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobsList, setjobsList] = useState(null);
  
  // useEffect that will make API call for filtered jobs upon change in searchTerm
  useEffect(() => {
    async function fetchJobs () {
      let resp = await JoblyApi.request(`jobs?search=${searchTerm}`);
      setjobsList(resp.jobs);
    }
    fetchJobs();
  }, [searchTerm]);
  
  return (
    <div>
      Jobs
      <Search setSearchTerm={setSearchTerm}/>
      {jobsList === null ? <p>Loading...</p> : (
        <div>
          {jobsList.map(jobData => (
            <JobCard key={jobData.id} jobData={jobData}/>  
          ))}
        </div>
      )}
    </div>
  )
}

export default Jobs;