import { amber, grey, lightBlue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const themeDark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: grey["800"],
            light: grey["700"],
            dark: grey["900"],
        },
        secondary: {
            main: red["700"],
            light: red["A200"],
            dark: red["900"],
        },
    },
});

export const themeLight = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: lightBlue["300"],
            light: lightBlue["100"],
            dark: lightBlue["800"],
        },
        secondary: {
            main: amber["400"],
            light: amber["200"],
            dark: amber["700"],
        },
    },
});
