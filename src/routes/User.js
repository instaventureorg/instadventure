import React from 'react';
import fireApp from '../fire';
import firebase from 'firebase'

export default class UserPage extends React.Component {
  constructor(props){
    super()
    this.state ={
      dbUser:null,
      user: ""
    }
    this.docRef = firebase.auth().onAuthStateChanged((user)=>{
      this.setState({user:user.uid})
    })
    this.ref = {}
  }

  componentDidMount(){
    if (this.state.user){
    if (fireApp.firestore().collection('users').doc(this.state.user)){
      console.log(this.state.user)
    }}
  }

  render() {
    return (<div>
      <p>User Page</p>
      <p>{}</p>
      </div>)
  }
}
