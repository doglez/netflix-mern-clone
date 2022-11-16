import { Box } from "@mui/material";
import React, { useEffect } from "react";
import LandingProgram from "../../../components/LandingProgram";
import LoadingPage from "../../../components/LoadingPage";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { IMovies } from "../../../interfaces/Interfaces";
import { getTendrings } from "../../../redux/reducers/tmdbReducers/trendingSlice";

const HomeBrowse = () => {
    const dispatch = useAppDispatch();
    const datos = useAppSelector((state) => state.trendingReducer);
    const results: IMovies[] = datos.results as [];

    useEffect(() => {
        dispatch(getTendrings());
    }, [dispatch]);

    return (
        <Box
            sx={{
                backgroundColor: "black",
            }}
        >
            {!results[0] ? (
                <LoadingPage />
            ) : (
                <LandingProgram program={results[0]} />
            )}
        </Box>
    );
};

export default HomeBrowse;
