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
    name: string;
    link: string;
    linkDesc: string;
    date: string;
    desc: string;
    skills: string[];
}

export interface IComp {
    title: string;
    desc: string;
}

export interface IContent {
    title: string;
    desc: string;
    competences: IComp[];
}

export interface IProjects {
    id: number;
    title: string;
    projectType: string;
    duration: string;
    nbPeople: string;
    descShort: string;
    skills: string[];
    content: IContent[];
    descFull: string;
    link: string;
    linkDesc: string;
}

export interface IUniv {
    idYear: number;
    title: string;
    desc: string;
    projects: IProjects[];
}

export interface IExperiences {
    work: IWork[];
    education: IEdu[];
    miscellaneous: IMisc[];
    university: IUniv[];
}

const frExp: IExperiences = french;
const enExp: IExperiences = english;

export function getExperience(lang: string): IExperiences {
    if (lang === "fr") return frExp;
    else return enExp;
}
