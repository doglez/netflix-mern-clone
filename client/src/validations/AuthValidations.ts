import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

export const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required!"),
    password: Yup.string()
        .max(60, "Your password must contain between 4 and 60 characters.")
        .min(4, "Your password must contain between 4 and 60 characters.")
        .required("Password is required!"),
    passwordConfirm: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    ),
});

export const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required!"),
    password: Yup.string()
        .max(60, "Your password must contain between 4 and 60 characters.")
        .min(4, "Your password must contain between 4 and 60 characters.")
        .required("Password is required!"),
});

export const LandingPageSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required!"),
});
