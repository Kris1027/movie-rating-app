import { contentTypes } from "@/types/content-types";
import { Button } from "./ui/button";

export function ContentSwitcher({
  contentType,
  setContentType,
}: {
  contentType: contentTypes;
  setContentType: React.Dispatch<React.SetStateAction<contentTypes>>;
}) {
  return (
    <>
      <div className="flex justify-center items-center">
        <Button
          variant={contentType === contentTypes.movie ? "default" : "secondary"}
          onClick={() => setContentType(contentTypes.movie)}
          size={contentType === contentTypes.movie ? "lg" : "sm"}
        >
          Movies
        </Button>
        <Button
          variant={contentType === contentTypes.tv ? "default" : "secondary"}
          onClick={() => setContentType(contentTypes.tv)}
          size={contentType === contentTypes.tv ? "lg" : "sm"}
        >
          Series
        </Button>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-3xl font-bold">
          {contentType === contentTypes.movie
            ? "Welcome to Our Cinematic Oasis!"
            : "Welcome to Our Series Sanctuary!"}
        </h2>
        <p className="text-lg italic">
          {contentType === contentTypes.movie
            ? "Discover the Latest and Most Popular Movies That Have Captivated Audiences Worldwide! Browse, Watch, and Enjoy the Biggest Hits in Cinema!"
            : "Discover the Latest and Most Popular TV Shows That Have Captivated Audiences Worldwide! Browse, Watch, and Enjoy the Biggest  Hits in Television!"}
        </p>
      </div>
    </>
  );
}
