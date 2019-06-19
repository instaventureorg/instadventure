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
        {this.props.messageList.map((message)=>(
          <LogMessage
            text={message.text}
            messageId={message.id}
            isGameMaster= {message.isGameMaster}
            user={message.user}
            isUserMaster={this.props.isUserMaster}
            deleteOnClick={this.props.deleteOnClick}
            editOnClick={this.props.editOnClick}

          />
        ))}
      </div>
    )
  }
}

GameLog.propTypes = {
  messageList: PropTypes.object.isRequired,
  isUserMaster: PropTypes.bool,
  editOnClick: PropTypes.func,
  deleteOnClick: PropTypes.func

}
