import React from "react";
import useSound from "../../Hooks/useSound";
import githubMark from '/github-mark.png'
import winImg from '/winImg.jpg'
import loseImg from '/loseImg.jpeg'
import './EndScreen.css'

export default function EndScreen({ score }) {

    let decision;

    if (score < 8) {
        useSound('lose')
        decision = (
            <div>
                <img className="endImg" src={loseImg} alt="Ash and Pikachu giving thumps up" />
                < h3 >Your Score was {score}</h3 >
            </div>
        )
    } else if (score == 8) {
        useSound('win')
        decision = (
            <div>
                <img className="endImg" src={winImg} alt="Ash and Pikachu giving thumps up" />
                <h3>Congrats You won</h3>
            </div>)
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
                <img src={githubMark} alt="Github Logo" />Source Code
            </a>
        </div>
    )
}