import React from "react";
//import { useLocalStorage} from "../utils/input"


const Players = props => {
//const [players, setPlayers] = useLocalStorage(props)

return (
    <div className="Players">
          
        <h2> <bold>Name: </bold>{props.playerInfo.name} </h2>
        <h3><bold>Country: </bold>{props.playerInfo.country}</h3>
        <h4><bold>Searches: #</bold>{props.playerInfo.searches}</h4>
        
    </div>
)

}

export default Players;