import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <><Header></Header>
    <div className="container">
  

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hatshepsut
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
    </div></>
  );
}

export default App;
