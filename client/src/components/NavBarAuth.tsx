import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import NavBarButtons from "./NavBarButtons";

const NavBarAuth = () => {
    const pathSignUp: string = window.location.pathname;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="transparent">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography
                            variant="h3"
                            sx={{ flexGrow: 1, fontWeight: "bold" }}
                            color="secondary"
                        >
                            Netflix
                        </Typography>
                        {pathSignUp === "/signup" ? <NavBarButtons /> : null}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default NavBarAuth;
