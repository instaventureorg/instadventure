import React from 'react'
import fireApp from '../fire'

export default class GameListPage extends React.Component {
  constructor(props){
    super(props)
    this.ref = fireApp.firestore().collection('games').doc('secondgame').collection('messages').orderBy('time')
    this.state = {
      messageList: []
    }
  }

  onCollectionUpdate = snapshot => {
    let messageList = [];
    snapshot.forEach((doc, i)=>{
      let data = doc.data();
      data.id = doc.id;
      messageList.push(data)
    })
    this.setState({
      messageList: messageList
    })
  }

  componentDidMount(){
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render(){
    return(
      <div>
        {this.state.messageList.map((message)=>(
          <div>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    )
  }

}
