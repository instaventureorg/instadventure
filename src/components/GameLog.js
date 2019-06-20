import React from 'react'
import fireApp from '../fire'
import PropTypes from 'prop-types'
import LogMessage from './LogMessage'

export default class GameLog extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>- Game Log -</h1>
        {this.props.messageList.map((message)=>(
          <LogMessage
            text={message.text}
            messageId={message.id}
            isGameMaster= {message.isGameMaster}
            user={message.user}

          />
        ))}
      </div>
    )
  }
}

GameLog.propTypes = {
  messageList: PropTypes.object.isRequired
}
