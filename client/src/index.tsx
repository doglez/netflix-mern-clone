import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import { ThemeProvider } from "@mui/material";
import { themeDark } from "./themes/theme";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={themeDark}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
