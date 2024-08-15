import React from "react";

class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };

  handleChangeTitleJob = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      //   alert("Missing required params");
      //   return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.titleJob,
      salary: this.state.salary,
    });
  };

  render() {
    return (
      <form action="./action_page.php">
        <label htmlFor="fname">Job's title: </label>
        <input
          type="text"
          value={this.state.titleJob}
          onChange={(event) => {
            this.handleChangeTitleJob(event);
          }}
        ></input>
        <br />

        <label htmlFor="lname">Salary: </label>
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => {
            this.handleChangeSalary(event);
          }}
        ></input>

        <br />

        <input
          type="submit"
          onClick={(event) => {
            this.handleSubmit(event);
          }}
        ></input>
      </form>
    );
  }
}

export default AddComponent;
