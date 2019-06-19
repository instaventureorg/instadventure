import React from 'react';
import logo from './logo.svg';
import './App.css';
import fireApp from './fire.js'
import firebase from 'firebase'

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
        <p>{fireApp.firestore().collections('messages').doc('7bvDKHteXRxQNeyWdGA9')}</p>
      </header>
    </div>
  );
}

export default App;
