import { useState } from "react";

function TabSwitcher({tabs}) {

    const [selectedId, setSelectedId] = useState(tabs[0].id);
    const selectedTab = tabs.find(tab => tab.id === selectedId);

    function handleClick(tabId) {
        setSelectedId(tabId)
    }

    return(
        <div>
            {tabs.map(tab => (
                <button
                key={tab.id}
                onClick={() => handleClick(tab.id)}
                >
                {tab.header}
                </button>
            ))}
            <hr />
            <div key={selectedId}>
                <h3>{selectedTab.header}</h3>
                {selectedTab.content}
            </div>
        </div>
    )
  
}

export default TabSwitcher;