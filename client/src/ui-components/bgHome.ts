import { Box, Dialog, styled } from "@mui/material";
import { IMG_TMDB } from "../config/Config";

export const BgHomeBox: any = styled(Box)(() => (props: any) => ({
    background: `url(${IMG_TMDB}/${props.backdropPath}) no-repeat top center`,
    backgroundSize: "cover",
    width: "100%",
    height: "90vh",
}));

export const BgDescriptions: any = styled(Box)(() => (props: any) => ({
    color: "white",
    background: `url(${IMG_TMDB}/${props.backdropPath}) no-repeat top center`,
    backgroundSize: "cover",
}));

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

export const BoxContentDescription = styled(Box)(
    ({ theme }) =>
        (props?: any) => ({
            color: "white",
            paddingTop: "200px",
            marginLeft: "30px",
            width: props.width || "25%",
            [theme.breakpoints.down("md")]: {
                width: "75%",
                paddingTop: "200px",
            },
            [theme.breakpoints.down("sm")]: {
                marginLeft: "5px",
                width: "100%",
                paddingTop: "200px",
            },
        })
);
