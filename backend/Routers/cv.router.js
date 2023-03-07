import express from "express";
import {getCVEn, getCVFr} from "../Controllers/cv.controller.js";

const CVRouter = express.Router();

CVRouter.get("/fr", getCVFr);

CVRouter.get("/en", getCVEn)

export default CVRouter;