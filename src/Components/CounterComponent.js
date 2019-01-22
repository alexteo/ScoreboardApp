import React, { Component } from "react";

class Counter extends Component{
    state = {
       score : this.props.score
    };

    // incrSc = () => this.props.increasePS()

    // increaseScore=() =>{
    //     this.setState((prevState)=>({score : ++prevState.score}))
    // }

    // decreaseScore=() =>{
    //     this.setState((prevState) => ({score : --prevState.score}))
    // }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={()=> this.props.SetScore(this.props.id , -1)}>-</button> 
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick={()=> this.props.SetScore(this.props.id , 1)}>+</button>
          </div>
        )
    };
}

export default Counter;