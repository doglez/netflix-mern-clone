import {
    Box,
    Button,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    styled,
} from "@mui/material";
import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { Link as RouterLink } from "react-router-dom";

const NavMenuItemSpan = styled("span")`
    display: flex;
    align-items: center;
`;

const NavBarButtons = () => {
    const [lenguage, setLenguage] = useState("en");
    const handleChange = (e: SelectChangeEvent) => {
        setLenguage(e.target.value);
    };

    return (
        <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
                <Select
                    value={lenguage}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                >
                    <MenuItem value="en">
                        <NavMenuItemSpan>
                            <LanguageIcon /> English
                        </NavMenuItemSpan>
                    </MenuItem>
                    <MenuItem value="es">
                        <NavMenuItemSpan>
                            <LanguageIcon /> Español
                        </NavMenuItemSpan>
                    </MenuItem>
                </Select>
            </FormControl>
            <Button
                color="secondary"
                variant="contained"
                sx={{
                    marginLeft: "10px",
                    paddingTop: "9px",
                    paddingBottom: "9px",
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
