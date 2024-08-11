import "./ProjectYear.css";
import {useState, useEffect} from "react";
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
        window.location.href = "/#misc";
    };

    return (
        <div className="page title-header">
            <Grid2>
                <Grid2 lg={3}>
                    <Button className="back-button" onClick={backToProjects}>
                        &#8592; {t.backLink}
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