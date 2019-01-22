import React, { Component } from "react"; 

class Stopwatch extends Component {

    state = {

        time : 0,
        isRunning : false

    };

    handleStart = ()=>{

        this.setState(
            {
                //time : this.state.time + 1,
                isRunning : !this.state.isRunning
            }
        )

    }


  

    tick = () =>{

        if(this.state.isRunning){

            this.setState({

                time : this.state.time + 1

            });
        }
        //console.log("tick");
    }

    componentDidMount(){
       this.Id = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.Id);
    }

    render(){
        return(

            <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{this.state.time}</span>
            <button onClick = {this.handleStart}>Start</button> 
            <button>Reset</button>
            </div>

        )
    }
}

export default Stopwatch;