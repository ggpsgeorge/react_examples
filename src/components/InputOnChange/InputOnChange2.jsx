import { useState } from "react";

function InputOnChange2() {
    
    const [language, setLanguage] = useState("")
    const handleLanguageChange = (event) => {
        setLanguage(l => event.target.value)
    }

    return (  
        <div>
            <p>Favorite Programming Language: {language} </p>
            <label >
                <input type="radio" value="Java" 
                    checked={language === "Java"}
                    onChange={handleLanguageChange}/>
            Java
            </label><br></br>
            <label >
                <input type="radio" value="C" 
                    checked={language === "C"}
                    onChange={handleLanguageChange}/>
            C
            </label><br></br>
            <label >
                <input type="radio" value="Python" 
                    checked={language === "Python"}
                    onChange={handleLanguageChange}/>
            Python
            </label>

        </div>
    );
}

export default InputOnChange2;