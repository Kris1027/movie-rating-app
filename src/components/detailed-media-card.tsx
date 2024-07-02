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

  return (
    <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md text-white shadow-xl">
      {data.backdrop_path && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            filter: "blur(10px)",
          }}
        />
      )}
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-3xl">
          {isMovie(data) ? data.title : data.name}
        </CardTitle>
        <span className="text-lg">
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
            className="rounded-lg object-cover w-full md:w-[200px] h-auto shadow-lg"
          />
          <div>
            <p className="mb-4 text-lg">{data.overview}</p>
            <div className="grid grid-cols-2 gap-4 text-md">
              <p className="flex items-center gap-2">
                <Globe size={20} />
                <strong>Original Language:</strong>{" "}
                {data.original_language.toUpperCase()}
              </p>
              <p className="flex items-center gap-2">
                <TrendingUp size={20} />
                <strong>Popularity:</strong> {data.popularity.toFixed(2)}
              </p>
              <p className="flex items-center gap-2">
                <Star size={20} />
                <strong>Vote Average:</strong> {data.vote_average.toFixed(1)}/10
              </p>
              <p className="flex items-center gap-2">
                <Users size={20} />
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
        <Button onClick={() => navigate(-1)} variant="secondary">
          Back
        </Button>
      </CardFooter>
    </Card>
  );
}
