import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { dataProps, movieProps, seriesProps } from "@/types/content-types";
import { Calendar, Star } from "lucide-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

enum contentTypes {
  movies = "movies",
  series = "series",
}

export function HomePage() {
  const [contentType, setContentType] = useState<contentTypes>(
    contentTypes.movies
  );
  const data = useLoaderData() as dataProps;

  const content =
    contentType === contentTypes.movies ? data.movies : data.series;

  return (
    <div className="p-4">
      <div className="flex justify-center">
        <Button
          variant={
            contentType === contentTypes.movies ? "default" : "secondary"
          }
          onClick={() => setContentType(contentTypes.movies)}
        >
          Movies
        </Button>
        <Button
          variant={
            contentType === contentTypes.series ? "default" : "secondary"
          }
          onClick={() => setContentType(contentTypes.series)}
        >
          Series
        </Button>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-3xl font-bold">
          {contentType === contentTypes.movies
            ? "Welcome to Our Cinematic Oasis!"
            : "Welcome to Our Series Sanctuary!"}
        </h2>
        <p className="text-lg italic">
          {contentType === contentTypes.movies
            ? "Discover the Latest and Most Popular Movies That Have Captivated Audiences Worldwide! Browse, Watch, and Enjoy the Biggest Hits in Cinema!"
            : "Discover the Latest and Most Popular TV Shows That Have Captivated Audiences Worldwide! Browse, Watch, and Enjoy the Biggest  Hits in Television!"}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center p-4">
        {content.map((c) => (
          <Card key={c.id}>
            <CardHeader>
              <img
                src={`https://image.tmdb.org/t/p/w500${c.poster_path}`}
                alt={
                  contentType === "movies"
                    ? (c as movieProps).title
                    : (c as seriesProps).name
                }
              />
              <Heading>
                {contentType === "movies"
                  ? (c as movieProps).title
                  : (c as seriesProps).name}
              </Heading>
            </CardHeader>
            <CardContent>
              <p className="flex items-center gap-1">
                <Calendar />{" "}
                {contentType === "movies"
                  ? (c as movieProps).release_date
                  : (c as seriesProps).first_air_date}
              </p>
              <p className="flex items-center gap-1 font-bold">
                <Star color="#facc15" /> {c.vote_average.toFixed(2)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
