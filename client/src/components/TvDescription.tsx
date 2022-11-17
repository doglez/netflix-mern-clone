import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { FC, MouseEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getTvDetails } from "../redux/reducers/tmdbReducers/tvDetailsSlice";
import { BgHomeBox } from "../ui-components/bgHome";
import LoadingPage from "./LoadingPage";

interface ITvDescription {
    tvID: number;
    handlePopper: (e: MouseEvent<HTMLElement>) => void;
}

const TvDescription: FC<ITvDescription> = ({ tvID, handlePopper }) => {
    const dispatch = useAppDispatch();
    const tv = useAppSelector((state) => state.tvDetailsReducer);

    useEffect(() => {
        dispatch(getTvDetails(tvID));
    }, [dispatch, tvID]);

    return (
        <Box
            sx={{
                backgroundColor: "black",
            }}
        >
            {!tv.backdrop_path ? (
                <LoadingPage />
            ) : (
                <BgHomeBox backdropPath={tv?.backdrop_path}>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            {tv?.name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            className="truncate-overflow"
                        >
                            {tv?.overview}
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

export default TvDescription;
