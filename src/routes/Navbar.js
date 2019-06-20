import React from 'react'
import {BrowserRouter as NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import '../App.css';

export default class Landing extends React.Component {
  render() {
    return (
      <nav>
        <div id='login-component'>
          <NavLink to="/"><Button>Home</Button></NavLink>
          <NavLink to="/user"><Button>User</Button></NavLink>
          <NavLink to="/game_list"><Button>Game List</Button></NavLink>
          <NavLink to="/game"><Button>Game</Button></NavLink>
        </div>
      </nav>
    )
  }
}
