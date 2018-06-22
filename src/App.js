import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Listings from "./Components/Listings";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobList: [],
      loaded: false
    };
  }

  componentDidMount() {
    const apiURL = "./listings.json";
    fetch(apiURL)
      .then(response => response.json())
      .then(data => this.setState({ jobList: data.reverse(), loaded: true }));
  }

  createJob = job => {
    const { jobList } = this.state;
    jobList.unshift(job);
    return this.setState({ jobList });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.loaded ? (
          <main>
            {/* <p>{this.state.jobList[0].pay}</p> */}
            <Listings jobsList={this.state.jobList} />
            <Form createJob={this.createJob} />
          </main>
        ) : (
          <main>Loading...</main>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
