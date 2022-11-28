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
