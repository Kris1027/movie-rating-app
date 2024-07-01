import { useNavigate } from "react-router-dom";
import { ContentTypeProps, RatedContentTypeProps } from "@/types/data-types";
import { RateModal } from "./rate-modal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

type DetailedMediaCardProps = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export function DetailedMediaCard({
  data,
  contentType,
}: {
  data: DetailedMediaCardProps;
  contentType: ContentTypeProps | RatedContentTypeProps;
}) {
  const navigate = useNavigate();

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {data.title}
        </CardTitle>
        <span className="text-sm font-normal">
          ({new Date(data.release_date).getFullYear()})
        </span>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            className="rounded-lg object-cover w-full md:w-[200px] h-auto"
          />
          <div>
            <p className="mb-4">{data.overview}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p>
                <strong>Original Language:</strong>{" "}
                {data.original_language.toUpperCase()}
              </p>
              <p>
                <strong>Popularity:</strong> {data.popularity.toFixed(2)}
              </p>
              <p>
                <strong>Vote Average:</strong> {data.vote_average.toFixed(1)}/10
              </p>
              <p>
                <strong>Vote Count:</strong> {data.vote_count}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span>{data.adult ? "Adult Content" : "Family Friendly"}</span>
        <RateModal item={data} contentType={contentType} />
        <span>{data.video ? "Video Available" : "No Video"}</span>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </CardFooter>
    </Card>
  );
}
