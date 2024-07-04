import { Component } from "react";
import Prop from "../../props/prop";
import "./card.css"


class Productlisting extends Component {
    state={
        pavani:[]
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        fetch("https://dummyjson.com/recipes")
        .then((response) => response.json())
        .then((response) => 
           {const {recipes}=response
            this.setState({
            pavani:recipes
        },()=>{console.log(recipes)})})
        
    }
    render() {
       console.log(this.state.pavani)
        return (
            <>
                {/* <h4>Product Listing page</h4> */}
                {/* <button onClick={this.fetchData}>Clickme</button> */}
                <div className="card"> 
                {
                    this.state.pavani.map((item,index)=>{
                        return(
                            <>
                            <div>
                            <h5>{item.name}</h5>
                            <Prop satya={item.image} priya={item.instructions}/>
                            </div>

                            </>
                        )
                    })
                }
                </div>
            </>
        )
    }
}

export default Productlisting