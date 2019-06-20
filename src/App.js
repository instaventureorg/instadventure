import React from 'react';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import { LandingPage, GamePage, GameListPage, UserPage, /*Login, Signup*/ } from './routes/routes.js'
import './App.css';
// import fireApp from './fire.js'
// import firebase from 'firebase'

export default class App extends React.Component{
  render (){
  return (
    <Router>
        <div className="App">
          <nav id='nav-links' className="Links">
            <NavLink to="/"><Button>Home</Button></NavLink>
            <NavLink to="/user"><Button>User</Button></NavLink>
            <NavLink to="/game_list"><Button>Game List</Button></NavLink>
            {/* <NavLink to="/game"><Button>Game</Button></NavLink> */}
          </nav>

          <div className="Pages">
            <Route path="/" exact component={LandingPage} />
            <Route path="/user" exact component={UserPage} />
            <Route path="/game_list" exact component={GameListPage} />
            <Route path="/game/:id" exact component={GamePage} />
            {/* <Route path="/login" exact component={Login} /> */}
            {/* <Route path="/Signup" exact component={Signup} /> */}
            <Route path="/game/:gameMaster/:id" exact component={GamePage} />
          </div>

          <div className="Footer">
            <p><b><span className='instadventure-name'>InstAdventure</span></b> was created for <a href='https://www.developerweek.com/NYC/'>DeveloperWeek NYC</a>'s 2019 Hackathon by Jason Bennett, Claire Gilligan, Alex Kramer, and Malhar Teli, with Blake Dignes. <a href='https://github.com/instaventureorg/instadventure'>Check out our code</a>!</p>

          </div>
        </div>
      </Router>
  )}
}


