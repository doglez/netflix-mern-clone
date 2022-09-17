import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavBarAuth from "../../../templates/auth/NavBarAuth";
import {
    SignContainerBox,
    SignContentBox,
} from "../../../ui-components/BoxContainer&Content";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
    return (
        <>
            <NavBarAuth />
            <SignContainerBox>
                <SignContentBox>
                    <Typography
                        color="white"
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            paddingBottom: "25px",
                        }}
                    >
                        Forgot Password
                    </Typography>
                    <ForgotPasswordForm />
                    <div style={{ paddingBottom: "40px" }} />
                    <Typography
                        color="primary.light"
                        variant="body1"
                        sx={{ fontWeight: "bold" }}
                    >
                        New to Netflix?{" "}
                        <Link
                            to="/signup"
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Sign up now
                        </Link>
                    </Typography>
                </SignContentBox>
            </SignContainerBox>
        </>
    );
};

export default ForgotPassword;
