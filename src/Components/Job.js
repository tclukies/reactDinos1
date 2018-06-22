import React from "react";

const Job = props => {
  let list = props.jobsList.map(function(job) {
    return (
      <li key={job.key}>
        <h4>{job.title}</h4>
        <small>{job.pay}</small>
        <p>{job.description}</p>
        <small>{job.interested.length} dinos are interested in this job</small>
      </li>
    );
  });
  return list;
};

export default Job;
