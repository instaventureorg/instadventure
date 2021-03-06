//The Row displayed inside a Game Row
import React from 'react'
import {Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class GameRow extends React.Component{
  render(){
    return(
      <div className='GameRow'>
        <h2>{this.props.title}</h2>
        <h3>{this.props.gameMasterDisplay}</h3>
        {(this.props.join)?<Button onClick={()=>this.props.join(this.props.gameId,this.props.gamemaster)}>Join</Button>:<span/>}
        {(this.props.view)?<Button onClick={()=>this.props.view(this.props.gameId,this.props.gamemaster)}>View</Button>:<span/>}
      </div>
    )
  }
}

GameRow.propTypes = {
  title: PropTypes.string.isRequired,
  gameMasterDisplay: PropTypes.string.isRequired,
  gamemaster: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired,
  join: PropTypes.func,
  view: PropTypes.func
}