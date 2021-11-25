import React from 'react';
import logo from './logo.svg';
import './App.css';

export function App() {
  const multiply = 5 * 5;
  return (
    <div id="App">
      <div> 
        <p>5 * 5 is {multiply} </p>
        <h3>5 + 5 is {5 + 5} </h3>
        <div><strong>5 - 5 is {5 - 5} </strong></div>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
