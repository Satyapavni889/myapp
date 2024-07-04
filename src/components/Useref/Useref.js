import React, { useRef } from 'react'

export const Useref = () => {
    const pav=useRef()
    const fn=()=>{
        let na=pav.current.value
        console.log(na)
    }
  return (
    <div>
      <button onClick={fn} value={"gdzbxJSDHFDSJHF"} ref={pav}>Clickme</button>
    </div>
  )
}

