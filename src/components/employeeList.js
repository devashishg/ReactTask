import React from "react";
import { Addform } from "./Addform";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: <button onClick={this.togglestate}>Add Employee</button>,
      view: "list",
      employeeList: [],
      listView: ""
    };

    this.callback = val => {
      this.state.employeeList.push(val);
      this.togglestate();
      this.setState({
        listView: this.state.employeeList.map(obj => {
          return (
            <div>
              EmpId({obj.empId}) : {obj.empName},{obj.age}
            </div>
          );
        })
      });
    };
  }

  togglestate = () => {
    if (this.state.view === "list") {
      this.setState({
        load: <Addform reference={this}></Addform>,
        view: "All"
      });
    } else {
      this.setState({
        load: <button onClick={this.togglestate}>Add Employee</button>,
        view: "list"
      });
    }
  };

  render() {
    return (
      <div>
        <div>{this.state.listView}</div>
        {this.state.load}
      </div>
    );
  }
}
export { EmployeeList };
