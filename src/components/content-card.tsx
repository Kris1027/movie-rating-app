import { contentTypes, movieProps, seriesProps } from "@/types/content-types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Heading } from "./ui/heading";
import { Calendar, Star } from "lucide-react";
import { IMAGE_URL } from "@/lib/constants";
import { Link } from "react-router-dom";
import { ratedColor } from "@/lib/rated-color";

export function ContentCard({
  c,
  contentType,
}: {
  c: movieProps | seriesProps;
  contentType: contentTypes;
}) {
  return (
    <Link to={`/${contentType}/${c.id}`}>
      <Card>
        <CardHeader>
          <img
            src={`${IMAGE_URL}${c.poster_path}`}
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
          <p
            className="flex items-center gap-2 font-bold"
            style={{
              color: ratedColor(Number(c.vote_average.toFixed(2))),
            }}
          >
            <Star color="#facc15" /> {c.vote_average.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
