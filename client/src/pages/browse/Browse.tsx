import { styled } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBarBrowse from "../../templates/pages/NavBarBrowse";

const DivResponsive = styled("div")(({ theme }) => ({
    paddingTop: "63px",
    [theme.breakpoints.down("sm")]: {
        paddingTop: "56px",
    },
}));

const Browse = () => {
    return (
        <>
            <NavBarBrowse />
            <DivResponsive />
            <Outlet />
        </>
    );
};

export default Browse;
