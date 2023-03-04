import fs from 'fs';
//const json = JSON.parse(fs.readFileSync('./data/cv_fr.json', 'utf8'));

export default class CVService {
    getCV(callback) {
        return callback(null, "Jarod's CV page");
    }
}