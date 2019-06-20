import React from 'react'
import logo from '../logo.svg';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import fireApp from "../fire";
import firebase from "firebase";

export default class Landing extends React.Component {
  constructor(){
    super()
    this.state ={
      isLoggedIn: false
    }
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };
  componentWillMount(){
    this.unregisterAuthObserver = fireApp.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.isSignedIn!== undefined && !this.state.isSignedIn &&(
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={fireApp.auth()}
        />
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
  }
}
