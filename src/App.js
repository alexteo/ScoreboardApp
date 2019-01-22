import React, { Component } from 'react';
//import {DISHES} from './shared/dishes';
import {PLAYERS} from './shared/players'
import './App.css'
import Header from './Components/HeaderComponent'
import Player from './Components/PlayerComponent'
import AddPlayerForm from './Components/AddPlayerForm'

class App extends Component {
  state ={
    //dishes : DISHES,
    players : PLAYERS

  }
  
  generateStaticId = () =>{
    var lastId = this.state.players.length -1;
    return () => ++lastId;
  } //closure functions

  AddPlayerToPlayers = (name) => {
    console.log("adding player " + name +" to Players array");
    
    let getId = this.generateStaticId(); //am inlocuit cu getUniqId
    const getUniqId = () => 1 + Math.max(...this.state.players.map(player => player.id)) // (map() - intoarce un array de player id-uri); Math.max -> intoarce cel mai mare id din players, pe care il incrementeaza cu 1

    let newPlayers = [...this.state.players, { nume:name, id:getUniqId(), score:0}] //!!! DE CITIT "..." ->spread sintax  - concatenare de array-uri


    this.setState(

     {players : newPlayers}
     
    )
  } 

  SetPlayersScore = (playerIndex, direction) =>{
  
    this.setState(
      {
        players : this.state.players.map( (item) => {

            // if(item.id === playerIndex){

            //   item.score = item.score + direction;
            //   console.log(item.score);

            // }

        item = (item.id === playerIndex) ? Object.assign(item, {score: item.score + direction}) : item
        console.log(item.score);

        return item// (item.id === playerIndex ? Object.assign(item, {score: item.score + direction}): item);
        }
      )
    }
  );
    
  }
  
  setIsMax = (score, maxScore) => {

    if(score !== 0){

      if(score === maxScore){

        return true;

      }
    }
    return false;
  }

  removePlayer = (playerIndex) =>{
    //console.log("need to remove player with id: " + this.state.players[playerIndex].id);

    this.setState(
          (prevState) => ({players : prevState.players.filter(item => item.id !== playerIndex) })
        )
  }

  render() {
    
    var isMax = false;

    const myPlayers = this.state.players;
    console.log(myPlayers);

    var maxElement;
    var maxScore;

    maxScore = myPlayers[0].score;
    for(var i = 0 ; i < myPlayers.length; i++){
      
     

          if(maxScore < myPlayers[i].score){

            maxScore = myPlayers[i].score;
            maxElement = myPlayers[i].nume;
            isMax = true;        

        }

      
    }
    console.log("max no found " + maxScore);
    console.log("max element found " + maxElement);

    //Math.max(...players.map(player => player.score))
    // const maxScore2 = Math.max(...myPlayers.map(player => player.score));
    // console.log("maxScore2: " + maxScore2);
    
    // console.log (myPlayers.find(function(player){
    //   return player.score == maxScore2;
    // }))


    return (
      <div className="scoreboard">
        <Header 

         title = "SCOREBOARD"
         playersNo={this.state.players.length}
         players = {this.state.players}

         />
        {
          this.state.players.map(item =>(
            <Player 
              key = {item.id.toString()}
              id = {item.id}
              name = {item.nume}
              removePlayer = {this.removePlayer}
              score = {item.score}
              SetScore = {this.SetPlayersScore}
              //isMax = {item.score === maxScore ? true : false}
              isMax = {this.setIsMax(item.score, maxScore)}
              />
            )
          )
        }
        
        <AddPlayerForm 
        addPlayers = {this.AddPlayerToPlayers}
        />
        </div>
    );
  }
}

export default App;
