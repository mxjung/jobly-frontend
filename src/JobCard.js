import React from 'react';
import './JobCard.css';

/** JobCard: Presentational 'dumb' component that renders a div with job info and a button to apply
 *    - Holds props of a single jobData object to render as well as a function to updateJobList 
 *      (if 'apply' button is clicked, updated application status is set)
 *    - Used in Jobs and Company components */

function JobCard({ jobData, updateJobsList }) {
  return (
    <div>
      Job
      <p>Some job data here</p>
    </div>
  )
}

export default JobCard;