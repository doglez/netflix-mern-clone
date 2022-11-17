import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { FC, MouseEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getMovieDetails } from "../redux/reducers/tmdbReducers/movieDetailsSlice";
import { BgHomeBox } from "../ui-components/bgHome";
import LoadingPage from "./LoadingPage";

interface IMovieDescription {
    movieID: number;
    handlePopper: (e: MouseEvent<HTMLElement>) => void;
}

const MovieDescription: FC<IMovieDescription> = ({ movieID, handlePopper }) => {
    const dispatch = useAppDispatch();
    const movie = useAppSelector((state) => state.movieDetailsReducer);

    useEffect(() => {
        dispatch(getMovieDetails(movieID));
    }, [dispatch, movieID]);

    return (
        <Box
            sx={{
                backgroundColor: "black",
            }}
        >
            {!movie.backdrop_path ? (
                <LoadingPage />
            ) : (
                <BgHomeBox backdropPath={movie?.backdrop_path}>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            {movie?.title}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            className="truncate-overflow"
                        >
                            {movie?.overview}
                        </Typography>

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
                    </Box>
                </BgHomeBox>
            )}
        </Box>
    );
};

export default MovieDescription;
