import dotenv from "dotenv";
import express from "express";
import path from "path";

//dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get( "/", ( req, res ) => {
    res.end('deployed to heroku with love and husky - and its compiles before committing!')
});

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});