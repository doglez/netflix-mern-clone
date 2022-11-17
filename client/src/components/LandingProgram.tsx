import { Box, Button, Popper, Stack, styled, Typography } from "@mui/material";
import React, { FC, MouseEvent, useState } from "react";
import { IMovies } from "../interfaces/Interfaces";
import { BgHomeBox } from "../ui-components/bgHome";
import "../assets/css/LandingProgram.css";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import DetailesProgram from "./DetailesProgram";

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
    const [popper, setPopper] = useState<null | HTMLElement>(null);

    const handlePopper = (e: MouseEvent<HTMLElement>) => {
        setPopper(popper ? null : e.currentTarget);
    };

    const open = Boolean(popper);
    const id = open ? "simple-popper" : undefined;

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
                        aria-describedby={id}
                        type="button"
                        onClick={handlePopper}
                    >
                        <InfoOutlined /> More Info
                    </Button>
                    <Popper id={id} open={open} anchorEl={popper}>
                        <DetailesProgram
                            program={program}
                            handlePopper={handlePopper}
                        />
                    </Popper>
                </Stack>
            </BoxContent>
        </BgHomeBox>
    );
};

export default LandingProgram;
