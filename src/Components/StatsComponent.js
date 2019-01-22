import React from 'react'

const Stats = (props) => {

    const playersArray = props.players.slice(); //cu metoda slice() copiem valoarea unui array. fara copiem doar referintele
    
    let score =0; 
    
    for(let i =0; i < props.playersNo; i++){
        score +=props.players[i].score;
    }
    
  
    return(    
        <table className="stats">
        <tbody>
            <tr>
            <td>Players:</td>
            <td>{props.playersNo}</td>
            </tr>
            <tr>
            <td>Total Points:</td>
            <td>{score}</td>
            </tr>
        </tbody>
        </table>
    );
}

export default Stats