import React, {useContext, useEffect, useState} from 'react'
import usePokemonData from './Hooks/usePokemonData'
import useSound, { pauseBackground } from './Hooks/useSound'
import {AppContext} from "./features/context/AppContext.jsx";


function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [data, isLoading] = usePokemonData(8)
  const showGame = { display: isPlaying ? "block" : "none" }
  const [playBackgroundMusic, setPlayBackgroundMusic] = useState(false);
  const { user,level } = useContext(AppContext);
  console.log(level)

  return (
    <>
        {!isPlaying &&
            <>
                <h1
                    onClick={() => {
                        useSound('click')
                    }}
                    className='header-title'>Pokemon Memory Game</h1>
                <p className='header-desc'>Improves Rusty Old Memory</p>
                <p className='header-desc'>Score Point by clicking a different card after each shuffle</p>
            </>
        }
        {
            <div style={showGame}>
            </div>
        }
    </>
  )

}

 export default App
