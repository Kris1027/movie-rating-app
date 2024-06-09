export type movieProps = {
  id: number;
  title?: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

export type seriesProps = {
  id: number;
  name?: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

export type dataProps = {
  movies: movieProps[];
  series: seriesProps[];
};
