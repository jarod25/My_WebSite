import {Request, Response} from "express";

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server start on http://localhost:${port}`);
});
