import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { RegisterCrt } from "../../../redux/actions/auth-crt.js";

YupPassword(Yup);

const FormRegister = (props) => {
    return (
        <div className="bg-landing">
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    passwordConfirm: "",
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(50, "The name can not be more than 50 characters")
                        .required("Please enter the name"),
                    email: Yup.string()
                        .email("Please enter a valid email")
                        .required("Please enter a valid email"),
                    phone: Yup.string()
                        .max(
                            50,
                            "The phone number can not be more than 50 characterss"
                        )
                        .required(
                            "The phone number can not be more than 50 characters"
                        ),
                    password: Yup.string()
                        .minSymbols(
                            1,
                            "Your password must contain at least one symbol"
                        )
                        .minNumbers(
                            1,
                            "Your password must contain at least one number"
                        )
                        .minUppercase(
                            1,
                            "Your password must contain at least one upper case"
                        )
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
                    passwordConfirm: Yup.string().oneOf(
                        [Yup.ref("password"), null],
                        "Passwords must match"
                    ),
                })}
                onSubmit={(values) => {
                    props.register(values);
                }}
            >
                <div className="d-flex">
                    <Form className="m-auto py-3">
                        <div className="card text-white bg-dark p-5">
                            <h2 className="card-title mb-4">Sign UP</h2>
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
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="form-control text-white bg-dark"
                                    required
                                />
                                <ErrorMessage
                                    name="name"
                                    className="text-warning invalid-feedback"
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    className="form-control text-white bg-dark"
                                    required
                                />
                                <ErrorMessage
                                    name="email"
                                    className="text-warning invalid-feedback"
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name="phone"
                                    type="text"
                                    placeholder="Phone"
                                    className="form-control text-white bg-dark"
                                    required
                                />
                                <ErrorMessage
                                    name="phone"
                                    className="text-warning invalid-feedback"
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control text-white bg-dark"
                                    required
                                />
                                <ErrorMessage
                                    name="password"
                                    className="text-warning invalid-feedback"
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    name="passwordConfirm"
                                    type="password"
                                    placeholder="Password Confirm"
                                    className="form-control text-white bg-dark"
                                    required
                                />
                                <ErrorMessage
                                    name="passwordConfirm"
                                    className="text-warning invalid-feedback"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-danger mb-3"
                            >
                                Submit
                            </button>
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
    register: (registerData) => dispatch(RegisterCrt(registerData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
