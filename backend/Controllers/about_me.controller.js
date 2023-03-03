const { AboutMeService } = require('../Services/about_me.service');


function getAboutMe(req, res) {
    AboutMeService.getAboutMe()
        .then((about_me) => {
            res.status(200).json(about_me);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

module.exports = {
    AboutMeController: {
        getAboutMe
    }
}