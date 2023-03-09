import express from "express";
import {getContactEn, getContactFr} from "../Controllers/contact.controller.js";

const ContactRouter = express.Router();

ContactRouter.get("/fr", getContactFr);

ContactRouter.get("/en", getContactEn)

export default ContactRouter;