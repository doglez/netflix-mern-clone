import { PlayArrow } from "@mui/icons-material";
import { Box, Button, DialogContent, Grid, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getMovieCast } from "../redux/reducers/tmdbReducers/movieCastSlice";
import { setMovieDetailsNull } from "../redux/reducers/tmdbReducers/movieDetailsSlice";
import { BootstrapDialog } from "../ui-components/bgHome";
import { timeToTextCalculation } from "../utilities/Calculations";
import BootstrapDialogTitle from "./BootstrapDialogTitle";

interface IMovieDescription {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieDescription: FC<IMovieDescription> = ({ open, setOpen }) => {
    const dispatch = useAppDispatch();
    const movie = useAppSelector((state) => state.movieDetailsReducer);
    const credits = useAppSelector((state) => state.movieCastReducer);
    const cast = credits.cast;
    const genres = movie.genres;
    const companies = movie.production_companies;

    useEffect(() => {
        if (movie.id !== null) {
            dispatch(getMovieCast(movie?.id));
        }
    }, [dispatch, movie.id]);

    const handleClose = () => {
        setOpen(false);
        dispatch(setMovieDetailsNull());
    };

    return movie.backdrop_path === null ? (
        <></>
    ) : (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            maxWidth={"md"}
            scroll="body"
        >
            <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
                backdropPath={movie.backdrop_path}
            >
                <Box sx={{ padding: "250px 20px 20px" }}>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                    >
                        {movie?.title}
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
            </BootstrapDialogTitle>
            <DialogContent dividers sx={{ backgroundColor: "black" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                width: "70%",
                                paddingTop: "16px",
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                pr={1}
                                color="green"
                            >
                                {movie?.vote_average === null
                                    ? ""
                                    : Math.round(movie?.vote_average * 10)}
                                {"% "}User Score
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom pr={1}>
                                {movie?.release_date === null
                                    ? ""
                                    : String(
                                          new Date(
                                              movie?.release_date
                                          ).getFullYear()
                                      )}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                {timeToTextCalculation(movie?.runtime)}
                            </Typography>
                        </div>
                        <Typography variant="h5" gutterBottom>
                            {movie?.tagline}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            {movie?.overview}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <span
                            style={{
                                fontSize: "0.9rem",
                                color: "#9e9e9e",
                                paddingTop: "16px",
                            }}
                        >
                            Cast:{" "}
                        </span>
                        {cast?.slice(0, 10).map((people) => (
                            <span
                                key={people.id}
                                style={{
                                    fontSize: "0.9rem",
                                }}
                            >
                                {people.name},{" "}
                            </span>
                        ))}
                        <br />
                        <br />
                        <span
                            style={{
                                fontSize: "0.9rem",
                                color: "#9e9e9e",
                                paddingTop: "16px",
                            }}
                        >
                            Genres:{" "}
                        </span>
                        {genres?.slice(0, 10).map((genre) => (
                            <span
                                key={genre.id}
                                style={{
                                    fontSize: "0.9rem",
                                }}
                            >
                                {genre.name},{" "}
                            </span>
                        ))}
                        <br />
                        <br />
                        <span
                            style={{
                                fontSize: "0.9rem",
                                color: "#9e9e9e",
                                paddingTop: "16px",
                            }}
                        >
                            Companies:{" "}
                        </span>
                        {companies?.slice(0, 10).map((companie) => (
                            <span
                                key={companie.id}
                                style={{
                                    fontSize: "0.9rem",
                                }}
                            >
                                {companie.name},{" "}
                            </span>
                        ))}
                    </Grid>
                </Grid>
            </DialogContent>
        </BootstrapDialog>
    );
};

export default MovieDescription;
