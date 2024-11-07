import React, { useEffect, useRef, useState } from "react";
import useSound, { pauseBackground } from '../../Hooks/useSound'
import './Game.css'
import useShuffle from "../../Hooks/useShuffle";
import EndScreen from "./EndScreen";


export default function Game({ data,  setPlayBackgroundMusic }) {    
    const clickedPokemon = useRef(new Array)
    const [shuffle, pokCard] = useShuffle(data)
    const [score, setScore] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false)
    const [gameEnd, setGameEnd] = useState(false)

    shuffle() // Shuffles Cards
    
    function handelGame(arr, x) {
        if (score == 7) {
            setPlayBackgroundMusic(false)
            pauseBackground()
            setIsFlipped(prev => !prev)
            setGameEnd(true)
        }
        
        if (arr.current.includes(x[0])) {
            setGameEnd(true)
            setPlayBackgroundMusic(false)
            pauseBackground()
        } else {
            
            setScore(prev => prev + 1)
            setIsFlipped(prev => !prev)
            useSound('click')
            arr.current.push(x[0])
        }
    }

    setTimeout(() => {
        if (isFlipped) setIsFlipped(false)
    }, 500)

    const style1 = {
        backgroundImage: (!isFlipped && !gameEnd) ? "none" : 'url(public/card-back.png)',
        transform: (isFlipped && !gameEnd) ? "rotateY(180deg)" : "rotateY(0deg)",
    }
    let style2 = {
        visibility: (isFlipped && !gameEnd) ? 'hidden' : 'visible',
    }

    if (gameEnd) {
        style2 = {
            visibility: 'hidden',
        }
    }

    const shuffledCards = pokCard.map(pokemon => {
        return (
            <div
                key={pokemon[0]}
                className="card-back"
                style={style1}
                onClick={() => {
                    handelGame(clickedPokemon, pokemon)
                }}
            >
                <div className="card" style={style2}>
                    <img className="pokemon_img" src={pokemon[1]} />
                    <h1>{pokemon[0]}</h1>
                </div>
            </div>
        )
    })


    return (
        <>
            {/* <EndScreen/> */}
            {gameEnd && <EndScreen score={score}/>}
            <div key={score} className="score"><h1>Score {score}</h1></div>
            <div key={'card'} id="card">
                {shuffledCards}
            </div>
        </>
    )
}