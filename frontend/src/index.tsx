import React, {Suspense} from "react";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./index.css";
import {App} from "./App";
import "./i18n";
import {ColorSchemeScript} from '@mantine/core';

createRoot(document.getElementById("root")!)
.render(
    <React.StrictMode>
        <Suspense fallback={null}>
            <App/>
            <ColorSchemeScript/>
        </Suspense>
    </React.StrictMode>
);