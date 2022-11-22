import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TMDB_URL, TOKEN_TMDB } from "../../../config/Config";
import { IMovieCast } from "../../../interfaces/InterfacesMovie";

const initialState: IMovieCast = {
    id: null,
    cast: null,
    success: null,
    status_code: null,
    status_message: null,
};

interface action {
    payload: IMovieCast;
    type: string;
}

const movieCastSlice = createSlice({
    name: "movieCastReducer",
    initialState,
    reducers: {
        getMovieCastSuccess: (state, action: action) => {
            state.id = action.payload.id;
            state.cast = action.payload.cast;
            state.success = null;
            state.status_code = null;
            state.status_message = null;
        },
        getMovieCastFail: (state, action: action) => {
            state.id = null;
            state.cast = null;
            state.success = action.payload.success;
            state.status_code = action.payload.status_code;
            state.status_message = action.payload.status_message;
        },
    },
});

export const getMovieCast =
    (params: number): any =>
    async (dispatch: any) => {
        await axios
            .get(`${TMDB_URL}/movie/${params}/credits?api_key=${TOKEN_TMDB}`)
            .then((r) => dispatch(getMovieCastSuccess(r.data)))
            .catch((e) => dispatch(getMovieCastFail(e.response.data)));
    };

export const { getMovieCastSuccess, getMovieCastFail } = movieCastSlice.actions;

export default movieCastSlice.reducer;
