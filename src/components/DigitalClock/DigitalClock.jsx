import { useEffect, useState } from "react";

import "./DigitalClock.css"

function DigitalClock() {

    const [clock, setClock] = useState(getTime())

    useEffect(() => {
        setTimeout(() => {
            setClock(getTime)
        }, 1000)
    }, [clock])

    return ( 
        <div className="digital-clock">
            <h1 className="clock">{clock}</h1>
        </div>
     );
}

function getTime() {
    
    let current = new Date()
    let hours = current.getHours().toString()
    let minutes = current.getMinutes()
    let seconds = current.getSeconds()
    
    if(minutes < 10) {
        minutes = `0${minutes}`
    }

    if(seconds < 10) {
        seconds = `0${seconds}`
    }

    return `${hours}:${minutes}:${seconds}`
}

export default DigitalClock;
