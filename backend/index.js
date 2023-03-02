const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
