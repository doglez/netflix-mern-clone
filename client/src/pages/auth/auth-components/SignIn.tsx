import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavBarAuth from "../../../templates/auth/NavBarAuth";
import SignInForm from "./SignInForm";

const ContainerBox = styled(Box)(({ theme }) => ({
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

const ContentBox = styled(Box)(({ theme }) => ({
    margin: "40px 70px",
    [theme.breakpoints.down("sm")]: {
        margin: "40px 40px",
    },
}));

const SignIn = () => {
    return (
        <>
            <NavBarAuth />
            <ContainerBox>
                <ContentBox>
                    <Typography
                        color="white"
                        variant="h4"
                        sx={{ fontWeight: "bold", paddingBottom: "25px" }}
                    >
                        Sign In
                    </Typography>
                    <SignInForm />
                    <div style={{ paddingBottom: "40px" }} />
                    <Typography
                        color="primary.light"
                        variant="body1"
                        sx={{ fontWeight: "bold" }}
                    >
                        New to Netflix?{" "}
                        <Link
                            to="/"
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Sign up now
                        </Link>
                    </Typography>
                </ContentBox>
            </ContainerBox>
        </>
    );
};

export default SignIn;
