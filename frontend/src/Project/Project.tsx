import "./Project.css";
import React, {useState, useEffect} from "react";
import {getExperience, IProjects} from "../experience";
import {Translations} from "../i18n";
import {useParams} from "react-router-dom";
import {Error} from "../Error/Error";
import {Button} from "@mui/material";
import {LoadingScreen} from "../LoadingScreen/LoadingScreen";

interface IProps {
    t: Translations;
}

export const Project = ({t}: IProps) => {
    const [exp, setExp] = useState<IProjects | null>(null);
    const {yearId, projectId} = useParams<{ yearId: string; projectId: string }>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (yearId && projectId) {
            const yearIdNumber = parseInt(yearId, 10);
            const projectIdNumber = parseInt(projectId, 10);
            const experiences =
                t.lang === "English" ? getExperience("fr") : getExperience("en");

            const universityYear = experiences.university.find((univ) => univ.idYear === yearIdNumber);

            if (universityYear) {
                const project = universityYear.projects.find((proj) => proj.id === projectIdNumber);
                setExp(project || null);
            } else {
                setExp(null);
            }
            setIsLoading(false);
        }
    }, [t, yearId, projectId]);

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (!exp) {
        return <Error t={t}/>;
    }

    const backToPreviousPage = () => {
        window.history.back();
    }

    return (

        <div className="project-container">
            <Button className="project-back" onClick={backToPreviousPage}>
                <span>&#8592; {t.backLink}</span>
            </Button>
            <div className="project-header">
                <h1 style={{whiteSpace: "pre-wrap"}}>{exp.title}</h1>
                <p style={{whiteSpace: "pre-wrap"}}>{exp.descShort}</p>
            </div>

            <div className="project-description" style={{whiteSpace: "pre-wrap"}}>{exp.descFull}</div>

            {exp.content.map((content, i) => (
                <div key={i} className="project-content">
                    <div className="project-content-title" style={{whiteSpace: "pre-wrap"}}>{content.title}</div>
                    <div className="project-content-desc" style={{whiteSpace: "pre-wrap"}}>{content.desc}</div>

                    <div className="project-competences">
                        {content.competences.map((competence, j) => (
                            <div key={j} className="project-competence-item">
                                <div className="project-competence-title">
                                    <p style={{whiteSpace: "pre-wrap"}}>{competence.title}</p>
                                </div>
                                <div className="project-competence-desc">
                                    <p style={{whiteSpace: "pre-wrap"}}>{competence.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
