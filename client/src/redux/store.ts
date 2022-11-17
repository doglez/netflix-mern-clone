import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authSlice from "./reducers/authReducers/authSlice";
import movieDetailsSlice from "./reducers/tmdbReducers/movieDetailsSlice";
import trendingSlice from "./reducers/tmdbReducers/trendingSlice";
import tvDetailsSlice from "./reducers/tmdbReducers/tvDetailsSlice";

const store = configureStore({
    reducer: {
        authReucer: authSlice,
        trendingReducer: trendingSlice,
        movieDetailsReducer: movieDetailsSlice,
        tvDetailsReducer: tvDetailsSlice,
    },
    middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
