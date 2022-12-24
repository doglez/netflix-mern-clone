import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authSlice from "./reducers/authReducers/authSlice";
import CastSlice from "./reducers/tmdbReducers/CastSlice";
import movieDetailsSlice from "./reducers/tmdbReducers/movieDetailsSlice";
import trendingSlice from "./reducers/tmdbReducers/trendingSlice";
import tvDetailsSlice from "./reducers/tmdbReducers/tvDetailsSlice";
import { NODE_ENV } from "../config/Config";

const store = configureStore({
    reducer: {
        authReucer: authSlice,
        trendingReducer: trendingSlice,
        movieDetailsReducer: movieDetailsSlice,
        CastReducer: CastSlice,
        tvDetailsReducer: tvDetailsSlice,
    },
    middleware: [thunk],
    devTools: NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
