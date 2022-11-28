import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TMDB_URL, TOKEN_TMDB } from "../../../config/Config";
import { ICast } from "../../../interfaces/InterfaceCast";

const initialState: ICast = {
    id: null,
    cast: null,
    success: null,
    status_code: null,
    status_message: null,
};

interface action {
    payload: ICast;
    type: string;
}

const CastSlice = createSlice({
    name: "CastReducer",
    initialState,
    reducers: {
        getCastSuccess: (state, action: action) => {
            state.id = action.payload.id;
            state.cast = action.payload.cast;
            state.success = null;
            state.status_code = null;
            state.status_message = null;
        },
        getCastFail: (state, action: action) => {
            state.id = null;
            state.cast = null;
            state.success = action.payload.success;
            state.status_code = action.payload.status_code;
            state.status_message = action.payload.status_message;
        },
    },
});

export const getCast =
    (id: number, mediaType: string): any =>
    async (dispatch: any) => {
        await axios
            .get(`${TMDB_URL}/${mediaType}/${id}/credits?api_key=${TOKEN_TMDB}`)
            .then((r) => dispatch(getCastSuccess(r.data)))
            .catch((e) => dispatch(getCastFail(e.response.data)));
    };

export const { getCastSuccess, getCastFail } = CastSlice.actions;

export default CastSlice.reducer;
