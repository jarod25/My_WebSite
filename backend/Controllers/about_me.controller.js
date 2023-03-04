import { default as AboutMeService } from '../Services/about_me.service.js';

export const getAboutMe = (req, res) => {
    let service = new AboutMeService();
    service.getAboutMe((error, results) => {
        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}