import { useState } from "react";

function InputOnChange() {

    const [name, setName] = useState("")

    const handleInputName = (event) => {
        setName(event.target.value)
    }

    const [comment, setComment] = useState("")
    const handleComment = (event) => {
        setComment(event.target.value)
    }

    return ( 
        <div>
            <input value={name} onChange={handleInputName} placeholder="Your Name"></input>
            <p>Name: {name} </p>
            <textarea value={comment} onChange={handleComment} placeholder="Your comments here"></textarea>
            <p>Text: {comment}</p>
        </div>
    );
}

export default InputOnChange;