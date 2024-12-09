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

    const [product, setProduct] = useState("")
    const handleProduct = (event) => {
        console.log(event)
        setProduct(event.target.value)
    }

    return ( 
        <div>
            <input value={name} onChange={handleInputName} placeholder="Your Name"></input>
            <p>Name: {name} </p>
            <textarea value={comment} onChange={handleComment} placeholder="Your comments here"></textarea>
            <p>Text: {comment}</p>
            <select name={product} onChange={handleProduct}>
                <option value="Iphone 13">Iphone 13</option>
                <option value="Playstation 5">Playstation 5</option>
                <option value="Fiat Uno">Fiat Uno</option>
            </select>
            <p>Product: {product}</p>
        </div>
    );
}

export default InputOnChange;