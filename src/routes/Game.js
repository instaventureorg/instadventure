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

  //Temporary
  appendMessages = (messages) =>{
    return messages.map(m=> {
      m.isGameMaster = m.user === gameMaster
      return m
    })
  }

  render() {
    console.log('messages', this.appendMessages(testData))
    return (
    <div>
      {/* TODO replace with game name and description */}
      <p>{`Welcome to ${this.state.id}`} </p>


      <GameLog 
        messageList={this.appendMessages(testData)
          // TODO don't do this as a prop, send the game id down.
        
        }
        
      />
    </div>
    )
  }
}
