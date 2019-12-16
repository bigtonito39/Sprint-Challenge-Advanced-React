import React, {Component} from 'react';
import ReactDom from "react-dom";
import './App.css';
import axios from "axios"
import PlayerList from "./components/PlayerList"

class App extends React.Component {
constructor(){
  super();
this.state = {
  players: [],
}
}
fetchPlayers = () => {
axios.get ("http://localhost:5000/api/players ")
.then(response => {
  this.setState({
    players: response.data
  })
})
.catch(err => {
  console.log(`this is an error ${err}`)
})

}
componentDidMount () {
  this.fetchPlayers()
}


render(){

  return (
    <div>
<h1>Women's World Cup players</h1>
<PlayerList players={this.state.players}/>
    </div>
  )
}

}



export default App;
