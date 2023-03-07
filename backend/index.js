import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import HomeRouter from './Routers/home.router.js';
import AboutMeRouter from './Routers/about_me.router.js';
import CVRouter from './Routers/cv.router.js';
import PortfolioRouter from './Routers/portfolio.router.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', HomeRouter);
app.use('/about_me', AboutMeRouter);
app.use('/cv', CVRouter);
app.use('/portfolio', PortfolioRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
