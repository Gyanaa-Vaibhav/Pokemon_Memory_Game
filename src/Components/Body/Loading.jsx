// Done
import React, { useState } from 'react'
import PropTypes from "prop-types";
import useSound from '../../Hooks/useSound'
import './Loading.css'

export default function Loading({ setPlayBackgroundMusic,setIsPlaying }) {

    const [change, setChange] = useState(false)
    const loading_style = { top: change && "2.5%" }
    const btnStyle = { opacity: change && '0' }

    return (
        <div
            className='loading'
            style={loading_style}
        >
            <h1
                onClick={() => {
                    useSound('click')
                }}
                className='header-title'>Pokemon Memory Game</h1>
            <p className='header-desc'>Score Point by clicking a different card after each shuffle</p>
            <button
                style={btnStyle}
                onClick={() => {
                    useSound('click')
                    useSound('start_game')
                    setPlayBackgroundMusic(true)
                    setChange(true)
                    setTimeout(() => {
                        setIsPlaying(true)
                    }, 2000)
                }} id='play-game'>Play Game</button>
        </div>
    )
}

Loading.propTypes = {
    isPlaying: PropTypes.bool,
    setPlayBackgroundMusic: PropTypes.func,
    setIsPlaying: PropTypes.func
}
