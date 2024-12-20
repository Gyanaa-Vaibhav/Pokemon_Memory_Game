import express from 'express';
import {graphqlHTTP} from "express-graphql";
import * as path from "node:path";
import url from "url";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import {schema,rootValue} from "./graphql.js";
import log from "eslint-plugin-react/lib/util/log.js";

const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const homeDir = path.join(__dirname, '..','..','html','Pokemon_Memory_Game');

app.use(cors())
app.use(express.json());
app.use(express.static(path.join(homeDir)));

app.get('/api',(req,res)=> {
    res.json({message: "Welcome to Pokemon Memory"});
})

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}));

app.get("*", (req, res) => {
    res.sendFile(path.join(homeDir,'index.html'));
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`);
})