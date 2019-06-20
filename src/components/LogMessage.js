//AKA Message in the database
import React from 'react'
import PropTypes from 'prop-types'

export default class LogMessage extends React.Component {
  render() {
    return (
      <div className='LogMessage'>
        {(this.props.isGameMaster) ? <h2>{`Game Master - ${this.props.user}`}</h2> : <h3>{`Player Action`}</h3>}
        <p>{this.props.text}</p>
      </div>
    )
  }
}

LogMessage.propTypes = {
  text: PropTypes.string.isRequired,
  messageId: PropTypes.string.isRequired,
  isGameMaster: PropTypes.bool,
  user: PropTypes.string,
}