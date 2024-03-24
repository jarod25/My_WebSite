import {Express, Request, Response} from "express";
import express from 'express';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();
require('./Utils/db-create');

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.get('/', (req: Request, res: Response): void => {
    res.send('Hello World!');
});

app.listen(port, (): void => {
    console.log(`Server start on http://localhost:${port}`);
});
