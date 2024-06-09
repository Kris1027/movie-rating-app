import { movieProps } from "@/types/content-types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Star, Calendar } from "lucide-react";

export function MoviesCard({ movie }: { movie: movieProps }) {
  return (
    <Card>
      <CardHeader>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        {movie.title}
      </CardHeader>
      <CardContent>
        <p className="flex items-center gap-1">
          <Calendar /> {movie.release_date}
        </p>
        <p className="flex items-center gap-1 font-bold">
          <Star color="#facc15" /> {movie.vote_average.toFixed(2)}
        </p>
      </CardContent>
    </Card>
  );
}
