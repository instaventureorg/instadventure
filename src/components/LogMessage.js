//AKA Message in the database
import React from 'react'
import PropTypes from 'prop-types'

export default class LogMessage extends React.Component {
  render() {
    return (
      <div className='LogMessage'>
        {(this.props.gameMaster === this.props.user) ? <h2>{`Game Master Says:`}</h2> : <h3>{`Player attempts to...`}</h3>}
        <p>{this.props.text}</p>
      </div>
    )
  }
}

LogMessage.propTypes = {
  text: PropTypes.string.isRequired,
  gameMaster: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
}