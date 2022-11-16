import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Box
                sx={{
                    height: "100px",
                    width: "100px",
                }}
            >
                <CircularProgress color="secondary" size="100px" />
            </Box>
        </Box>
    );
};

export default LoadingPage;
