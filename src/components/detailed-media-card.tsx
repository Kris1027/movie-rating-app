import { useNavigate } from "react-router-dom";
import {
  ContentTypeProps,
  MovieProps,
  RatedContentTypeProps,
  TvProps,
} from "@/types/data-types";
import { RateModal } from "./rate-modal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { isMovie } from "@/lib/is-movie";
import { Globe, TrendingUp, Star, Users } from "lucide-react";

export function DetailedMediaCard({
  data,
  contentType,
}: {
  data: MovieProps | TvProps;
  contentType: ContentTypeProps | RatedContentTypeProps;
}) {
  const navigate = useNavigate();

  console.log(data);

  return (
    <Card className="bg-white/10 backdrop-blur-md text-white shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {isMovie(data) ? data.title : data.name}
        </CardTitle>
        <span className="text-sm font-normal">
          (
          {new Date(
            isMovie(data) ? data.release_date : data.first_air_date
          ).getFullYear()}
          )
        </span>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={isMovie(data) ? data.title : data.name}
            className="rounded-lg object-cover w-full md:w-[200px] h-auto"
          />
          <div>
            <p className="flex items-center gap-2 col-span-2 font-bold mb-4">
              {data.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="mb-4">{data.overview}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="flex items-center gap-2">
                <Globe size={16} />
                <strong>Original Language:</strong>{" "}
                {data.original_language.toUpperCase()}
              </p>
              <p className="flex items-center gap-2">
                <TrendingUp size={16} />
                <strong>Popularity:</strong> {data.popularity.toFixed(2)}
              </p>
              <p className="flex items-center gap-2">
                <Star size={16} />
                <strong>Vote Average:</strong> {data.vote_average.toFixed(1)}/10
              </p>
              <p className="flex items-center gap-2">
                <Users size={16} />
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
