import React from 'react'
import fireApp from '../fire'
import GameRow from '../components/GameRow'

export default class GameListPage extends React.Component {
  constructor(props) {
    super(props)
    this.ref = fireApp.firestore().collection('games')
    this.state = {
      gameList: []
    }
  }
  onCollectionUpdate = snapshot => {
    let gameList = [];
    snapshot.forEach((doc, i) => {
      let data = doc.data();
      data.id = doc.id;
      gameList.push(data);
    })
    this.setState({
      gameList: gameList
    })
  }
  async componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  joinOnClick = (gameId) => {
    //Join should add the user to the game and redirect to the page
    //TODO -> add user to the game

    this.viewOnClick(gameId)
  }

  viewOnClick = (gameId)=>{
    //view will just redirect to the page
    this.props.history.push(`/game/${gameId}`)
  }

  render() {
    return (
      <div>
        <h1>Game List Page </h1>
        <div id='games'>
          {this.state.gameList.map((game) => (
            <GameRow
              title={game.title}
              gamemaster={game.gamemaster}
              gameId={game.id}
              join={this.joinOnClick}
              view={this.viewOnClick}
            />
          ))}
        </div>
      </div>
    )
  }
}
