import "./App.css";
import React, {useState} from "react";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import getTranslations from "./i18n";
import {Intro} from "./Intro/Intro";
import {Profile} from "./Profile/Profile";
import {BackToTop} from "./BackToTop/BackToTop";
import {Experience} from "./Experience/Experience";
import {Contact} from "./Contact/Contact";
import {Project} from "./Project/Project";
import {ProjectYear} from "./ProjectYear/ProjectYear";
import {Error} from "./Error/Error";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";

export const App = () => {
    const company: string = "Jarod KOHLER";
    const ownerName: string = "Jarod Kohler";
    const availability: boolean = true;
    let localCode: string = navigator.language;
    const [translate, setTranslate] = useState(getTranslations(localCode! || "fr"));

    const changeLanguage = (code: string) => {
        setTranslate(getTranslations(code));
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Intro t={translate} />
                    <Profile t={translate} owner={ownerName} />
                    <Experience t={translate} />
                    <Contact t={translate} availability={availability} />
                </>
            ),
        },
        {
            path: "/annee/:yearId",
            element: <ProjectYear t={translate}/>,
        },
        {
            path: "/annee/:yearId/projet/:projectId",
            element: <Project t={translate} />,
        },
        {
            path: "/year/:yearId",
            element: <ProjectYear t={translate} />,
        },
        {
            path: "/year/:yearId/project/:projectId",
            element: <Project t={translate}  />,
        },
        {
            path: "*",
            element: <Error t={translate} />
        }
    ]);

    return (
        <MantineProvider>
            <div>
                <BackToTop/>
                <Header company={company} t={translate} changeLanguage={changeLanguage} />
                <RouterProvider router={router}/>
                <Footer owner={ownerName}/>
            </div>
        </MantineProvider>

    );
};