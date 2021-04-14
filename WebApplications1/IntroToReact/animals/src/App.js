import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';
import  React from 'react';

function App() {
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
        </a>
      </header>
      <Alert color="primary">
          This is a primary alert — check it out!
      </Alert>
    </div>
  );
}

export default App;
