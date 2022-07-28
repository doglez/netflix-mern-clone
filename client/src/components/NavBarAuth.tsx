import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import NavBarButtons from "./NavBarButtons";

const NavBarAuth = () => {
    const pathSignUp: string = window.location.pathname;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="transparent" enableColorOnDark>
                <Toolbar>
                    <Typography
                        variant="h4"
                        sx={{ flexGrow: 1 }}
                        color="secondary"
                    >
                        Netflix
                    </Typography>
                    {pathSignUp === "/signup" ? <NavBarButtons /> : null}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBarAuth;
