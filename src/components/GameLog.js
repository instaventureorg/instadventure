import React from 'react'
import fireApp from '../fire'
import PropTypes from 'prop-types'
import LogMessage from './LogMessage'

//AKA ChatLog
export default class GameLog extends React.Component {
  constructor(props){
    super(props)
    this.ref = fireApp.firestore().collection('games').doc(this.props.gameId).collection('messages').orderBy('time')
    this.state = {
      messageList: []
    }
  }

  onCollectionUpdate = snapshot => {
    let messageList = [];
    snapshot.forEach((doc, i)=>{
      let data = doc.data();
      data.id = doc.id;
      messageList.push(data)
    })
    this.setState({
      messageList: messageList
    })
  }

  componentDidMount(){
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  //TODO pass game master
  render(){
    return(
      <div>
        <h1>- Game Log -</h1>
        {(this.state.messageList.length >0)?
          this.state.messageList.map((message)=>(
          <LogMessage
            text={message.text}
            gameMaster= {this.props.gameMaster}
            user={message.userId}
          />
        )):<div/>}
      </div>
    )
  }
}

GameLog.propTypes = {
  gameId: PropTypes.string.isRequired,
  gameMaster: PropTypes.string.isRequired
}
