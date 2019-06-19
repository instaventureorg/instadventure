import React from 'react';
import logo from './logo.svg';
import './App.css';
import fireApp from './fire.js'
import firebase from 'firebase'

function App() {
  console.log(fireApp.firestore().collection('messages'))
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
        <p>{}</p>
      </header>
    </div>
  );
}

export default App;
