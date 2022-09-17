import { Typography } from "@mui/material";
import React from "react";
import NavBarAuth from "../../../templates/auth/NavBarAuth";
import {
    SignContainerBox,
    SignContentBox,
} from "../../../ui-components/BoxContainer&Content";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPassword = () => {
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
                        Reset Password
                    </Typography>
                    <ResetPasswordForm />
                </SignContentBox>
            </SignContainerBox>
        </>
    );
};

export default ResetPassword;
