import React from "react";
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
            <Outlet />
            <FooterAuth />
        </>
    );
};

export default Auth;
