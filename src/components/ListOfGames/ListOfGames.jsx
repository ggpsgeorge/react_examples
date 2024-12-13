import { useState } from "react";

import './ListOfGames.css'

function ListOfGames() {
    
    const [games, setGames] = useState([])
    const [gameName, setGameName] = useState("")
    const [gameRelease, setGameRelease] = useState("")
    const [gameGenre, setGameGenre] = useState("")

    function handleAddGame() {
        
        const newGame = {
            name: gameName,
            release: gameRelease,
            genre: gameGenre
        }

        setGames(g => [...g, newGame])
        setGameName("")
        setGameRelease("")
        setGameGenre("")
    }

    function handleRemoveGame(index) {
        setGames(g => [...g.filter((_, i) => i!==index)])
    }

    function handleGameName(event) {
        setGameName(g => event.target.value)
    }


    function handleGameRelease(event) {
        setGameRelease(g => event.target.value)
    }

    function handleGameGenre(event) {
        setGameGenre(g => event.target.value)
    }

    return ( 
        <div className="game-list-container">
            <h2>List of Games</h2>
            {/* <p>{JSON.stringify(games)}</p> */}
            <ol>
                {games.map((game, index) => 
                    <li key={index} onClick={() => handleRemoveGame(index)}>
                        {game.name}, {game.release}, {game.genre}
                    </li>
                )}
            </ol>
            <input type="text" id="input-game-name" value={gameName} onChange={handleGameName} placeholder="Name of the Game"></input>
            {/* <p>{gameName}</p> */}
            <input type="text" id="input-game-release" value={gameRelease} onChange={handleGameRelease} placeholder="Release Year of the Game"></input>
            {/* <p>{gameRelease}</p> */}
            <input type="text" id="input-game-genre" value={gameGenre} onChange={handleGameGenre} placeholder="Genre of the Game"></input>
            {/* <p>{gameGenre}</p> */}
            <button onClick={() => handleAddGame()}>Add Game</button>
        </div>
     );
}

export default ListOfGames;