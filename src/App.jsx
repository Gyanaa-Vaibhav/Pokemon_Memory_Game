import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Loading from './Components/Body/Loading'
import Game from './Components/Body/Game'
import usePokemonData from './Hooks/usePokemonData'
import useSound, { pauseBackground } from './Hooks/useSound'
import Footer from './Components/Footer/Footer'


function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [data, isLoading] = usePokemonData(8)
  const showGame = { display: isPlaying ? "block" : "none" }
  const [playBackgroundMusic, setPlayBackgroundMusic] = useState(false);

  return (
    <>
      <span
        onClick={() => {
          useSound('background_music')
          setPlayBackgroundMusic(prev => !prev)
          if (playBackgroundMusic) {
            pauseBackground()
          }
        }}
        className='music'
      >
        {playBackgroundMusic ?
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#000000"><path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" /></svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#000000"><path d="M792-56 56-792l56-56 736 736-56 56ZM560-514l-80-80v-246h240v160H560v166ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z" /></svg>
        }

      </span>
      {!isPlaying &&
        <Loading isPlaying={isPlaying} setPlayBackgroundMusic={setPlayBackgroundMusic} setIsPlaying={setIsPlaying} />
      }
      {
        <div style={showGame}>
          <Header />
          <Game data={data} setPlayBackgroundMusic={setPlayBackgroundMusic} />
        </div>
      }
      <Footer />
    </>
  )

}

export default App
