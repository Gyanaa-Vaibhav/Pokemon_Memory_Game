import React from "react";
import "./About.css";

export default function AboutGame() {
    return (
        <div className="about-game-container">
            <div className="visit-container">
                <p className="visit-message">
                    Explore the project, contribute, or check out my portfolio!
                </p>
                <div className="button-container">
                    <a
                        href="https://github.com/your-username/pokemon-card-game"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-link"
                    >
                        Visit My GitHub
                    </a>
                    <a
                        href="https://your-website.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-link"
                    >
                        Visit My Website
                    </a>
                </div>
            </div>
            <h1>About the Pokémon Card Game</h1>
            <p>
                Welcome to the Pokémon Card Game! This game challenges your memory, strategy, and reflexes while
                immersing you in the exciting world of Pokémon. Prepare to flip cards, match pairs, and progress
                through levels of increasing complexity.
            </p>

            <h2>Game Features</h2>
            <ul>
                <li>Dynamic grid layout that adapts to levels and difficulty.</li>
                <li>Interactive scoring system to track your progress.</li>
                <li>Various levels to challenge your memory skills.</li>
                <li>Engaging visual designs inspired by Pokémon.</li>
            </ul>

            <h2>How to Play</h2>
            <ol>
                <li>
                    <strong>Select a Level:</strong> Choose a game level (1 to 5). Each level increases the card count
                    and grid complexity.
                </li>
                <li>
                    <strong>Select Difficulty:</strong> Pick a difficulty (1 - Easy, 2 - Medium, 3 - Hard). Higher
                    difficulties add more cards.
                </li>
                <li>
                    <strong>Start Playing:</strong> Cards will appear face-down. Click a card to flip it and reveal the
                    Pokémon.
                </li>
                <li>
                    <strong>Match Cards:</strong> Your goal is to match pairs. Every flip reshuffles the cards, so
                    remember their positions!
                </li>
                <li>
                    <strong>Track Your Score:</strong> Each successful match increases your score. Avoid flipping the
                    same card twice.
                </li>
            </ol>

            <h2>Game Rules</h2>
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
                    <strong>Shuffling:</strong> After every flip, the cards are shuffled randomly to make the game more
                    challenging.
                </li>
                <li>
                    <strong>Scoring:</strong> Every successful match increases your score by 1.
                </li>
                <li>
                    <strong>Level Progression:</strong> Higher levels include more cards and complex grid layouts.
                </li>
                <li>
                    <strong>No Time Limit:</strong> You can take your time to plan your moves, but memory and strategy
                    are key!
                </li>
                <li>
                    <strong>Play Linearly:</strong> Jumping levels will reset your score and progress. Play sequentially
                    to unlock higher levels.
                </li>
            </ul>

            <p className="encouragement">
                Get ready to challenge your memory, sharpen your strategy, and become a true Pokémon master. Good luck
                and have fun!
            </p>
        </div>
    );
}
