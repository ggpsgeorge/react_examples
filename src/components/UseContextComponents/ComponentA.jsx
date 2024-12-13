import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const userContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Sonic das Pradarias")

    return ( 
        <div className="container-component">
            <h1>Component A</h1>
            <h2>{user}</h2>
            <userContext.Provider value={user}>
                <ComponentB></ComponentB>
            </userContext.Provider>
        </div>
     );
}

export default ComponentA;