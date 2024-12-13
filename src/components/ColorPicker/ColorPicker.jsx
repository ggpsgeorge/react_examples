import { useState } from "react";

import './ColorPicker.css'

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF")

    function handleChangeColor(event) {
        setColor(event.target.value)
    }

    return ( 
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <p className="color-display" style={{backgroundColor: color}}>
                {color}
            </p>
            <label>Select a color: </label>
            <input id="color" type="color" value={color} onChange={handleChangeColor}></input>
        </div>
     );
}

export default ColorPicker;