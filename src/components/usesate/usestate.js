import React, { useState } from 'react'

export const Usestate = () => {
    const [name1,setname]=useState({
        name:"pav",
        title:"associate"
    })
    const clickfn=()=>{
        setname({...name1,title:"gfSHm",bdsngf:"fatgsdxg"})
    }
  return (
    <div>
        <h1>{name1.name}</h1>
        <h2>{name1.title}</h2>
        <h2> {name1.bdsngf}</h2>
        <button onClick={clickfn}>Clickme</button>
    </div>
  )
}


