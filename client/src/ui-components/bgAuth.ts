import { Box, styled } from "@mui/material";
import BgImgSignUp from "../assets/imgs/bgimg-signup.jpg";

export const BgSignUPBox = styled(Box)`
    background-image: url(${BgImgSignUp});
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
`;

export const BgSignUPBoxTransparent = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.bgImgAuth.main,
    backgroundRepeat: "no-repeat",
    opacity: "0.6",
    width: "100%",
    height: "100vh",
}));
