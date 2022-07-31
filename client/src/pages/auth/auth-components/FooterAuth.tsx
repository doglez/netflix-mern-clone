import { Box, Divider, styled, Typography } from "@mui/material";
import React from "react";
import LenguageSelect from "../../../components/LenguageSelect";

const ContentBox = styled(Box)(({ theme }) => ({
    width: "75%",
    margin: "60px 0",
}));

const FooterAuth = () => {
    return (
        <Box
            sx={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Divider
                sx={{
                    height: "0px",
                    border: "none",
                    borderTop: "7px solid",
                    borderColor: "primary.dark",
                }}
            />
            <ContentBox>
                <Typography variant="subtitle1" color="primary.light">
                    Questions? Call +1 (408) 514-5239 (USA)
                </Typography>
                <LenguageSelect />
                <Typography
                    variant="subtitle2"
                    color="primary.light"
                    sx={{ paddingTop: "20px" }}
                >
                    Doglez Netflix
                </Typography>
            </ContentBox>
        </Box>
    );
};

export default FooterAuth;
