// src/App.tsx
import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { LanguageProvider, LanguageContext } from './LanguageContext';

import { FrontendLayout } from './FrontendLayout';
import { AdminLogin } from './Admin/AdminLogin';
import { AdminDashboard } from './Admin/AdminDashboard';

import { Intro } from "./Intro/Intro";
import { Profile } from "./Profile/Profile";
import { Experience } from "./Experience/Experience";
import { Contact } from "./Contact/Contact";
import { ProjectYear } from "./ProjectYear/ProjectYear";
import { Project } from "./Project/Project";
import { Error } from "./Error/Error";

export const App = () => {
    const company: string = "Jarod KOHLER";
    const ownerName: string = "Jarod Kohler";
    const availability: boolean = true;

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <FrontendLayout>
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
                </FrontendLayout>
            ),
        },
        {
            path: "/annee/:yearId",
            element: (
                <FrontendLayout>
                    <LanguageContext.Consumer>
                        {({ translate }) => <ProjectYear t={translate} />}
                    </LanguageContext.Consumer>
                </FrontendLayout>
            ),
        },
        {
            path: "/annee/:yearId/projet/:projectId",
            element: (
                <FrontendLayout>
                    <LanguageContext.Consumer>
                        {({ translate }) => <Project t={translate} />}
                    </LanguageContext.Consumer>
                </FrontendLayout>
            ),
        },
        {
            path: "/admin",
            element: <AdminLogin />  // Page de connexion pour l'admin
        },
        {
            path: "/admin/dashboard",  // Dashboard une fois connecté
            element: <AdminDashboard />
        },
        {
            path: "*",
            element: (
                <FrontendLayout>
                    <LanguageContext.Consumer>
                        {({ translate }) => <Error t={translate} />}
                    </LanguageContext.Consumer>
                </FrontendLayout>
            ),
        },
    ]);

    return (
        <LanguageProvider>
            <MantineProvider>
                <RouterProvider router={router} />
            </MantineProvider>
        </LanguageProvider>
    );
};
