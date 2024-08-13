import React, {useEffect, useState} from "react";
import {Translations} from "../i18n";
import "./ExpContent.css";
import {getExperience, IEdu, IMisc, IWork} from "../experience";
import Grid2 from "@mui/material/Unstable_Grid2";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Button } from "@mui/material";

interface IProps {
    t: Translations;
    val: string;
}

export const ExpContent = ({t, val}: IProps) => {
    const [exp, setExp] = useState(getExperience("fr"));

    useEffect(() => {
        t.lang === "English" ? setExp(getExperience("fr")) : setExp(getExperience("en"));
    }, [t]);

    const workBubble = (exp: IWork) => {
        return (
            <div className="bubble">
                <h3 className="bubble-title">{exp.title}</h3>
                <div className=" center-items">
                    <Grid2 container className="bubble-details">
                        <Grid2 xs={12} sm={4.5}>
                            🏢 {exp.company}
                        </Grid2>
                        <Grid2 xs={8} sm={4.5}>
                            📍 {exp.place}
                        </Grid2>
                        <Grid2 xs={4} sm={3}>
                            🗓️ {exp.date}
                        </Grid2>
                    </Grid2>
                </div>
                <div className="bubble-desc">
                    <p style={{ whiteSpace: "pre-wrap" }}>{exp.desc}</p>
                </div>
                <div className="bubble-skills-group">
                    {exp.skills.map((skill, index) => (
                        <span className="bubble-skill" key={index}>
              {skill}
            </span>
                    ))}
                </div>
            </div>
        );
    };

    const eduBubble = (exp: IEdu) => {
        return (
            <div className="bubble">
                <h3 className="bubble-title">{exp.diploma}</h3>
                <div className="center-items">
                    <Grid2 container className="bubble-details">
                        <Grid2 xs={12} sm={4.5}>
                            🏢 {exp.name}
                        </Grid2>
                        <Grid2 xs={8} sm={4.5}>
                            📍 {exp.place}
                        </Grid2>
                        <Grid2 xs={4} sm={3}>
                            🗓️ {exp.date}
                        </Grid2>
                    </Grid2>
                </div>
                <div className="bubble-desc">
                    <p style={{ whiteSpace: "pre-wrap" }}>{exp.desc}</p>
                </div>
                <div className="bubble-skills-group">
                    {exp.skills.map((skill, index) => (
                        <span className="bubble-skill" key={index}>
              {skill}
            </span>
                    ))}
                </div>
            </div>
        );
    };

    const miscBubble = (exp: IMisc) => {
        return (
            <div className="bubble">
                <h3 className="bubble-title">{exp.title}</h3>
                <div className="center-items">
                    <Grid2 container className="bubble-details">
                        <Grid2 xs={12} sm={4.5}>
                            🏢 {exp.name}
                        </Grid2>
                        <Grid2 xs={8} sm={4}>
                            📍 {exp.place}
                        </Grid2>
                        <Grid2 xs={4} sm={3.5}>
                            🗓️ {exp.date}
                        </Grid2>
                    </Grid2>
                </div>
                <div className="bubble-desc">
                    <p style={{ whiteSpace: "pre-wrap" }}>{exp.desc}</p>
                </div>
                <div className="bubble-skills-group">
                    {exp.skills.map((skill, index) => (
                        <span className="bubble-skill" key={index}>
              {skill}
            </span>
                    ))}
                </div>
                <Button 
                    href={exp.link} 
                    sx={[{
                        bgcolor: "var(--theme-lighter-text)",
                        width:"50%",
                        height: "5vh",
                        margin:"2.5vh 25% 0 25%",
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
                    {exp.linkDesc}
                </Button>
            </div>
        );
    };

    const timelineList = (val === "work" ? exp.work : (val === "edu" ? exp.education : exp.miscellaneous))
        .slice(0)
        .reverse()
        .map((item: any) => (
            <TimelineItem key={item.id}>
                <TimelineSeparator>
                    <TimelineDot
                        sx={{
                            width: "1vh",
                            height: "1vh",
                            backgroundColor: "var(--link)",
                            border: ".5vh solid var(--link)",
                            borderRadius: "7px",
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
                        {val === "work" ? workBubble(item) : (val === "edu" ? eduBubble(item) : miscBubble(item))}
                    </div>
                </TimelineContent>
            </TimelineItem>
        ));

    const mobileList = (val === "work" ? exp.work : (val === "edu" ? exp.education : exp.miscellaneous))
        .slice(0)
        .reverse()
        .map((item: any) => (
            <div key={item.id} className="center-items">
                {val === "work" ? workBubble(item) : (val === "edu" ? eduBubble(item) : miscBubble(item))}
            </div>
        ));

    return (
        <div>
            <div className="timeline-view">
                <Timeline position="alternate" sx={{margin: 0}}>
                    {timelineList}
                </Timeline>
            </div>

            <div className="mobile-view">{mobileList}</div>
        </div>
    );
};
