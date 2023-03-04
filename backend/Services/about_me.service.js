import fs from 'fs';
//const json = fs.readFileSync('./data/about_me_fr.json');

export default class AboutMeService {
  getAboutMe(callback) {
    return callback(null, "Jarod's about me page");
  }
}