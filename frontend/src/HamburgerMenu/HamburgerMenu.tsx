import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import "./HamburgerMenu.css";
import { Translations } from "../i18n";
import TranslateIcon from "@mui/icons-material/Translate";
import CallIcon from "@mui/icons-material/Call";

interface IProps {
  t: Translations;
  changeCode: () => void;
  goToContact: (
    e: React.MouseEvent<HTMLButtonElement>,
    closeDrawer?: () => void
  ) => void;
}

export const HamburgerMenu = ({ t, changeCode, goToContact }: IProps) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    return toggle;
  };

  const handleButtons = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.currentTarget.name === "lang") changeCode();
    else {
      goToContact(e, handleClick);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className={toggle ? "btn active" : "btn not-active"}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <Drawer
        anchor="right" //from which side the drawer slides in
        variant="temporary" //if and how easily the drawer can be closed
        open={toggle} //if open is true, drawer is shown
        onClose={handleClick} //function that is called when the drawer should close
        // onOpen={true} //function that is called when the drawer should open
      >
        <Box className="test center-items">
          <div
            onClick={handleClick}
            className={toggle ? "btn-mini active" : "btn-mini not-active"}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <Button
            onClick={handleButtons}
            name={"contact"}
            endIcon={<CallIcon />}
            sx={{
              width: "30vw",
              color: "var(--theme-text)",
              fontWeight: "bold",
              fontSize: "calc(1.4vh + 0.5vmin);",
            }}
          >
            {t.contactButton}
          </Button>
          <Button
            onClick={handleButtons}
            name={"lang"}
            endIcon={<TranslateIcon />}
            sx={{
              width: "30vw",
              color: "var(--theme-text)",
              fontWeight: "bold",
              fontSize: "calc(1.4vh + 0.5vmin);",
            }}
          >
            {t.lang}
          </Button>
        </Box>
      </Drawer>
    </div>
  );
};
