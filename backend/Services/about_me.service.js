import fs from 'fs';

const jsonFr = JSON.parse(fs.readFileSync('./data/jsonFr.json', 'utf8'));
const jsonEn = JSON.parse(fs.readFileSync('./data/jsonEn.json', 'utf8'));

export default class AboutMeService {
    getAboutMeFr(callback) {
        return callback(null, jsonFr.about);
    }

    getAboutMeEn(callback) {
        return callback(null, jsonEn.about);
    }
}