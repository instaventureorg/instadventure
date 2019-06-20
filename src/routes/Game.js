import React from 'react'
import GameLog from '../components/GameLog'
import Post from '../components/Post'

export default class GamePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      gameMaster:null,
      gameId: null,
      messageList: [],
      userId: 'Alex'
    }
    //Assume that the current user's id will be loaded as well
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
      <Post 
        userId={this.state.userId} 
        gameId={this.state.gameId}
        />
      
      
    </div>
    )
  }
}
