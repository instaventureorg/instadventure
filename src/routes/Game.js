import React from 'react'
import GameLog from '../components/GameLog'

const testData = [
 { id:'hello', text:'hi there', user:'Alex'},
 { id:'yo', text:'heyyy', user:'Jeana'},
 { id:'23', text:'hi good bye', user:'Alex'}
]

const gameMaster = 'Alex'

export default class GamePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      gameId: null
    }
  }
  componentWillMount(){
    const { id } = this.props.match.params
    console.log(this.props.match.params)
    //TODO replace with look up the game and use the object for all the test data
    this.setState({gameId:id})
  }
  appendMessages = (messages) =>{
    return messages.map(m=> {
      m.isGameMaster = m.user === gameMaster
      return m
    })
  }

  //We probably don't need these for MVP
  editOnClick = () =>{
    console.log('clicked edit')
  }

  deleteOnClick = () => {
    console.log('delete message')
  }

  render() {
    console.log('messages', this.appendMessages(testData))
    return (
    <div>
      {/* TODO replace with game name and description */}
      <p>{`Welcome to ${this.state.id}`} </p>


      <GameLog 
        messageList={this.appendMessages(testData)}
        // TODO - STRETCH do a check to see if the user is the master, or not and keep this feature turned off
        isUserMaster={false} 
        editOnClick={this.editOnClick}
        deleteOnClick={this.deleteOnClick}
      />
    </div>
    )
  }
}
