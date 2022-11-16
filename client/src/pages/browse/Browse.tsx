import React from "react";
import { Outlet } from "react-router-dom";
import NavBarBrowse from "../../templates/pages/NavBarBrowse";

const Browse = () => {
    return (
        <>
            <NavBarBrowse />
            <div style={{ paddingTop: "60px" }} />
            <Outlet />
        </>
    );
};

export default Browse;
