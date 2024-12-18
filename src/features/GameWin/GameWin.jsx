import React from "react";
import winImg from '/Images/win.gif'
import {useNavigate, useSearchParams} from "react-router-dom";
import './GameWin.css'

export default function GameWin() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const score = localStorage.getItem('finalScore');

    const handleRestart = () => {
        navigate('/home');
    };

    return (
        <div className="game-over-container">
            <h1>Congrats you Win</h1>
            <p>Your final score: <span className="score"><strong>{score}</strong></span></p>
            <img id="winImg" src={winImg} alt="Ash and Pikachu giving thumps up"/>

            <div className="input-container">
                <label htmlFor="player-name" className="input-label">
                    Enter Your Name:
                </label>
                <p id="godesc">You will be added to the LeaderBoard</p>
                <input
                    type="text"
                    id="player-name"
                    className="styled-input"
                    placeholder="Your Name"
                />
            </div>
            <button className="submit-button">Submit</button>
            <button onClick={handleRestart} className="restart-button">
                Restart Game
            </button>
        </div>
    );
}