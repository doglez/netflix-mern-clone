import { Box, Dialog, styled } from "@mui/material";
import { IMG_TMDB } from "../config/Config";

export const BgHomeBox: any = styled(Box)(() => (props: any) => ({
    background: `url(${IMG_TMDB}/${props.backdropPath}) no-repeat top center`,
    backgroundSize: "cover",
    width: "100%",
    height: "90vh",
}));

// export const BgDescriptions: any = styled(Box)(() => (props: any) => ({
//     width: "100%",
//     color: "white",
//     background: `url(${IMG_TMDB}/${props.backdropPath}) no-repeat top center`,
//     backgroundSize: "cover",
//     position: "absolute",
//     top: "-360px",
//     left: "20%",
//     // transform: "traslate(-50%, -25%)",
// }));

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));
