import React from 'react'
import GameLog from '../components/GameLog'

export default class GamePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      gameMaster:null,
      gameId: null,
      messageList: []
    }
  }

  componentWillMount(){
    const { id, gameMaster } = this.props.match.params
    this.setState({gameId:id, gameMaster:gameMaster})
  }

  //Should render the game log, the move/log input, Stats, inventory, and users
  render() {
    return (
    <div>
      {/* TODO replace with game name and description */}
      <p>{`Welcome to ${this.state.gameId} by ${this.state.gameMaster}`} </p>

      <GameLog 
        gameId={this.state.gameId}
        gameMaster={this.state.gameMaster}
      />
      <div>Need a Post Message Thing</div>
      <div>Stats?</div>
      <div>Inventory - give us stuff</div>
      <div>Users in the game? Or is that actually stretch?</div>
      
    </div>
    )
  }
}
