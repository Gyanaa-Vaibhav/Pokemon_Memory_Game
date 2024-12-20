import pkg from 'pg'
import dotenv from 'dotenv'
dotenv.config()
const {Pool} = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_LOCALHOST,
    database: process.env.DB_DATABSE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

export default async function getPokemonByID(pokeDexNumber){
    const query =  `SELECT * FROM pokemon_data WHERE id=$1`
    const values = [pokeDexNumber]
    const {rows} = await pool.query(query,values);
    return rows
}

async function test(){
    const {rows} = await pool.query(`SELECT * FROM pokemon_data WHERE id=5`)
    console.log(rows)
}