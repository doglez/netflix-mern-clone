import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React, { FC, MouseEvent, useState } from "react";
import { ITrending } from "../interfaces/InterfacesReducers";
import { BgHomeBox } from "../ui-components/bgHome";
import "../assets/css/LandingProgram.css";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import MovieDescription from "./MovieDescription";
import TvDescription from "./TvDescription";

interface ILandingProgram {
    program: ITrending;
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
    const [popperOpen, setPopperOpen] = useState<boolean>(false);

    const handlePopper = (e: MouseEvent<HTMLElement>) => {
        setPopperOpen(!popperOpen);
    };

    return (
        <BgHomeBox backdropPath={program?.backdrop_path}>
            <BoxContent>
                <Typography variant="h4" gutterBottom>
                    {program?.title || program?.name}
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
                        type="button"
                        onClick={handlePopper}
                    >
                        <InfoOutlined /> More Info
                    </Button>
                </Stack>
            </BoxContent>
            <div
                style={!popperOpen ? { display: "none" } : { display: "block" }}
            >
                {program.media_type === "movie" ? (
                    <MovieDescription
                        movieID={program.id}
                        handlePopper={handlePopper}
                    />
                ) : (
                    <TvDescription
                        tvID={program.id}
                        handlePopper={handlePopper}
                    />
                )}
            </div>
        </BgHomeBox>
    );
};

export default LandingProgram;
