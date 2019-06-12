import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';

function App() {
  const checkinDate =moment('2017-12-24', 'YYYY-MM-DD') //moment('Mon Jul 14 00:00:00 EDT 2014').format("MMM DD HH:mm Z");
  const  checkoutDate = moment('2018-01-25', 'YYYY-MM-DD')//moment('Mon Jul 15 00:00:00 EDT 2014').format("MMM DD HH:mm Z");

  console.log("tes ",checkoutDate.diff(checkinDate,'days'))

  const diffDays = moment.duration(checkoutDate.diff(checkinDate))._days;
  console.log("tes ",moment.duration(checkoutDate.diff(checkinDate))._days)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {diffDays}
         
        </a>
      </header>
    </div>
  );
}

export default App;
