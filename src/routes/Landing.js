import React from 'react'
import logo from '../logo.svg';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import fireApp from "../fire";
import firebase from "firebase";
import {BrowserRouter as NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap'


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

      <div id='landing-box'>
        <div id='welcome-paragraph'>
          <p>Do you remember the text adventure games of the early decades of computing? Do you like tabletop roleplaying games like Dungeons and Dragons, and wish they were easier to play online (or wish you had people to play with)?</p>
          <p><b><span className='instadventure-name'>InstAdventure</span></b> may be just the solution you've been waiting for!</p>
          <p>With <b><span className='instadventure-name'>InstAdventure</span></b>, you can sign up as a Game Master, and run your own text-based adventures, with strangers or with friends. Or you can sign up to join someone else's game, working with others in the chat to cooperatively play a single player.</p>
          <p>Are you questing to find the seven lost jewels hidden across the kingdom before the ancient dragon awakes and devours everyone? Are you forced to team up with your crush's jerk boyfriend in order to save the day from the supervillain who's hijacked your senior prom? Are you solving the murders no one else seems to care about&mdash;or protecting the city from its corrupt public officials? Your imagination is the only limit!</p>
        </div>
        <div id='login'>
        {this.state.isSignedIn!== undefined && !this.state.isSignedIn &&(
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={fireApp.auth()}
        />
        )}
        </div>
      </div>
    )
  }
}
