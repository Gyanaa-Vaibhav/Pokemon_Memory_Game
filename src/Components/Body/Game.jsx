import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import useSound, { pauseBackground } from '../../Hooks/useSound'
import './Game.css'
import useShuffle from "../../Hooks/useShuffle";
import EndScreen from "./EndScreen";
import cardBack from '/card-back.png'


export default function Game({ data,  setPlayBackgroundMusic }) {    
    const clickedPokemon = useRef([])
    const [shuffle, pokCard] = useShuffle(data)
    const [score, setScore] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false)
    const [gameEnd, setGameEnd] = useState(false)



    function handelGame(arr, Pokemon) {
        if (score === 7) {
            setPlayBackgroundMusic(false)
            pauseBackground()
            setIsFlipped(prev => !prev)
            setGameEnd(true)
        }
        
        if (arr.current.includes(Pokemon[0])) {
            setGameEnd(true)
            setPlayBackgroundMusic(false)
            pauseBackground()
        } else {
            
            setScore(prev => prev + 1)
            setIsFlipped(prev => !prev)
            useSound('click')
            arr.current.push(Pokemon[0])
        }
    }

    setTimeout(() => {
        if (isFlipped) setIsFlipped(false)
    }, 500)

    const style1 = {
        backgroundImage: (!isFlipped && !gameEnd) ? "none" : `url(${cardBack})`,
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

    shuffle() // Shuffles Cards

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
                    <img alt={pokemon[0]} className="pokemon_img" src={pokemon[1]} />
                    <h1>{pokemon[0]}</h1>
                </div>
            </div>
        )
    })


    return (
        <main>
            {gameEnd && <EndScreen score={score}/>}
            <div key={score} className="score"><h1>Score {score}</h1></div>
            <div key={'card'} id="card">
                {shuffledCards}
            </div>
        </main>
    )
}

Game.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        sprites: PropTypes.shape({
            other: PropTypes.shape({
                'official-artwork': PropTypes.shape({
                    front_default: PropTypes.string.isRequired
                }).isRequired
            }).isRequired
        }).isRequired
    })).isRequired,
    setPlayBackgroundMusic: PropTypes.func.isRequired
};