import React, { useState } from "react";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import TranslateIcon from "@mui/icons-material/Translate";
import "./Header.css";
import { Translations } from "../i18n";
import logo from "../assets/img/clear_logo.svg";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";

interface IProps {
  company: string;
  t: Translations;
  changeLanguage: (code: string) => void;
}

export const Header = ({ company, t, changeLanguage }: IProps) => {
  const [code, setCode] = useState("EN");

  const changeCode = () => {
    if (code === "FR") {
      changeLanguage("fr");
      setCode("EN");
    } else {
      changeLanguage("en");
      setCode("FR");
    }
  };

  const goToContact = (
    e: React.MouseEvent<HTMLButtonElement>,
    closeDrawer?: () => void
  ) => {
    const contactSection = document.getElementById("contactScroll")!;

    e.preventDefault();
    if (e.currentTarget.name === "contact" && closeDrawer) closeDrawer();

    window.scrollTo(0, contactSection.offsetTop);
  };

  return (
    <div>
      <div className="header">
        <span>
          <a href="/"><img src={logo} className="logo" alt={t.alt.logo}></img></a>
        </span>
        <span className="buttons timeline-view">
          <span className="space-buttons">
            <Button
              className="space-buttons"
              onClick={goToContact}
              endIcon={<CallIcon />}
              sx={{
                color: "var(--theme-text)",
                backgroundColor: "var(--link)",
                fontWeight: "bold",
                fontSize: "calc(1.4vh + 0.5vmin);",
              }}
            >
              {t.contactButton}
            </Button>
          </span>
          <span className="space-buttons">
            <Button
              className="space-buttons"
              onClick={changeCode}
              endIcon={<TranslateIcon />}
              sx={{
                color: "var(--theme-text)",
                fontWeight: "bold",
                fontSize: "calc(1.4vh + 0.5vmin);",
              }}
            >
              {t.lang}
            </Button>
          </span>
        </span>
        <div className="space-buttons mobile-view">
          <HamburgerMenu
            t={t}
            changeCode={changeCode}
            goToContact={goToContact}
          />
        </div>
      </div>
    </div>
  );
};
