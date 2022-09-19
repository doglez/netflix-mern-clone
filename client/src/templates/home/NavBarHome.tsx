import {
    AppBar,
    Box,
    Button,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import LenguageSelect from "../../components/LenguageSelect";
import { Link as RouterLink } from "react-router-dom";

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

const NavBarHome = () => {
    const pathSignUp: string = window.location.pathname;

    return (
        <AppBar color="transparent" elevation={0} position="absolute">
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ContainerToolbar>
                    <LogoText variant="h3" color="secondary">
                        Dogflix
                    </LogoText>
                    {pathSignUp === "/" ? (
                        <>
                            <LenguageSelect />
                            <Button
                                color="secondary"
                                variant="contained"
                                sx={{
                                    marginLeft: "10px",
                                    paddingTop: "9px",
                                    paddingBottom: "9px",
                                    textTransform: "none",
                                }}
                                component={RouterLink}
                                to="/signin"
                            >
                                Sing In
                            </Button>
                        </>
                    ) : null}
                </ContainerToolbar>
            </Box>
        </AppBar>
    );
};

export default NavBarHome;
