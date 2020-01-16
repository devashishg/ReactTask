import React from "react";

class Addform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empId: "",
      empName: "",
      age: ""
    };

    this.changeIdHandler = event => {
      this.setState({ empId: event.target.value });
    };
    this.changeNameHandler = event => {
      this.setState({ empName: event.target.value });
    };
    this.changeAgeHandler = event => {
      this.setState({ age: event.target.value });
    };

    this.submit = event => {
      event.preventDefault();
      this.props.reference.callback(this.state);
    };
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Employee ID : </label>
        <input
          type="text"
          name="empName"
          value={this.state.empId}
          onChange={this.changeIdHandler}
          required
        />
        <br />
        <label>Employee Name : </label>
        <input
          type="text"
          name="empName"
          value={this.state.empNmae}
          onChange={this.changeNameHandler}
          required
        />
        <br />
        <label>Age : </label>
        <input
          type="number"
          name="empName"
          value={this.state.age}
          onChange={this.changeAgeHandler}
          required
        />
        <br />
        <input type="submit" value="save" />
      </form>
    );
  }
}
export { Addform };
