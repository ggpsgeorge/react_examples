import ComponentC from "./ComponentC";

import { userContext } from "./ComponentA";
import { useContext } from "react";

function ComponentB() {

    const user = useContext(userContext)

    return ( 
        <div className="container-component">
            <h1>Component B</h1>
            <h2>{user} eh uma mentira</h2>
            <ComponentC></ComponentC>
        </div>
     );
}

export default ComponentB;