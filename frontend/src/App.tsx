// src/App.tsx
import "./App.css";
import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Intro } from "./Intro/Intro";
import { Profile } from "./Profile/Profile";
import { BackToTop } from "./BackToTop/BackToTop";
import { Experience } from "./Experience/Experience";
import { Contact } from "./Contact/Contact";
import { Project } from "./Project/Project";
import { ProjectYear } from "./Project/ProjectYear/ProjectYear";
import { Error } from "./Error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import { LanguageProvider, LanguageContext } from './LanguageContext';

export const App = () => {
    const company: string = "Jarod KOHLER";
    const ownerName: string = "Jarod Kohler";
    const availability: boolean = true;

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <LanguageContext.Consumer>
                    {({ translate }) => (
                        <>
                            <Intro t={translate} />
                            <Profile t={translate} owner={ownerName} />
                            <Experience t={translate} />
                            <Contact t={translate} availability={availability} />
                        </>
                    )}
                </LanguageContext.Consumer>
            ),
        },
        {
            path: "/annee/:yearId",
            element: (
                <LanguageContext.Consumer>
                    {({ translate }) => <ProjectYear t={translate} />}
                </LanguageContext.Consumer>
            ),
        },
        {
            path: "/annee/:yearId/projet/:projectId",
            element: (
                <LanguageContext.Consumer>
                    {({ translate }) => <Project t={translate} />}
                </LanguageContext.Consumer>
            ),
        },
        {
            path: "/year/:yearId",
            element: (
                <LanguageContext.Consumer>
                    {({ translate }) => <ProjectYear t={translate} />}
                </LanguageContext.Consumer>
            ),
        },
        {
            path: "/year/:yearId/project/:projectId",
            element: (
                <LanguageContext.Consumer>
                    {({ translate }) => <Project t={translate} />}
                </LanguageContext.Consumer>
            ),
        },
        {
            path: "*",
            element: (
                <LanguageContext.Consumer>
                    {({ translate }) => <Error t={translate} />}
                </LanguageContext.Consumer>
            ),
        },
    ]);

    return (
        <LanguageProvider>
            <MantineProvider>
                <div>
                    <BackToTop />
                    <Header company={company} />
                    <RouterProvider router={router} />
                    <Footer owner={ownerName} />
                </div>
            </MantineProvider>
        </LanguageProvider>
    );
};
