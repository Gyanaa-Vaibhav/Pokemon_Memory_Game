import React, { createContext, useState } from "react";

// Create a context
export const AppContext = createContext();

// Create a Provider component
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState("Ash Ketchum");
    const [level, setLevel] = useState(1);
    const [difficulty,setDifficulty] = useState(1);
    const [playBackgroundMusic, setPlayBackgroundMusic] = useState(false);
    const [flipping, setFlipping] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [score,setScore] = useState([]);
    const [prevLevel, setPrevLevel] = useState(1);

    return (
        <AppContext.Provider value={{
            user,
            level,
            score,
            setUser,
            setScore,
            flipping,
            setLevel,
            prevLevel,
            isFlipped,
            difficulty,
            setFlipping,
            setPrevLevel,
            setIsFlipped,
            setDifficulty,
            playBackgroundMusic,
            setPlayBackgroundMusic,
        }}>
            {children}
        </AppContext.Provider>
    );
};
