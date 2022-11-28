import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TMDB_URL, TOKEN_TMDB } from "../../../config/Config";
import { IMovieDetails } from "../../../interfaces/InterfacesMovie";

const initialState: IMovieDetails = {
    adult: null,
    backdrop_path: null,
    belongs_to_collection: null,
    budget: null,
    genres: null,
    homepage: null,
    id: null,
    imdb_id: null,
    original_language: null,
    original_title: null,
    overview: null,
    popularity: null,
    poster_path: null,
    production_companies: null,
    production_countries: null,
    release_date: null,
    revenue: null,
    runtime: null,
    spoken_languages: null,
    status: null,
    tagline: null,
    title: null,
    video: null,
    vote_average: null,
    vote_count: null,
    success: null,
    status_code: null,
    status_message: null,
};

interface action {
    payload: IMovieDetails;
    type: string;
}

const movieDetailsSlice = createSlice({
    name: "movieDetailsReducer",
    initialState,
    reducers: {
        getMovieDetailsSuccess: (state, action: action) => {
            state.adult = action.payload.adult;
            state.backdrop_path = action.payload.backdrop_path;
            state.belongs_to_collection = action.payload.belongs_to_collection;
            state.budget = action.payload.budget;
            state.genres = action.payload.genres;
            state.homepage = action.payload.homepage;
            state.id = action.payload.id;
            state.imdb_id = action.payload.imdb_id;
            state.original_language = action.payload.original_language;
            state.original_title = action.payload.original_title;
            state.overview = action.payload.overview;
            state.popularity = action.payload.popularity;
            state.poster_path = action.payload.poster_path;
            state.production_companies = action.payload.production_companies;
            state.production_countries = action.payload.production_countries;
            state.release_date = action.payload.release_date;
            state.revenue = action.payload.revenue;
            state.runtime = action.payload.runtime;
            state.spoken_languages = action.payload.spoken_languages;
            state.status = action.payload.status;
            state.tagline = action.payload.tagline;
            state.title = action.payload.title;
            state.video = action.payload.video;
            state.vote_average = action.payload.vote_average;
            state.vote_count = action.payload.vote_count;
            state.success = null;
            state.status_code = null;
            state.status_message = null;
        },
        getMovieDetailsFail: (state, action) => {
            state.adult = null;
            state.backdrop_path = null;
            state.belongs_to_collection = null;
            state.budget = null;
            state.genres = null;
            state.homepage = null;
            state.id = null;
            state.imdb_id = null;
            state.original_language = null;
            state.original_title = null;
            state.overview = null;
            state.popularity = null;
            state.poster_path = null;
            state.production_companies = null;
            state.production_countries = null;
            state.release_date = null;
            state.revenue = null;
            state.runtime = null;
            state.spoken_languages = null;
            state.status = null;
            state.tagline = null;
            state.title = null;
            state.video = null;
            state.vote_average = null;
            state.vote_count = null;
            state.success = action.payload.success;
            state.status_code = action.payload.status_code;
            state.status_message = action.payload.status_message;
        },
        clearMovieDetails: (state) => {
            state.adult = null;
            state.backdrop_path = null;
            state.belongs_to_collection = null;
            state.budget = null;
            state.genres = null;
            state.homepage = null;
            state.id = null;
            state.imdb_id = null;
            state.original_language = null;
            state.original_title = null;
            state.overview = null;
            state.popularity = null;
            state.poster_path = null;
            state.production_companies = null;
            state.production_countries = null;
            state.release_date = null;
            state.revenue = null;
            state.runtime = null;
            state.spoken_languages = null;
            state.status = null;
            state.tagline = null;
            state.title = null;
            state.video = null;
            state.vote_average = null;
            state.vote_count = null;
            state.success = null;
            state.status_code = null;
            state.status_message = null;
        },
    },
});

export const getMovieDetails =
    (params: number): any =>
    async (dispatch: any) => {
        await axios
            .get(`${TMDB_URL}/movie/${params}?api_key=${TOKEN_TMDB}`)
            .then((r) => dispatch(getMovieDetailsSuccess(r.data)))
            .catch((e) => dispatch(getMovieDetailsFail(e.response.data)));
    };

export const setMovieDetailsNull = (): any => (dispatch: any) => {
    dispatch(clearMovieDetails());
};

export const {
    getMovieDetailsSuccess,
    getMovieDetailsFail,
    clearMovieDetails,
} = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
