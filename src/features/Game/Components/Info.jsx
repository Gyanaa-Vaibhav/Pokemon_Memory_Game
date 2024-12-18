import React from "react";
import '../Styles/Info.css';

export default function Info({setShowInfo}) {

    return (
        <>
            <div className='overlay'></div>
            <div className="info-container">
                <h2>About the Pokémon Card Game</h2>
                <p>
                    Welcome to the Pokémon Card Game! Test your memory and reflexes in this fun and challenging game.
                    Flip the cards to find matching pairs and earn points. With increasing levels and difficulties,
                    the game becomes more engaging as you progress!
                </p>
                <h3>Game Features:</h3>
                <ul>
                    <li>Dynamic grid layout that adapts to levels and difficulty.</li>
                    <li>Interactive scoring system to track your progress.</li>
                    <li>Various levels to challenge your memory skills.</li>
                    <li>Engaging visual designs inspired by Pokémon!</li>
                </ul>

                <p id='ready'>Are you ready to challenge yourself and catch 'em all? Good luck!</p>

                <button onClick={() => setShowInfo(false)} className="back-button">
                    Back to Game
                </button>
            </div>
        </>
    );
}
