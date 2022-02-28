import React from "react";
import { Link } from "react-router-dom";
import NetflixLogo from "../../../assets/img/netflix-logo.svg";
import AdultIcon from "../../../assets/img/adult.jpg";
import KidIcon from "../../../assets/img/kid.png";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { LogoutCrt } from "../../../redux/actions/auth-crt.js";

const NavTemplate = (props) => {
    const formik = useFormik({
        initialValues: { search: "" },
        onSubmit: (value) => {
            props.search(value);
        },
    });

    return (
        <div>
            <nav className="nav container py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item me-4">
                        <img
                            src={NetflixLogo}
                            alt="Netflix_Logo_RGB"
                            className="logoNavbar_home"
                        />
                    </li>
                    <li className="nav-item me-3 mt-1 mt-1">
                        <Link
                            to="/home"
                            className="text-decoration-none text-white"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item me-3 mt-1">
                        <Link
                            to="/tvshows"
                            className="text-decoration-none text-white"
                        >
                            TV Shows
                        </Link>
                    </li>
                    <li className="nav-item me-3 mt-1">
                        <Link
                            to="/movies"
                            className="text-decoration-none text-white"
                        >
                            Movies
                        </Link>
                    </li>
                    <li className="nav-item me-3 mt-1">
                        <Link
                            to="/latest"
                            className="text-decoration-none text-white"
                        >
                            New & Popular
                        </Link>
                    </li>
                    <li className="nav-item me-3 mt-1">
                        <Link
                            to="/my-list"
                            className="text-decoration-none text-white"
                        >
                            My List
                        </Link>
                    </li>
                </ul>
                <ul className="nav nav-pills">
                    <li className="nav-item me-3">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="input-group">
                                <button
                                    type="submit"
                                    className="bg-dark btn btn-outline-secondary"
                                >
                                    <i className="bi bi-search text-white bg-dark" />
                                </button>
                                <input
                                    id="search"
                                    name="search"
                                    className="text-white form-control bg-dark"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.search}
                                    placeholder="Titles, people, genres"
                                />
                            </div>
                        </form>
                    </li>
                    <li className="nav-item me-3 mt-1">
                        <Link
                            to="/kids"
                            className="text-white text-decoration-none ms-2"
                        >
                            Kids
                        </Link>
                    </li>
                    <li className="nav-item me-3">
                        <i className="bi bi-bell-fill text-white" />
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            to="/login"
                            className="dropdown-toggle text-decoration-none text-white"
                            data-bs-toggle="dropdown"
                            role="button"
                            aria-expanded="false"
                        >
                            <img
                                src={AdultIcon}
                                alt="AdultIcon"
                                className="profile-icon mt-1"
                            />
                        </Link>
                        <ul className="dropdown-menu bg-dark mt-3">
                            <li className="mt-2">
                                <Link
                                    to="/kids"
                                    className="text-white text-decoration-none ms-2"
                                >
                                    <img
                                        src={KidIcon}
                                        alt="AdultIcon"
                                        className="profile-icon mt-1"
                                    />{" "}
                                    <span className="mb-3">Kids</span>
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link
                                    to="/profile"
                                    className="text-white text-decoration-none ms-2"
                                >
                                    <i className="bi bi-pencil me-1" />
                                    Manage Profile
                                </Link>
                            </li>
                            <li className="mt-3">
                                <hr className="dropdown-divider bg-white" />
                            </li>
                            <li className="mt-2">
                                <Link
                                    to="/account"
                                    className="text-white text-decoration-none ms-2"
                                >
                                    <i className="bi bi-person me-1" />
                                    Account
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link
                                    to="/helpecenter"
                                    className="text-white text-decoration-none ms-2"
                                >
                                    <i className="bi bi-question-circle me-1" />
                                    Help Center
                                </Link>
                            </li>
                            <li className="mt-3">
                                <hr className="dropdown-divider bg-white" />
                            </li>
                            <li className="my-2">
                                <button
                                    className="text-white text-decoration-none ms-2"
                                    onClick={() => props.logout()}
                                >
                                    Sing Out Netflix
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => ({
    authReducer: state.authReducer,
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(LogoutCrt());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavTemplate);
