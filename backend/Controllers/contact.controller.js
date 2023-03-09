import {default as Contact} from '../Services/contact.service.js';

export const getContactFr = (req, res) => {
    let service = new Contact();
    service.getContactFr((error, results) => {

        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}

export const getContactEn = (req, res) => {
    let service = new Contact();
    service.getContactEn((error, results) => {

        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}