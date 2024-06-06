import { type seriesProps } from "./series";
import { Card, CardContent, CardHeader } from "../ui/card";
import { FaStar, FaCalendar } from "react-icons/fa";

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
          <FaCalendar size={20} /> {serie.first_air_date}
        </p>
        <p className="flex items-center gap-1 font-bold">
          <FaStar color="#facc15" size={20} /> {serie.vote_average.toFixed(2)}
        </p>
      </CardContent>
    </Card>
  );
}
