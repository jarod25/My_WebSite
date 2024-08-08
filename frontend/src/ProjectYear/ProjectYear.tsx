import "./ProjectYear.css";
import React, {useState, useEffect} from "react";
import {getExperience, IProjects, IUniv} from "../experience";
import {Translations} from "../i18n";
import {useParams} from "react-router-dom";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Timeline from "@mui/lab/Timeline";
import {Error} from "../Error/Error";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Button} from "@mui/material";

interface IProps {
    t: Translations;
}

export const ProjectYear = ({t}: IProps) => {
    const [projects, setProjects] = useState<IProjects[] | null>(null);
    const [universityYear, setUniversityYear] = useState<IUniv | null>(null);
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
            setUniversityYear(universityYear || null);
        }
    }, [t, yearId]);

    if (!projects || projects.length === 0 || !universityYear) {
        return <Error t={t}/>;
    }

    const projectList = (projects: IProjects) => {
        return (
            <div className="bubble">
                <h3 className="bubble-title">{projects.title}</h3>
                <div className="bubble-desc">
                    <p style={{whiteSpace: "pre-wrap"}}>{projects.descShort}</p>
                </div>
                <div className="bubble-skills-group">
                    {projects.skills.map((skill, index) => (
                        <span className="bubble-skill" key={index}>
                            {skill}
                        </span>
                    ))}
                </div>
                <div className="link-container">
                    <a href={projects.link} rel="noreferrer">
                        {projects.linkDesc}
                    </a>
                </div>
            </div>
        );
    }

    const timelineList = projects
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
                        {projectList(project)}
                    </div>
                </TimelineContent>
            </TimelineItem>
        ));

    const mobileList = projects
        .slice(0)
        .map((project: IProjects) => (
            <div key={project.id} className="center-items">
                {projectList(project)}
            </div>
        ));

    const backToProjects = () => {
        window.location.href = "/#projects";
    };

    return (
        <div className="page">
            <div className="margin-top"></div>
            <Button onClick={backToProjects}>
                {t.backLink}
            </Button>
            <div className="title-header">
                <Grid2 className="center-items" margin={0}>
                    <Grid2>
                        <Grid2 className="center-items">
                            <h3>{universityYear.title}</h3>
                        </Grid2>
                        {universityYear.desc}
                    </Grid2>
                </Grid2>
            </div>

            <div className="experience">
                <div className="reverse-gradient">

                    <div className="timeline-view">
                        <Timeline position="alternate" sx={{margin: 0}}>
                            {timelineList}
                        </Timeline>
                    </div>

                    <div className="mobile-view">{mobileList}</div>
                </div>
            </div>
        </div>
    );
};