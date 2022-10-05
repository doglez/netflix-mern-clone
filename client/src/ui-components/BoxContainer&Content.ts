import { Box, styled } from "@mui/material";

export const SignContainerBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -45%)",
    width: "450px",
    backgroundColor: "black",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));

export const SignContentBox = styled(Box)(({ theme }) => ({
    margin: "40px 70px",
    [theme.breakpoints.down("sm")]: {
        margin: "40px 40px",
    },
}));

export const HiddenDown: any = styled("div")(({ theme }) => (props: any) => ({
    display: "block",
    [theme.breakpoints.down(props.size)]: {
        display: "none",
    },
}));

export const DisplayUp: any = styled("div")(({ theme }) => (props: any) => ({
    display: "block",
    [theme.breakpoints.up(props.size)]: {
        display: "none",
    },
}));
