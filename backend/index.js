import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import HomeRouter from './Routers/home.router.js';
import AboutMeRouter from './Routers/about_me.router.js';
import CVRouter from './Routers/cv.router.js';
import PortfolioRouter from './Routers/portfolio.router.js';
import ContactRouter from './Routers/contact.router.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());

app.use('/home', HomeRouter);
app.use('/about', AboutMeRouter);
app.use('/cv', CVRouter);
app.use('/portfolio', PortfolioRouter);
app.use('/contact', ContactRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
