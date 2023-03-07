import fs from 'fs';
//const jsonFr = JSON.parse(fs.readFileSync('./data/jsonFr.json', 'utf8'));
//const jsonEn = JSON.parse(fs.readFileSync('./data/jsonEn.json', 'utf8'));

export default class PortfolioService {
    getProjectFr(callback) {
        return callback(null, "Jarod's portfolio page");
    }

    getProjectEn(callback) {
        return callback(null, "Jarod's portfolio page");
    }
}