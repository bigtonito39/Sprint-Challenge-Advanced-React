import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import PlayerList from "./components/PlayerList";
import Navbar from "./components/Navbar";



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
    players: response.data,
    
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
      <header>
      <h1>Women's World Cup players</h1>
      <Navbar />
      </header>

<PlayerList players={this.state.players}/>
    </div>
  )
}

}



export default App;
