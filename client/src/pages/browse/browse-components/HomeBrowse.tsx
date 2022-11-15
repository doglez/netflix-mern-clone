import React, { useEffect } from "react";
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

    return <div>HomeBrowse</div>;
};

export default HomeBrowse;
