import { PlayArrow } from "@mui/icons-material";
import { Button, DialogContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getCast } from "../redux/reducers/tmdbReducers/CastSlice";
import { setTvDetailsNull } from "../redux/reducers/tmdbReducers/tvDetailsSlice";
import { BootstrapDialog } from "../ui-components/bgHome";
import BootstrapDialogTitle from "./BootstrapDialogTitle";

interface ITvDescription {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TvDescription: FC<ITvDescription> = ({ open, setOpen }) => {
    const dispatch = useAppDispatch();
    const tv = useAppSelector((state) => state.tvDetailsReducer);
    const credits = useAppSelector((state) => state.CastReducer);
    const cast = credits.cast;
    const genres = tv.genres;
    const companies = tv.production_companies;

    useEffect(() => {
        if (tv.id !== null) {
            dispatch(getCast(tv?.id, "tv"));
        }
    }, [dispatch, tv.id]);

    const handleClose = () => {
        setOpen(false);
        dispatch(setTvDetailsNull());
    };

    return tv.backdrop_path === null ? (
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
                backdropPath={tv.backdrop_path}
            >
                <Box sx={{ padding: "250px 20px 20px" }}>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                    >
                        {tv?.name}
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
                                {tv?.vote_average === null
                                    ? ""
                                    : Math.round(tv?.vote_average * 10)}
                                {"% "}User Score
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom pr={1}>
                                {tv?.first_air_date === null
                                    ? ""
                                    : String(
                                          new Date(
                                              tv?.first_air_date
                                          ).getFullYear()
                                      )}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom pr={1}>
                                {tv?.number_of_seasons}{" "}
                                {tv?.number_of_seasons === 1
                                    ? "season"
                                    : "seasons"}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom pr={1}>
                                {tv?.number_of_episodes}{" "}
                                {tv?.number_of_episodes === 1
                                    ? "episode"
                                    : "episodes"}
                            </Typography>
                        </div>
                        <Typography variant="h5" gutterBottom>
                            {tv?.tagline}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            {tv?.overview}
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

export default TvDescription;
