import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../templates/pages/NavBarBrowse";

const Kids = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default Kids;
