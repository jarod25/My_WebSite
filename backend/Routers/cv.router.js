import express from "express";
import { getCV } from "../Controllers/cv.controller.js";

const CVRouter = express.Router();

CVRouter.get("/", getCV);

export default CVRouter;