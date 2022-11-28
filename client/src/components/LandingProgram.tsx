import { Button, Stack, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { BgHomeBox, BoxContentDescription } from "../ui-components/bgHome";
import "../assets/css/LandingProgram.css";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import TvDescription from "./TvDescription";
import MovieDescription from "./MovieDescription";
import { ITrending } from "../interfaces/InterfacesTrending";
import { useAppDispatch } from "../hooks/redux-hooks";
import { getMovieDetails } from "../redux/reducers/tmdbReducers/movieDetailsSlice";

interface ILandingProgram {
    program: ITrending;
}

const LandingProgram: FC<ILandingProgram> = ({ program }) => {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();

    const handleClickOpen = () => {
        setOpen(true);
        if (program.media_type === "movie") {
            dispatch(getMovieDetails(program.id));
        }
    };

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
                    <Button
                        variant="contained"
                        sx={{
                            width: "140px",
                            height: "40px",
                        }}
                        type="button"
                        onClick={handleClickOpen}
                    >
                        <InfoOutlined />
                        More Info
                    </Button>
                    {program.media_type === "movie" ? (
                        <MovieDescription open={open} setOpen={setOpen} />
                    ) : (
                        <TvDescription tvID={program.id} />
                    )}
                </Stack>
            </BoxContentDescription>
        </BgHomeBox>
    );
};

export default LandingProgram;
