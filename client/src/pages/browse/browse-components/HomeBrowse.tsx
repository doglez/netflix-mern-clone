import { Box } from "@mui/material";
import React, { useEffect } from "react";
import LandingProgram from "../../../components/LandingProgram";
import LoadingPage from "../../../components/LoadingPage";
import SectionList from "../../../components/SectionList";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { ITrending } from "../../../interfaces/InterfacesTrending";
import { getTendrings } from "../../../redux/reducers/tmdbReducers/trendingSlice";

const HomeBrowse = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.trendingReducer);
    const results: ITrending[] = data.results as [];

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
                <>
                    <LandingProgram program={results[0]} />
                    <SectionList typeContent="Trending" />
                    <SectionList typeContent="Comedies" />
                </>
            )}
        </Box>
    );
};

export default HomeBrowse;
