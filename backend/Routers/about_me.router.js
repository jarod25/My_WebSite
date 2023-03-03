const { AboutMeController } = require('../Controllers/about_me.controller');
const express = require('express');
const router = express.Router();

router.get('/', AboutMeController.getAboutMe);

module.exports = {
    AboutMeRouter: router
}