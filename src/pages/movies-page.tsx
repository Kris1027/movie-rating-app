import { useLoaderData } from "react-router-dom";
import { type movieProps } from "@/types/content-types";
import { MoviesCard } from "@/components/movies/movies-card";
import { Heading } from "@/components/ui/heading";

export function MoviesPage() {
  const movies = useLoaderData() as movieProps[];

  return (
    <div className="p-4">
      <Heading>Popular Movies</Heading>
      <div className="grid grid-cols-3 gap-4 text-center p-4">
        {movies.map((movie: movieProps) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
