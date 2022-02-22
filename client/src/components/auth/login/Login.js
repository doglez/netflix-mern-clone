import React from "react";
import FooterLogin from "../FooterLogin.js";
import FormLogin from "./FormLogin.js";
import NavLogin from "./NavLogin.js";

const Login = () => {
    return (
        <div>
            <NavLogin />
            <FormLogin />
            <FooterLogin />
        </div>
    );
};

export default Login;
