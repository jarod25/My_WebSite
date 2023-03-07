import express from "express";
import {getProjectEn, getProjectFr} from "../Controllers/portfolio.controller.js";

const PortfolioRouter = express.Router();

PortfolioRouter.get("/fr", getProjectFr);

PortfolioRouter.get("/en", getProjectEn)

export default PortfolioRouter;