import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'
import { gameMessage } from '../utilityfuncs/gameMessage'

export default class Post extends React.Component {
  constructor(props){
    super(props)
    this.state={
      text:''
    }
  }
  //message call
  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({ [name]: value })
  }
  onFormSubmit = (event) => {
    var message = {
      text: this.state.text,
      time: new Date(),
      userId: this.props.userId,
      gameId: this.props.gameId
    }
    event.preventDefault()
    gameMessage(message)
    this.setState({text:''})
  }
  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.onFormSubmit(event)}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>{`Post an action here`}</Form.Label>
            <Form.Control
              name ='text'
              onChange={this.handleInputChange}
              required as="textarea"
              rows="3" 
              placeholder="Type your action here!"
              />
          </Form.Group>
          <Button variant="primary" type="submit">
            Ready, Action, Go...
          </Button>
        </Form>

      </div>

    )
  }
}

Post.propTypes = {
  userId: PropTypes.string,
  gameId: PropTypes.string
}