export type DetailedMovieProps = {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  production_companies: [];
  production_countries: [];
  genres: [];
};

export type DetailedSerieProps = {
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  production_companies: [];
  production_countries: [];
  genres: [];
};

export type genresProps = {
  id: number;
  name: string;
};

export type countriesProps = {
  name: string;
};

export type companiesProps = {
  name: string;
  logo_path: string;
};
