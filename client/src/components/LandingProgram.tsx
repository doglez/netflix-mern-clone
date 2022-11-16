import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React, { FC } from "react";
import { IMovies } from "../interfaces/Interfaces";
import { BgHomeBox } from "../ui-components/bgHome";
import "../assets/css/LandingProgram.css";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

interface ILandingProgram {
    program: IMovies;
}

const BoxContent = styled(Box)(({ theme }) => ({
    color: "white",
    paddingTop: "200px",
    marginLeft: "30px",
    width: "25%",
    [theme.breakpoints.down("md")]: {
        width: "50%",
        paddingTop: "200px",
    },
    [theme.breakpoints.down("sm")]: {
        marginLeft: "5px",
        width: "100%",
        paddingTop: "200px",
    },
}));

const LandingProgram: FC<ILandingProgram> = ({ program }) => {
    return (
        <BgHomeBox backdropPath={program?.backdrop_path}>
            <BoxContent>
                <Typography variant="h4" gutterBottom>
                    {program?.title}
                </Typography>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    className="truncate-overflow"
                >
                    {program?.overview}
                </Typography>
                <Stack spacing={2} direction="row">
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "white",
                            color: "black",
                            width: "140px",
                            height: "40px",
                        }}
                        className="button-effect"
                    >
                        <PlayArrow /> Play
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            width: "140px",
                            height: "40px",
                        }}
                    >
                        <InfoOutlined /> More Info
                    </Button>
                </Stack>
            </BoxContent>
        </BgHomeBox>
    );
};

export default LandingProgram;