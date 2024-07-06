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

export const App = () => {
  const company: string = "Villepin IT";
  const ownerName: string = "Héloïse de Villepin";
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
      <Contact t={translate} availability={availability} />
      <Footer owner={ownerName} />
    </div>
  );
};