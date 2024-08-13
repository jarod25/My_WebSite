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
import {Button} from "@mui/material";
import {LoadingScreen} from "../LoadingScreen/LoadingScreen";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PeopleIcon from '@mui/icons-material/People';

interface IProps {
    t: Translations;
}

export const ProjectYear = ({ t }: IProps) => {
    const [projects, setProjects] = useState<IProjects[] | null>(null);
    const [universityYear, setUniversityYear] = useState<IUniv | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { yearId } = useParams<{ yearId: string }>();

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
            setIsLoading(false);
        }
    }, [t, yearId]);

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (!projects || projects.length === 0 || !universityYear) {
        return <Error t={t} />;
    }

    const projectList = (projects: IProjects) => {
        return (
            <div className="card">
                <h3 className="card-title">{projects.title}</h3>
                <Grid2 container className="project-details">
                    <Grid2 xs={12} sm={5}>
                        🏢 {projects.projectType}
                    </Grid2>
                    <Grid2 xs={8} sm={3.5}>
                        🗓️ {projects.duration}
                    </Grid2>
                    <Grid2 xs={4} sm={3.5}>
                        <PeopleIcon sx={{fontSize: "1.5rem", margin: "0 0 -.25rem"}}/>  {projects.nbPeople}
                </Grid2>
            </Grid2>
        <div className="card-desc">
            <p style={{whiteSpace: "pre-wrap"}}>{projects.descShort}</p>
        </div>
        <div className="card-skills-group">
            {projects.skills.map((skill, index) => (
                <span className="card-skill" key={index}>
                            {skill}
                        </span>
            ))}
        </div>
        <div className="link-container">
            <Button 
                href={projects.link}
                sx={[{
                    bgcolor: "var(--theme-lighter-text)",
                    width:"100%",
                    height: "5vh",
                    margin: "2.5vh 25% 0 25%",
                    borderRadius: "7px",
                    color: "var(--important-text)!important",
                },
                (theme) => ({
                    '&:hover': {
                    color: "var(--important-text)!important",
                    border:"2px solid var(--theme-lighter-text)",
                    margin: "2.25vh 25% -.25vh 25%",
                    height: "5.5vh",
                    },
                }),
                        ]}>
                        {projects.linkDesc}
                    </Button>
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
        window.location.href = "/#misc";
    };

    return (
        <div className="page title-header">
            <Grid2>
                <Grid2 lg={3}>
                    <Button 
                        onClick={backToProjects}
                        sx={{
                            margin: "0 0 -2vw 3vw"
                        }}
                    >
                        {t.backLink}
                    </Button>
                </Grid2>
                <Grid2  lg={9} className="center-items"><h2>{universityYear.title}</h2></Grid2>
                <Grid2  lg={12} className="center-items" style={{textAlign: 'center'}}><h4>{universityYear.desc}</h4></Grid2>
            </Grid2>

            <div className="project-year">
                <div className="gradient">

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