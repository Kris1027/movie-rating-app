import { useEffect, useState } from "react";
import { getMovies } from "../api/getMovies";

type movieProps = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      {movies.map((movie: movieProps) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        </div>
      ))}
    </div>
  );
}
