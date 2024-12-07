import { useState } from "react"

function ButtonClick({pClickName = "ChiChi"}) {

    const[count, setCount] = useState(0)
    const[clickName, setClickName] = useState(pClickName)

    pClickName = "Pual"

    const handleClick = (pClickName) => {
        setCount((count) => count + 1)
        setClickName(pClickName)
    }

    if (count <= 1) {
        return(
            <div>
                <button onClick={() => handleClick(pClickName)}>{clickName} Click Me</button>
            </div>
        )
    } else {
        return(
            <div>
                <button onClick={() => handleClick(pClickName)}>YOU CLICKED ME {count} TIMES</button>
            </div>
        )
    }
}

export default ButtonClick;