
import React from "react";
import useSound from "../../Hooks/useSound";
import './EndScreen.css'

export default function EndScreen({ score }) {

    let decision;

    if (score < 8) {
        useSound('lose')
            decision =  < h3 >Your Score was { score }</h3 >
    } else if (score == 8) {
        useSound('win')
        decision = <h3>Congrats You won</h3>
    }

    return (
        <div className="endScreen">
            <h1>Thanks For Playing</h1>
            {decision}
            <button onClick={() => {
                useSound('click')
                setTimeout(() => {
                    location.reload()
                },800)
            }}>Play Again</button>
            <a href="https://github.com/Gyanaa-Vaibhav/Pokemon_Memory_Game" target="_blank">
            <img src="public/github-mark.png" alt="Github Logo" />Source Code
            </a>
        </div>
    )
}