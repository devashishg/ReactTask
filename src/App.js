import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EmployeeList } from './components/employeeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <EmployeeList></EmployeeList>
    </div>
  );
}

export default App;
