import { seriesProps } from "@/types/content-types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Star, Calendar } from "lucide-react";

export function SeriesCard({ serie }: { serie: seriesProps }) {
  return (
    <Card>
      <CardHeader>
        <img
          src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
          alt={`${serie.name} poster`}
        />
        {serie.name}
      </CardHeader>
      <CardContent>
        <p className="flex items-center gap-1">
          <Calendar /> {serie.first_air_date}
        </p>
        <p className="flex items-center gap-1 font-bold">
          <Star color="#facc15" /> {serie.vote_average.toFixed(2)}
        </p>
      </CardContent>
    </Card>
  );
}
