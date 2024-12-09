import { useState } from "react";
import './Counter.css'

function Counter() {

    const [counter, setCounter] = useState(0)

    const handleClickDecrease = () => {
        setCounter(counter - 1)
    }

    const handleClickReset = () => {
        setCounter(0)
    }

    const handClickIncrease = () => {
        setCounter(counter + 1)
    }

    return ( 
        <div className="counter">
            <p className="counter-number">{counter}</p>
            <div>
                <button onClick={handleClickDecrease} className="counter-button">Decrease</button>
                <button onClick={handleClickReset} className="counter-button">Reset</button>
                <button onClick={handClickIncrease} className="counter-button">Increase</button>
            </div>
        </div>
     );
}

export default Counter;