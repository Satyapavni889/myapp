import { Component } from "react";



class ButtoncomponentClass extends Component {
    state = {
        Text1: "subscribe",
        Text2: "subscribed",
        isSubcribe: true,
    }

    subscribeHandler = () => {
        console.log("button clicked")
        // this.state.isSubcribe=

    this.setState({
        isSubcribe:!this.state.isSubcribe,
    })
    }
    render() {
        return(
            <>
                        <button onClick={this.subscribeHandler}>
            {this.state.isSubcribe ? this.state.Text2 : this.state.Text1}
        </button>
        {
            this.state.isSubcribe?
            <h2>Thanks for subscribing</h2>:
            <h2>Please subscribe</h2>
        }
            </>
            
        )
    }
}
export default ButtoncomponentClass