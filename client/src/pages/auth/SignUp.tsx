import { Box, styled } from "@mui/material";
import React from "react";
import NavBarAuth from "../../components/NavBarAuth";
import {
    BgSignUPBox,
    BgSignUPBoxTransparent,
} from "../../ui-components/bgAuth";

const LandingBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SignUp = () => {
    return (
        <BgSignUPBox>
            <BgSignUPBoxTransparent />
            <NavBarAuth />
            <LandingBox>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                minima quo repudiandae quod tenetur laboriosam rem voluptatum,
                doloremque dolor laudantium excepturi, dicta optio sunt
                assumenda? Quaerat rerum voluptatum architecto dolore.
            </LandingBox>
        </BgSignUPBox>
    );
};

export default SignUp;
