import { Box, styled } from "@mui/material";
import { IMG_TMDB } from "../config/Config";

export const BgHomeBox: any = styled(Box)(() => (props: any) => ({
    background: `url(${IMG_TMDB}/${props.backdropPath}) no-repeat top center`,
    backgroundSize: "cover",
    width: "100%",
    height: "90vh",
}));
