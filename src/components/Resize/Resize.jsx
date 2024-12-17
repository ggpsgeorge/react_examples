import { useEffect, useState } from "react";

function Resize() {
    
    // Will run only on mount, the first time the page loads
    useEffect(() => {
        
        window.addEventListener("resize", handleResize)
        console.log("EVENT LISTENER ADDED")

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("EVENT LISTENER REMOVED")
        }

    }, [])
    
    function handleResize() {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)    

    useEffect(() => {
        
        document.title = `H: ${height} W: ${width}`
        console.log("RESIZED THE VARIABLES")
    
    }, [height, width])

    return ( 
        <div>
            <h2>Height: {height} </h2>
            <h2>Width: {width} </h2>
        </div>
     );
}

export default Resize;