import React from "react";
import fireApp from "../fire";
import { siteMessage } from "../utilityfuncs/siteMessage";
import { gameMessage } from "../utilityfuncs/gameMessage";
import { updateCharacter } from "../utilityfuncs/updateCharacter";

export default class GameListPage extends React.Component {
  constructor(props) {
    super(props);
    this.ref = fireApp.firestore().collection("games");
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
  render() {
    return (
      <div>
        <h1>Game List Page </h1>
        <div id="games">
          {this.state.gameList.map(game => (
            <div>
              <p>{game.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
