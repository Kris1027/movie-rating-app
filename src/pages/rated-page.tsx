import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchRated } from "@/api/fetch-rated";
import { Button } from "@/components/ui/button";
import { RatedContentTypeProps } from "@/types/data-types";
import { MediaList } from "@/components/media-list";
import { Heading } from "@/components/ui/heading";

export function RatedPage() {
  const [contentType, setContentType] = useState<RatedContentTypeProps>(
    RatedContentTypeProps.movies
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["rated", contentType],
    queryFn: () => fetchRated(contentType),
  });

  const isLoggedIn: boolean = !!localStorage.getItem("guest_session_id");
  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  const handleToggle = (contentType: RatedContentTypeProps) => {
    setContentType(contentType);
  };

  if (!data) return <p>You need to rate at least one item</p>;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-destructive">Error: {isError}</p>;

  return (
    <main className="p-4 flex flex-col items-center">
      <div className="my-4">
        <Button
          variant={contentType === "movies" ? "default" : "secondary"}
          onClick={() => handleToggle(RatedContentTypeProps.movies)}
        >
          Rated Movies
        </Button>
        <Button
          variant={contentType === "tv" ? "default" : "secondary"}
          onClick={() => handleToggle(RatedContentTypeProps.tv)}
        >
          Rated TV Shows
        </Button>
      </div>
      <div className="flex flex-col items-center text-center">
        {contentType === "movies" ? (
          <>
            <Heading>Welcome to Your Rated Movies</Heading>
            <p className="pb-4">
              Discover the films you have rated and see how they stack up
              against your personal favorites. Dive into your own curated
              collection of movies and find out which ones have earned your
              highest praise. Enjoy revisiting your top-rated films and explore
              new recommendations based on your ratings
            </p>
          </>
        ) : (
          <>
            <Heading>Welcome to Your Rated TV Shows</Heading>
            <p className="pb-4">
              Explore the TV shows you've rated and see which ones stand out as
              your top picks. Dive into your personalized list of series and
              discover which shows have left a lasting impression. Enjoy
              revisiting your highest-rated TV shows and uncover new
              recommendations tailored to your viewing preferences
            </p>
          </>
        )}
      </div>
      <MediaList data={data} contentType={contentType} />
    </main>
  );
}
