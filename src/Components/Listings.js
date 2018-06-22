import React from "react";
import Job from "./Job";

const Listings = props => {
  // const pay = props.jobsList[0].pay;
  console.log(props.jobsList);
  return (
    <section>
      <h2>Job Listings</h2>
      <ul id="job-listings">
        <Job jobsList={props.jobsList} />
      </ul>
    </section>
  );
};

export default Listings;
