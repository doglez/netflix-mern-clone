import { Box, Skeleton, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { IMG_TMDB } from "../config/Config";
import { useAppDispatch } from "../hooks/redux-hooks";
import { ITrending } from "../interfaces/InterfacesTrending";
import { getMovieDetails } from "../redux/reducers/tmdbReducers/movieDetailsSlice";
import { getTvDetails } from "../redux/reducers/tmdbReducers/tvDetailsSlice";
import MovieDescription from "./MovieDescription";
import TvDescription from "./TvDescription";

interface IProgramCard {
    program: ITrending;
}

const ProgramCard: FC<IProgramCard> = ({ program }) => {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();

    const handleClickOpen = () => {
        setOpen(true);
        if (program.media_type === "movie") {
            dispatch(getMovieDetails(program.id));
        } else if (program.media_type === "tv") {
            dispatch(getTvDetails(program.id));
        }
    };

    return (
        <Box sx={{ width: 230, marginRight: 0.5, mb: 1 }}>
            {program ? (
                <>
                    <div
                        onClick={handleClickOpen}
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            style={{ width: 230, height: 118 }}
                            alt={program.title || program.name}
                            src={`${IMG_TMDB}/${program.backdrop_path}`}
                        />
                        <Box sx={{ pr: 2 }}>
                            <Typography
                                gutterBottom
                                variant="body2"
                                color="white"
                            >
                                {program.title || program.name}
                            </Typography>
                        </Box>
                    </div>
                    {program.media_type === "movie" ? (
                        <MovieDescription open={open} setOpen={setOpen} />
                    ) : (
                        <TvDescription open={open} setOpen={setOpen} />
                    )}
                </>
            ) : (
                <>
                    <Skeleton variant="rectangular" width={230} height={118} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ProgramCard;
