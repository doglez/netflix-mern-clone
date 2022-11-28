import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TMDB_URL, TOKEN_TMDB } from "../../../config/Config";
import { ITvDetails } from "../../../interfaces/InterfacesTV";

const initialState: ITvDetails = {
    adult: null,
    backdrop_path: null,
    created_by: null,
    episode_run_time: null,
    first_air_date: null,
    genres: null,
    homepage: null,
    id: null,
    in_production: null,
    languages: null,
    last_air_date: null,
    last_episode_to_air: null,
    name: null,
    next_episode_to_air: null,
    networks: null,
    number_of_episodes: null,
    number_of_seasons: null,
    origin_country: null,
    original_language: null,
    original_name: null,
    overview: null,
    popularity: null,
    poster_path: null,
    production_companies: null,
    production_countries: null,
    seasons: null,
    spoken_languages: null,
    status: null,
    tagline: null,
    type: null,
    vote_average: null,
    vote_count: null,
    success: null,
    status_code: null,
    status_message: null,
};

interface action {
    payload: ITvDetails;
    type: string;
}

const tvDetailsSlice = createSlice({
    name: "tvDetailsReducer",
    initialState,
    reducers: {
        getTvDetailsSuccess: (state, action: action) => {
            state.adult = action.payload.adult;
            state.backdrop_path = action.payload.backdrop_path;
            state.created_by = action.payload.created_by;
            state.episode_run_time = action.payload.episode_run_time;
            state.first_air_date = action.payload.first_air_date;
            state.genres = action.payload.genres;
            state.homepage = action.payload.homepage;
            state.id = action.payload.id;
            state.in_production = action.payload.in_production;
            state.languages = action.payload.languages;
            state.last_air_date = action.payload.last_air_date;
            state.last_episode_to_air = action.payload.last_episode_to_air;
            state.name = action.payload.name;
            state.next_episode_to_air = action.payload.next_episode_to_air;
            state.networks = action.payload.networks;
            state.number_of_episodes = action.payload.number_of_episodes;
            state.number_of_seasons = action.payload.number_of_seasons;
            state.origin_country = action.payload.origin_country;
            state.original_language = action.payload.original_language;
            state.original_name = action.payload.original_name;
            state.overview = action.payload.overview;
            state.popularity = action.payload.popularity;
            state.poster_path = action.payload.poster_path;
            state.production_companies = action.payload.production_companies;
            state.production_countries = action.payload.production_countries;
            state.seasons = action.payload.seasons;
            state.spoken_languages = action.payload.spoken_languages;
            state.status = action.payload.status;
            state.tagline = action.payload.tagline;
            state.type = action.payload.type;
            state.vote_average = action.payload.vote_average;
            state.vote_count = action.payload.vote_count;
            state.success = null;
            state.status_code = null;
            state.status_message = null;
        },
        getTvDetailsFail: (state, action) => {
            state.adult = null;
            state.backdrop_path = null;
            state.created_by = null;
            state.episode_run_time = null;
            state.first_air_date = null;
            state.genres = null;
            state.homepage = null;
            state.id = null;
            state.in_production = null;
            state.languages = null;
            state.last_air_date = null;
            state.last_episode_to_air = null;
            state.name = null;
            state.next_episode_to_air = null;
            state.networks = null;
            state.number_of_episodes = null;
            state.number_of_seasons = null;
            state.origin_country = null;
            state.original_language = null;
            state.original_name = null;
            state.overview = null;
            state.popularity = null;
            state.poster_path = null;
            state.production_companies = null;
            state.production_countries = null;
            state.seasons = null;
            state.spoken_languages = null;
            state.status = null;
            state.tagline = null;
            state.type = null;
            state.vote_average = null;
            state.vote_count = null;
            state.success = action.payload.success;
            state.status_code = action.payload.status_code;
            state.status_message = action.payload.status_message;
        },
        clearTvDetails: (state) => {
            state.adult = null;
            state.backdrop_path = null;
            state.created_by = null;
            state.episode_run_time = null;
            state.first_air_date = null;
            state.genres = null;
            state.homepage = null;
            state.id = null;
            state.in_production = null;
            state.languages = null;
            state.last_air_date = null;
            state.last_episode_to_air = null;
            state.name = null;
            state.next_episode_to_air = null;
            state.networks = null;
            state.number_of_episodes = null;
            state.number_of_seasons = null;
            state.origin_country = null;
            state.original_language = null;
            state.original_name = null;
            state.overview = null;
            state.popularity = null;
            state.poster_path = null;
            state.production_companies = null;
            state.production_countries = null;
            state.seasons = null;
            state.spoken_languages = null;
            state.status = null;
            state.tagline = null;
            state.type = null;
            state.vote_average = null;
            state.vote_count = null;
            state.success = null;
            state.status_code = null;
            state.status_message = null;
        },
    },
});

export const getTvDetails =
    (params: number): any =>
    async (dispatch: any) => {
        await axios
            .get(`${TMDB_URL}/tv/${params}?api_key=${TOKEN_TMDB}`)
            .then((r) => dispatch(getTvDetailsSuccess(r.data)))
            .catch((e) => dispatch(getTvDetailsFail(e.response.data)));
    };

export const setTvDetailsNull = (): any => (dispatch: any) => {
    dispatch(clearTvDetails());
};

export const { getTvDetailsSuccess, getTvDetailsFail, clearTvDetails } =
    tvDetailsSlice.actions;

export default tvDetailsSlice.reducer;
