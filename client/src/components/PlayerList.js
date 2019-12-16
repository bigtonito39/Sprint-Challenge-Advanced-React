import React from "react";
import Players from "./Players"

const PlayerList = props => {

    return(
        <div className= "Player-List">
          
{props.players.map(playerInfo => {
  
    return <Players  playerInfo={playerInfo} key={playerInfo.id}/>
})}

        </div>
    )
}
export default PlayerList;