import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
/**
 *
 */
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developer", salary: "500" },
      { id: "abcJob2", title: "Tester", salary: "400" },
      { id: "abcJob3", title: "BA", salary: "200 " },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currentJobs,
    });
  };

  deleteAJob = (job) => {
    let currrentJobs = this.state.arrJobs;
    currrentJobs = currrentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currrentJobs,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>run update:",
      "prev state",
      prevState,
      "current state: ",
      this.state
    );
  }

  componentDidMount() {
    console.log(">> run component did mount");
  }

  render() {
    console.log(">> call render: ", this.state);
    // let name = 'Happy';
    return (
      <React.Fragment>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </React.Fragment>
    );
  }
}

export default MyComponent;
