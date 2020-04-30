import React from 'react';
import './JobCard.css';

/** JobCard: Presentational 'dumb' component that renders a div with job info and a button to apply
 *    - Holds props of a single jobData object to render (to be added: function to updateJobList 
 *      (if 'apply' button is clicked, updated application status is set))
 *    - Used in Jobs and Company components 
 *    - NOTE: jobData contains different keys depending on whether props is being passed from Jobs
 *      or Company. Jobs will send a prop jobData that contains an extra key of state (for applied status)
 * */

function JobCard({ jobData }) {
  return (
    <div className="job-card">
      <h5>{jobData.title}</h5>
      <p>Salary: {jobData.salary}</p>
      <p>Equity: {jobData.equity}</p>
      <button className="btn btn-danger">Apply</button>
    </div>
  )
}

export default JobCard;