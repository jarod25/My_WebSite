import "./ProjectYear.css";
import React, { useState, useEffect } from "react";
import {getExperience, IProjects} from "../experience";
import {Translations} from "../i18n";

interface IProps {
    t: Translations;
    yearId: number;
}

export const ProjectYear = ({ t, yearId }: IProps) => {
    const [projects, setProjects] = useState<IProjects[] | null>(null);

    useEffect(() => {
        const experiences =
            t.lang === "English" ? getExperience("fr") : getExperience("en");

        const universityYear = experiences.university.find(
            (year) => year.idYear === yearId
        );

        setProjects(universityYear?.projects || null);
    }, [t, yearId]);

    if (!projects || projects.length === 0) {
        return <div>Projets introuvables</div>;
    }

    return (
        <div className="projects-container">
            {projects.map((project) => (
                <div className="bubble" key={project.id}>
                    <h3 className="bubble-title">{project.title}</h3>
                    <div className="bubble-desc">
                        <p style={{ whiteSpace: "pre-wrap" }}>{project.descShort}</p>
                    </div>
                    <div className="bubble-skills-group">
                        {project.skills.map((skill, index) => (
                            <span className="bubble-skill" key={index}>
                {skill}
              </span>
                        ))}
                    </div>
                    <div className="link-container">
                        <a href={project.link} target="_blank" rel="noreferrer">
                            {project.linkDesc}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};