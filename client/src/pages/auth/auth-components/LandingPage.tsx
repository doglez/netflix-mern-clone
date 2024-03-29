import { Box, styled, Typography } from "@mui/material";
import React from "react";
import NavBarAuth from "../../../templates/auth/NavBarAuth";
import LandingPageForm from "./LandingPageForm";

const TitleBox = styled(Box)(({ theme }) => ({
    width: "45%",
    [theme.breakpoints.down("md")]: {
        width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));

const TitleFont = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
    },
}));

const LandingPage = () => {
    return (
        <>
            <NavBarAuth />
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -35%)",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <TitleBox>
                        <TitleFont
                            variant="h3"
                            sx={{
                                textAlign: "center",
                                fontWeight: "bold",
                                paddingBottom: "5px",
                            }}
                        >
                            Unlimited movies, TV shows, and more.
                        </TitleFont>
                        <Typography
                            variant="h5"
                            sx={{ textAlign: "center", paddingBottom: "20px" }}
                        >
                            Watch anywhere. Cancel anytime.
                        </Typography>
                    </TitleBox>
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </Typography>
                    <LandingPageForm />
                </Box>
            </Box>
        </>
    );
};

export default LandingPage;
