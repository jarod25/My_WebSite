import express from "express";
import { getAboutMe } from "../Controllers/about_me.controller.js";

const AboutMeRouter = express.Router();

AboutMeRouter.get("/", getAboutMe);

export default AboutMeRouter;