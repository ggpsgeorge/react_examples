import { useEffect, useState } from "react";

function TitleCounter() {

    const [counter, setCounter] = useState(0)
    const [jumps, setJumps] = useState(0)

    // Dependency array with counter, will only re-render when the counter variable changes
    useEffect(() => {
        document.title = `Count: ${counter} Jumps: ${jumps}`
        console.log("USE EFFECT RENDER!!")
    }, [counter])

    // Will render just once
    // useEffect(() => {
    //     document.title = `Count: ${counter} Jumps: ${jumps}`
    //     console.log("USE EFFECT RENDER!")
    // }, [])

    // Will render everytime at each change
    // useEffect(() => {
    //     document.title = `Count: ${counter} Jumps: ${jumps}`
    //     console.log("USE EFFECT RENDER")
    // })

    function handleCounter() {
        setCounter(c => c + 1)
    }

    function handleJumps() {
        setJumps(j => j + 1)
    }

    return ( 
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleCounter}>Click Me!</button>
            <h2>Jumps: {jumps}</h2>
            <button onClick={handleJumps}>Click for Jump</button>
        </div>
     );
}

export default TitleCounter;