import { useEffect, useState } from "react";
import { getMovies } from "../../api/getMovies";
import { MoviesCard } from "./movies-card";

export type movieProps = {
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
    <div className="grid grid-cols-3 gap-4 text-center p-4">
      {movies.map((movie: movieProps) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
