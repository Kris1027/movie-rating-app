export enum ContentTypeProps {
  movie = "movie",
  tv = "tv",
}

export type MovieProps = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

export type TvProps = {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
};

export type ItemProps = MovieProps | TvProps;
