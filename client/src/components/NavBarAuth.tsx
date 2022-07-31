import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import NavBarButtons from "./NavBarButtons";

const LogoText = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    fontWeight: "bold",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
        fontSize: "2.4rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.9rem",
    },
}));

const ContainerToolbar = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "90%",
    },
}));

const NavBarAuth = () => {
    const pathSignUp: string = window.location.pathname;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="transparent">
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ContainerToolbar>
                        <LogoText variant="h3" color="secondary">
                            Netflix
                        </LogoText>
                        {pathSignUp === "/signup" ? <NavBarButtons /> : null}
                    </ContainerToolbar>
                </Box>
            </AppBar>
        </Box>
    );
};

export default NavBarAuth;
