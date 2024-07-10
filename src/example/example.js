// import { useEffect, useState } from "react";

// import React from 'react'

// let Example = () => {
//     const[a, seta]=useState(0);
// useEffect((c)=>{
//     seta(1);
// },[a])
// console.log(a)
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Example

import React, { useEffect, useState } from 'react';

const Stopwatch = () => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hrs, setHrs] = useState(0);
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        let intervalID;
        if (timer) {
            intervalID = setInterval(() => {
                setSec((prevSec) => {
                    let newSec = prevSec + 1;
                    if (newSec >= 60) {
                        newSec = 0;
                        setMin((prevMin) => {
                            let newMin = prevMin + 1;
                            if (newMin >= 60) {
                                newMin = 0;
                                setHrs((prevHrs) => prevHrs + 1);
                            }
                            return newMin;
                        });
                    }
                    return newSec;
                });
            }, 1000);
        } else {
            clearInterval(intervalID);
        }
        return () => {
            clearInterval(intervalID);
        };
    }, [timer]);

    const startTimer = () => {
        setTimer(true);
    };

    const stopTimer = () => {
        setTimer(false);
    };

    const resetTimer = () => {
        setTimer(false);
        setSec(0);
        setMin(0);
        setHrs(0);
    };

    return (
        <div>
            <h1>STOPWATCH</h1>
            <div id="main">
                <span id="time1">{hrs < 10 ? '0' + hrs : hrs}</span>
                <span>:</span>
                <span id="time2">{min < 10 ? '0' + min : min}</span>
                <span>:</span>
                <span id="time3">{sec < 10 ? '0' + sec : sec}</span>
            </div>
            <div id="buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;

