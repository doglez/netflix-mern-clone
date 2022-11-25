import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { ITrending } from "../interfaces/InterfacesTrending";
import { getTendrings } from "../redux/reducers/tmdbReducers/trendingSlice";
import ProgramCard from "./ProgramCard";

const ProgramCardList = () => {
    const dispatch = useAppDispatch();
    const datos = useAppSelector((state) => state.trendingReducer);
    const programs: ITrending[] = datos.results as [];

    useEffect(() => {
        dispatch(getTendrings());
    }, [dispatch]);

    const loading = false;

    return (
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(3)) : programs).map(
                (program: ITrending) => (
                    <ProgramCard program={program} key={program.id} />
                )
            )}
        </Grid>
    );
};

export default ProgramCardList;
