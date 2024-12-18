import React, {useContext, useEffect, useReducer, useRef, useState} from "react";
import '../Styles/Game.css'
import Loading from "../../Loading_Error/Components/Loading.jsx";
import Error from "../../Loading_Error/Components/Error.jsx";
import useFetch from "../Hooks/useFetch.js";
import { useSearchParams } from 'react-router-dom';
import Card from "./Card.jsx";
import Info from "./Info.jsx";
import Guide from "./Guide.jsx";
import Rules from "./Rules.jsx";
import {AppContext} from "../../context/AppContext.jsx";
import useSound from "../../../Hooks/useSound.jsx";

function reducer(state, action) {
    const { level, difficulty } = action;

    const modifier = difficulty === '1' ? 0 : difficulty === '2' ? 2 : 3;

    switch (level) {
        case '1':
            return {
                cards: 5 + modifier,
                gridStyle: { gridTemplateColumns: 'repeat(3, 1fr)' },
            };
        case '2':
            return {
                cards: 8 + modifier,
                gridStyle: { gridTemplateColumns: 'repeat(4, 1fr)' },
            };
        case '3':
            return {
                cards: 10 + modifier,
                gridStyle: { gridTemplateColumns: 'repeat(4, 1fr)' },
            };
        case '4':
            return {
                cards: 12 + modifier,
                gridStyle: { gridTemplateColumns: 'repeat(4, 1fr)' },
            };
        case '5':
            return {
                cards: 15 + modifier,
                gridStyle: { gridTemplateColumns: 'repeat(4, 1fr)' },
            };
        default:
            return state;
    }
}

export default function Game(){
    const [searchParams] = useSearchParams();
    const level = searchParams.get('level');
    const difficulty = searchParams.get('difficulty');

    const [shuffledData, setShuffledData] = useState([]);
    const [showInfo,setShowInfo] = useState(false);
    const [showGuide,setShowGuide] = useState(false);
    const [showRules,setShowRules] = useState(false);
    const [showNextLevel,setShowNextLevel] = useState(false);
    const [isClickable, setIsClickable] = useState(true);
    const prevLevel = useRef(1);

    const [state, dispatch] = useReducer(reducer, {level, difficulty});
    const { loading, error, data, shuffleArray } = useFetch(state.cards);
    const {score,setScore} = useContext(AppContext);

    useEffect(() => {
        const localScore = JSON.parse(localStorage.getItem('score'));
        const levelJump = JSON.parse(localStorage.getItem('levelJump'));
        if(localScore.length === 0) localStorage.setItem('levelJump', JSON.stringify(true));
        if(levelJump){
            setScore([]);
            localStorage.setItem('score', JSON.stringify([]));
            localStorage.setItem('levelJump', JSON.stringify(false));
        }
        setScore(prev => [...localScore]);
    },[level]);

    useEffect(() => {

        dispatch({level, difficulty });

        if (parseInt(level) - prevLevel.current > 1) {
            setScore([]);
        }
        prevLevel.current = Number(level);

    }, [level, difficulty]);


    useEffect(() => {
        if (data.length) {
            setShuffledData(data);
        }
    }, [data]);

    useEffect(() => {

        if(level === '1') localStorage.setItem('score', JSON.stringify([]));

        if(score.length === 5 && level === '1'){
            setShowNextLevel(true);
        }
        if(score.length === 13 && level === '2'){
            setShowNextLevel(true);
        }
        if(score.length === 23 && level === '3'){
            setShowNextLevel(true);
        }
        if(score.length === 35 && level === '4'){
            setShowNextLevel(true);
        }
        if(score.length === 50 && level === '5') {
            setShowNextLevel(true);
        }

    }, [score]);

    function handleFlip(index) {
        if (!isClickable) return;

        console.log(index);
        if (score.find((i) => i === index)) {
            localStorage.setItem('finalScore', JSON.stringify(score.length));
            localStorage.setItem('score', JSON.stringify([]));
            useSound('lose');
            window.location.href = `/game-over`;
        }

        setScore(prev => [...prev, index]);

        setIsClickable(false);

        setTimeout(() => {
            const shuffled = [...shuffledData];
            shuffleArray(shuffled);
            localStorage.setItem('score', JSON.stringify([...score, index]));
            setShuffledData(shuffled);
            setTimeout(()=>setIsClickable(true),1200)
        }, 500);


    }

    function handelNextLevel(){
        localStorage.setItem('score', JSON.stringify(score));
        localStorage.setItem('levelJump', JSON.stringify(false));

        const level = parseInt(searchParams.get('level')) + 1;
        window.location.href = `/game?level=${level}&difficulty=${difficulty}`;
    }

    if (loading) return <Loading />;
    if (error) return <Error />;
    if(showInfo) return <Info setShowInfo={setShowInfo}/>;
    if(showGuide) return <Guide setShowGuide={setShowGuide}/>;
    if(showRules) return <Rules setShowRules={setShowRules}/>;


    return (
        <>
            <div>
                <div className='game-desc-container'>
                    <p className='game-desc'>Level:{level}</p>
                    <p className='game-desc'>Difficulty:{difficulty}</p>
                    <p className='game-desc'>Score:{score.length}</p>
                </div>
                <div className='game-info-container'>
                    <p
                        className='game-info'
                        onClick={() => setShowInfo(true)}
                    >Info</p>
                    <p
                        className='game-info'
                        onClick={() => setShowGuide(true)}
                    >Guide</p>
                    <p
                        className='game-info'
                        onClick={() => setShowRules(true)}
                    >Rules</p>
                </div>
            </div>
            {showNextLevel &&
                <>
                    <div className="click-prevention-layer"></div>
                    <button className="next-level-button" onClick={handelNextLevel} >
                        Next Level
                    </button>
                </>
            }
            {!isClickable && <div className="click-prevention-layer"></div>}
            <div style={state.gridStyle} className={'game-screen'}>
                {shuffledData.map((p, index) => (
                    <Card key={index} image={p.image} id={p.name} name={p.name} handleFlip={handleFlip}/>
                ))}
            </div>
        </>
    )
}