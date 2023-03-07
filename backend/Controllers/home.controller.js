import { default as HomeService } from '../Services/home.service.js';

export function getHomeFr() {
    let service = new HomeService();
    service.getHomeFr((error, results) => {

        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}

export function getHomeEn() {
    let service = new HomeService();
    service.getHomeEn((error, results) => {

        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}