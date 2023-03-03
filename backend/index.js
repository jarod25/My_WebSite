const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { CVRouter } = require('./Routers/cv.router');
const { AboutMeRouter } = require('./Routers/about_me.router');
const { PortfolioRouter } = require('./Routers/portfolio.router');
require('dotenv').config();
PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/cv', CVRouter);
app.use('/about_me', AboutMeRouter);
app.use('/portfolio', PortfolioRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
