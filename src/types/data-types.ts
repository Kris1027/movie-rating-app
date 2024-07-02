export enum ContentTypeProps {
  movie = "movie",
  tv = "tv",
}

export enum RatedContentTypeProps {
  movies = "movies",
  tv = "tv",
}

export type MovieProps = {
  adult: boolean;
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  id: number;
  title: string;
  overview: string;
  original_language: string;
  poster_path: string;
  popularity: number;
  rating: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  video: boolean;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
  }[];
  runtime: number;
  budget: number;
};

export type TvProps = {
  adult: boolean;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  id: number;
  name: string;
  overview: string;
  original_language: string;
  poster_path: string;
  popularity: number;
  rating: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  video: boolean;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
  }[];
  seasons: {
    id: number;
    name: string;
    episode_count: number;
    air_date: string;
  }[];
};

export type ItemProps = MovieProps | TvProps;

export type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: {
    total_pages: number;
  };
};
