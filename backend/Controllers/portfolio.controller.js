import { default as Portfolio } from '../Services/portfolio.service.js';

export const getAll = (req, res) => {
    let service = new Portfolio();
    service.getAll((error, results) => {
        if (error) {
            return res.status(400)
                .send({success: 0, data: error});
        }
        return res.status(200).send(results);
    });
}