import { useLoaderData } from "react-router-dom";
import { contentTypes, type movieProps } from "@/types/content-types";
import { Heading } from "@/components/ui/heading";
import { ContentCard } from "@/components/content-card";

export function MoviesPage() {
  const movies = useLoaderData() as movieProps[];

  return (
    <div className="p-4">
      <Heading>Popular Movies</Heading>
      <div className="grid grid-cols-3 gap-4 text-center p-4">
        {movies.map((movie: movieProps) => (
          <ContentCard
            key={movie.id}
            c={movie}
            contentType={contentTypes.movies}
          />
        ))}
      </div>
    </div>
  );
}
