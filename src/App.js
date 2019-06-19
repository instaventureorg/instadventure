import React from 'react';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { LandingPage, GamePage, GameListPage, UserPage } from './routes/routes.js'
import './App.css';
import fireApp from './fire.js'
import firebase from 'firebase'

export default class App extends React.Component{
  render (){
  return (
    <Router>
        <div className="App">
          {/* Temporary Nav Links During Testing Stage*/}
          <div className="Links">
            <ul>
              <li><NavLink to="/">Landing</NavLink></li>
              <li><NavLink to="/user">User</NavLink></li>
              <li><NavLink to="/game_list">Game List</NavLink></li>
              <li><NavLink to="/game">Game</NavLink></li>
            </ul>
          </div>

          <div className="Pages">
            <Route path="/" exact component={LandingPage} />
            <Route path="/user" exact component={UserPage} />
            <Route path="/game_list" exact component={GameListPage} />
            <Route path="/game" exact component={GamePage} />
          </div>
        </div>
      </Router>
  );}
}


