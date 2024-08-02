import "./Project.css";
import React, { useState, useEffect } from "react";
import { getExperience, IProjects } from "../experience";
import {Translations} from "../i18n";

interface IProps {
    t: Translations;
    projectId: number;
}

export const Project = ({ t, projectId }: IProps) => {
    const [exp, setExp] = useState<IProjects | null>(null);

    useEffect(() => {
        const experiences =
            t.lang === "English" ? getExperience("fr") : getExperience("en");

        const project = experiences.university
            .flatMap((univ) => univ.projects)
            .find((project) => project.id === projectId);

        setExp(project || null);
    }, [t, projectId]);

    if (!exp) {
        return <div>Projet introuvable</div>;
    }

    return (
        <div className="project-container">
            <div className="project-header">
                <h1>{exp.title}</h1>
                <p>{exp.descShort}</p>
            </div>

            <div className="project-description">{exp.descFull}</div>

            {exp.content.map((content, i) => (
                <div key={i} className="project-content">
                    <div className="project-content-title">{content.title}</div>
                    <div className="project-content-desc">{content.desc}</div>

                    <div className="project-competences">
                        {content.competences.map((competence, j) => (
                            <div key={j} className="project-competence-item">
                                <div className="project-competence-title">
                                    {competence.title}
                                </div>
                                <div className="project-competence-desc">
                                    {competence.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
