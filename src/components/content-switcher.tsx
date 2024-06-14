import { ContentTypeProps } from "@/types/data-types";
import { Button } from "./ui/button";

export function ContentSwitcher({
  contentType,
  handleToggle,
}: {
  contentType: ContentTypeProps;
  handleToggle: (contentType: ContentTypeProps) => void;
}) {
  return (
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
  );
}
