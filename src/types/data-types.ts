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
  genres: { id: number; name: string }[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating: number;
};

export type TvProps = {
  adult: boolean;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  rating?: number;
  vote_average: number;
  first_air_date: string;
  vote_count: number;
  original_language: string;
  original_name: string;
  origin_country: string[];
  popularity: number;
  media_type: string;
  video: boolean;
};

export type ItemProps = MovieProps | TvProps;

export type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: {
    total_pages: number;
  };
};
