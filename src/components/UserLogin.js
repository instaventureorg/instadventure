import React from "react";
import fireApp from "../fire";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class UserLogin extends React.Component {
  state = {
    isSignedIn: false
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };
  componentDidMount() {
    this.unregisterAuthObserver = fireApp.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render(){
    return(
      <div>
        <StyledFirebaseAuth uiCallback={this.uiConfig} firebaseAuth = {fireApp.auth()}/>
      </div>
    )
  }
}

export default UserLogin;
