import React from "react";
import Card from "../Components/Card.jsx";

export default function useFetch(numberOfPokemon){
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState([]);

    function shuffleArray(data) {
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        return data;
    }

    React.useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(false);
        setData([]);

        const fetchPokemon = async () => {
            try {
                const promises = [];
                const addedPokemon = [];
                for (let i = 1; i <= numberOfPokemon; i++) {
                    let pokeDexNumber = Math.floor(Math.random() * 1020) + 1;

                    if(addedPokemon.includes(pokeDexNumber)){
                        i--;
                        continue;
                    }

                    promises.push(
                        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeDexNumber}`)
                            .then((res) => res.json())
                            .then((data) => ({
                                index: i,
                                name: data.name,
                                image: data.sprites.other["official-artwork"].front_default,
                            }))
                    );
                    addedPokemon.push(pokeDexNumber);
                }

                const results = await Promise.all(promises);
                if (isMounted) setData(results)
            } catch (err) {
                if (isMounted) {
                    console.log(err);
                    setError(true);
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchPokemon()

        return () => {
            isMounted = false;
        };
    }, [numberOfPokemon]);

    return {loading, error, data, shuffleArray};
}