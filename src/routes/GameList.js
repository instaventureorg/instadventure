import React from "react";
import fireApp from "../fire";
import { siteMessage } from "../utilityfuncs/siteMessage";
import { gameMessage } from "../utilityfuncs/gameMessage";
import { updateCharacter } from "../utilityfuncs/updateCharacter";
import GameRow from '../components/GameRow'
import CreateGame from '../components/CreateGame'

export default class GameListPage extends React.Component {
  constructor(props) {
    super(props)
    this.ref = fireApp.firestore().collection('games')
    this.state = {
      gameList: []
    };
  }
  onCollectionUpdate = snapshot => {
    let gameList = [];
    snapshot.forEach((doc, i) => {
      let data = doc.data();
      data.id = doc.id;
      gameList.push(data);
    });
    this.setState({
      gameList: gameList
    });
  };
  async componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  //Loading both gameId and gameMaster was a quick work around for Game not yet pulling that in.
  joinOnClick = (gameId, gameMaster) => {
    //Join should add the user to the game and redirect to the page
    //TODO -> add user to the game

    this.viewOnClick(gameId, gameMaster)
  }

  viewOnClick = (gameId, gameMaster) => {
    //view will just redirect to the page
    this.props.history.push(`/game/${gameMaster}/${gameId}`)
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
        <CreateGame />
      </div>
    )
  }
}
