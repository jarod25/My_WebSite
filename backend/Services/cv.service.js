import fs from 'fs';
//const jsonFr = JSON.parse(fs.readFileSync('./data/jsonFr.json', 'utf8'));
//const jsonEn = JSON.parse(fs.readFileSync('./data/jsonEn.json', 'utf8'));

export default class CVService {
    getCVFr(callback) {
        return callback(null, "Jarod's CV page");
    }

    getCVEn(callback) {
        return callback(null, "Jarod's CV page");
    }
}