import "./App.css";
import React, { useState } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import getTranslations from "./i18n";
import { Intro } from "./Intro/Intro";
import { Profile } from "./Profile/Profile";
import { BackToTop } from "./BackToTop/BackToTop";
import { Experience } from "./Experience/Experience";
import { Contact } from "./Contact/Contact";
import { Project } from "./Project/Project";
import { ProjectYear } from "./ProjectYear/ProjectYear";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

export const App = () => {
  const company: string = "Jarod KOHLER";
  const ownerName: string = "Jarod Kohler";
  const availability: boolean = true;
  const [translate, setTranslate] = useState(getTranslations("fr"));

  const changeLanguage = (code: string) => {
    setTranslate(getTranslations(code));
  };

  return (
    <div>
      <BackToTop />
      <Header company={company} t={translate} changeLanguage={changeLanguage} />
      <Intro t={translate} />
      <Profile t={translate} owner={ownerName} />
      <Experience t={translate} />
      <ProjectYear t={translate} yearId={0} />
      <Project t={translate} projectId={0} />
      <Contact t={translate} availability={availability} />
      <Footer owner={ownerName} />
    </div>
  );
};