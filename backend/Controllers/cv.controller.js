import { default as CvService } from '../Services/cv.service.js';

export const getCVFr = (req, res) => {
    let service = new CvService();
    service.getCVFr((error, results) => {

        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}

export const getCVEn = (req, res) => {
    let service = new CvService();
    service.getCVEn((error, results) => {

        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}