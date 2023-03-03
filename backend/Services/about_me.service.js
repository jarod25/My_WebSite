const { AboutMeModels } = require('../Models/about_me.model');

function getAboutMe() {
    return AboutMeModels.getAboutMe();
}

module.exports = {
    AboutMeService: {
        getAboutMe
    }
}