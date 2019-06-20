//AKA Message in the database
import React from 'react'
import PropTypes from 'prop-types'

export default class LogMessage extends React.Component {
  render() {
    return (
      <div className='LogMessage'>
        {(this.props.gamemaster === this.props.userId) ? <h2>{`Game Master Says:`}</h2> : <h3>{`Player attempts to...`}</h3>}
        <p>{this.props.text}</p>
      </div>
    )
  }
}

LogMessage.propTypes = {
  text: PropTypes.string.isRequired,
  gamemaster: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
}