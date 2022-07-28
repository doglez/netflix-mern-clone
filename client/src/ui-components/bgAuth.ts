import { Box, styled } from "@mui/material";
import BgImgSignUp from "../assets/imgs/bgimg-signup.jpg";

export const BgSignUPBox = styled(Box)`
    background-image: url(${BgImgSignUp});
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
`;

export const BgSignUPBoxTransparent = styled(Box)(({ theme }) => ({
    background:
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(33,33,33,1) 50%, rgba(33,33,33,1) 50%, rgba(0,0,0,1) 100%)",
    backgroundRepeat: "no-repeat",
    opacity: 0.8,
    width: "100%",
    height: "100vh",
}));
