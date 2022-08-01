import React from "react";
import NavBarAuth from "../../templates/auth/NavBarAuth";
import {
    BgSignUPBox,
    BgSignUPBoxTransparent,
} from "../../ui-components/bgAuth";
import FooterAuth from "../../templates/auth/FooterAuth";
import { Outlet } from "react-router-dom";

const Auth = () => {
    return (
        <>
            <BgSignUPBox>
                <BgSignUPBoxTransparent />
            </BgSignUPBox>
            <NavBarAuth />
            <Outlet />
            <FooterAuth />
        </>
    );
};

export default Auth;
