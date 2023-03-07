import { default as AboutMeService } from '../Services/about_me.service.js';

export const getAboutMeFr = (req, res) => {
    let service = new AboutMeService();
    service.getAboutMeFr((error, results) => {
        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}

export const getAboutMeEn = (req, res) => {
    let service = new AboutMeService();
    service.getAboutMeEn((error, results) => {
        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}