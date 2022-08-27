import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavBarAuth from "../../../templates/auth/NavBarAuth";
import {
    SignContainerBox,
    SignContentBox,
} from "../../../ui-components/BoxContainer&Content";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
    return (
        <>
            <NavBarAuth />
            <SignContainerBox>
                <SignContentBox>
                    <Typography
                        color="white"
                        variant="h4"
                        sx={{ fontWeight: "bold", paddingBottom: "25px" }}
                    >
                        Sign Up
                    </Typography>
                    <SignUpForm />
                    <div style={{ paddingBottom: "20px" }} />
                    <Typography
                        color="primary.light"
                        variant="body1"
                        sx={{ fontWeight: "bold" }}
                    >
                        Do you have a accout?{" "}
                        <Link
                            to="/signin"
                            style={{ color: "white", textDecoration: "none" }}
                        >
                            Sing In
                        </Link>
                    </Typography>
                </SignContentBox>
            </SignContainerBox>
        </>
    );
};

export default SignUp;
