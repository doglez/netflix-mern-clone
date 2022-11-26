import { Button, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { BgHomeBox, BoxContentDescription } from "../ui-components/bgHome";
import "../assets/css/LandingProgram.css";
import { PlayArrow } from "@mui/icons-material";
import TvDescription from "./TvDescription";
import MovieDescription from "./MovieDescription";
import { ITrending } from "../interfaces/InterfacesTrending";

interface ILandingProgram {
    program: ITrending;
}

const LandingProgram: FC<ILandingProgram> = ({ program }) => {
    return (
        <BgHomeBox backdropPath={program?.backdrop_path}>
            <BoxContentDescription width={"50%"}>
                <Typography
                    variant={"h3"}
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                >
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
                    {program.media_type === "movie" ? (
                        <MovieDescription movieID={program.id} />
                    ) : (
                        <TvDescription tvID={program.id} />
                    )}
                </Stack>
            </BoxContentDescription>
        </BgHomeBox>
    );
};

export default LandingProgram;
