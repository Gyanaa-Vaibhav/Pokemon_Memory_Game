import React, {useContext} from "react";
import Pokemon_Logo from '../../../assets/svg/Pokemon_Logo.svg'
import '../Styles/NavBar.css'
import {Link} from "react-router";
import useSound, {pauseBackground} from "../../../Hooks/useSound.jsx";
import {AppContext} from "../../context/AppContext.jsx";

export default function NavBar(){

    const [showLevels, setShowLevels] = React.useState(false)
    const [showDifficulty, setShowDifficulty] = React.useState(false)
    const{level, setLevel, difficulty, setDifficulty, playBackgroundMusic, setPlayBackgroundMusic } = useContext(AppContext);

    const levelStyles = {
        display: showLevels ? "flex" : "none"
    }

    const difficultyStyles = {
        display: showDifficulty ? "flex" : "none"
    }

    const levels = [1, 2, 3, 4, 5];
    const difficulties = [1, 2, 3];

    return(
        <div className="nav-bar">
            <Link to={'/home'} >
                <img
                    src={Pokemon_Logo}
                    alt="Pokemon Logo"
                    onClick={() => {
                        useSound('click')
                    }}
                />
            </Link>
            <div className="nav-items">
                <div
                    className='levels'
                    onMouseEnter={() => setShowLevels(!showLevels)}
                    onMouseLeave={() => setShowLevels(!showLevels)}
                >
                    Levels
                    <div
                        className='level-items'
                        style={levelStyles}
                    >
                        {levels.map((level) => (
                            <Link
                                key={level}
                                to={`/game?level=${level}&difficulty=${difficulty}`}
                                onClick={() => setLevel(level)}
                            >
                                Level {level}
                            </Link>
                        ))}
                    </div>
                </div>
                <div
                    className='difficulty'
                    onMouseEnter={() => setShowDifficulty(!showDifficulty)}
                    onMouseLeave={() => setShowDifficulty(!showDifficulty)}
                >
                    Difficulty
                    <div
                        className='difficulty-items'
                        style={difficultyStyles}
                    >
                        {difficulties.map((diff) => (
                            <Link
                                key={diff}
                                to={`/game?level=${level}&difficulty=${diff}`}
                                onClick={() => setLevel(diff)}
                            >
                                {diff === 1 ? 'Easy' : diff === 2 ? 'Medium' : 'Hard'}
                            </Link>
                        ))}
                    </div>
                </div>
                <Link to={"/leaderboard"}>Leaderboard</Link>
                <Link to={"/about"}>About</Link>
                <span
                    onClick={() => {
                        useSound('background_music')
                        setPlayBackgroundMusic(prev => !prev)
                        if (playBackgroundMusic) {
                            pauseBackground()
                        }
                    }}
                    className='music-icon'
                >
                    {playBackgroundMusic ?
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000">
                            <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"/></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000">
                            <path d="M792-56 56-792l56-56 736 736-56 56ZM560-514l-80-80v-246h240v160H560v166ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z"/></svg>
                    }

      </span>
            </div>
        </div>
    )
}