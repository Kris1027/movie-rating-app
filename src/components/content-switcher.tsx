import { ContentTypeProps } from "@/types/data-types";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";

export function ContentSwitcher({
  contentType,
  handleToggle,
}: {
  contentType: ContentTypeProps;
  handleToggle: (contentType: ContentTypeProps) => void;
}) {
  return (
    <>
      <div className="my-4">
        <Button
          variant={contentType === "movie" ? "default" : "secondary"}
          onClick={() => handleToggle(ContentTypeProps.movie)}
        >
          Show Movies
        </Button>
        <Button
          variant={contentType === "tv" ? "default" : "secondary"}
          onClick={() => handleToggle(ContentTypeProps.tv)}
        >
          Show TV Shows
        </Button>
      </div>
      <div>
        {contentType === "movie" ? (
          <>
            <Heading>Welcome to Our Movie Oasis</Heading>
            <p className="pb-4">
              Discover the latest and most popular films right here. Dive into a
              world of cinematic wonder and find your next favorite movie today
            </p>
          </>
        ) : (
          <>
            <Heading>Welcome to Our TV Show Haven</Heading>
            <p className="pb-4">
              Explore the latest and most popular TV shows. Dive into
              captivating series and find your next binge-worthy favorite today
            </p>
          </>
        )}
      </div>
    </>
  );
}
