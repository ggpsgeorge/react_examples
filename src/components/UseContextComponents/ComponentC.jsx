import ComponentD from "./ComponentD";
import { createContext, useContext, useState } from "react";

import { userContext } from "./ComponentA";

export const newUserContext = createContext();

function ComponentC() {

    const user = useContext(userContext)

    const [newUser, setNewUser] = useState("Knuckles")

    return ( 
        <div className="container-component">
            <h1>Component C</h1>
            <h2>{user} eh mais ou menos</h2>
            <h2>{newUser} eh o melhor</h2>
            <newUserContext.Provider value={newUser}>
                <ComponentD></ComponentD>
            </newUserContext.Provider>
        </div>
     );
}

export default ComponentC;