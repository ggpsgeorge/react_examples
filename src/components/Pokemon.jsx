import { useEffect } from "react";
import { useState } from "react";

function Pokemon() {

    const [pokemon, setPokemon] = useState({})
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/blastoise')

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(url)
            const data = await response.json()
            setPokemon(data)
        }

        fetchData()

    }, [])

    return(
        <div>
            <h1>{pokemon.name}</h1>
        </div>
    )

}

export default Pokemon;