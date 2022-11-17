export interface IMovies {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: Date;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMovieDetails {
    adult: boolean | null;
    backdrop_path: string | null;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    } | null;
    budget: number | null;
    genres: { id: number; name: string }[] | null;
    homepage: string | null;
    id: number | null;
    imdb_id: string | null;
    original_language: string | null;
    original_title: string | null;
    overview: string | null;
    popularity: number | null;
    poster_path: string | null;
    production_companies:
        | {
              id: number;
              logo_path: string;
              name: string;
              origin_country: string;
          }[]
        | null;
    production_countries: { iso_3166_1: string; name: string }[] | null;
    release_date: Date | null;
    revenue: number | null;
    runtime: number | null;
    spoken_languages:
        | {
              english_name: string;
              iso_639_1: string;
              name: string;
          }[]
        | null;
    status: string | null;
    tagline: string | null;
    title: string | null;
    video: boolean | null;
    vote_average: number | null;
    vote_count: number | null;
    success: boolean | null;
    status_code: number | null;
    status_message: string | null;
}

export interface ITvDetails {
    adult: boolean | null;
    backdrop_path: string | null;
    created_by:
        | {
              id: number | null;
              credit_id: string | null;
              name: string | null;
              gender: number | null;
              profile_path: string | null;
          }[]
        | null;
    episode_run_time: number[] | null;
    first_air_date: Date | null;
    genres:
        | {
              id: number | null;
              name: string | null;
          }[]
        | null;
    homepage: string | null;
    id: number | null;
    in_production: boolean | null;
    languages: string[] | null;
    last_air_date: Date | null;
    last_episode_to_air: {
        air_date: Date | null;
        episode_number: number | null;
        id: number | null;
        name: string | null;
        overview: string | null;
        production_code: string | null;
        runtime: number | null;
        season_number: number | null;
        show_id: number | null;
        still_path: string | null;
        vote_average: number | null;
        vote_count: number | null;
    } | null;
    name: string | null;
    next_episode_to_air: {
        air_date: string | null;
        episode_number: number | null;
        id: number | null;
        name: string | null;
        overview: string | null;
        production_code: string | null;
        runtime: number | null;
        season_number: number | null;
        show_id: number | null;
        still_path: string | null;
        vote_average: number | null;
        vote_count: number | null;
    } | null;
    networks:
        | [
              {
                  id: number | null;
                  name: string | null;
                  logo_path: string | null;
                  origin_country: string | null;
              }
          ]
        | null;
    number_of_episodes: number | null;
    number_of_seasons: number | null;
    origin_country: string[] | null;
    original_language: string | null;
    original_name: string | null;
    overview: string | null;
    popularity: number | null;
    poster_path: string | null;
    production_companies:
        | {
              id: number | null;
              logo_path: string | null;
              name: string | null;
              origin_country: string | null;
          }[]
        | null;
    production_countries:
        | {
              iso_3166_1: string | null;
              name: string | null;
          }[]
        | null;
    seasons:
        | {
              air_date: Date | null;
              episode_count: number | null;
              id: number | null;
              name: string | null;
              overview: string | null;
              poster_path: string | null;
              season_number: number | null;
          }[]
        | null;
    spoken_languages:
        | {
              english_name: string | null;
              iso_639_1: string | null;
              name: string | null;
          }[]
        | null;
    status: string | null;
    tagline: string | null;
    type: string | null;
    vote_average: number | null;
    vote_count: number | null;
    success: boolean | null;
    status_code: number | null;
    status_message: string | null;
}
