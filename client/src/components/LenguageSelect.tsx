import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    styled,
} from "@mui/material";
import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";

const NavMenuItemSpan = styled("span")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        fontSize: "0.875rem",
    },
}));

const LenguageSelect = () => {
    const [lenguage, setLenguage] = useState("en");
    const handleChange = (e: SelectChangeEvent) => {
        setLenguage(e.target.value);
    };

    return (
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
    );
};

export default LenguageSelect;
