import french from "./assets/locales/fr/translation.json";
import english from "./assets/locales/en/translation.json";

export interface Translations {
  welcome: string;
  lang: string;
  contactButton: string;

  intro1: string;
  intro2: string;
  intro3: string;

  profile: {
    fields: string;
    games: string;
    arts: string;
    sports: string;
    travels: string;
    cars: string;
    about: string;
    intro: string;
    passions: string;
    values: string;
  };

  experience: { title1: string; title2: string; title3: string };

  contact: {
    title: string;
    writeMe: string;
    mail: string;
    domain_name: string;
    callMe: string;
    phone: string;
    copyMail: string;
    copyPhone: string;
    errorCopy: string;
    available: string;
    notAvailable: string;
    socialNetworks: string;
    linkedInLink: string,
    githubLink: string
  };

  alt: {
    logo: string;
    picture: string;
    contact: string;
  };
}

const fr: Translations = french;
const en: Translations = english;

function getTranslations(language: string): Translations {
  switch (language) {
    case "fr":
      return fr;
    default:
      return en;
  }
}

export default getTranslations;
