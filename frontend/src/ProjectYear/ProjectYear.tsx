import "./ProjectYear.css";
import React, {useState, useEffect} from "react";
import {getExperience, IProjects} from "../experience";
import {Translations} from "../i18n";
import {useParams} from "react-router-dom";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import {Error} from "../Error/Error";

interface IProps {
    t: Translations;
}

export const ProjectYear = ({t}: IProps) => {
    const [projects, setProjects] = useState<IProjects[] | null>(null);
    const {yearId} = useParams<{ yearId: string }>();

    useEffect(() => {
        if (yearId) {
            const yearIdNumber = parseInt(yearId, 10);
            const experiences =
                t.lang === "English" ? getExperience("fr") : getExperience("en");

            const universityYear = experiences.university.find(
                (year) => year.idYear === yearIdNumber
            );

            setProjects(universityYear?.projects || null);
        }
    }, [t, yearId]);

    if (!projects || projects.length === 0) {
        return <Error t={t} />;
    }

    const projectTimelineList = projects
        .slice(0)
        .map((project: IProjects) => (
            <TimelineItem key={project.id}>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            width: "1vh",
                            height: "1vh",
                            backgroundColor: "var(--link)",
                            border: ".5vh solid var(--link)",
                            boxShadow: "2px 2px 5px var(--weak-shadow)",
                        }}
                    />
                    <TimelineConnector
                        sx={{
                            backgroundColor: "var(--timeline)",
                            width: ".5vw",
                        }}
                    />
                </TimelineSeparator>
                <TimelineContent
                    sx={{
                        fontFamily: "unset",
                        fontSize: "unset",
                    }}
                >
                    <div className="center-items">
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
                            <a href={project.link} rel="noreferrer">
                                {project.linkDesc}
                            </a>
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
        ));

    const projectMobileList = projects
        .slice(0)
        .map((project: IProjects) => (
            <div key={project.id} className="center-items">
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
                    <a href={project.link} rel="noreferrer">
                        {project.linkDesc}
                    </a>
                </div>
            </div>
        ));

    return (
        <div>
            <div className="timeline-view">
                <Timeline position="alternate" sx={{ margin: 0 }}>
                    {projectTimelineList}
                </Timeline>
            </div>

            <div className="mobile-view">{projectMobileList}</div>
        </div>
    );
};