import Panel from "./Panel";

import "./AccordionPanel.css"

function Accordion() {
    return ( 
        <div className="accordion">
            <h2>Brasília, DF, Brasil</h2>
            <Panel title="About">
                É a capital federal do Brasil e a sede de governo do Distrito Federal. 
                A capital está localizada na região Centro-Oeste do país, 
                ao longo da região geográfica conhecida como Planalto Central.
            </Panel>
            <Panel title="Etimology">
                Significa “natural do Brasil”, brasileira”, “aquela que provém de terras brasileiras”.
            </Panel>
        </div>
     );
}

export default Accordion;