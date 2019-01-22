//import React from 'react'
import Counter from './CounterComponent'
import React, {PureComponent} from 'react';
import Icon from './Icon.js'

class Player extends PureComponent{

    log =  () => console.log(this.props.name + " rendered. isMax: " + this.props.isMax);

    removeP = () => this.props.removePlayer(this.props.id) //returnam o valoare de functie

    state = {

    }

    render(){

        this.log();

        return(

        <div className="player" >
          <span className="player-name" > 

          <Icon 
            isMax = {this.props.isMax}
          />

          <button className="remove-player" onClick={this.removeP }/*onClick primeste o val de fct*/>✖ </button> {this.props.name} 
          </span>
           
          <Counter 
            SetScore = {this.props.SetScore}
            score = {this.props.score}
            id = {this.props.id}
           />

        </div>

        )
    }
}

// const Player = (props) => {

//     console.log(props.name + " rendered");

//     const removeP = () => props.removePlayer(props.id) //returnam o valoare de functie

//     return (

//         <div className="player" >
//           <span className="player-name" > 
//           <button className="remove-player" onClick={removeP }/*onClick primeste o val de fct*/>✖ </button> {props.name} 
//           </span>

//           <Counter 
//             SetScore = {props.SetScore}
//             score = {props.score}
//             id = {props.id}
//             />

//         </div>

//     );
// }

export default Player;