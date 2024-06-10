import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IMAGE_URL } from "@/lib/constants";
import { contentTypes } from "@/types/content-types";
import { useLoaderData, useParams } from "react-router-dom";

type DetailedMovieProps = {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  production_companies: [];
  production_countries: [];
  genres: [];
};

type DetailedSerieProps = {
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  production_companies: [];
  production_countries: [];
  genres: [];
};

type genresProps = {
  id: number;
  name: string;
};

type countriesProps = {
  name: string;
};

type companiesProps = {
  name: string;
  logo_path: string;
};

export function ContentDetailsPage() {
  const data = useLoaderData() as DetailedMovieProps | DetailedSerieProps;
  const contentType = useParams().contentType as contentTypes;

  return (
    <Card className="flex flex-row">
      <CardHeader>
        <img
          src={`${IMAGE_URL}${data.poster_path}`}
          alt={
            contentType === "movies"
              ? (data as DetailedMovieProps).title
              : (data as DetailedSerieProps).name
          }
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-between w-2/3 py-10">
        <div>
          <CardTitle>
            {contentType === "movies"
              ? (data as DetailedMovieProps).title
              : (data as DetailedSerieProps).name}
          </CardTitle>
          <div className="flex justify-between">
            <CardDescription>
              {contentType === "movies"
                ? (data as DetailedMovieProps).release_date
                : (data as DetailedSerieProps).first_air_date}
            </CardDescription>
            <CardDescription>{data.vote_average}</CardDescription>
          </div>
          <div className="flex gap-4">
            {data.genres.map((g: genresProps) => (
              <CardDescription key={g.id}>{g.name}</CardDescription>
            ))}
          </div>
          <p>{data.overview}</p>
          <div className="flex gap-2 items-end">
            <p>Production Countries:</p>
            {data.production_countries.map((c: countriesProps) => (
              <CardDescription key={c.name}>{c.name}</CardDescription>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-center">Production Companies:</p>
          <div className="flex justify-between items-center">
            {data.production_companies.map((c: companiesProps) => (
              <CardDescription
                key={c.name}
                className="flex flex-col items-center gap-2"
              >
                <img
                  src={`${IMAGE_URL}${c.logo_path}`}
                  alt={c.name}
                  className="w-20"
                />
                {c.name}
              </CardDescription>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
