import { useLoaderData } from "react-router-dom";
import { contentTypes, type movieProps } from "@/types/content-types";
import { Heading } from "@/components/ui/heading";
import { ContentCard } from "@/components/content-card";
import { ContentList } from "@/components/content-list";

export function MoviesPage() {
  const movies = useLoaderData() as movieProps[];

  return (
    <>
      <Heading>Popular Movies</Heading>
      <ContentList>
        {movies.map((movie: movieProps) => (
          <ContentCard
            key={movie.id}
            c={movie}
            contentType={contentTypes.movie}
          />
        ))}
      </ContentList>
    </>
  );
}
