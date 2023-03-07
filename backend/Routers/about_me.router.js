import express from "express";
import {getAboutMeEn, getAboutMeFr} from "../Controllers/about_me.controller.js";

const AboutMeRouter = express.Router();

AboutMeRouter.get("/fr", getAboutMeFr);

AboutMeRouter.get("/en", getAboutMeEn);

export default AboutMeRouter;