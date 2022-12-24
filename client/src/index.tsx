import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import { ThemeProvider } from "@mui/material";
import { themeDark } from "./themes/theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NODE_ENV } from "./config/Config";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (NODE_ENV === "production") {
    disableReactDevTools();
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={themeDark}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
