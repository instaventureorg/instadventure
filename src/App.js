import React from "react";
import { Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  LandingPage,
  GamePage,
  GameListPage,
  UserPage /*Login, Signup*/
} from "./routes/routes.js";
import "./App.css";
import fireApp from "./fire.js";
import firebase from "firebase";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: null,
      displayName: null
    };
  }
  componentDidMount() {
    let that = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        that.setState({ userId: user.uid, displayName: user.displayName });
      } else {
        that.setState({ userId: null, displayName: null });
      }
    });
  }
  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <nav id='nav-links' className="Links">
            <NavLink to="/" className="navbar-link"><Button>Home</Button></NavLink>
            <NavLink to="/user" className="navbar-link"><Button>User</Button></NavLink>
            <NavLink to="/game_list" className="navbar-link"><Button>Game List</Button></NavLink>
          </nav>

          <div className="Pages">
            <Route path="/" exact component={LandingPage} />
            <Route
              path="/user"
              exact
              render={props => (
                <UserPage
                  {...props}
                  userId={this.state.userId}
                  displayName={this.state.displayName}
                />
              )}
            />
            <Route path="/game_list" exact render={props => (
              <GameListPage
                {...props}
                userId={this.state.userId}
                displayName={this.state.displayName}
              />
            )} />
            <Route path="/game/:gameMaster/:id" exact render={props => (
                <GamePage
                  {...props}
                  userId={this.state.userId}
                  displayName={this.state.displayName}
                />
              )} />
          </div>

          <div className="Footer">
            <p>
              <b>
                <span className="instadventure-name">InstAdventure</span>
              </b>{" "}
              was created for{" "}
              <a href="https://www.developerweek.com/NYC/">DeveloperWeek NYC</a>
              's 2019 Hackathon by Jason Bennett, Claire Gilligan, Alex Kramer,
              and Malhar Teli, with Blake Dignes.{" "}
              <a href="https://github.com/instaventureorg/instadventure">
                Check out our code
              </a>
              !
            </p>
          </div>
        </div>
      </Router>
    );
  }
}
