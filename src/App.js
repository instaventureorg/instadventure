import React from 'react';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap'
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
              <span><NavLink to="/"><Button>Landing</Button></NavLink></span>
              <span><NavLink to="/user"><Button>User</Button></NavLink></span>
              <span><NavLink to="/game_list"><Button>Game List</Button></NavLink></span>
              <span><NavLink to="/game"><Button>Game</Button></NavLink></span>
            
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


