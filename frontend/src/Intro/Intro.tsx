import React from "react";
import "./Intro.css";
import { Translations } from "../i18n";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

interface IProps {
  t: Translations;
}

export const Intro = ({ t }: IProps) => {
  return (
    <div className="intro">
      <div className="half-gradient center-items">
        <div className="intro-text">
          <Grid2 container>
            <Grid2 md={6}></Grid2>
            <Grid2 md={6}>
              {t.intro1}
              <span style={{ color: "var(--important-text)" }}>{t.intro2}</span>
              {t.intro3}
            </Grid2>
          </Grid2>
        </div>
      </div>
    </div>
  );
};
