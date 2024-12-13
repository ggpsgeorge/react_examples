import { useState } from "react";

function ListOfThings() {

    const newItems = ["Banana", "Meat", "Eggs", "Cellphone"]

    const [items, setItems] = useState(newItems)

    function handleAddItem() {
        const inputProductValue = document.getElementById("input-product").value
        document.getElementById("input-product").value = ""
        setItems(i => [...i, inputProductValue])
    }

    function handleRemoveItem() {
        const inputProductValue = document.getElementById("input-product").value
        document.getElementById("input-product").value = ""
        setItems(items.filter((elem, i) => inputProductValue !== elem))
    }

    return (  
        <div>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    );
                })}
            </ul>
            <input type="text" id="input-product" placeholder="Add product"></input>
            <button onClick={handleAddItem}>Add Product</button>
            <button onClick={handleRemoveItem}>Remove Product</button>
        </div>
    );
}

export default ListOfThings;