import { ContentSwitcher } from "@/components/content-switcher";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import {
  contentTypes,
  dataProps,
  movieProps,
  seriesProps,
} from "@/types/content-types";
import { Calendar, Star } from "lucide-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export function HomePage() {
  const [contentType, setContentType] = useState<contentTypes>(
    contentTypes.movies
  );
  const data = useLoaderData() as dataProps;

  const content =
    contentType === contentTypes.movies ? data.movies : data.series;

  return (
    <div className="p-4">
      <ContentSwitcher
        contentType={contentType}
        setContentType={setContentType}
      />
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
