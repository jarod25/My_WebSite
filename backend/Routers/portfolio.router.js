import express from "express";
import { getAll } from "../Controllers/portfolio.controller.js";

const PortfolioRouter = express.Router();

PortfolioRouter.get("/", getAll);

export default PortfolioRouter;