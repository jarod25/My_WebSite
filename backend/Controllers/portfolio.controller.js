import { default as Portfolio } from '../Services/portfolio.service.js';

export const getProjectFr = (req, res) => {
    let service = new Portfolio();
    service.getProjectFr((error, results) => {
        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}

export const getProjectEn = (req, res) => {
    let service = new Portfolio();
    service.getProjectEn((error, results) => {
        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}