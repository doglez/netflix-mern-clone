import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { Button, DialogContent, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getMovieDetails } from "../redux/reducers/tmdbReducers/movieDetailsSlice";
import {
    BootstrapDialog,
    BoxContentDescription,
} from "../ui-components/bgHome";
import BootstrapDialogTitle from "./BootstrapDialogTitle";
import LoadingPage from "./LoadingPage";
// import LoadingPage from "./LoadingPage";

interface IMovieDescription {
    movieID: number;
}

const MovieDescription: FC<IMovieDescription> = ({ movieID }) => {
    const dispatch = useAppDispatch();
    const movie = useAppSelector((state) => state.movieDetailsReducer);

    useEffect(() => {
        dispatch(getMovieDetails(movieID));
    }, [dispatch, movieID]);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
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
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth={false}
                scroll="body"
            >
                {!movie.backdrop_path ? (
                    <LoadingPage />
                ) : (
                    <>
                        <BootstrapDialogTitle
                            id="customized-dialog-title"
                            onClose={handleClose}
                            backdropPath={movie.backdrop_path}
                        >
                            <BoxContentDescription width={"45%"}>
                                <Typography variant="h4" gutterBottom>
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
                                <Typography variant="subtitle2" gutterBottom>
                                    {movie?.overview}
                                </Typography>
                            </BoxContentDescription>
                        </BootstrapDialogTitle>
                        <DialogContent
                            dividers
                            sx={{ backgroundColor: "black" }}
                        >
                            <Typography gutterBottom>
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros.
                            </Typography>
                            <Typography gutterBottom>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Vivamus sagittis lacus vel
                                augue laoreet rutrum faucibus dolor auctor.
                            </Typography>
                            <Typography gutterBottom>
                                Aenean lacinia bibendum nulla sed consectetur.
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Donec sed odio dui. Donec
                                ullamcorper nulla non metus auctor fringilla.
                            </Typography>
                        </DialogContent>
                    </>
                )}
            </BootstrapDialog>
        </>
    );
};

export default MovieDescription;
