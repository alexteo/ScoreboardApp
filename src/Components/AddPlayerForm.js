import React, { Component } from "react";

class AddPlayerForm extends Component{

    handleChange = (event) => {
        this.setState(
            {
                value: event.target.value 
            }
        )
    }

    addPlayer = () => { return this.props.addPlayers}

    handleSubmit = (event) =>{ //event -> singurul parametru pe care il primeste un event-handler
       
        event.preventDefault();
        console.log("submit called");
        
       
        //this.addPlayer();
        this.props.addPlayers(this.state.value);

        this.setState(
                    {
                        value : ''
                    }
                )

        
    }
//<input name="myData" id="myData" value={this.state.value} onChange={ this.handleChange } > </input>
    state ={
        value: ''
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter a player's name" value={this.state.value} onChange={this.handleChange }/>
                <input type="submit" value="Add Player" />
            </form>
        );
    }
}

export default AddPlayerForm