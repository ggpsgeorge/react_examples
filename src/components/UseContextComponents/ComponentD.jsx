
import { useContext } from "react";
import { newUserContext } from "./ComponentC";

function ComponentD() {

    const user = useContext(newUserContext);

    return ( 
        <div className="container-component">
            <h1>Component D</h1>
            <h2>{user} consegue socar geral</h2>
        </div>
     );
}

export default ComponentD;