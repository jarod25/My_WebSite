import express from "express";
import {getHomeEn, getHomeFr} from "../Controllers/home.controller.js";

const HomeRouter = express.Router();

HomeRouter.get("/fr", getHomeFr);

HomeRouter.get("/en", getHomeEn)

export default HomeRouter;