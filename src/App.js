import React from 'react';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { LandingPage, GamePage, GameListPage, UserPage, Navbar, /*Login, Signup*/ } from './routes/routes.js'
import './App.css';
// import fireApp from './fire.js'
// import firebase from 'firebase'

export default class App extends React.Component{
  render (){
  return (
    <Router>
        <div className="App">
          <div id='nav-links' className="Links">
              <Navbar />
          </div>

          <div className="Pages">
            <Route path="/" exact component={LandingPage} />
            <Route path="/user" exact component={UserPage} />
            <Route path="/game_list" exact component={GameListPage} />
            <Route path="/game" exact component={GamePage} />
            {/* <Route path="/login" exact component={Login} /> */}
            {/* <Route path="/Signup" exact component={Signup} /> */}
          </div>

          <div className="Footer">
            <p><b><span className='instadventure-name'>InstAdventure</span></b> was created for <a href='https://www.developerweek.com/NYC/'>DeveloperWeek NYC</a>'s 2019 Hackathon by Jason Bennett, Claire Gilligan, Alex Kramer, and Malhar Teli, with Blake Dignes. <a href='https://github.com/instaventureorg/instadventure'>Check out our code</a>!</p>
            <Route path="/game/:id" exact component={GamePage} />
          </div>
        </div>
      </Router>
  )}
}


