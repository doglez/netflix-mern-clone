import React from "react";
import NavBarAuth from "./auth-components/NavBarAuth";
import {
    BgSignUPBox,
    BgSignUPBoxTransparent,
} from "../../ui-components/bgAuth";

const SignIn = () => {
    return (
        <BgSignUPBox>
            <BgSignUPBoxTransparent />
            <NavBarAuth />
        </BgSignUPBox>
    );
};

export default SignIn;
