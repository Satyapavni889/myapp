import { Component } from "react";

class List extends Component{
    render(){
        return(
            <>

            <h5>Instructions</h5>
            <ol>{
                this.props.inst.map((value,index)=>{
                    return(
                        <li>
                            {
                                value
                            }
                        </li>
                    )
                })
                }</ol>
            </>
            
        )
    }
}
export default List;