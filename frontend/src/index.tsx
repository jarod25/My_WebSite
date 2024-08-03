import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App";
import "./i18n";
import {ColorSchemeScript} from '@mantine/core';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={null}>
            <App/>
            <ColorSchemeScript/>
        </Suspense>
    </React.StrictMode>,
    document.getElementById("root")
);
