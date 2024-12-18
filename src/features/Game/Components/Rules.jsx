import React from "react";
import '../Styles/Guide_Rules.css';

export default function Rules({setShowRules}) {
    return (
        <>
            <div className='overlay'></div>
            <div className="rules-container">
                <h2>Game Rules</h2>
                <h3>
                    If you jump levels the score will be reset to 0 and progress all will be lost play in a linear fashion
                </h3>
                <ul>
                    <li>
                        <strong>Flipping Cards:</strong> Click on any face-down card to flip it and reveal the Pokémon.
                    </li>
                    <li>
                        <strong>Matching Pairs:</strong> Your objective is to match two identical Pokémon cards.
                    </li>
                    <li>
                        <strong>Game Over Condition:</strong> If you flip the same card twice (non-matching), the game ends.
                    </li>
                    <li>
                        <strong>Shuffling:</strong> After every flip, the cards are shuffled randomly to make the game more challenging.
                    </li>
                    <li>
                        <strong>Scoring:</strong> Every successful match increases your score by 1.
                    </li>
                    <li>
                        <strong>Level Progression:</strong> Higher levels include more cards and complex grid layouts.
                    </li>
                    <li>
                        <strong>No Time Limit:</strong> You can take your time to plan your moves, but memory and strategy are key!
                    </li>
                </ul>
                <p>Follow the rules, sharpen your memory, and aim for the highest score!</p>
                <button onClick={() => setShowRules(false)} className="back-button">
                    Back to Game
                </button>
            </div>
        </>
    );
}
