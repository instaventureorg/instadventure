import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { createGame } from '../utilityfuncs/createGame'

export default class CreateGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      gameName: ''
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
    var game = {
      title: this.state.gameName,
      description: this.state.description,
      gamemaster: this.props.userId,
      gameMasterDisplay: this.props.displayName

    }
    console.log('game is',game)
    event.preventDefault()

    createGame(game)
    this.setState({ description: '', gameName: '' })
    //TODO replace with redirect?
  }
  render() {
    console.log('create game', this.props)
    return (
      
      <div>
        <Form onSubmit={(event) => this.onFormSubmit(event)}>
          <Form.Group controlId="name.text">
            <Form.Label>{`Game Name`}</Form.Label>
            <Form.Control
              name='gameName'
              onChange={this.handleInputChange}
              required 
              type="text"
              placeholder="Pick a great name"
            />
          </Form.Group>
          <Form.Group controlId="description.textArea">
            <Form.Label>{`Game Description`}</Form.Label>
            <Form.Control
              name='description'
              onChange={this.handleInputChange}
              as="textarea"
              rows="3"
              placeholder="Describe your world!"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Start the Game
          </Button>
        </Form>

      </div>

    )
  }
}

