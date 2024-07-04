import { Component } from "react";
import "./round.css"

const Circle=()=>{
    return(
        <div className="round"></div>
    )
}

export class MountingPhase extends Component{
    constructor(){
        super();
        this.state={
            showcircle:false
        }
    }
    incrementcount=()=>{
        this.setState({
            showcircle:true
        })
    }
    render(){
        return(
        <>
            <button onClick={this.incrementcount}>Get circle</button>
            {
                this.state.showcircle && <Circle />
            }
        </>
            
        )
    }

}

