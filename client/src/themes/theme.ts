import { grey, red } from "@mui/material/colors";
import {
    createTheme,
    PaletteColor,
    PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
        bgImgAuth: PaletteColor;
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        bgImgAuth?: PaletteColorOptions;
    }
}

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
        bgImgAuth: {
            main: "black",
        },
        text: {
            primary: grey[300],
        },
    },
});

export const themeLight = createTheme({
    palette: {
        mode: "light",
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
        bgImgAuth: {
            main: "black",
        },
    },
});
