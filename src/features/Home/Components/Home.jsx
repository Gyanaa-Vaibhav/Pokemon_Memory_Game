import React, {useContext, useRef} from "react";
import '../Styles/Home.css'
import useSound from "../../../Hooks/useSound.jsx";
import {AppContext} from "../../context/AppContext.jsx";
import {Link} from "react-router";

export default function Home() {
    const playingSound = useRef(false)
    const {level,difficulty} = useContext(AppContext)
    localStorage.setItem('score', JSON.stringify([]));


    return(
        <div className="main-screen">
            <div className="welcome">
                <h1>Welcome PokéFans</h1>
                <img
                    onClick={() => {
                        if (!playingSound.current) {
                            playingSound.current = true
                            useSound('pikachu')
                            setTimeout(() => playingSound.current = false, 2000)
                        }
                    }}
                    src="./Images/pikachu.png" alt="pikachu" className='pikachu-img'
                />
                <p>To a fun little Pokemon Memorisation Game to keep the Rusty old memory intact </p>
            </div>
            <div className="rules">
                <h2>The Rules</h2>
                <div className="rules-info">
                    <p>You will be given cards that you have to memorise and click them as you do they flip and reorder
                        themselves each click.</p>
                    <p>As the levels progress’s the number of cards increase</p>
                    <p>Ramp up the difficulty if you feel it is easy</p>
                </div>
                <Link
                    className="start-game"
                    onClick={() => {useSound('click')}}
                    to={`/game?level=${level}&difficulty=${difficulty}`}
                >
                    {`Start Game ->`}
                </Link>
            </div>
        </div>
    )
}
