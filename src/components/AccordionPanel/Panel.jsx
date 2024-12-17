import { useState } from "react";

import "./AccordionPanel.css"

function Panel({title, children}) {
    
    const [isActive, setIsActive] = useState(false)

    return ( 
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <div>
                    <p>{children}</p>
                    <button onClick={() => setIsActive(!isActive)}>
                        Close
                    </button>
                </div>
            ) : (
                <button onClick={() => setIsActive(!isActive)}>
                    Show
                </button>
            )}
        </section>
     );
}

export default Panel;