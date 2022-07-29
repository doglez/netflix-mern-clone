import {
    AppBar,
    Box,
    Container,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import NavBarButtons from "./NavBarButtons";

const LogoText = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        fontSize: "2.4rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.9rem",
    },
}));

const NavBarAuth = () => {
    const pathSignUp: string = window.location.pathname;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="transparent">
                <Container maxWidth="xl">
                    <Toolbar>
                        <LogoText
                            variant="h3"
                            sx={{ flexGrow: 1, fontWeight: "bold" }}
                            color="secondary"
                        >
                            Netflix
                        </LogoText>
                        {pathSignUp === "/signup" ? <NavBarButtons /> : null}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default NavBarAuth;
