import React from "react";
import '../Styles/Guide_Rules.css';

export default function Guide({setShowGuide}) {
    return (
        <>
            <div className='overlay'></div>
            <div className="guide-container">
                <h2>Game Guide</h2>
                <p>
                    Follow these steps to enjoy the Pokémon Card Game and become a pro:
                </p>
                <ol>
                    <li>
                        <strong>Select a Level:</strong> Choose a game level (1 to 5). Each level increases the card count and grid complexity.
                    </li>
                    <li>
                        <strong>Select Difficulty:</strong> Pick a difficulty (1 - Easy, 2 - Medium, 3 - Hard). Higher difficulties add more cards.
                    </li>
                    <li>
                        <strong>Start Playing:</strong> Cards will appear face-down. Click a card to flip it and reveal the Pokémon.
                    </li>
                    <li>
                        <strong>Match Cards:</strong> Your goal is to match pairs. Every flip reshuffles the cards, so remember their positions!
                    </li>
                    <li>
                        <strong>Track Your Score:</strong> Each successful match increases your score. Avoid flipping the same card twice.
                    </li>
                </ol>
                <p>
                    Use strategy and your memory to progress through all levels. Have fun flipping and catching Pokémon!
                </p>
                <button onClick={() => setShowGuide(false)} className="back-button">
                    Back to Game
                </button>
            </div>
        </>
    );
}
