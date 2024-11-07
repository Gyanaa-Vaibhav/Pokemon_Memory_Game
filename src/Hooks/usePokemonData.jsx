// Done

import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function usePokemonData(number) {
    const [data, setData] = useState([])
    const [loopCounter, setloopCounter] = useState(1)
    const [isLoading, setisLoading] = useState(true)


    useEffect(() => {
        
        if (loopCounter <= number) {
            
            const pokemonId = Math.floor(Math.random() * 1000)+1
            
            useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, setData)
            
            setloopCounter(prev => prev + 1)
            if (loopCounter == number) {
                setisLoading(false)
            }
        }

    }, [loopCounter])

    return [data,isLoading]
}