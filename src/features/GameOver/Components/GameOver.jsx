import React, {useEffect} from "react";
import '../Styles/GameOver.css';
import loseImg from '/Images/lose.gif'
import useSound from "../../../Hooks/useSound.jsx";

export default function GameOver() {
    const score = localStorage.getItem('finalScore');

    const handleRestart = () => {
        window.location.href = '/home';
    };

    useEffect(()=>{
        useSound('lose');
    },[])

    return (
        <div className="game-over-container">
            <h1>Game Over!</h1>
            <p>Your final score: <span className="score"><strong>{score}</strong></span></p>
            <img className="endImg" src={loseImg} alt="Ash and Pikachu giving thumps up"/>
            <p>Better luck next time, Trainer!</p>
            {/*<div className="input-container go">*/}
            {/*    <label htmlFor="player-name" className="input-label">*/}
            {/*        Enter Your Name:*/}
            {/*    </label>*/}
            {/*    <p id='godesc'>You will be added to the LeaderBoard</p>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        id="player-name"*/}
            {/*        className="styled-input"*/}
            {/*        placeholder="Your Name"*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<button className="submit-button">Submit</button>*/}
            <button onClick={handleRestart} className="restart-button">
                Restart Game
            </button>
        </div>
    );
}
