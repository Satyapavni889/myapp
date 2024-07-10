// https://dummyjson.com/recipes
import axios from "axios";
import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async () => {
        try {
          const response1 = await axios.get("https://dummyjson.com/recipes");
          console.log(response1, "response1");
    
          if (response1.status === 200) {
            setData(response1.data.recipes);
          }
        } catch (err) {
          console.error(err);
        }
      };
  return (
    <>
   

<table class="table">

  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Ingredients</th>
      <th scope="col">Instructions</th>
    </tr>
  </thead>
  <tbody>
  {data.map((each, index)=>{
        return(
            <>
            <tr>
            <td> {each.id}</td>
            <td>{each.name}</td>
            <td>{each.ingredients.map((eachingredient,index)=>{
                return(
                    <p>{`${index+1}.${eachingredient}`}</p>
                )
            })}</td>
            <td>{each.instructions.map((eachinstructions,index)=>{
                return(
                    <p>{`${index+1}.${eachinstructions}`}</p>
                )
            })}</td>
            </tr>
            </>  
        )
    })}
    
    
  </tbody>
</table>
    </>
  )
}

export default Useeffect
