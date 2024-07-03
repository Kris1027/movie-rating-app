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
import { convertRuntime } from "@/lib/convert-runtime";
import { convertBudget } from "@/lib/convert-budget";
import { Globe, TrendingUp, Star, Users, Timer, HandCoins } from "lucide-react";

export function DetailedMediaCard({
  data,
  contentType,
}: {
  data: MovieProps | TvProps;
  contentType: ContentTypeProps | RatedContentTypeProps;
}) {
  const navigate = useNavigate();
  const isMovieType = isMovie(data);

  return (
    <Card className="bg-white/10 backdrop-blur-md text-white shadow-xl p-4 w-full max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-2xl">
          {isMovieType ? data.title : data.name}
          <span className="text-lg font-normal">
            (
            {new Date(
              isMovieType ? data.release_date : data.first_air_date
            ).getFullYear()}
            )
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3 aspect-ratio-[2/3] max-h-[600px]">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={isMovieType ? data.title : data.name}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="lg:w-2/3">
          <p className="flex items-center gap-2 col-span-2 font-bold mb-4 text-lg">
            {data.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="mb-4 text-lg">{data.overview}</p>
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
            {isMovieType && (
              <>
                <p className="flex items-center gap-2">
                  <Timer size={16} />
                  <strong>Runtime:</strong> {convertRuntime(data.runtime)}
                </p>
                <p className="flex items-center gap-2">
                  <HandCoins size={16} />
                  <strong>Budget:</strong> {convertBudget(data.budget)}
                </p>
              </>
            )}
            {!isMovieType && (
              <div className="mt-4 col-span-2">
                <strong>Seasons:</strong>
                <div
                  className={`flex flex-col gap-2 mt-2 overflow-y-auto ${
                    data.seasons.length > 3 ? "max-h-64" : ""
                  }`}
                >
                  {data.seasons.map((season) => (
                    <div key={season.id} className="flex flex-col">
                      <strong>{season.name}</strong>
                      <p className="text-sm">
                        {season.episode_count} episodes | Air Date:{" "}
                        {new Date(season.air_date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="mt-4">
            <strong>Production Companies:</strong>
            <div className="flex flex-wrap gap-4 mt-2">
              {data.production_companies.map(
                (company) =>
                  company.logo_path && (
                    <img
                      key={company.id}
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                      className="h-14 object-contain"
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span>{data.adult ? "Adult Content" : "Family Friendly"}</span>
        <RateModal item={data} contentType={contentType} />
        <Button onClick={() => navigate(-1)}>Back</Button>
      </CardFooter>
    </Card>
  );
}
