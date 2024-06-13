export enum ContentTypeProps {
  movie = "movie",
  tv = "tv",
}

export type MovieProps = {
  id: number;
  title: string;
};

export type TvProps = {
  id: number;
  name: string;
};

export type ItemProps = MovieProps | TvProps;
