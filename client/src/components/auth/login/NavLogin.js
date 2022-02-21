import React from "react";
import NetflixLogo from "../../../assets/img/netflix-logo.svg";

const NavLogin = () => {
    return (
        <nav className="nav container py-3">
            <img
                src={NetflixLogo}
                alt="Netflix_Logo_RGB"
                className="logoNavbar"
            />
        </nav>
    );
};

export default NavLogin;
