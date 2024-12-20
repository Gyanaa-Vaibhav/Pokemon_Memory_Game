import {buildSchema} from "graphql";
import getPokemonByID from "./db.js";

export const schema = buildSchema(`
    type Pokemon{
        id: String
        name: String
        image: String
    }
    
    type Query {
        getPokemon(id: Int!): Pokemon
    }
`)

export const rootValue = {
    getPokemon: async ({id}) => {
        const [pokemonData] = await getPokemonByID(id);
        console.log(pokemonData.id);
        return {
            id: pokemonData.id.toString(),
            name: pokemonData.name,
            image: pokemonData.image,
        }
    },
}