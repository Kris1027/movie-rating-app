export enum ContentTypeProps {
  movie = "movie",
  tv = "tv",
}

export enum RatedContentTypeProps {
  movies = "movies",
  tv = "tv",
}

export type MovieProps = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  rating?: number;
};

export type TvProps = {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  rating?: number;
};

export type ItemProps = MovieProps | TvProps;
