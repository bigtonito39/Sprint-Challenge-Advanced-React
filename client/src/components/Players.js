import React from "react";

const Players = props => {
console.log(props)

return (
    <div className="Players">
          
        <h2> <bold>Name: </bold>{props.playerInfo.name} </h2>
        <h3><bold>Country: </bold>{props.playerInfo.country}</h3>
        <h4><bold>Searches: #</bold>{props.playerInfo.searches}</h4>
        
    </div>
)

}

export default Players;