import { Box, Button } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import LenguageSelect from "../../../components/LenguageSelect";

const NavBarButtons = () => {
    return (
        <Box>
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
        </Box>
    );
};

export default NavBarButtons;
