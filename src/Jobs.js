import React, {useState} from 'react';
import './Jobs.css';

import Search from "./Search"
import JobCard from "./JobCard"


/** Jobs: Component renders a list of all jobs that match search term (or by company)
 *    - Holds state of searchTerm, a string of the query search term from the search 
 *      bar form, and jobsList, an array of job objects
 *    - Holds props of token
 *    - Used in Routes and Company components
 *    - Uses Search and JobCard components
 */


function Jobs({ token }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobsList, setjobsList] = useState([]);
  
  // updateSearchTerm
  // updateJobsList


  return (
    <div>
      Jobs
      <Search updateSearchTerm={updateSearchTerm}/>
      {/* map through jobsList to render each JobCard */}
      <JobCard updateJobsList={updateJobsList}/>
      <JobCard updateJobsList={updateJobsList}/>
    </div>
  )
}

export default Jobs;