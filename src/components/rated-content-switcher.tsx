import { RatedContentTypeProps } from "@/types/data-types";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";

export function RatedContentSwitcher({
  handleToggle,
  contentType = RatedContentTypeProps.movies,
  hasRatedMovies,
  hasRatedTvShows,
}: {
  handleToggle: (contentType: RatedContentTypeProps) => void;
  contentType: RatedContentTypeProps;
  hasRatedMovies: boolean;
  hasRatedTvShows: boolean;
}) {
  return (
    <>
      <div className="my-4">
        <Button
          variant={
            contentType === RatedContentTypeProps.movies
              ? "default"
              : "secondary"
          }
          onClick={() => handleToggle(RatedContentTypeProps.movies)}
        >
          Rated Movies
        </Button>
        <Button
          variant={
            contentType === RatedContentTypeProps.tv ? "default" : "secondary"
          }
          onClick={() => handleToggle(RatedContentTypeProps.tv)}
        >
          Rated TV Shows
        </Button>
      </div>
      <div className="flex flex-col items-center text-center">
        {contentType === RatedContentTypeProps.movies ? (
          <>
            <Heading>Welcome to Your Rated Movies</Heading>
            <p className="pb-4">
              {hasRatedMovies
                ? "Discover the films you have rated and see how they stack up against your personal favorites. Dive into your own curated collection of movies and find out which ones have earned your highest praise. Enjoy revisiting your top-rated films and explore new recommendations based on your ratings"
                : "You haven't rated any movies yet. Start watching and rating movies to see them here!"}
            </p>
          </>
        ) : (
          <>
            <Heading>Welcome to Your Rated TV Shows</Heading>
            <p className="pb-4">
              {hasRatedTvShows
                ? "Explore the TV shows you've rated and see which ones stand out as your top picks. Dive into your personalized list of series and discover which shows have left a lasting impression. Enjoy revisiting your highest-rated TV shows and uncover new recommendations tailored to your viewing preferences"
                : "You haven't rated any TV shows yet. Start watching and rating TV shows to see them here!"}
            </p>
          </>
        )}
      </div>
    </>
  );
}
