import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { LoginCrt } from "../../../redux/actions/auth-crt.js";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const FormLogin = (props) => {
    return (
        <div className="bg-landing">
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Please enter a valid email")
                        .required("Please enter a valid email"),
                    password: Yup.string()
                        .max(
                            60,
                            "Your password must contain between 4 and 60 characters."
                        )
                        .min(
                            4,
                            "Your password must contain between 4 and 60 characters."
                        )
                        .required(
                            "Your password must contain between 4 and 60 characters."
                        ),
                })}
                onSubmit={(values) => {
                    props.login(values);
                }}
            >
                <div className="d-flex">
                    <Form className="m-auto py-5 my-5">
                        <div className="card text-white bg-dark p-5">
                            <h2 className="card-title mb-4">Sign In</h2>
                            {props.authErrorReducer.success === false ? (
                                <div
                                    className="alert alert-danger"
                                    role="alert"
                                >
                                    {props.authErrorReducer.error}
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className="mb-3">
                                <Field
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    className="form-control is-invalid text-white bg-dark"
                                    required
                                />
                                <ErrorMessage
                                    name="email"
                                    className="text-warning invalid-feedback"
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control is-invalid text-white bg-dark"
                                    required
                                />
                                <ErrorMessage
                                    name="password"
                                    className="text-warning invalid-feedback"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-danger mb-3"
                            >
                                Submit
                            </button>
                            <div>
                                <span className="text-muted">
                                    New to Netflix?{" "}
                                </span>
                                <Link
                                    to="/register"
                                    className="text-decoration-none text-white"
                                >
                                    Sign up now.
                                </Link>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => ({
    authReducer: state.authReducer,
    authErrorReducer: state.authErrorReducer,
});

const mapDispatchToProps = (dispatch) => ({
    login: (loginData) => dispatch(LoginCrt(loginData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
