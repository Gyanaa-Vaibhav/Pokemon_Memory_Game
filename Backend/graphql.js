import {buildSchema} from "graphql";
import getPokemonByID from "./db.js";

export const schema = buildSchema(`#graphql
    type Pokemon{
        id: String
        name: String
        image: String
    }
    
    type Query {
        getPokemon(id: Int!): Pokemon
        getMultiplePokemon(id:[ID!]!): [Pokemon]
    }
`)

export const rootValue = {
    getPokemon: async ({id}) => {
        const [pokemonData] = await getPokemonByID(id);
        return {
            id: pokemonData.id.toString(),
            name: pokemonData.name,
            image: pokemonData.image,
        }
    },
    getMultiplePokemon: async ({id}) => {
        const pokemonPromises = id.map(async i=>{
            const [data] = await getPokemonByID(Number(i)+4);
            return (data);
        })

        return await Promise.all(pokemonPromises);
    }
}