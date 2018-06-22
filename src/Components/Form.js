import React from "react";

const newJob = { title: "", pay: "", description: "", interested: [] };

export default class Form extends React.Component {
  state = {
    statusMessage: "",
    job: { ...newJob }
  };

  handleChange = event => {
    const job = this.state.job;
    job[event.target.name] = event.target.value;
    this.setState({ job: job, statusMessage: null });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !this.state.job.title ||
      !this.state.job.pay ||
      !this.state.job.description
    ) {
      alert("Please enter all fields!");
    } else {
      this.props.createJob(this.state.job);
      this.setState({
        job: { ...newJob },
        statusMessage: "Job Successfully Added"
      });
    }
  };

  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form" onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.job.title}
            onChange={this.handleChange}
          />
          <label htmlFor="pay">Compensation</label>
          <input
            type="text"
            name="pay"
            value={this.state.job.pay}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={8}
            cols={40}
            defaultValue={""}
            value={this.state.job.description}
            onChange={this.handleChange}
          />
          <input type="submit" name="submit" defaultValue="Submit" />
          <div className="status-bar">{this.state.statusMessage}</div>
        </form>
      </aside>
    );
  }
}
