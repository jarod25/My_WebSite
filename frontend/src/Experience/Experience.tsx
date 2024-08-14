import React, {useEffect, useState} from "react";
import {Button, styled} from "@mui/material";
import {ButtonProps} from "@mui/material/Button";
import {Translations} from "../i18n";
import {ExpContent} from "../ExpContent/ExpContent";
import "./Experience.css";
import Grid2 from "@mui/material/Unstable_Grid2";

interface IProps {
    t: Translations;
}

export const Experience = ({t}: IProps) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        if (window.location.href.includes("#misc")) {
            setValue("misc");
            scrollToAnchor("misc")
        } else if (window.location.href.includes("#edu")) {
            setValue("edu");
            scrollToAnchor("edu")
        } else if (window.location.href.includes("#work")) {
            setValue("work");
            scrollToAnchor("work")
        } else {
            setValue("work");
        }
    }, []);

    const ButtonTab = styled(Button)<ButtonProps>(() => ({
        fontWeight: "700",
        backgroundColor: "inherit",
        color: "var(--theme-text)",
        border: 0,
        padding: "1vh 3vw",
        borderRadius: "7px",
        marginBottom: "6vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "7vh",
        "&.MuiButton-root": {
            "&:hover, &.Mui-focusVisible": {
                backgroundColor: "var(--bg-clear)",
            },
        },
        "@media (max-width: 768px)": {
            fontSize: "2vh",    // Réduit la taille du texte pour les petits écrans
            padding: "1.5vh 2vw", // Ajuste le padding pour plus de lisibilité
            marginBottom: "4vh", // Ajuste l'espacement inférieur
        },
        "@media (max-width: 480px)": {
            fontSize: "1.8vh", // Réduction supplémentaire de la taille du texte
            padding: "2vh 4vw", // Ajuste le padding pour s'adapter aux petits écrans
            marginBottom: "3vh",
        },
    }));


    const activeStyle: object = {
        color: "var(--link)",
        backgroundColor: "var(--theme-lighter-text)",
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setValue(e.currentTarget.name);
        window.location.href = `#${e.currentTarget.id}`;

        scrollToAnchor(e.currentTarget.id);
    };

    const scrollToAnchor = (val: any) => {
        const anchor = document.getElementById(val);
        if (anchor) {
            const yOffset = window.innerHeight * 0.1;
            const y = anchor.getBoundingClientRect().top + window.scrollY - yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <div className="page experience">
            <div className="reverse-gradient">
                <Grid2 container margin={0} spacing={2} className="center-items" justifyContent="center">
                    <Grid2 xs={12} sm={4} md={3} lg={2} className="center-items" id={"work"}>
                        <ButtonTab
                            name="work"
                            onClick={handleClick}
                            style={value === "work" ? activeStyle : undefined}
                            id={"work"}
                        >
                            {t.experience.title1}
                        </ButtonTab>
                    </Grid2>
                    <Grid2 xs={12} sm={4} md={3} lg={2} className="center-items" id={"edu"}>
                        <ButtonTab
                            name="edu"
                            onClick={handleClick}
                            style={value === "edu" ? activeStyle : undefined}
                            id={"edu"}
                        >
                            {t.experience.title2}
                        </ButtonTab>
                    </Grid2>
                    <Grid2 xs={12} sm={4} md={3} lg={2} className="center-items" id={"misc"}>
                        <ButtonTab
                            name="misc"
                            onClick={handleClick}
                            style={value === "misc" ? activeStyle : undefined}
                            id={"misc"}
                        >
                            {t.experience.title3}
                        </ButtonTab>
                    </Grid2>
                </Grid2>



                <ExpContent t={t} val={value}/>
            </div>
        </div>
    );
};
