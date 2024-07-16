import React, { useState } from "react";
import { Button, styled } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { Translations } from "../i18n";
import { ExpContent } from "../ExpContent/ExpContent";
import "./Experience.css";
import Grid2 from "@mui/material/Unstable_Grid2";

interface IProps {
  t: Translations;
}

export const Experience = ({ t }: IProps) => {
  const [value, setValue] = useState("work");

  const ButtonTab = styled(Button)<ButtonProps>(() => ({
    fontWeight: "700",
    backgroundColor: "inherit",
    color: "var(--theme-text)",
    border: 0,
    padding: "1vh 3vw",
    borderRadius: "7px",
    marginBottom: "6vh",
    "&.MuiButton-root": {
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: "var(--bg-clear)",
      },
    },
  }));

  const activeStyle: object = {
    color: "var(--link)",
    backgroundColor: "var(--theme-lighter-text)",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.name);
  };

  return (
    <div className="page experience">
      <div className="reverse-gradient">
        <Grid2 container margin={0} spacing={0} className="center-items">
          <Grid2 xs={12} sm={2} className="center-items">
            <ButtonTab
              name="work"
              onClick={handleClick}
              style={value === "work" ? activeStyle : undefined}
            >
              {t.experience.title1}
            </ButtonTab>
          </Grid2>
          <Grid2 xs={12} sm={2} className="center-items">
            <ButtonTab
              name="edu"
              onClick={handleClick}
              style={value === "edu" ? activeStyle : undefined}
            >
              {t.experience.title2}
            </ButtonTab>
          </Grid2>
          <Grid2 xs={12} sm={2} className="center-items">
            <ButtonTab
              name="misc"
              onClick={handleClick}
              style={value === "misc" ? activeStyle : undefined}
            >
              {t.experience.title3}
            </ButtonTab>
          </Grid2>
        </Grid2>

        <ExpContent t={t} val={value} />
      </div>
    </div>
  );
};