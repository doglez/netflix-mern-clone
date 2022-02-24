import React from "react";
import { Link } from "react-router-dom";
import NetflixLogo from "../../../assets/img/netflix-logo.svg";

const NavRegister = () => {
    return (
        <nav className="nav container py-3">
            <img
                src={NetflixLogo}
                alt="Netflix_Logo_RGB"
                className="logoNavbar"
            />
            <ul className="nav nav-pills">
                <li className="nav-item mx-4">
                    <Link
                        to="/login"
                        className="btn btn-outline-light dropdown-toggle disabled"
                    >
                        <i className="bi bi-globe me-1" />
                        English
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="btn btn-danger px-4 ">
                        Sig In
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavRegister;
