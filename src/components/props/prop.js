import { Component } from "react";
import React from "react";
import List from "./list";




class Prop extends Component{
    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <img src={this.props.satya} width={100} height={100}/>
                {/* <h1>prop</h1> */}
                <List inst={this.props.priya}/>
            </React.Fragment>
        )
    }
}

export default Prop;