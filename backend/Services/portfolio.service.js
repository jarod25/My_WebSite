import fs from 'fs';
//const json = JSON.parse(fs.readFileSync('./data/portfolio_fr.json', 'utf8'));

export default class PortfolioService {
    getAll(callback) {
        return callback(null, "Jarod's portfolio page");
    }
}