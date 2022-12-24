import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TMDB_URL, TOKEN_TMDB } from "../../../config/Config";
import { consoleErr } from "../../../debugger/debugger";

interface IInitialState {
    page: number | null;
    results: [] | null;
    success: boolean | null;
    status_code: number | null;
    status_message: string | null;
}

const initialState: IInitialState = {
    page: 1,
    results: [],
    success: null,
    status_code: null,
    status_message: null,
};

const trendingSlice = createSlice({
    name: "trendingReducer",
    initialState,
    reducers: {
        getTendringsSuccess: (state, action) => {
            state.page = action.payload.page;
            state.results = action.payload.results;
            state.success = null;
            state.status_code = null;
            state.status_message = null;
        },
        getTendringsFail: (state, action) => {
            state.page = null;
            state.results = null;
            state.success = action.payload.success;
            state.status_code = action.payload.status_code;
            state.status_message = action.payload.status_message;
        },
    },
});

export const getTendrings = (): any => async (dispatch: any) => {
    await axios
        .get(`${TMDB_URL}/trending/all/day?api_key=${TOKEN_TMDB}`)
        .then((r) => {
            dispatch(getTendringsSuccess(r.data));
        })
        .catch((e) => {
            dispatch(getTendringsFail(e.response.data));
            consoleErr(e);
        });
};

export const { getTendringsSuccess, getTendringsFail } = trendingSlice.actions;

export default trendingSlice.reducer;
