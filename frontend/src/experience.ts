import french from "./assets/locales/fr/experiences.json";
import english from "./assets/locales/en/experiences.json";

export interface IWork {
  id: number;
  title: string;
  date: string;
  place: string;
  company: string;
  desc: string;
  skills: string[];
}

export interface IEdu {
  id: number;
  diploma: string;
  place: string;
  name: string;
  date: string;
  desc: string;
  skills: string[];
}

export interface IMisc {
  id: number;
  title: string;
  place: string;
  link: string;
  linkDesc: string;
  date: string;
  desc: string;
  skills: string[];
}

export interface IExperiences {
  work: IWork[];
  education: IEdu[];
  miscellaneous: IMisc[];
}

const frExp: IExperiences = french;
const enExp: IExperiences = english;

export function getExperience(lang: string): IExperiences {
  if (lang === "fr") return frExp;
  else return enExp;
}
