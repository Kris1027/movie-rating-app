import { contentTypes, movieProps, seriesProps } from "@/types/content-types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Heading } from "./ui/heading";
import { Calendar, Star } from "lucide-react";

export function ContentCard({
  c,
  contentType,
}: {
  c: movieProps | seriesProps;
  contentType: contentTypes;
}) {
  return (
    <Card>
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
  );
}
