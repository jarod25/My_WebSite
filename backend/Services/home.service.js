import fs from 'fs';

const jsonFr = JSON.parse(fs.readFileSync('./data/jsonFr.json', 'utf8'));
const jsonEn = JSON.parse(fs.readFileSync('./data/jsonEn.json', 'utf8'));

export default class HomeService {
    getHomeFr(callback) {
        return callback(null, jsonFr.home);
    }

    getHomeEn(callback) {
        return callback(null, jsonEn.home);
    }
}