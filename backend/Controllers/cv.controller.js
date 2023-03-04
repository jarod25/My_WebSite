import { default as CvService } from '../Services/cv.service.js';

export const getCV = (req, res) => {
    let service = new CvService();
    service.getCV((error, results) => {

        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}